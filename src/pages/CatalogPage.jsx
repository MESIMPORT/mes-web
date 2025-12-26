// src/pages/CatalogPage.jsx
import React, { useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
const minPrice = 0;
const maxPrice = 5000;

const parsePrice = (price) =>
  Number(String(price).replace(/[^\d.]/g, "")) || 0;

/* ================================
   COMPONENT
================================ */
export default function CatalogPage({ cartCount = 0 }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Filtros
  
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("categoria") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("default");
  const [openMobileFilter, setOpenMobileFilter] = useState(false);


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


  // Productos ordenados
const sortedProducts = useMemo(() => {
  const products = [...filteredProducts];

  switch (sortBy) {
    case "az":
      return products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    case "za":
      return products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );

    case "price-asc":
      return products.sort((a, b) => {
        const priceA = parsePrice(
          a.price ?? a.variants?.[0]?.price ?? 0
        );
        const priceB = parsePrice(
          b.price ?? b.variants?.[0]?.price ?? 0
        );
        return priceA - priceB;
      });

    case "price-desc":
      return products.sort((a, b) => {
        const priceA = parsePrice(
          a.price ?? a.variants?.[0]?.price ?? 0
        );
        const priceB = parsePrice(
          b.price ?? b.variants?.[0]?.price ?? 0
        );
        return priceB - priceA;
      });

    default:
      return products;
  }
}, [filteredProducts, sortBy]);


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
  onClick={() => {
    setActiveCategory("all");
    navigate("/catalogo");
  }}
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
                onClick={() => {
  setActiveCategory(slug);
  navigate(`/catalogo?categoria=${slug}`);
}}

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
    SIDEBAR – FILTRO DE PRECIO
================================ */}
<aside className="hidden lg:block mt-12">
  <div className="sticky top-28 rounded-xl border border-slate-200 bg-white p-4 space-y-4">

    <h3 className="text-sm font-semibold text-slate-900">
      Filtrar por precio
    </h3>

    {/* Labels */}
    <div className="flex justify-between text-xs text-slate-600">
      <span>Desde: S/ {priceRange[0].toLocaleString("es-PE")}</span>
      <span>Hasta: S/ {priceRange[1].toLocaleString("es-PE")}</span>
    </div>

    {/* SLIDER DOBLE */}
    <div className="relative h-4">
      {/* Track base */}
      <div className="absolute inset-y-1 left-0 right-0 rounded-full bg-slate-200" />

{/* Track activo */}
<div
  className="absolute inset-y-1 rounded-full bg-[#208790] pointer-events-none"
  style={{
    left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
    right: `${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`,
  }}
