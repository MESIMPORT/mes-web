import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MESHeader from "../components/layout/MESHeader";
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

  const results = useMemo(() => {
    if (!q) return [];
    return allProducts.filter((p) => {
      const name = normalize(p?.name || "");
      const desc = normalize(p?.description || "");
      return name.includes(q) || desc.includes(q);
    });
  }, [q, allProducts]);

  return (
    <>
      <MESHeader cartCount={cartCount} openMiniCart={openMiniCart} />

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
            {results.map((p) => (
              <li
                key={p.id}
                onClick={() => navigate(`/producto/${p.id}`)}
                className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 hover:shadow-md transition"
              >
                <div className="h-44 w-full flex items-center justify-center rounded-xl bg-slate-50 overflow-hidden">
                  <img
                    src={p.image || "/images/placeholder.jpg"}
                    alt={p.name}
                    className="h-full w-full object-contain"
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>

                <p className="mt-3 text-sm font-semibold text-slate-900 line-clamp-2">
                  {p.name}
                </p>

                {p.description && (
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {p.description}
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
