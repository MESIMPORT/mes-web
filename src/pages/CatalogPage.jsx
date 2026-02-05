import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CATEGORY_LABELS,
  PRODUCTS_BY_CATEGORY,
} from "../data/products";

/* ================================
   HELPERS Y CONSTANTES
================================ */

const minPrice = 0;


const parsePrice = (price) =>
  Number(String(price).replace(/[^\d.]/g, "")) || 0;

const flattenProducts = (productsByCategory) =>
  Object.entries(productsByCategory).flatMap(([slug, items]) =>
    items.map((p) => ({
      ...p,
      categorySlug: slug,
      categoryLabel: CATEGORY_LABELS[slug],
    }))
  );
export default function CatalogPage({ cartCount = 0 }) {
  const navigate = useNavigate();
  const location = useLocation();

  /* ================================
     STATE BASE
  ================================ */

  const [priceRange, setPriceRange] = useState([
    minPrice,
    minPrice,
  ]);

  const [activeCategory, setActiveCategory] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("default");

  const [selectedTypes, setSelectedTypes] =
    useState([]);

  const [selectedBrands, setSelectedBrands] =
    useState([]);

  const [openMobileFilter, setOpenMobileFilter] =
    useState(false);

  const [isAnimating, setIsAnimating] =
    useState(false);

      const allProducts = useMemo(() => {
    const flat = flattenProducts(
      PRODUCTS_BY_CATEGORY
    );
    const map = new Map();

    flat.forEach((p) => {
      if (!map.has(p.id)) {
        map.set(p.id, p);
      }
    });

    return Array.from(map.values());
  }, []);

    const dynamicMaxPrice = useMemo(() => {
  const source =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter(
          (p) => p.categorySlug === activeCategory
        );

  const prices = source
    .map((p) =>
      parsePrice(
        p.price ?? p.variants?.[0]?.price ?? 0
      )
    )
    .filter((n) => n > 0);

  return prices.length ? Math.max(...prices) : 0;
}, [allProducts, activeCategory]);

const maxPrice = dynamicMaxPrice;
  /* ================================
     HELPERS URL
  ================================ */


  const getCategoryFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get("categoria") ?? "all";
  };

  const getSortFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get("sort") || "default";
  };
  /* ================================
     SYNC URL → STATE
  ================================ */

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // categoría
    setActiveCategory(
      params.get("categoria") ?? "all"
    );

    // precio
    const minParam = params.get("min");
    const maxParam = params.get("max");

    const min =
      minParam !== null && !isNaN(Number(minParam))
        ? Number(minParam)
        : minPrice;

const resolvedMax =
  maxParam !== null && !isNaN(Number(maxParam))
    ? Number(maxParam)
    : dynamicMaxPrice;

setPriceRange([min, resolvedMax]);


    // orden
    setSortBy(
      params.get("sort") || "default"
    );

    // filtros
    setSelectedTypes(
      params.get("type")?.split(",") ?? []
    );

    setSelectedBrands(
      params.get("brand")?.split(",") ?? []
    );
  }, [location.search, dynamicMaxPrice]);
  /* ================================
     ANIMACIÓN GRID
  ================================ */

  useEffect(() => {
    setIsAnimating(true);
    const t = setTimeout(() => setIsAnimating(false), 180);
    return () => clearTimeout(t);
  }, [activeCategory]);
  /* ================================
     RESTORE SCROLL X (DESDE PDP)
  ================================ */

  useEffect(() => {
    const fromPdp = sessionStorage.getItem("fromPDP");
    if (!fromPdp) return;

    const savedX = sessionStorage.getItem(
      "catalogCategoryScrollX"
    );
    if (!savedX) return;

    const bar = document.getElementById(
      "catalog-category-bar"
    );
    if (!bar) return;

    bar.scrollLeft = Number(savedX);

    // limpiar marca para futuras entradas normales
    sessionStorage.removeItem("fromPDP");
  }, []);
  /* ================================
     RESTORE SCROLL Y + STATE
  ================================ */

  useEffect(() => {
    const raw = sessionStorage.getItem("catalogState");
    if (!raw) return;

    try {
      const { scrollY, scrollX } = JSON.parse(raw);

      requestAnimationFrame(() => {
        if (typeof scrollY === "number") {
          window.scrollTo({
            top: scrollY,
            behavior: "auto",
          });
        }

        const bar = document.getElementById(
          "catalog-category-bar"
        );
        if (bar && typeof scrollX === "number") {
          bar.scrollLeft = scrollX;
        }
      });
    } catch (e) {
      console.warn("catalogState inválido");
    }
  }, []);
  /* ================================
     DEFAULT CATEGORY IN URL
  ================================ */

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (!params.has("categoria")) {
      params.set("categoria", "all");
      navigate(`/catalogo?${params.toString()}`, {
        replace: true,
      });
    }
  }, []);



