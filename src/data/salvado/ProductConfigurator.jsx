import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import EmergencyTrainingSections from "./EmergencyTrainingSections";


/* ======================================================
   HELPERS
====================================================== */

function formatPrice(v) {
  if (v == null || Number.isNaN(Number(v))) {
    return "Precio no disponible";
  }

  try {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(Number(v));
  } catch {
    return `S/ ${Number(v).toFixed(2)}`;
  }
}

function parseBold(text) {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

/* ======================================================
   NORMALIZACIÓN
====================================================== */

function normalizeProduct(product) {
  const p = { ...product };
  const variants = p.variants || [];
  const attrs = (p.attributes || []).map((a) => ({ ...a }));

  const ensureValues = (attrId) => {
    const inSchema = attrs.find((a) => a.id === attrId)?.values;
    if (inSchema && inSchema.length) return inSchema;

    const set = new Set(
      variants.map((v) => v?.attrs?.[attrId]).filter(Boolean)
    );

    return Array.from(set)
      .sort()
      .map((id) => ({ id, label: id }));
  };

  p.attributes = (p.attributes || []).map((a) => ({
    ...a,
    values: ensureValues(a.id),
  }));

  if (!p.baseImage) p.baseImage = p.image;

  return p;
}

/* ======================================================
   ATTRIBUTE ORDER (CASCADA)
====================================================== */

const ATTRIBUTE_ORDER = [
  "bottleColor",
  "capacity",
  "capType",
  "capColor",
];

/* ======================================================
   DISABLED RULES
====================================================== */

function isOptionDisabledCascade(
  attrId,
  valueId,
  selectedAttrs,
  variants,
  attributeOrder
) {
  // 🚫 SIN VARIANTES → NO BLOQUEAR NADA (Tipo 1)
  if (!Array.isArray(variants) || variants.length === 0) {
    return false;
  }

  const order = Array.isArray(attributeOrder) && attributeOrder.length > 0
    ? attributeOrder
    : ATTRIBUTE_ORDER;

  const attrIndex = order.indexOf(attrId);

  // Si el atributo no está en el orden, no bloquear
  if (attrIndex === -1) return false;

  return !variants.some((v) => {
    return order.every((key, idx) => {
      const vVal = v.attrs?.[key];

      // atributo actual
      if (key === attrId) return vVal === valueId;

      // solo validar atributos anteriores
      if (idx < attrIndex) {
        const sel = selectedAttrs[key];
        if (!sel) return true;

        // Soporte dual: array (Frascos) o string (Tipo 3)
        if (Array.isArray(sel)) {
          return sel.includes(vVal);
        }

        return sel === vVal;
      }

      return true;
    });
  });
}

function isOptionDisabledByRules(attrId, valueId, selectedAttrs, rules) {
  if (!rules?.incompatible?.length) return false;

  // valores seleccionados (flatten)
  const selectedValues = new Set(
    Object.values(selectedAttrs).flat()
  );

  // si el valor ya está seleccionado, no bloquear
  if (selectedValues.has(valueId)) return false;

  // revisar reglas incompatibles
  return rules.incompatible.some((pair) => {
    // si esta opción no está en la regla, no aplica
    if (!pair.includes(valueId)) return false;

    // el otro elemento del par
    const other = pair.find((id) => id !== valueId);

    // si el otro ya está seleccionado → bloquear
    return selectedValues.has(other);
  });
}




/* ======================================================
   COMPONENTE
====================================================== */

export default function ProductConfigurator({ product, onAddToCart }) {

    useEffect(() => {
    console.log("🟢 PDP MOUNT", product?.id);

    return () => {
      console.log("🔴 PDP UNMOUNT", product?.id);
    };
  }, []);


  const navigate = useNavigate();
  const safeProduct = useMemo(() => normalizeProduct(product), [product]);

  const hasVariants =
    Array.isArray(safeProduct.variants) && safeProduct.variants.length > 0;

  const hasAttributes =
    Array.isArray(safeProduct.attributes) && safeProduct.attributes.length > 0;

  const isType2 =
    hasAttributes &&
    safeProduct.attributes.some(
      (a) => a.type === "multi" && a.values?.some((v) => v.id === "base")
    );


  /* ======================================================
     ESTADOS
  ====================================================== */

  const [selAttrs, setSelAttrs] = useState({});
  const [baseSelected, setBaseSelected] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeImages, setActiveImages] = useState([]);
  const [buttonLocked, setButtonLocked] = useState(false);



/* ======================================================
   AUTO-SELECCIÓN BASE (TIPO 2)
====================================================== */

useEffect(() => {
  if (!isType2) return;

  setBaseSelected(true);
  // ❌ NO TOCAR selAttrs aquí
}, [safeProduct.id]);



  /* ======================================================
     VARIANTE SKU (TIPO 3)
  ====================================================== */

  const selectedSkuVariant = useMemo(() => {
    if (!safeProduct?.variants?.length) return null;

    return (
      safeProduct.variants.find((v) =>
        Object.entries(v.attrs || {}).every(
          ([key, val]) => selAttrs[key]?.[0] === val
        )
      ) || null
    );
  }, [safeProduct.variants, selAttrs]);

  const matchingVariants = useMemo(() => {
  if (!safeProduct?.variants?.length) return [];

  return safeProduct.variants.filter((variant) =>
    Object.entries(selAttrs).every(([attrId, values]) => {
      const selectedValue = values?.[0];
      if (!selectedValue) return true;
      return variant.attrs?.[attrId] === selectedValue;
    })
  );
}, [safeProduct.variants, selAttrs]);


  const cheapestSkuVariant = useMemo(() => {
    if (!safeProduct?.variants?.length) return null;

    return [...safeProduct.variants]
      .filter((v) => typeof v.price === "number")
      .sort((a, b) => a.price - b.price)[0];
  }, [safeProduct.variants]);

useEffect(() => {
  setActiveImage(null);
}, [selectedSkuVariant]);

  const multiAttributes = (safeProduct.attributes || []).filter(
    (a) => a.type === "multi"
  );

  const selectedMultiValues = multiAttributes.flatMap((attr) =>
    Array.isArray(selAttrs[attr.id])
      ? attr.values.filter((v) => selAttrs[attr.id].includes(v.id))
      : []
  );

  const accessoryImages = selectedMultiValues.flatMap((v) => v.images || []);

const derivedImages = useMemo(() => {
  // 🟢 0️⃣ SIN SELECCIONES → SOLO IMAGEN BASE (FAMILIA.png)
  const hasAnySelection = Object.values(selAttrs).some(
    (vals) => vals && vals.length > 0
  );

if (!hasAnySelection) {
  return Array.isArray(safeProduct.images) && safeProduct.images.length > 0
    ? safeProduct.images
    : [safeProduct.image];
}


  // 🟢 1️⃣ SKU FINAL → imágenes finales
  if (selectedSkuVariant?.images?.length) {
    return selectedSkuVariant.images;
  }
  if (selectedSkuVariant?.image) {
    return [selectedSkuVariant.image];
  }

  // 🟢 2️⃣ SELECCIÓN PARCIAL → imágenes coincidentes
  const images = matchingVariants.flatMap((v) => {
    if (Array.isArray(v.images)) return v.images;
    if (v.image) return [v.image];
    return [];
  });

  const uniqueImages = Array.from(new Set(images));

// 🟡 3️⃣ RESULTADO FINAL
// - variantes / cascadas (si existen)
// - + accesorios multi (si existen)
const finalImages = uniqueImages.length
  ? uniqueImages
  : [safeProduct.image];

return accessoryImages.length
  ? Array.from(new Set([...finalImages, ...accessoryImages]))
  : finalImages;

}, [selAttrs, matchingVariants, selectedSkuVariant, safeProduct.image]);



  /* ======================================================
     IMÁGENES
  ====================================================== */



const galleryImages = derivedImages;
 


  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    if (accessoryImages.length > 0) {
      setActiveImage(accessoryImages[0]);
      setActiveImages(accessoryImages);
      return;
    }

    setActiveImage(null);
    setActiveImages([]);
  }, [accessoryImages]);

