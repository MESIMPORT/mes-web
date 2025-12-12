// ===============================
// HomePage.jsx
// Página principal de MES
// ===============================

import React from "react";
import MESHeader from "../components/layout/MESHeader";
import Hero from "../components/layout/Hero";
import { Link } from "react-router-dom";
import PRODUCTS_BY_CATEGORY, {  CATEGORY_LABELS,} from "../data/products";


export default function HomePage({ cartCount }) {

  return (
    <>
      {/* HEADER con HERO visible */}
      <MESHeader showHero={false} cartCount={cartCount} />

      {/* HERO separado */}
      <Hero />



      {/* FOOTER global (ya viene desde MESStoreMockup.jsx, no repetir aquí) */}
    </>
  );
}
