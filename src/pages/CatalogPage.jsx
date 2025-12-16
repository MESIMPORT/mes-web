// src/pages/CatalogPage.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MESHeader from "../components/layout/MESHeader";
import {
  CATEGORY_LABELS,
  PRODUCTS_BY_CATEGORY,
} from "../data/products";

/* ================================
   HELPERS
================================ */
const flattenProducts = (productsByCategory) =>
  Object.entries(productsByCategory).flatMap(([slug, items]) =>
    items.map((p) => ({
      ...p,
      categorySlug: slug,
      categoryLabel: CATEGORY_LABELS[slug],
    }))
  );

const parsePrice = (price) =>
  Number(String(price).replace(/[^\d.]/g, "")) || 0;

/* ================================
   COMPONENT
================================ */
export default function CatalogPage({ cartCount = 0 }) {
  const navigate = useNavigate();

  // Filtros
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [activeCategory, setActiveCategory] = useState("all");

  // Todos los productos
  const allProducts = useMemo(
    () => flattenProducts(PRODUCTS_BY_CATEGORY),
    []
  );

  // Productos filtrados
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const price =
        p.price ??
        p.variants?.[0]?.price ??
        0;

      const numericPrice = parsePrice(price);

      const matchPrice =
        numericPrice >= priceRange[0] &&
        numericPrice <= priceRange[1];

      const matchCategory =
        activeCategory === "all" ||
        p.categorySlug === activeCategory;

      return matchPrice && matchCategory;
    });
  }, [allProducts, priceRange, activeCategory]);

  return (
    <>
      <MESHeader cartCount={cartCount} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ================================
            CATEGORÍAS HORIZONTALES
        ================================ */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm border ${
                activeCategory === "all"
                  ? "bg-[#208790] text-white border-[#208790]"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              Todos
            </button>

            {Object.entries(CATEGORY_LABELS).map(([slug, label]) => (
              <button
                key={slug}
                onClick={() => setActiveCategory(slug)}
                className={`px-4 py-2 rounded-full text-sm border whitespace-nowrap ${
                  activeCategory === slug
                    ? "bg-[#208790] text-white border-[#208790]"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ================================
            GRID PRINCIPAL
        ================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* ================================
              SIDEBAR FILTROS
          ================================ */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Filtrar por precio
                </h3>

                <div className="space-y-2 text-sm text-slate-700">
                  <input
                    type="range"
                    min={0}
                    max={100000}
                    step={100}
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, Number(e.target.value)])
                    }
                    className="w-full"
                  />

                  <p>
                    Hasta:{" "}
                    <strong>
                      S/ {priceRange[1].toLocaleString("es-PE")}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* ================================
              GRID DE PRODUCTOS
          ================================ */}
          <section>
            {filteredProducts.length === 0 ? (
              <p className="text-slate-600">
                No se encontraron productos con estos filtros.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((p) => {
                  const rawPrice =
                    p.price ?? p.variants?.[0]?.price ?? null;

                  const formattedPrice = rawPrice
                    ? new Intl.NumberFormat("es-PE", {
                        style: "currency",
                        currency: "PEN",
                      }).format(parsePrice(rawPrice))
                    : "Consultar";

                  return (
                    <div
                      key={`${p.id}-${p.categorySlug}`}
                      onClick={() => navigate(`/producto/${p.id}`)}
                      className="cursor-pointer rounded-xl border border-slate-200 bg-white p-4 hover:shadow-lg transition"
                    >
                      <img
                        src={p.image || "/images/placeholder.jpg"}
                        alt={p.name}
                        className="h-40 w-full object-contain bg-slate-50 rounded-md mb-3"
                      />

                      <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
                        {p.name}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {formattedPrice}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {p.categoryLabel}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