const mainImage =
  activeImage ||
  galleryImages?.[0] ||
  safeProduct.image ||
  "/placeholder.png";


  /* ======================================================
     PRECIO
  ====================================================== */

  let displayPrice = formatPrice(safeProduct.price);

if (hasVariants && !selectedSkuVariant) {
  displayPrice = "Selecciona una opción";
}

if (selectedSkuVariant?.price != null) {
  displayPrice = formatPrice(selectedSkuVariant.price);
} else if (isType2 && safeProduct.priceRange?.min != null) {
  const extra = selectedMultiValues.reduce(
    (s, v) => s + (v.priceDelta || 0),
    0
  );
  displayPrice = formatPrice(safeProduct.priceRange.min + extra);
}


  if (selectedSkuVariant?.price != null) {
    displayPrice = formatPrice(selectedSkuVariant.price);
  } else if (isType2 && safeProduct.priceRange?.min != null) {
    const extra = selectedMultiValues.reduce(
      (s, v) => s + (v.priceDelta || 0),
      0
    );
    displayPrice = formatPrice(safeProduct.priceRange.min + extra);
  }

  /* ======================================================
     TOGGLE ATTR
  ====================================================== */

const toggleAttr = (attrId, valId) => {
  const attr = safeProduct.attributes.find((a) => a.id === attrId);

  if (isType2 && attr?.type === "multi" && valId === "base") {
    setBaseSelected(true);
    setSelAttrs({});
    setActiveImage(null);
    setActiveImages([]);
    return;
  }



  if (attr?.type === "single") {
    setSelAttrs((prev) => {
      const curr = prev[attrId];
      if (Array.isArray(curr) && curr[0] === valId) {
        const next = { ...prev };
        delete next[attrId];
        return next;
      }
      return { ...prev, [attrId]: [valId] };
    });
    return;
  }

if (attr?.type === "multi") {
  setSelAttrs((prev) => ({
    ...prev,
    [attrId]: prev[attrId]?.includes(valId)
      ? prev[attrId].filter((v) => v !== valId)
      : [...(prev[attrId] || []), valId],
  }));
}

};


  /* ======================================================
     VALIDACIÓN
  ====================================================== */

  const canAdd = isType2 ? baseSelected : hasVariants ? !!selectedSkuVariant : true;

  /* ======================================================
     ADD TO CART
  ====================================================== */

