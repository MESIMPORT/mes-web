// ===============================
// HomePage.jsx
// Página principal de MES
// ===============================

import React from "react";
import Hero from "../components/layout/Hero";
import { Link } from "react-router-dom";
import PRODUCTS_BY_CATEGORY, {  CATEGORY_LABELS,} from "../data/products";

export default function HomePage({ cartCount }) {
  return (
    <>
      <Hero />
      {/* resto del contenido */}
    </>
  );
}