/>


      {/* Slider MIN */}
 <input
  type="range"
  min={minPrice}
  max={maxPrice}
  step={50}
  value={priceRange[0]}
  onChange={(e) => {
    const value = Math.min(
      Number(e.target.value),
      priceRange[1] - 50
    );
    setPriceRange([value, priceRange[1]]);
  }}
  className="absolute inset-0 w-full appearance-none bg-transparent
    pointer-events-none
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:pointer-events-auto
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-[#208790]
    [&::-webkit-slider-thumb]:cursor-pointer"
/>



      {/* Slider MAX */}
      <input
  type="range"
  min={minPrice}
  max={maxPrice}
  step={50}
  value={priceRange[1]}
  onChange={(e) => {
    const value = Math.max(
      Number(e.target.value),
      priceRange[0] + 50
    );
    setPriceRange([priceRange[0], value]);
  }}
  className="absolute inset-0 w-full appearance-none bg-transparent
    pointer-events-none
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:pointer-events-auto
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-[#208790]
    [&::-webkit-slider-thumb]:cursor-pointer"
/>


    </div>

  </div>
</aside>


          {/* ================================
              GRID DE PRODUCTOS
          ================================ */}
<section>

    {/* FILTRO MOBILE */}
  <div className="flex items-center justify-between mb-4 lg:hidden">
    <button
      type="button"
      onClick={() => setOpenMobileFilter(true)}
      className="rounded-full border border-slate-300 px-4 py-2 text-sm"
    >
      Filtrar
    </button>
  </div>

  {/* ORDENAMIENTO */}
  <div className="flex justify-end mb-4">
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                 focus:outline-none focus:ring-2 focus:ring-[#208790]"
    >
      <option value="default">Ordenar por</option>
      <option value="az">Nombre A – Z</option>
      <option value="za">Nombre Z – A</option>
      <option value="price-asc">Precio: menor a mayor</option>
      <option value="price-desc">Precio: mayor a menor</option>
    </select>
  </div>

  {sortedProducts.length === 0 ? (
    <p className="text-slate-600">
      No se encontraron productos con estos filtros.
    </p>
  ) : (

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedProducts.map((p) => {
                  const rawPrice =
                    p.price ?? p.variants?.[0]?.price ?? null;

                  const formattedPrice = rawPrice
                    ? new Intl.NumberFormat("es-PE", {
                        style: "currency",
                        currency: "PEN",
                      }).format(parsePrice(rawPrice))
                    : "Consultar";

                     // 👇 AGREGA ESTO AQUÍ (NO MÁS ARRIBA, NO MÁS ABAJO)
const catalogImage =
  p.image ||
  p.images?.[0] ||
  p.variants?.[0]?.image ||
  p.variants?.[0]?.images?.[0] ||
  "/images/placeholder.jpg";


                  return (
                    <div
                      key={`${p.id}-${p.categorySlug}`}
                      onClick={() =>
  navigate(`/producto/${p.id}`, {
    state: {
      from: location.pathname + location.search,
    },
  })
}

                      className="cursor-pointer rounded-xl border border-slate-200 bg-white p-4 hover:shadow-lg transition"
                    >
<img
  src={catalogImage}
  alt={p.name}
  className="h-40 w-full object-contain bg-slate-50 rounded-md mb-3"
  onError={(e) => {
    e.currentTarget.src = "/images/placeholder.jpg";
  }}
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

      {/* ================================
    MODAL FILTRO MOBILE
================================ */}
{openMobileFilter && (
  <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
    {/* BACKDROP */}
    <div
      className="absolute inset-0"
      onClick={() => setOpenMobileFilter(false)}
    />

    {/* PANEL */}
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4">
      <h3 className="text-sm font-semibold text-slate-900 mb-4">
        Filtrar por precio
      </h3>

      {/* Labels */}
      <div className="flex justify-between text-xs text-slate-600 mb-2">
        <span>Desde: S/ {priceRange[0].toLocaleString("es-PE")}</span>
        <span>Hasta: S/ {priceRange[1].toLocaleString("es-PE")}</span>
      </div>

      {/* SLIDER */}
      <div className="relative h-4 mb-6">
        {/* Track base */}
        <div className="absolute inset-y-1 left-0 right-0 rounded-full bg-slate-200" />

        {/* Track activo */}
        <div
          className="absolute inset-y-1 rounded-full bg-[#208790] pointer-events-none"
          style={{
            left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
            right: `${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`,
          }}
        />

        {/* Slider MIN */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={50}
          value={priceRange[0]}
          onChange={(e) => {
            const value = Math.min(
              Number(e.target.value),
              priceRange[1] - 50
            );
            setPriceRange([value, priceRange[1]]);
          }}
          className="absolute inset-0 w-full appearance-none bg-transparent
            pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#208790]
            [&::-webkit-slider-thumb]:cursor-pointer"
        />

        {/* Slider MAX */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={50}
          value={priceRange[1]}
          onChange={(e) => {
            const value = Math.max(
              Number(e.target.value),
              priceRange[0] + 50
            );
            setPriceRange([priceRange[0], value]);
          }}
          className="absolute inset-0 w-full appearance-none bg-transparent
            pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#208790]
            [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>

      <button
        type="button"
        onClick={() => setOpenMobileFilter(false)}
        className="w-full rounded-xl bg-[#208790] py-2 text-sm font-semibold text-white"
      >
        Aplicar filtros
      </button>
    </div>
  </div>
)}

    </>
  );
}
