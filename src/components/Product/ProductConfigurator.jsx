// src/components/ProductConfigurator.jsx
import React, { useMemo, useState, useEffect } from "react";
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

  // Selección para FRASCOS (por atributos)
  const [selAttrs, setSelAttrs] = useState({});
  // Selección para variantes SIMPLES (dropdown)
  const [selectedVariantKey, setSelectedVariantKey] = useState("");

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

  const rangeSimple = useMemo(
    () => (!isFrascoMode && hasVariants ? getPriceRange(safeProduct) : { min: null, max: null }),
    [safeProduct, isFrascoMode, hasVariants]
  );

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

  // ----- Imagen a mostrar -----
  let img =
    (isFrascoMode
      ? chosenFrasco?.image || safeProduct.baseImage || safeProduct.image
      : hasVariants
      ? selectedVariant?.image || safeProduct.image
      : safeProduct.image) || "/placeholder.png";

  // ----- Toggles / selección -----
  const toggleAttr = (attrId, valId) => {
    setSelAttrs((prev) =>
      prev[attrId] === valId
        ? { ...prev, [attrId]: undefined }
        : { ...prev, [attrId]: valId }
    );
  };

  const activeVariant = isFrascoMode ? chosenFrasco : selectedVariant;

  const canAddFrasco = isFrascoMode && !!chosenFrasco;
  const canAddSimpleVariant = !isFrascoMode && hasVariants && !!selectedVariant;
  const canAddSimpleProduct = !hasVariants;
  const canAdd = canAddFrasco || canAddSimpleVariant || canAddSimpleProduct;

  const handleAdd = () => {
  if (!canAdd) return;

  // --- FRASCOS ---
  if (isFrascoMode && chosenFrasco) {
    onAddToCart?.({
      ...chosenFrasco,
      id: `${safeProduct.id}-${chosenFrasco.sku || chosenFrasco.code}`,
      productId: safeProduct.id,
      name: `${safeProduct.name} – ${chosenFrasco.sku || chosenFrasco.code}`,
      image: chosenFrasco.image || safeProduct.image,
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
      image: selectedVariant.image || safeProduct.image,
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
      image: safeProduct.image,
      price: safeProduct.price,
    });
  }
};


  const addButtonLabel = (() => {
    if (isFrascoMode && chosenFrasco?.sku)
      return `Agregar ${chosenFrasco.sku}`;
    if (!isFrascoMode && selectedVariant) {
      const idCode = selectedVariant.code || selectedVariant.sku || "";
      return idCode ? `Agregar ${idCode}` : "Agregar variante";
    }
    if (!hasVariants) return "Agregar al carrito";
    return "Selecciona una opción";
  })();

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">

{/* Header del PDP */}
<div className="flex items-start justify-between mb-4 md:col-span-2">
  <h1 className="text-2xl font-bold leading-tight max-w-[70%]">
    {safeProduct.name}
  </h1>

  <button
    onClick={handleClose}
    aria-label="Cerrar"
    className="ml-4 px-3 py-1.5 rounded-full border border-slate-300 
               bg-white shadow-sm text-slate-700 hover:bg-slate-100 
               text-sm font-medium shrink-0"
  >
    ✕ Cerrar
  </button>
</div>




      {/* Imagen */}
      <div className="border rounded-2xl p-4 flex items-center justify-center">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={img}
          className="max-h-80 object-contain"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.png";
          }}
        />
      </div>

      {/* Configurador */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">{safeProduct.name}</h1>
        {safeProduct.description && (
          <p className="text-sm opacity-80">{safeProduct.description}</p>
        )}

        <div className="text-xl font-bold">{displayPrice}</div>

        {/* MODO FRASCOS (multi-atributo) */}
        {isFrascoMode &&
          (safeProduct.attributes || []).map((attr) => (
            <div key={attr.id} className="space-y-2">
              <div className="text-sm font-medium">{attr.name}</div>
              <div className="flex flex-wrap gap-2">
                {(availabilityFrasco[attr.id] || attr.values || []).map(
                  (val) => {
                    const selected = selAttrs[attr.id] === val.id;
                    const enabled = val.enabled || selected; // permitir deselección
                    return (
                      <button
                        key={val.id}
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
                  }
                )}
              </div>
            </div>
          ))}

        {/* MODO VARIANTES SIMPLES (dropdown genérico) */}
        {!isFrascoMode && hasVariants && (
          <div className="space-y-2">
            <div className="text-sm font-medium">Selecciona variante</div>
            <select
              className="w-full rounded-xl border px-3 py-2 text-sm bg-white"
              value={selectedVariantKey}
              onChange={(e) => setSelectedVariantKey(e.target.value)}
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

        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={handleAdd}
            disabled={!canAdd}
            className={
              "px-4 py-2 rounded-xl text-white font-medium " +
              (canAdd
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-gray-300 cursor-not-allowed")
            }
          >
            {addButtonLabel}
          </button>

          {activeVariant && (
            <span className="text-sm opacity-70">
              Stock: {activeVariant.stock ?? "-"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