const handleAdd = () => {
    console.log("🟡 ADD CLICK", safeProduct.id);

  if (!canAdd) return;

  // ===== TIPO 3 =====
  if (hasVariants && selectedSkuVariant) {
    onAddToCart?.({
      ...safeProduct,
      lineItemId: `${safeProduct.id}-${selectedSkuVariant.sku || selectedSkuVariant.code}`,
      variant: selectedSkuVariant,
      variantLabel:
        selectedSkuVariant.code || selectedSkuVariant.sku || "Configuración",
      image:
        activeImage ||
        selectedSkuVariant.images?.[0] ||
        selectedSkuVariant.image ||
        safeProduct.image,
      price: selectedSkuVariant.price,
    });
console.log("🟢 ADD DONE TIPO 2", safeProduct.id);
    // 🔔 PASO 2 — AQUÍ
    setButtonLocked(true);
    setTimeout(() => setButtonLocked(false), 1500);

    return;
  }

  // ===== TIPO 2 =====
  if (isType2) {
    const ids = selectedMultiValues.map((v) => v.id).sort().join("+") || "base";

    onAddToCart?.({
      ...safeProduct,
      lineItemId: `${safeProduct.id}-${ids}`,
      variantLabel: ids === "base" ? "Base" : `Base + ${ids}`,
      image: activeImage || safeProduct.image,
      price: Number(displayPrice.replace(/[^\d.]/g, "")),
    });
console.log("🟢 ADD DONE TIPO 2", safeProduct.id);
    // 🔔 PASO 2 — AQUÍ
    setButtonLocked(true);
    setTimeout(() => setButtonLocked(false), 1500);

    return;
  }

  // ===== TIPO 1 =====
  onAddToCart?.({
    ...safeProduct,
    lineItemId: `${safeProduct.id}-base`,
    variantLabel: "Configuración estándar",
    image: activeImage || safeProduct.image,
    price: safeProduct.price,
  });
console.log("🟢 ADD DONE TIPO 2", safeProduct.id);
  // 🔔 PASO 2 — AQUÍ
  setButtonLocked(true);
  setTimeout(() => setButtonLocked(false), 1500);
};

  /* ======================================================
     RENDER
  ====================================================== */

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">


