// src/components/ProductConfigurator.jsx
import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* ===================== Helpers ===================== */
function formatPrice(v) {
  if (v == null || Number.isNaN(Number(v))) return "Precio no disponible";
  try {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(Number(v));
  } catch {
    return `S/ ${Number(v).toFixed(2)}`;
  }
}

function getPriceRange(product) {
  const prices = (product?.variants || [])
    .map((v) => Number(v.price))
    .filter((v) => Number.isFinite(v));
  if (!prices.length) return { min: null, max: null };
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

// ---- Sólo para FRASCOS: busca variante según attrs ----
function findVariantFrasco(product, sel) {
  if (!sel.bottleColor || !sel.capacity || !sel.capType || !sel.capColor) return null;
  return (
    (product.variants || []).find(
      (v) =>
        v?.attrs?.bottleColor === sel.bottleColor &&
        v?.attrs?.capacity === sel.capacity &&
        v?.attrs?.capType === sel.capType &&
        v?.attrs?.capColor === sel.capColor
    ) || null
  );
}

/* ---- Normalización: si el JSON viene sin values, los construimos desde variants (FRASCOS) ---- */
function normalizeProduct(product) {
  const p = { ...product };
  const variants = p.variants || [];
  const attrs = (p.attributes || []).map((a) => ({ ...a }));

  const labelMaps = {
    bottleColor: (v) => ({ amber: "Ámbar", clear: "Transparente" }[v] ?? v),
    capacity: (v) => (String(v).match(/^(\d+)ml$/) ? `${RegExp.$1} ml` : v),
    capType: (v) =>
      ({
        rosca: "Rosca",
        "tapon-interno": "Tapón interno",
        gotero: "Gotero",
        esmerilada: "Esmerilada",
      }[v] ?? v),
    capColor: (v) => ({ black: "Negro", white: "Blanco" }[v] ?? v),
  };

  const ensureValues = (attrId, mapper = (x) => x) => {
    const inSchema = attrs.find((a) => a.id === attrId)?.values;
    if (inSchema && inSchema.length) return inSchema;

    const set = new Set(variants.map((v) => v?.attrs?.[attrId]).filter(Boolean));
    return Array.from(set)
      .sort()
      .map((id) => ({ id, label: mapper(id) }));
  };

  p.attributes = (p.attributes || []).map((a) => ({
    ...a,
    values: ensureValues(a.id, labelMaps[a.id]),
  }));

  // baseImage toma la imagen principal del producto si no está definida
  if (!p.baseImage) p.baseImage = p.image;
  return p;
}

/* ---- Disponibilidades: habilita solo los valores compatibles con la selección (FRASCOS) ---- */
function computeAvailabilityFrasco(product, sel) {
  const byAttr = {};
  for (const a of product.attributes || []) {
    byAttr[a.id] = (a.values || []).map((v) => ({ ...v, enabled: false }));
  }
  for (const v of product.variants || []) {
    const compatible = Object.entries(sel).every(
      ([k, val]) => !val || v?.attrs?.[k] === val
    );
    if (!compatible) continue;
    for (const [k, val] of Object.entries(v.attrs || {})) {
      const list = byAttr[k];
      const i = list?.findIndex((x) => x.id === val);
      if (i >= 0) list[i].enabled = true;
    }
  }
  return byAttr;
}

/* ---- Label inteligente para variantes SIMPLES ----
 * Regla que elegiste (Opción 4):
 * - Si tiene modeloMedida:
 *      - y code: "CODE – modeloMedida"
 *      - sin code: "modeloMedida"
 * - Si no tiene modeloMedida:
 *      - si label existe: label
 *      - sino code
 *      - sino nombre genérico
 */
function buildVariantLabel(v) {
  if (v.modeloMedida) {
    if (v.code) return `${v.code} – ${v.modeloMedida}`;
    return v.modeloMedida;
  }
  if (v.label) return v.label;
  if (v.code) return v.code;
  if (v.sku) return v.sku;
  return v.name || "Variante";
}

function getVariantKey(v, index) {
  return v.code || v.sku || v.id || String(index);
}

/* ===================== Componente ===================== */
export default function ProductConfigurator({ product, onAddToCart }) {
  const navigate = useNavigate();
  const location = useLocation();
  const fallback = "/categoria/equipamiento-de-laboratorios-y-reactivos";
  const backTarget = location.state?.from || null;
  

  const handleClose = () => {
    if (backTarget) {
      navigate(backTarget, { replace: true });
    } else {
      if (window.history.length > 1) navigate(-1);
      else navigate(fallback, { replace: true });
    }
  };

  // cerrar con tecla Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backTarget]);

  const safeProduct = useMemo(() => normalizeProduct(product), [product]);

  const hasVariants =
    Array.isArray(safeProduct.variants) && safeProduct.variants.length > 0;
  const hasAttributes =
    Array.isArray(safeProduct.attributes) && safeProduct.attributes.length > 0;

  // Heurística: si tiene attributes + variants con .attrs => es frasco / configurador multiparámetro
  const isFrascoMode =
    hasAttributes && safeProduct.variants && safeProduct.variants[0]?.attrs;
// NUEVO: atributos multi (ej. accesorios SECA)
const hasMultiAttributes =
  hasAttributes && safeProduct.attributes.some((a) => a.type === "multi");

  // Selección para FRASCOS (por atributos)
  const [selAttrs, setSelAttrs] = useState({});
  // Selección para variantes SIMPLES (dropdown)
  const [selectedVariantKey, setSelectedVariantKey] = useState("");
    const [justAdded, setJustAdded] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const [activeImages, setActiveImages] = useState([]);


// ================================
// IMÁGENES DINÁMICAS (atributos multi)
// ================================
const multiAttributes = (safeProduct.attributes || []).filter(
  (a) => a.type === "multi"
);

const selectedMultiValues = multiAttributes.flatMap((attr) =>
  Array.isArray(selAttrs[attr.id])
    ? attr.values.filter((v) => selAttrs[attr.id].includes(v.id))
    : []
);

const accessoryImages = selectedMultiValues.flatMap(
  (v) => v.images || []
);

const galleryImages = [
  ...(safeProduct.images || (safeProduct.image ? [safeProduct.image] : [])),
  ...accessoryImages,
].filter(Boolean);



  // Reset de selección cuando cambia de producto
  useEffect(() => {
    setSelAttrs({});
    setSelectedVariantKey("");
  }, [safeProduct?.id]);

  // ----- FRASCOS -----
  const rangeFrascos = useMemo(
    () => (isFrascoMode ? getPriceRange(safeProduct) : { min: null, max: null }),
    [safeProduct, isFrascoMode]
  );
  const chosenFrasco = useMemo(
    () => (isFrascoMode ? findVariantFrasco(safeProduct, selAttrs) : null),
    [safeProduct, selAttrs, isFrascoMode]
  );
  const availabilityFrasco = useMemo(
    () =>
      isFrascoMode ? computeAvailabilityFrasco(safeProduct, selAttrs) : {},
    [safeProduct, selAttrs, isFrascoMode]
  );

  // ----- VARIANTES SIMPLES -----
  const simpleVariants = !isFrascoMode && hasVariants ? safeProduct.variants : [];
  const selectedVariant = useMemo(() => {
    if (!simpleVariants.length || !selectedVariantKey) return null;
    return (
      simpleVariants.find((v, i) => {
        const key = getVariantKey(v, i);
        return key === selectedVariantKey;
      }) || null
    );
  }, [simpleVariants, selectedVariantKey]);
// PASO 3: resetear imagen cuando cambia la variante
useEffect(() => {
  setActiveImage(null);
}, [selectedVariantKey, chosenFrasco?.id]);

  // Variante visual por defecto (para imagen cuando aún no se elige variante)
const defaultVariant =
  simpleVariants && simpleVariants.length > 0
    ? simpleVariants[0]
    : null;
const activeVariant = selectedVariant || defaultVariant;
  const rangeSimple = useMemo(
    () => (!isFrascoMode && hasVariants ? getPriceRange(safeProduct) : { min: null, max: null }),
    [safeProduct, isFrascoMode, hasVariants]
  );

const mainImage =
  activeImage ||
  (isFrascoMode
    ? chosenFrasco?.images?.[0] || chosenFrasco?.image
    : galleryImages?.[0] ||
      activeVariant?.images?.[0] ||
      activeVariant?.image) ||
  safeProduct.images?.[0] ||
  safeProduct.image ||
  "/placeholder.png";





  // ----- Precio a mostrar -----
  let displayPrice = "Precio no disponible";

  if (isFrascoMode) {
    if (chosenFrasco) {
      displayPrice = formatPrice(chosenFrasco.price);
    } else if (rangeFrascos.min == null) {
      displayPrice = "Precio no disponible";
    } else if (rangeFrascos.min === rangeFrascos.max) {
      displayPrice = formatPrice(rangeFrascos.min);
    } else {
      displayPrice = `Desde ${formatPrice(rangeFrascos.min)}`;
    }
  } else if (hasVariants) {
    if (selectedVariant) {
      displayPrice = formatPrice(selectedVariant.price);
    } else if (rangeSimple.min == null) {
      displayPrice = "Precio no disponible";
    } else if (rangeSimple.min === rangeSimple.max) {
      displayPrice = formatPrice(rangeSimple.min);
    } else {
      displayPrice = `Desde ${formatPrice(rangeSimple.min)}`;
    }
  } else if (safeProduct.price != null) {
    displayPrice = formatPrice(safeProduct.price);
  }

   // ----- Toggles / selección -----
const toggleAttr = (attrId, valId) => {
  const attr = safeProduct.attributes.find((a) => a.id === attrId);

// SINGLE (configuraciones excluyentes, ej. Color)
if (attr?.type === "single") {
  const value = attr.values.find((v) => v.id === valId);

  setSelAttrs((prev) => ({
    ...prev,
    [attrId]: [valId],
  }));

  if (value?.images?.length > 0) {
    setActiveImage(value.images[0]);
    setActiveImages(value.images); // 🔥 CLAVE
  } else {
    setActiveImages([]);
  }

  return;
}


// MULTI (ej. accessories)
if (attr?.type === "multi") {
  setSelAttrs((prev) => {
    const current = Array.isArray(prev[attrId]) ? prev[attrId] : [];
    const next = current.includes(valId)
      ? current.filter((v) => v !== valId)
      : [...current, valId];
    return { ...prev, [attrId]: next };
  });
  return;
}


  // SINGLE (frascos)
  setSelAttrs((prev) =>
    prev[attrId] === valId
      ? { ...prev, [attrId]: undefined }
      : { ...prev, [attrId]: valId }
  );
};



  const canAddFrasco = isFrascoMode && !!chosenFrasco;
  const canAddSimpleVariant = !isFrascoMode && hasVariants && !!selectedVariant;
  const canAddSimpleProduct = !hasVariants;
  const canAdd = canAddFrasco || canAddSimpleVariant || canAddSimpleProduct;

const guideToSelection = () => {
  const firstSelector = document.querySelector("[data-selector]");
  if (firstSelector) {
    firstSelector.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    firstSelector.focus?.();
  }
};

const handleAdd = () => {
  if (!canAdd) {
    guideToSelection();
    return;
  }

    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);

    // --- FRASCOS ---
    if (isFrascoMode && chosenFrasco) {
      onAddToCart?.({
        ...chosenFrasco,
        id: `${safeProduct.id}-${chosenFrasco.sku || chosenFrasco.code}`,
        productId: safeProduct.id,
        name: `${safeProduct.name} – ${chosenFrasco.sku || chosenFrasco.code}`,
        image:
  activeImage ||
  chosenFrasco.images?.[0] ||
  chosenFrasco.image ||
  safeProduct.images?.[0] ||
  safeProduct.image,

        variantLabel: chosenFrasco.sku || chosenFrasco.code,
        price: chosenFrasco.price,
      });
      return;
    }

    // --- VARIANTES SIMPLES ---
    if (!isFrascoMode && hasVariants && selectedVariant) {
      onAddToCart?.({
        ...selectedVariant,
        id: `${safeProduct.id}-${selectedVariant.sku || selectedVariant.code}`,
        productId: safeProduct.id,
        name: `${safeProduct.name} – ${selectedVariant.modeloMedida || selectedVariant.code}`,
        image:
  activeImage ||
  selectedVariant.images?.[0] ||
  selectedVariant.image ||
  safeProduct.images?.[0] ||
  safeProduct.image,

        variantLabel: selectedVariant.modeloMedida || selectedVariant.code,
        price: selectedVariant.price,
      });
      return;
    }

    // --- PRODUCTO SIMPLE ---
    if (!hasVariants) {
      onAddToCart?.({
        ...safeProduct,
        id: safeProduct.id,
        productId: safeProduct.id,
        name: safeProduct.name,
        image:
  activeImage ||
  safeProduct.images?.[0] ||
  safeProduct.image ||
  "/placeholder.png",

        price: safeProduct.price,
      });
    }
  };

  const addButtonLabel = (() => {
    if (isFrascoMode && chosenFrasco?.sku)
      return `Agregar ${chosenFrasco.sku}`;
    if (!isFrascoMode && selectedVariant) {
      const idCode = selectedVariant.code || selectedVariant.sku || "";
      return idCode ? `Agregar ${idCode}` : "Agregar al carrito";
    }
    if (!hasVariants) return "Agregar al carrito";
    return "Selecciona una opción";
  })();


  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">
      {/* Header del PDP */}
      <div className="flex items-start justify-between mb-6">
    
<button
  onClick={handleClose}
  aria-label="Cerrar"
  className="absolute top-4 right-4 px-3 py-1.5 rounded-full border border-slate-300 
             bg-white shadow-sm text-slate-700 hover:bg-slate-100 
             text-sm font-medium z-10"
>
  ✕ Cerrar
</button>

      </div>

      {/* GRID principal: miniaturas | imagen | info */}
      <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 items-start">
        {/* Columna miniaturas (siempre existe para no romper layout) */}
        <div className="hidden md:flex md:flex-col gap-2">

{(
  isFrascoMode
    ? chosenFrasco?.images?.length > 1
    : galleryImages.length > 1 ||
      safeProduct.attributes?.some(attr =>
        attr.values?.some(v => (v.images?.length || 0) > 0)
      )
)

? (isFrascoMode
    ? chosenFrasco?.images
    : activeImages.length > 0
      ? activeImages
      : galleryImages
  ).map((imgSrc, idx) => (

        <button
          key={`${imgSrc}-${idx}`}
          type="button"
onClick={() => setActiveImage(imgSrc)}
onFocus={() => setActiveImage(imgSrc)}

          className="h-16 w-16 cursor-pointer rounded border border-slate-200 hover:ring-2 ring-[#208790] bg-white overflow-hidden"
        >
          <img
            src={imgSrc}
            alt={`thumb-${idx}`}
            className="h-full w-full object-contain"
          />
        </button>
      ))
    : null}
</div>


        {/* Columna imagen */}
        <div className="border rounded-2xl p-4 flex items-center justify-center">
          <img
            src={mainImage}
            alt={safeProduct.name}
            className="max-h-[420px] object-contain"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        </div>

        {/* Columna info / decisión */}
        <div className="space-y-4">
          {/* Nombre */}
          <h2 className="text-2xl font-semibold">{safeProduct.name}</h2>

          {/* Descripción corta */}
          {safeProduct.description && (
            <p className="text-sm text-slate-600 leading-relaxed">
              {safeProduct.description}
            </p>
          )}

          {/* Precio */}
          <div className="text-2xl font-bold text-slate-900">{displayPrice}</div>

          {/* MODO ATRIBUTOS (frascos o multi accesorios) */}
{(isFrascoMode || safeProduct.attributes?.length > 0) &&
  (safeProduct.attributes || []).map((attr) => (


              <div key={attr.id} className="space-y-2">
                <div className="text-sm font-medium">{attr.label || attr.name}</div>
                <div className="flex flex-wrap gap-2">
{(
  attr.type === "multi" || attr.type === "single"
    ? attr.values
    : availabilityFrasco[attr.id] || []
).map((val) => {


                    const selected = Array.isArray(selAttrs[attr.id])
  ? selAttrs[attr.id].includes(val.id)
  : selAttrs[attr.id] === val.id;

const disabledByRule =
  safeProduct.rules?.incompatible?.some(
    ([a, b]) =>
      (val.id === a && selAttrs[attr.id]?.includes?.(b)) ||
      (val.id === b && selAttrs[attr.id]?.includes?.(a))
  );

const enabled = (!disabledByRule && (val.enabled ?? true)) || selected;


                    return (
                      <button
                        key={val.id}
                        type="button"
                        onClick={() => toggleAttr(attr.id, val.id)}
                        disabled={!enabled}
                        className={
                          "px-3 py-2 rounded-xl border text-sm " +
                          (selected
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : enabled
                            ? "bg-white hover:bg-emerald-50 border-gray-300"
                            : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed")
                        }
                        title={
                          !enabled && !selected
                            ? "No disponible para la selección actual"
                            : ""
                        }
                      >
                        {val.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

          {/* MODO VARIANTES SIMPLES (dropdown) */}
          {!isFrascoMode && hasVariants && (
            <div className="space-y-2" data-selector tabIndex={-1}>
              <div className="text-sm font-medium">Selecciona variante</div>

              <select
                className="w-full rounded-xl border px-3 py-2 text-sm bg-white"
                value={selectedVariantKey}
                onChange={(e) => {
                  const key = e.target.value;
                  setSelectedVariantKey(key);
                  setActiveImage(null); // importante: reset cuando cambia variante
                }}
              >
                <option value="">Selecciona una opción</option>
                {simpleVariants.map((v, i) => {
                  const key = getVariantKey(v, i);
                  const label = buildVariantLabel(v);
                  return (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  );
                })}
              </select>

              {selectedVariant?.shortDescription && (
                <p className="text-xs opacity-80 mt-1">
                  {selectedVariant.shortDescription}
                </p>
              )}
            </div>
          )}

          {/* CTA */}
<div aria-live="polite">
  <button
    type="button"
    data-primary-cta
    onClick={handleAdd}
    disabled={!canAdd || justAdded}
    className="w-full rounded-xl bg-[#208790] py-3 text-sm font-semibold text-white disabled:opacity-50"
  >
    {justAdded ? "Agregado ✓" : addButtonLabel}
  </button>
</div>


        </div>
      </div>
      {/* ===============================
   INFORMACIÓN TÉCNICA DEL PRODUCTO
================================ */}
{safeProduct.technicalSections && (
<div className="mt-12 max-w-5xl mx-auto px-4 space-y-10">


    {/* Características principales */}
    {safeProduct.technicalSections.features?.length > 0 && (
      <section>
        <h2 className="text-lg font-semibold mb-3 pl-3 border-l-4 border-[#245877]">
          Características principales
        </h2>
        <ul className="list-disc pl-5 text-sm text-slate-700 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
          {safeProduct.technicalSections.features.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    )}

     </div>  
)}        

</div>       
);
}
