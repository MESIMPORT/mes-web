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

      <main className="max-w-5xl mx-auto p-6">
        <ProductConfigurator
          product={product}
          onAddToCart={onAddToCart}
        />
      </main>
    </>
  );
}