{/* CONTENIDO PRINCIPAL PDP */}
{safeProduct.educationalPdp ? (
<EmergencyTrainingSections
  data={safeProduct}
  selAttrs={selAttrs}
  toggleAttr={toggleAttr}
  selectedSkuVariant={selectedSkuVariant}
  activeImage={activeImage}
  setActiveImage={setActiveImage}
  canAdd={canAdd}
  onAddToCart={handleAdd}
/>

) : (

      <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6">
        {/* Miniaturas */}
        <div className="hidden md:flex flex-col gap-2">
          {(activeImages.length > 0 ? activeImages : galleryImages).length > 1 &&
            (activeImages.length > 0 ? activeImages : galleryImages).map(
              (img, i) => (
<button
  key={`${img}-${i}`}
  onClick={() => setActiveImage(img)}
  onMouseEnter={() => {
    if (window.innerWidth >= 1024) {
      setActiveImage(img);
    }
  }}
  className={`h-16 w-16 rounded border border-transparent
  hover:ring-2 hover:ring-[#208790]
  ${img === activeImage ? "ring-2 ring-[#208790]" : ""}
`}

>
  <img src={img} className="object-contain h-full w-full" />
</button>

              )
            )}
        </div>

    {/* Imagen */}
    {/* Imagen con zoom tipo lupa */}
<div
  className="border rounded-2xl p-4 flex justify-center overflow-hidden group"
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  }}
>
  <img
    src={mainImage}
    alt={safeProduct.name}
    className="
      max-h-[420px]
      object-contain
      transition-transform duration-200
      lg:group-hover:scale-150
    "
    style={{
      transformOrigin: "var(--x, 50%) var(--y, 50%)",
    }}
  />
</div>


    {/* Info */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">
        {safeProduct.name}
      </h2>

{(selectedSkuVariant?.description || safeProduct.description) && (
  <p
    className="text-sm text-slate-600 text-justify"
    dangerouslySetInnerHTML={{
      __html: parseBold(
        selectedSkuVariant?.description || safeProduct.description
      ),
    }}
  />
)}



      <div className="text-2xl font-bold">
        {displayPrice}
      </div>

      {hasAttributes &&
        safeProduct.attributes.map((attr) => (
          <div key={attr.id}>
            <div className="text-sm font-medium">{attr.label}</div>

            <div className="flex flex-wrap gap-2 mt-1">
              {attr.values.map((v) => {
                const selected =
                  attr.type === "multi"
                    ? v.id === "base"
                      ? baseSelected
                      : selAttrs[attr.id]?.includes(v.id)
                    : selAttrs[attr.id]?.includes(v.id);

                const disabled =
                  isOptionDisabledCascade(
                    attr.id,
                    v.id,
                    selAttrs,
                    safeProduct.variants,
                    safeProduct.attributeOrder
                  ) ||
                  (attr.type === "multi" &&
                    isOptionDisabledByRules(
                      attr.id,
                      v.id,
                      selAttrs,
                      safeProduct.rules
                    ));

                return (
                  <button
                    key={v.id}
                    disabled={disabled}
                    onClick={() => !disabled && toggleAttr(attr.id, v.id)}
                    className={`px-3 py-2 rounded-lg border text-sm transition
                      ${
                        disabled
                          ? "opacity-40 cursor-not-allowed bg-slate-100"
                          : selected
                          ? "bg-emerald-600 text-white"
                          : "bg-white hover:bg-emerald-50"
                      }`}
                  >
                    {v.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

      <button
        type="button"
        onClick={handleAdd}
        disabled={buttonLocked}
        className={`w-full py-3 rounded-xl font-semibold !text-white
          ${
            buttonLocked
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#208790] hover:brightness-110 cursor-pointer"
          }`}
      >
        Agregar al carrito
    </button>
    </div>
  </div>
)}
</div>
);
}

