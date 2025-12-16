import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MESHeader from "../components/layout/MESHeader";
import { CATEGORY_LABELS, PRODUCTS_BY_CATEGORY } from "../data/products/index.js";
import LightboxImage from "../components/ui/LightboxImage";

export default function CategoryPage({ cartCount, onAddToCart, openMiniCart }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const label = CATEGORY_LABELS[slug];
  const products = PRODUCTS_BY_CATEGORY[slug] || [];
  const [justAddedId, setJustAddedId] = React.useState(null);


  /* ================================
      CATEGORÍA NO ENCONTRADA
  ================================= */
  if (!label) {
    return (
      <>
        <MESHeader showHero={false} cartCount={cartCount} openMiniCart={openMiniCart} />
        <main className="max-w-7xl mx-auto px-4 py-10">
          <p className="text-slate-600">Categoría no encontrada.</p>
        </main>
      </>
    );
  }

  /* ================================
      RENDER PRINCIPAL
  ================================= */
  return (
    <>
      <MESHeader showHero={false} cartCount={cartCount} openMiniCart={openMiniCart} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* TÍTULO */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{label}</h1>
          <p className="text-sm text-slate-600 mt-1">
            Lista de productos disponibles en esta categoría.
          </p>
        </div>

        {/* LISTA DE PRODUCTOS */}
        <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {products.map((p) => {
            const to = `/producto/${p.id}`;
            const hasVariants = Array.isArray(p?.variants) && p.variants.length > 0;

            /* -----------------------------
                CÁLCULO DE PRECIO
            ----------------------------- */
            let formattedPrice = null;
            let rawPrice = p?.price ?? p?.variants?.[0]?.price ?? null;

            if (hasVariants) {
              const prices = p.variants
                .map((v) => Number(String(v.price).replace(/[^\d.]/g, "")))
                .filter((n) => n > 0);

              if (prices.length) {
                const min = Math.min(...prices);
                const max = Math.max(...prices);

                const f = new Intl.NumberFormat("es-PE", {
                  style: "currency",
                  currency: "PEN",
                });

                formattedPrice = min === max ? f.format(min) : `${f.format(min)} – ${f.format(max)}`;
              }
            }

            if (!formattedPrice) {
              const n = Number(String(rawPrice).replace(/[^\d.]/g, ""));
              if (!isNaN(n)) {
                formattedPrice = new Intl.NumberFormat("es-PE", {
                  style: "currency",
                  currency: "PEN",
                }).format(n);
              }
            }

            const wa = `https://wa.me/51944638288?text=${encodeURIComponent(
              `Hola, estoy interesado en: ${p?.name} (${formattedPrice})`
            )}`;

            /* -----------------------------
                ITEM DE PRODUCTO
            ----------------------------- */
            return (
              <li
                key={p.id}
                onClick={() => navigate(to)}
                className="p-4 sm:p-5 hover:bg-slate-50 transition cursor-pointer"
              >
                <div className="flex items-center gap-4">

                  {/* IMAGEN */}
                  <LightboxImage
                    src={p.image || "/images/placeholder.jpg"}
                    alt={p.name}
                    className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-md object-contain bg-slate-100 cursor-zoom-in"
                    loading="lazy"
                  />

                  {/* INFO */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-semibold text-slate-900 hover:underline">
                      {p.name}
                    </h3>

                    {p.description && (
                      <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                        {p.description}
                      </p>
                    )}

                    <p className="mt-2 text-sm font-semibold text-slate-900 md:hidden">
                      {formattedPrice ?? "Consultar precio"}
                    </p>
                  </div>

                  {/* BOTONES (DESKTOP) */}
                  <div className="ml-auto hidden md:flex items-center gap-3">

                    <span className="text-sm font-semibold text-slate-900 min-w-[90px] text-right">
                      {formattedPrice ?? "Consultar"}
                    </span>

                    {/* WHATSAPP */}
                    <a
                      href={wa}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white cursor-pointer"
                      style={{ backgroundColor: "#208790" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      WhatsApp
                    </a>

                    {/* ==========================
                        BOTÓN DINÁMICO
                    ========================== */}
                    {hasVariants ? (
                      /* CON VARIANTES → VER DETALLE */
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(to);
                        }}
                        className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white cursor-pointer"
                        style={{ backgroundColor: "#245877" }}
                      >
                        Elegir opción
                      </button>
                    ) : (
                      /* SIN VARIANTES → AGREGAR DIRECTO */
                      <button
  type="button"
  disabled={justAddedId === p.id}
  onClick={(e) => {
    e.stopPropagation();

    setJustAddedId(p.id);
    setTimeout(() => setJustAddedId(null), 1500);

    onAddToCart({
      id: p.id,
      name: p.name,
      price: rawPrice,
      image: p.image,
      quantity: 1,
      variantLabel: null,
    });

    openMiniCart?.();
  }}
  className={
    "inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white transition-all duration-300 " +
    (justAddedId === p.id
      ? "bg-emerald-700 scale-[0.96]"
      : "cursor-pointer")
  }
  style={
    justAddedId === p.id
      ? undefined
      : { backgroundColor: "#245877" }
  }
>
  {justAddedId === p.id ? "Agregado ✓" : "Agregar al carrito"}
</button>

                    )}

                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
