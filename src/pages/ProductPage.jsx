// ===============================
// ProductPage.jsx (VERSIÓN FINAL)
// Página de detalle de producto (PDP)
// ===============================

import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ProductConfigurator from "../components/Product/ProductConfigurator";
import { PRODUCTS_BY_CATEGORY } from "../data/products/index.js";

// Combina todas las categorías en un solo array para buscar por ID
const ALL_PRODUCTS = Object.values(PRODUCTS_BY_CATEGORY).flat();

export default function ProductPage({ cartCount, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();


  const handleClose = () => {
    const savedSearch = sessionStorage.getItem("catalogSearch") ?? "";
    sessionStorage.removeItem("catalogSearch");
    navigate(`/catalogo${savedSearch}`);
  };




  // Buscar producto por ID
  const product = ALL_PRODUCTS.find(
    (p) => String(p.id) === String(id)
  );

  // Si no existe el producto → mensaje elegante
  if (!product) {
    return (
      <>

        <main className="max-w-5xl mx-auto p-6">
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
            <h1 className="text-xl font-semibold text-amber-900 dark:text-amber-200">
              Producto no encontrado
            </h1>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Verifica el enlace o vuelve al catálogo.
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      {/* ── BOTÓN VOLVER DESKTOP (sticky, top-left, fuera del header) ── */}
      <div className="hidden lg:block sticky top-20 z-50 pointer-events-none">
        <div className="mx-auto max-w-5xl px-6">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Volver al catálogo"
            className="
              pointer-events-auto
              inline-flex items-center gap-1.5
              rounded-full
              border border-slate-200 dark:border-slate-700
              bg-white/80 dark:bg-slate-800/80
              backdrop-blur-sm
              px-3 py-1.5
              text-xs font-medium
              text-slate-600 dark:text-slate-300
              shadow-sm
              hover:bg-white dark:hover:bg-slate-800
              hover:text-slate-900 dark:hover:text-white
              hover:shadow-md
              transition-all duration-150
              cursor-pointer
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
            Volver
          </button>
        </div>
      </div>

      <main className="relative pointer-events-none">
        {/* Bandas laterales institucionales */}
        <div className="absolute top-0 left-0 hidden h-[120%] w-20 bg-[#208790] lg:block pointer-events-none" />
        <div className="absolute top-0 right-0 hidden h-[120%] w-20 bg-[#208790] lg:block pointer-events-none" />

        {/* Contenedor PDP */}
        <div className="relative mx-auto max-w-5xl p-6 pb-28 pointer-events-auto">
          <ProductConfigurator
            product={product}
            backTarget="/catalogo"
            onAddToCart={onAddToCart}
          />
        </div>
      </main>

      {/* ── CHIP FLOTANTE MOBILE (fixed bottom-left, opuesto al mini carrito) ── */}
      <div className="lg:hidden fixed bottom-4 left-4 z-50">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Volver al catálogo"
          className="
            inline-flex items-center gap-1.5
            rounded-full
            border border-slate-200/60 dark:border-slate-700/60
            bg-slate-900/85 dark:bg-slate-950/90
            backdrop-blur-md
            px-4 py-2
            text-sm font-semibold text-white
            shadow-lg shadow-black/20
            active:scale-95
            transition-transform duration-100
            cursor-pointer
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
          Catálogo
        </button>
      </div>
    </>
  );
}
