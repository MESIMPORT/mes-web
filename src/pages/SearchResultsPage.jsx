import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PRODUCTS_BY_CATEGORY } from "../data/products";

function normalize(str = "") {
  return String(str)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function SearchResultsPage({ cartCount = 0, openMiniCart }) {
  const { search } = useLocation();
  const navigate = useNavigate();

  const qRaw = new URLSearchParams(search).get("q") || "";
  const q = normalize(qRaw.trim());

  const allProducts = useMemo(() => Object.values(PRODUCTS_BY_CATEGORY).flat(), []);

  // Expand consolidated products into individual searchable items
  const searchableItems = useMemo(() => {
    const items = [];

    allProducts.forEach((product) => {
      // If product has variants, add each variant as a searchable item
      if (product.variants && Array.isArray(product.variants)) {
        product.variants.forEach((variant) => {
          items.push({
            id: product.id, // Keep parent ID for navigation
            variantSku: variant.sku,
            name: variant.name,
            description: variant.description,
            image: variant.image || variant.images?.[0] || product.image,
            price: variant.price,
            isVariant: true,
            parentName: product.name
          });
        });
      } else {
        // Regular product without variants
        items.push({
          id: product.id,
          name: product.name,
          description: product.description,
          image: product.image,
          price: product.price,
          isVariant: false
        });
      }
    });

    return items;
  }, [allProducts]);

  const results = useMemo(() => {
    if (!q) return [];
    return searchableItems.filter((item) => {
      const name = normalize(item?.name || "");
      const desc = normalize(item?.description || "");
      const parentName = normalize(item?.parentName || "");
      return name.includes(q) || desc.includes(q) || parentName.includes(q);
    });
  }, [q, searchableItems]);

  return (
    <>


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Resultados de búsqueda
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            {qRaw ? (
              <>
                Buscaste: <span className="font-semibold">“{qRaw}”</span> ·{" "}
                <span className="font-semibold">{results.length}</span> resultado(s)
              </>
            ) : (
              "Escribe algo para buscar productos."
            )}
          </p>
        </div>

        {!qRaw ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
            Ingresa una palabra clave en el buscador.
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
            No encontramos resultados para <span className="font-semibold">“{qRaw}”</span>.
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item, idx) => (
              <li
                key={`${item.id}-${item.variantSku || idx}`}
                onClick={() => navigate(`/producto/${item.id}`)}
                className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 hover:shadow-md transition"
              >
                <div className="h-44 w-full flex items-center justify-center rounded-xl bg-slate-50 overflow-hidden">
                  <img
                    src={item.image || "/images/placeholder.jpg"}
                    alt={item.name}
                    className="h-full w-full object-contain"
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>

                <p className="mt-3 text-sm font-semibold text-slate-900 line-clamp-2">
                  {item.name}
                </p>

                {item.isVariant && item.parentName && (
                  <p className="mt-1 text-xs text-[#208790] font-medium">
                    {item.parentName}
                  </p>
                )}

                {item.description && (
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                )}

                {item.price && (
                  <p className="mt-2 text-sm font-bold text-slate-900">
                    S/ {item.price}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
