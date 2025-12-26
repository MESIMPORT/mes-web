// ===============================
// ProductPage.jsx (VERSIÓN FINAL)
// Página de detalle de producto (PDP)
// ===============================

import React from "react";
import { useParams } from "react-router-dom";
import MESHeader from "../components/layout/MESHeader";
import ProductConfigurator from "../components/Product/ProductConfigurator";
import { PRODUCTS_BY_CATEGORY } from "../data/products/index.js";

// Combina todas las categorías en un solo array para buscar por ID
const ALL_PRODUCTS = Object.values(PRODUCTS_BY_CATEGORY).flat();

export default function ProductPage({ cartCount, onAddToCart }) {
  const { id } = useParams();

  // Buscar producto por ID
  const product = ALL_PRODUCTS.find((p) => String(p.id) === String(id));

  // Si no existe el producto → mensaje elegante
  if (!product) {
    return (
      <>
        <MESHeader showHero={false} cartCount={cartCount} />

        <main className="max-w-5xl mx-auto p-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h1 className="text-xl font-semibold text-amber-900">
              Producto no encontrado
            </h1>
            <p className="text-slate-700 mt-2">
              Verifica el enlace o vuelve al catálogo.
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <MESHeader showHero={false} cartCount={cartCount} />

<main className="relative">


  {/* Bandas laterales institucionales EXTENDIDAS */}
  <div className="hidden lg:block absolute top-0 left-0 w-20 h-[120%] bg-[#208790]" />
  <div className="hidden lg:block absolute top-0 right-0 w-20 h-[120%] bg-[#208790]" />

  {/* Contenedor PDP */}
  <div className="relative max-w-5xl mx-auto p-6 pb-24 lg:pb-6">
    <ProductConfigurator
      product={product}
      onAddToCart={onAddToCart}
    />
  </div>

  {/* CTA STICKY MOBILE */}
<div
  role="region"
  aria-label="Acciones de compra"
  className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 lg:hidden"
  style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
>


  <button
    type="button"
onClick={() => {
  const cta = document.querySelector("[data-primary-cta]");
  if (!cta) return;

  const rect = cta.getBoundingClientRect();
  const isVisible =
    rect.top >= 0 &&
    rect.bottom <= window.innerHeight;

  if (!isVisible) {
    cta.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}}

    className="w-full rounded-xl bg-[#208790] py-3 text-sm font-semibold text-white"
  >
    Agregar al carrito
  </button>
</div>

</main>
    </>
  );
}