useEffect(() => {
  setPriceRange((prev) => {
    const [currentMin, currentMax] = prev;

    // Solo corregir si el rango quedó fuera del nuevo máximo
    if (currentMax > maxPrice) {
      return [currentMin, maxPrice];
    }

    return prev;
  });
}, [maxPrice]);




  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const price =
        p.price ??
        p.variants?.[0]?.price ??
        0;

      const numericPrice =
        parsePrice(price);

      const matchPrice =
        numericPrice >= priceRange[0] &&
        numericPrice <= priceRange[1];

      const matchCategory =
        activeCategory === "all" ||
        p.categorySlug === activeCategory;

      const matchType =
        selectedTypes.length === 0 ||
        selectedTypes.includes(p.type);

      const matchBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(p.brand);

      return (
        matchPrice &&
        matchCategory &&
        matchType &&
        matchBrand
      );
    });
  }, [
    allProducts,
    priceRange,
    activeCategory,
    selectedTypes,
    selectedBrands,
  ]);
  /* ================================
     DATA – FILTER OPTIONS
  ================================ */

  const availableTypes = useMemo(() => {
    const source =
      activeCategory === "all"
        ? allProducts
        : allProducts.filter(
            (p) =>
              p.categorySlug ===
              activeCategory
          );

    return Array.from(
      new Set(
        source
          .map((p) => p.type)
          .filter(Boolean)
      )
    );
  }, [allProducts, activeCategory]);

  const availableBrands = useMemo(() => {
    const source =
      activeCategory === "all"
        ? allProducts
        : allProducts.filter(
            (p) =>
              p.categorySlug ===
              activeCategory
          );

    return Array.from(
      new Set(
        source
          .map((p) => p.brand)
          .filter(Boolean)
      )
    );
  }, [allProducts, activeCategory]);

  /* ================================
     DATA – SORTED PRODUCTS
  ================================ */

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
            a.price ??
              a.variants?.[0]?.price ??
              0
          );
          const priceB = parsePrice(
            b.price ??
              b.variants?.[0]?.price ??
              0
          );
          return priceA - priceB;
        });

      case "price-desc":
        return products.sort((a, b) => {
          const priceA = parsePrice(
            a.price ??
              a.variants?.[0]?.price ??
              0
          );
          const priceB = parsePrice(
            b.price ??
              b.variants?.[0]?.price ??
              0
          );
          return priceB - priceA;
        });

      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  const isAllCategory = activeCategory === "all";
  const isPriceReady =
  maxPrice > 0 &&
  priceRange[0] <= priceRange[1] &&
  priceRange[1] <= maxPrice;

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ================================
            CATEGORÍAS HORIZONTALES
        ================================ */}
        <div
          id="catalog-category-bar"
          className="mb-6 overflow-x-auto"
        >
          <div className="flex gap-3 min-w-max">
            <button
              onClick={() => {
                setActiveCategory("all");

                const params =
                  new URLSearchParams(
                    location.search
                  );
                params.set("categoria", "all");
                params.delete("type");
                params.delete("brand");

                navigate(
                  `/catalogo?${params.toString()}`,
                  { replace: true }
                );
              }}
              className={`px-4 py-2 rounded-full text-sm border whitespace-nowrap cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#208790] text-white border-[#208790]"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              Todos
            </button>

            {Object.entries(
              CATEGORY_LABELS
            ).map(([slug, label]) => (
              <button
                key={slug}
                onClick={() => {
                  setActiveCategory(slug);

                  const params =
                    new URLSearchParams(
                      location.search
                    );

                  params.set(
                    "categoria",
                    slug
                  );
                  params.delete("type");
                  params.delete("brand");
                  params.delete("min");
                  params.delete("max");
                  params.delete("sort");

                  navigate(
                    `/catalogo?${params.toString()}`
                  );
                }}
                className={`px-4 py-2 rounded-full text-sm border whitespace-nowrap cursor-pointer ${
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

              <div className="flex justify-between text-xs text-slate-600">
                <span>
                  Desde: S/{" "}
                  {priceRange[0].toLocaleString(
                    "es-PE"
                  )}
                </span>
                <span>
                  Hasta: S/{" "}
                  {priceRange[1].toLocaleString(
                    "es-PE"
                  )}
                </span>
              </div>

              {isPriceReady && (
  <div className="relative h-4">
    <div className="absolute inset-y-1 left-0 right-0 rounded-full bg-slate-200" />

    <div
      className="absolute inset-y-1 rounded-full bg-[#208790] pointer-events-none"
      style={{
        left: `${
          ((priceRange[0] - minPrice) /
            (maxPrice - minPrice)) *
          100
        }%`,
        right: `${
          100 -
          ((priceRange[1] - minPrice) /
            (maxPrice - minPrice)) *
            100
        }%`,
      }}
    />

    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      step={10}
      value={priceRange[0]}
      onChange={(e) => {
        const value = Math.min(
          Number(e.target.value),
          priceRange[1] - 10
        );

        setPriceRange([value, priceRange[1]]);

        const params = new URLSearchParams(location.search);
        params.set("min", value);
        params.set("max", priceRange[1]);

        navigate(`/catalogo?${params.toString()}`, {
          replace: true,
        });
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

    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      step={10}
      value={priceRange[1]}
      onChange={(e) => {
        const value = Math.max(
          Number(e.target.value),
          priceRange[0] + 10
        );

        setPriceRange([priceRange[0], value]);

        const params = new URLSearchParams(location.search);
        params.set("min", priceRange[0]);
        params.set("max", value);

        navigate(`/catalogo?${params.toString()}`, {
          replace: true,
        });
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
)}


{!isAllCategory && (
  <div className="pt-4 border-t border-slate-200 space-y-4">
    {/* =====================
        TIPO DE PRODUCTO
    ===================== */}
    <div>
      <h4 className="text-sm font-semibold text-slate-900 mb-2">
        Tipo de producto
      </h4>

      {availableTypes.map((type) => (
        <label
          key={type}
          className="flex items-center gap-2 text-sm text-slate-700"
        >
          <input
            type="checkbox"
            checked={selectedTypes.includes(type)}
            onChange={() => {
              setSelectedTypes((prev) => {
                const next = prev.includes(type)
                  ? prev.filter((t) => t !== type)
                  : [...prev, type];

                const params = new URLSearchParams(location.search);

                if (next.length === 0) {
                  params.delete("type");
                } else {
                  params.set("type", next.join(","));
                }

                navigate(`/catalogo?${params.toString()}`, {
                  replace: true,
                });

                return next;
              });
            }}
          />
          {type.replace(/-/g, " ")}
        </label>
      ))}
    </div>

    {/* =====================
        MARCA
    ===================== */}
    <div>
      <h4 className="text-sm font-semibold text-slate-900 mb-2">
        Marca
      </h4>

      {availableBrands.map((brand) => (
        <label
          key={brand}
          className="flex items-center gap-2 text-sm text-slate-700"
        >
          <input
            type="checkbox"
            checked={selectedBrands.includes(brand)}
            onChange={() => {
              setSelectedBrands((prev) => {
                const next = prev.includes(brand)
                  ? prev.filter((b) => b !== brand)
                  : [...prev, brand];

                const params = new URLSearchParams(location.search);

                if (next.length === 0) {
                  params.delete("brand");
                } else {
                  params.set("brand", next.join(","));
                }

                navigate(`/catalogo?${params.toString()}`, {
                  replace: true,
                });

                return next;
              });
            }}
          />
          {brand}
        </label>
      ))}
    </div>
  </div>
)}


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
                onClick={() =>
                  setOpenMobileFilter(true)
                }
                className="rounded-full border border-slate-300 px-4 py-2 text-sm"
              >
                Filtrar
              </button>
            </div>

            {/* ORDENAMIENTO */}
            <div className="flex justify-end mb-4">
              <select
                value={sortBy}
                onChange={(e) => {
                  const value =
                    e.target.value;
                  setSortBy(value);

                  const params =
                    new URLSearchParams(
                      location.search
                    );
                  params.set(
                    "sort",
                    value
                  );

                  navigate(
                    `/catalogo?${params.toString()}`,
                    { replace: true }
                  );
                }}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-[#208790]"
              >
                <option value="default">
                  Ordenar por
                </option>
                <option value="az">
                  Nombre A – Z
                </option>
                <option value="za">
                  Nombre Z – A
                </option>
                <option value="price-asc">
                  Precio: menor a mayor
                </option>
                <option value="price-desc">
                  Precio: mayor a menor
                </option>
              </select>
            </div>

            {sortedProducts.length === 0 ? (
              <p className="text-slate-600">
                No se encontraron productos
                con estos filtros.
              </p>
            ) : (
              <div
                className={`
                  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6
                  transition-opacity duration-150
                  ${
                    isAnimating
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              >
                {sortedProducts.map(
                  (p) => {
                    const rawPrice =
                      p.price ??
                      p.variants?.[0]
                        ?.price ??
                      null;

                    const formattedPrice =
                      rawPrice
                        ? new Intl.NumberFormat(
                            "es-PE",
                            {
                              style:
                                "currency",
                              currency:
                                "PEN",
                            }
                          ).format(
                            parsePrice(
                              rawPrice
                            )
                          )
                        : "Consultar";

                    const catalogImage =
                      p.image ||
                      p.images?.[0] ||
                      p.variants?.[0]
                        ?.image ||
                      p.variants?.[0]
                        ?.images?.[0] ||
                      "/images/placeholder.jpg";

                    return (
                      <div
                        key={p.id}
                        onClick={() => {
                          const bar =
                            document.getElementById(
                              "catalog-category-bar"
                            );

                          sessionStorage.setItem(
                            "catalogState",
                            JSON.stringify(
                              {
                                scrollY:
                                  window.scrollY,
                                category:
                                  activeCategory,
                                scrollX:
                                  bar
                                    ? bar.scrollLeft
                                    : 0,
                              }
                            )
                          );

                          sessionStorage.setItem(
                            "fromPDP",
                            "1"
                          );

                          navigate(
                            `/producto/${p.id}${location.search}`
                          );
                        }}
                        className="cursor-pointer rounded-xl border border-slate-200 bg-white p-4 transition-transform duration-150 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <img
                          src={catalogImage}
                          alt={p.name}
                          className="h-40 w-full object-contain bg-slate-50 rounded-md mb-3"
                          onError={(
                            e
                          ) => {
                            e.currentTarget.src =
                              "/images/placeholder.jpg";
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
                  }
                )}
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
          <div
            className="absolute inset-0"
            onClick={() =>
              setOpenMobileFilter(false)
            }
          />

          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Filtrar por precio
            </h3>

            <div className="flex justify-between text-xs text-slate-600 mb-2">
              <span>
                Desde: S/{" "}
                {priceRange[0].toLocaleString(
                  "es-PE"
                )}
              </span>
              <span>
                Hasta: S/{" "}
                {priceRange[1].toLocaleString(
                  "es-PE"
                )}
              </span>
            </div>

            <div className="relative h-4 mb-6">
              <div className="absolute inset-y-1 left-0 right-0 rounded-full bg-slate-200" />

              <div
                className="absolute inset-y-1 rounded-full bg-[#208790] pointer-events-none"
                style={{
                  left: `${
                    ((priceRange[0] -
                      minPrice) /
                      (maxPrice -
                        minPrice)) *
                    100
                  }%`,
                  right: `${
                    100 -
                    ((priceRange[1] -
                      minPrice) /
                      (maxPrice -
                        minPrice)) *
                      100
                  }%`,
                }}
              />

              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                step={10}
                value={priceRange[0]}
                onChange={(e) => {
                  const value =
                    Math.min(
                      Number(
                        e.target.value
                      ),
                      priceRange[1] -
                        50
                    );
                  setPriceRange([
                    value,
                    priceRange[1],
                  ]);

                  const params =
                    new URLSearchParams(
                      location.search
                    );
                  params.set(
                    "min",
                    value
                  );
                  params.set(
                    "max",
                    priceRange[1]
                  );

                  navigate(
                    `/catalogo?${params.toString()}`,
                    { replace: true }
                  );
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

              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                step={10}
                value={priceRange[1]}
                onChange={(e) => {
                  const value =
                    Math.max(
                      Number(
                        e.target.value
                      ),
                      priceRange[0] +
                        50
                    );
                  setPriceRange([
                    priceRange[0],
                    value,
                  ]);

                  const params =
                    new URLSearchParams(
                      location.search
                    );
                  params.set(
                    "min",
                    priceRange[0]
                  );
                  params.set(
                    "max",
                    value
                  );

                  navigate(
                    `/catalogo?${params.toString()}`,
                    { replace: true }
                  );
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
              onClick={() =>
                setOpenMobileFilter(false)
              }
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
