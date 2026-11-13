// src/pages/LaminasLanding.jsx
// Página de entrada de láminas preparadas: colecciones + kit destacado
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCTS_BY_CATEGORY } from "../data/products/index.js";
import { cashPriceFor } from "../data/products/precioContado";

const SLUG = "laminas-histologicas";
const WHATSAPP =
  "https://wa.me/51944638288?text=" +
  encodeURIComponent("Hola, quisiera cotizar láminas preparadas. Les envío mi requerimiento:");

const fmt = (v) =>
  new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" }).format(v);

// Cada colección agrupa uno o más "type" del catálogo
const COLLECTIONS = [
  {
    key: "histologia",
    title: "Histología",
    text: "Tejidos y órganos normales humanos por sistema, en H&E y tinciones especiales.",
    image: "/images/laminas/histologia/lamina-hipofisis-masson.jpg",
    match: (t) => t === "Láminas Histológicas",
  },
  {
    key: "histopatologia",
    title: "Histopatología",
    text: "Patología humana: neoplasias, inflamación, lesión celular y trastornos circulatorios.",
    image: "/images/laminas/histopatologia/IMG.png",
    match: (t) => t.startsWith("Histopatología") || t === "Láminas de Histopatología",
  },
  {
    key: "hematologia",
    title: "Hematología",
    text: "Frotis de sangre periférica y médula ósea, leucemias y alteraciones morfológicas.",
    image: "/images/laminas/hematologia/frotis-sangre-alteraciones-morfologicas.jpg",
    match: (t) => t === "Láminas Hematológicas",
  },
  {
    key: "micologia",
    title: "Micología",
    text: "Hongos de interés clínico: dermatofitos, levaduras y hongos filamentosos.",
    image: "/images/laminas/micologia/lamina-aspergillus-fumigatus.jpg",
    match: (t) => t === "Láminas de Micología",
  },
  {
    key: "embriologia",
    title: "Embriología",
    text: "Sets y cortes seriados del desarrollo embrionario.",
    image: "/images/laminas/embriologia/laminas-de-embriologia-set-08.jpg",
    match: (t) => t === "Láminas de Embriología",
  },
];

export default function LaminasLanding() {
  const navigate = useNavigate();
  const items = PRODUCTS_BY_CATEGORY[SLUG] || [];
  const types = [...new Set(items.map((p) => p.type).filter(Boolean))];
  const kits = items.filter((p) => p.type === "Kits de láminas");

  const collections = COLLECTIONS.map((c) => {
    const cTypes = types.filter(c.match);
    const count = items.filter((p) => cTypes.includes(p.type)).length;
    const to = `/catalogo?categoria=${SLUG}&type=${encodeURIComponent(cTypes.join("|"))}`;
    return { ...c, count, to };
  }).filter((c) => c.count > 0);

  const total = items.length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-br from-[#245877] to-[#208790] px-6 py-10 sm:px-10 sm:py-14 text-white">
        <p className="text-sm font-medium uppercase tracking-wider text-white/80">Material didáctico</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold leading-tight">
          Láminas preparadas para la enseñanza
        </h1>
        <p className="mt-3 max-w-2xl text-white/90">
          Más de {Math.floor(total / 10) * 10} tipos de láminas de histología, histopatología, hematología,
          micología y embriología para prácticas de microscopía en universidades e institutos.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-5 py-2.5 font-semibold text-[#245877] shadow hover:bg-slate-100"
          >
            Enviar mi requerimiento
          </a>
          <Link
            to={`/catalogo?categoria=${SLUG}`}
            className="rounded-xl border border-white/60 px-5 py-2.5 font-semibold text-white hover:bg-white/10"
          >
            Ver todas las láminas
          </Link>
        </div>
      </section>

      {/* COLECCIONES */}
      <section className="mt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-[#245877] dark:text-slate-100">Colecciones</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {collections.map((c) => (
            <Link
              key={c.key}
              to={c.to}
              className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#208790]/50"
            >
              <div className="h-44 bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{c.title}</h3>
                  <span className="text-sm font-medium text-[#208790]">{c.count} láminas</span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{c.text}</p>
                <p className="mt-3 text-sm font-semibold text-[#208790] group-hover:underline">Ver colección →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* KITS */}
      {kits.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#245877] dark:text-slate-100">Kits para universidades</h2>
          <div className="mt-5 grid gap-5">
            {kits.map((k) => {
              const cash = cashPriceFor(k, k.price);
              return (
                <div
                  key={k.id}
                  onClick={() => navigate(`/producto/${k.id}`)}
                  className="cursor-pointer grid grid-cols-1 md:grid-cols-[280px_1fr] overflow-hidden rounded-2xl border-2 border-[#208790]/40 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="h-56 md:h-full bg-slate-900">
                    <img src={k.image} alt={k.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-[#208790]/10 px-3 py-1 text-xs font-semibold text-[#208790]">
                      Ideal para implementar un laboratorio
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-slate-100">{k.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                      {String(k.description || "").split("||")[0]}
                    </p>
                    <div className="mt-4 flex flex-wrap items-end gap-x-6 gap-y-2">
                      <div>
                        <p className="text-xs text-slate-500">Precio de lista</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{fmt(k.price)}</p>
                      </div>
                      {cash != null && (
                        <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950 px-3 py-1.5">
                          <p className="text-xs text-emerald-700 dark:text-emerald-300">Pago al contado</p>
                          <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">{fmt(cash)}</p>
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-sm font-semibold text-[#208790]">Ver contenido del kit →</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="mt-12 rounded-2xl border border-[#208790]/30 bg-[#208790]/5 dark:bg-slate-800 p-6 sm:p-8 text-center">
        <h2 className="text-lg sm:text-xl font-bold text-[#245877] dark:text-slate-100">
          ¿Tienes una lista de requerimiento?
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Envíanosla y te cotizamos todo en un solo documento. Compras por volumen y para varias sedes: precio a medida.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-xl bg-[#208790] px-6 py-3 font-semibold text-white shadow hover:bg-[#1b737b]"
        >
          Cotizar por WhatsApp
        </a>
      </section>
    </main>
  );
}
