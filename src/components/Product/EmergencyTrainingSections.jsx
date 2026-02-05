import React, { useState } from "react";

/* ======================================================
   UTILIDAD: Renderizar texto estructurado automáticamente
====================================================== */
function renderStructuredText(text) {
  if (!text) return null;

  const lines = text.split("\n");
  const elements = [];
  let currentList = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul className="list-disc pl-6 space-y-1" key={elements.length}>
          {currentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    if (line.endsWith(":")) {
      flushList();
      elements.push(
        <p className="font-semibold mt-4" key={`h-${index}`}>
          {line.replace(":", "")}
        </p>
      );
      return;
    }

    if (line.startsWith("- ") || /^\d+\.\s/.test(line)) {
      currentList.push(line.replace(/^(-\s|\d+\.\s)/, ""));
      return;
    }

    flushList();
    elements.push(
      <p className="leading-relaxed" key={`p-${index}`}>
        {line}
      </p>
    );
  });

  flushList();
  return elements;
}

/* ======================================================
   UTILIDAD: Renderizar negritas desde JSON (**texto**)
====================================================== */
function renderBoldText(text) {
  if (!text) return null;

  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-slate-900">
          {part.replace(/\*\*/g, "")}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

/* ======================================================
   PDP EDUCACIONAL (CANÓNICO – MISMA UX QUE PDP GENÉRICO)
====================================================== */
export default function EmergencyTrainingSections({
  data,
  selAttrs = {},
  toggleAttr,
  selectedSkuVariant,
  activeImage,
  setActiveImage,
  canAdd = true,
  onAddToCart
}) {
  if (!data?.educationalPdp) return null;

  const hero = data.educationalPdp.hero || {};
  const [openAccordion, setOpenAccordion] = useState(null);

  /* ===============================
     IMÁGENES DEL CARRUSEL (CLAVE)
     Base + variante (sin duplicar)
  =============================== */
  const baseImages = Array.isArray(data.images) ? data.images : [];
  const variantImage = selectedSkuVariant?.image;

  const carouselImages = variantImage
    ? Array.from(new Set([...baseImages, variantImage]))
    : baseImages;

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">

      {/* TÍTULO */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 max-w-5xl mx-auto">
        {data.name}
      </h1>

      {/* HERO (MISMA ESTRUCTURA QUE PDP GENÉRICO) */}
      <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6">

        {/* CARRUSEL IZQUIERDO */}
        <div className="hidden md:flex flex-col gap-2">
          {carouselImages.length > 1 &&
            carouselImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    setActiveImage(img);
                  }
                }}
                className="h-16 w-16 border rounded hover:ring-2 ring-[#208790]"
              >
                <img
                  src={img}
                  className="object-contain h-full w-full"
                  alt={`${data.name} ${i + 1}`}
                />
              </button>
            ))}
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="border rounded-2xl p-4 flex justify-center">
          <img
            src={
              activeImage ||
              selectedSkuVariant?.image ||
              data.image
            }
            alt={data.name}
            className="max-h-[420px] object-contain"
          />
        </div>

        {/* DESCRIPCIÓN + VARIANTES */}
        <div className="space-y-6">

          {hero.description && (
            <p className="text-sm text-slate-600 whitespace-pre-line text-justify">
              {renderBoldText(hero.description)}
            </p>
          )}

          {/* BOTONES DE VARIANTES */}
          {Array.isArray(data.attributes) && data.attributes.length > 0 && (
            <div className="space-y-4">

              {data.attributes.map((attr) => (
                <div key={attr.id}>
                  <div className="text-sm font-medium text-slate-700">
                    {attr.label}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {attr.values.map((v) => {
                      const selected = selAttrs[attr.id]?.includes(v.id);

                      return (
                        <button
                          key={v.id}
                          onClick={() => toggleAttr(attr.id, v.id)}
                          className={`px-3 py-2 rounded-lg border text-sm transition
                            ${
                              selected
                                ? "bg-[#208790] text-white"
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

            </div>
          )}
        </div>
      </div>

      {/* ACORDEONES */}
      <div className="mt-16 space-y-4">

        {hero.funciones && (
          <Accordion
            title="FUNCIONES"
            open={openAccordion === "funciones"}
            onToggle={() => toggleAccordion("funciones")}
          >
            {renderStructuredText(hero.funciones)}
          </Accordion>
        )}

        {hero.contenido && (
          <Accordion
            title="CONTENIDO"
            open={openAccordion === "contenido"}
            onToggle={() => toggleAccordion("contenido")}
          >
            {renderStructuredText(hero.contenido)}
          </Accordion>
        )}

        {hero.accesorios && (
          <Accordion
            title="ACCESORIOS ADICIONALES"
            open={openAccordion === "accesorios"}
            onToggle={() => toggleAccordion("accesorios")}
          >
            {renderStructuredText(hero.accesorios)}
          </Accordion>
        )}
      </div>

      {/* BLOQUE DE ACCIÓN */}
      {typeof data.price === "number" && (
        <div className="mt-20 flex items-center gap-6 flex-wrap">

          <button
            type="button"
            onClick={onAddToCart}
            disabled={!canAdd}
            className={`px-8 py-3 rounded-lg font-medium transition
              ${
                canAdd
                  ? "bg-[#208790] text-white hover:brightness-110"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {canAdd
              ? `Agregar al carrito · S/ ${data.price.toFixed(2)}`
              : "Selecciona una opción"}
          </button>

          <a
            href={`https://wa.me/51944638288?text=${encodeURIComponent(
              `Hola, quisiera más información sobre el producto: ${data.name}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#208790]/10 text-[#208790] hover:bg-[#208790]/20 px-8 py-3 rounded-lg font-medium transition"
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

/* ======================================================
   COMPONENTE ACORDEÓN
====================================================== */
function Accordion({ title, open, onToggle, children }) {
  return (
    <div className="border rounded-xl">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left cursor-pointer transition-colors
                  hover:bg-[#208790]/8"
      >
        <span>{title}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-slate-600">
          {children}
        </div>
      )}
    </div>
  );
}
