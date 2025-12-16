// ===============================
// MESHeader.jsx (VERSIÓN FINAL CON MINICART)
// ===============================

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { PRODUCTS_BY_CATEGORY } from "../../data/products";



export default function MESHeader({ cartCount = 0, openMiniCart }) {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentHash, setCurrentHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  const firstItemRef = useRef(null);
  const nameInputRef = useRef(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // ===============================
// DATA DE BÚSQUEDA (AUTOCOMPLETE)
// ===============================
const allProducts = React.useMemo(() => {
  return Object.values(PRODUCTS_BY_CATEGORY).flat();
}, []);

const searchResults = React.useMemo(() => {
  if (!search.trim()) return [];

  const q = search.toLowerCase();

  return allProducts
    .filter((p) =>
      p.name?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q)
    )
    .slice(0, 6); // máx 6 resultados
}, [search, allProducts]);


  const handleSearch = (e) => {
  e.preventDefault();
  if (!search.trim()) return;

  navigate(`/buscar?q=${encodeURIComponent(search.trim())}`);
  setSearch("");
};

  // Paneles (Contacto / Nosotros)
  const [openContact, setOpenContact] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  useEffect(() => {
    if (openContact && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [openContact]);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange, { passive: true });
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  /* =========================================================
     NAVEGACIÓN
  ========================================================= */
  const nav = [
    {
      label: "Productos",
      href: "#productos",
      children: [
        { label: "Protección radiológica", href: "#proteccion-radiologica" },
        { label: "Gestantes y neonatos", href: "#cuidado-de-gestante-y-neonatos" },
        { label: "Emergencia y soporte vital", href: "#emergencia-y-soporte-vital" },
        { label: "Esterilización y cadena de frío", href: "#esterilizacion-y-cadena-de-frio" },
        { label: "Estética y dermatología", href: "#estetica-y-dermatologia" },
        { label: "Instrumental quirúrgico", href: "#instrumental-y-equipos-quirurgicos" },
        { label: "Laboratorio y reactivos", href: "#equipamiento-de-laboratorios-y-reactivos" },
        { label: "Material descartable médico", href: "#material-descartable-medico" },
        { label: "Mobiliario y confort", href: "#mobiliario-y-comfort" },
        { label: "Odontología", href: "#dentales-y-odontologia" },
        { label: "Modelos anatómicos", href: "#modelos-anatomicos-y-simuladores-de-entrenamiento" },
        { label: "Rehabilitación y fisioterapia", href: "#rehabilitacion-y-fisioterapia" },
        { label: "Soporte respiratorio", href: "#soporte-respiratorio" },
        { label: "Oftalmología y optometría", href: "#oftalmologia-y-optometria" },
        { label: "Diagnóstico y medición", href: "#diagnostico-y-medicion" },
        { label: "Accesorios y misceláneos", href: "#accesorios-y-miscelaneos" },
      ],
    },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  const WSP_LINK =
    "https://wa.me/51944638288?text=Hola%20MES,%20quisiera%20información";

  const slug = (s) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

  const hrefToSlug = (href) => (href?.startsWith("#") ? href.slice(1) : href);

  /* =========================================================
     HANDLER DEL CARRITO → abre minicart
  ========================================================= */
const handleCartClick = () => {
  navigate("/carrito");   // SIEMPRE abre el carrito grande
};


  /* =========================================================
     MENÚ
  ========================================================= */
  const onMenubarKeyDown = (e, item) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpenDropdown(item.label);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpenDropdown(null);
    }
  };

  const onMenuKeyDown = (e) => {
    const focusable = Array.from(
      e.currentTarget.querySelectorAll("[role='menuitem']")
    );
    const idx = focusable.indexOf(document.activeElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusable[(idx + 1) % focusable.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusable[(idx - 1 + focusable.length) % focusable.length]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpenDropdown(null);
    }
  };

  /* =========================================================
     RENDER
  ========================================================= */
  return (
    <>
      <header className="sticky top-0 z-50 w-full shadow-sm bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <img src="/images/logo.png" alt="MES" className="h-12 w-auto" />
              <div className="leading-tight">
                <p className="text-base font-semibold text-slate-900">
                  Medical Equipment & Supplies
                </p>
                <p className="text-xs text-slate-500">
                  Soluciones médicas confiables
                </p>
              </div>
            </Link>

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex items-center gap-6" role="menubar">
              {nav.map((item) => {
                const isOpen = openDropdown === item.label;
                const hasChildren = !!item.children?.length;

                const childActive =
                  hasChildren &&
                  item.children.some((sub) => sub.href === currentHash);

                const isTopActive =
                  currentHash === item.href || childActive;

                return (
                  <div
                    key={item.label}
                    className="relative pt-2"
                    onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                    onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                  >
                    <button
                      role="menuitem"
                      aria-haspopup={hasChildren ? "menu" : undefined}
                      aria-expanded={isOpen}
                      onClick={() =>
                        hasChildren
                          ? setOpenDropdown(isOpen ? null : item.label)
                          : item.href === "#contacto"
                          ? setOpenContact(true)
                          : item.href === "#nosotros"
                          ? setOpenAbout(true)
                          : (window.location.hash = item.href)
                      }
                      onKeyDown={(e) => onMenubarKeyDown(e, item)}
                      className={`text-sm font-medium cursor-pointer ${

                        isTopActive
                          ? "text-slate-900 font-semibold"
                          : "text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                    </button>

                    {/* SUBMENÚ */}
                    {hasChildren && (
                      <div
                        role="menu"
                        onKeyDown={onMenuKeyDown}
                        className={`absolute left-0 top-full z-50 w-72 bg-white shadow-lg border border-slate-200 border-t-4 rounded-lg transition
                          ${
                            isOpen
                              ? "opacity-100 translate-y-0 visible"
                              : "opacity-0 -translate-y-1 invisible"
                          }`}
                        style={{ borderTopColor: "#208790" }}
                      >
                        <ul className="py-2 max-h-[70vh] overflow-auto">
                          {item.children.map((sub, i) => {
                            const isActive = currentHash === sub.href;
                            const catSlug = hrefToSlug(sub.href);
                            return (
                              <li key={sub.href}>
<a
  ref={i === 0 ? firstItemRef : null}
  role="menuitem"
  tabIndex={-1}
  className={`cursor-pointer block px-4 py-2 text-sm ${

                                    isActive
                                      ? "bg-slate-100 font-semibold"
                                      : "text-slate-700 hover:bg-slate-100"
                                  }`}
                                  href={sub.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setOpenDropdown(null);
                                    navigate(`/categoria/${catSlug}`);
                                  }}
                                >
                                  {sub.label}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}

{/* 🔍 BUSCADOR DESKTOP + AUTOCOMPLETE */}
<div className="relative hidden lg:block ml-6">
  <form onSubmit={handleSearch}>
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Buscar productos…"
      className="w-64 rounded-full border border-slate-300 pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#208790]"
    />
  </form>

  {/* DROPDOWN RESULTADOS */}
  {searchResults.length > 0 && (
    <div className="absolute z-50 mt-2 w-full rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      {searchResults.map((p) => (
        <button
          key={p.id}
          type="button"
          onClick={() => {
            navigate(`/producto/${p.id}`);
            setSearch("");
          }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-left w-full"
        >
          <img
            src={p.image || "/images/placeholder.jpg"}
            alt={p.name}
            className="h-10 w-10 rounded-md object-contain bg-slate-100 shrink-0"
          />
          <span className="text-sm text-slate-800 truncate">
            {p.name}
          </span>
        </button>
      ))}
    </div>
  )}
</div>


              {/* WHATSAPP */}
              <a
                href={WSP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full p-2 shadow hover:bg-slate-100 cursor-pointer"
              >
                <img src="/images/whatsapp-icon.png" className="h-6 w-6" alt="" />
              </a>

              {/* CARRITO — ahora botón que abre MiniCart */}
              <button
              type="button"
              onClick={handleCartClick}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
>

                🛒
                {cartCount > 0 && (
                  <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#208790] px-1 text-xs font-semibold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </nav>

            {/* MENÚ MOBILE */}
            <button
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 cursor-pointer"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* PANEL MOBILE */}
        {open && (
          <div className="md:hidden border-t border-slate-200">
            <nav className="grid gap-2 px-4 py-3">
              {nav.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpen = openDropdown === item.label;

                return (
                  <div key={item.label}>
                    <button
                      className="w-full text-left rounded-xl px-3 py-2 text-sm hover:bg-slate-100 cursor-pointer"
                      onClick={() =>
                        hasChildren
                          ? setOpenDropdown(isOpen ? null : item.label)
                          : item.href === "#contacto"
                          ? (setOpen(false), setOpenContact(true))
                          : item.href === "#nosotros"
                          ? (setOpen(false), setOpenAbout(true))
                          : (setOpen(false), (window.location.hash = item.href))
                      }
                    >
                      {item.label}
                    </button>

                    {/* SUBMENÚ MOBILE */}
                    {hasChildren && isOpen && (
                      <div
                        className="ml-4 mt-1 grid gap-1 border-l-4"
                        style={{ borderLeftColor: "#208790" }}
                      >
                        {item.children.map((sub) => {
                          const catSlug = hrefToSlug(sub.href);
                          return (
                            <a
                            key={sub.href}
                            className="cursor-pointer px-3 py-1 text-sm text-slate-600 hover:text-slate-900"
                              onClick={(e) => {
                                e.preventDefault();
                                setOpen(false);
                                navigate(`/categoria/${catSlug}`);
                              }}
                            >
                              {sub.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* CTA WhatsApp MOBILE */}
              <a
                href={WSP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full p-2 shadow hover:bg-slate-100 cursor-pointer"
              >
                <img src="/images/whatsapp-icon.png" className="h-6 w-6" alt="" />
              </a>

              {/* CARRITO MOBILE — también abre minicart */}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  handleCartClick();
                }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
              >
                🛒
                {cartCount > 0 && (
                  <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#208790] px-1 text-xs font-semibold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </nav>
          </div>
        )}
      </header>

{/* PANEL NOSOTROS */}
<AnimatePresence>
  {openAbout && (
    <motion.div
      className="fixed inset-0 z-[60]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* BACKDROP */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpenAbout(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* PANEL */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full md:w-[960px] bg-white shadow-2xl overflow-hidden"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 80, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* HEADER DEL PANEL */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200">
          <h2 id="about-title" className="text-base font-semibold text-slate-900">
            Nosotros
          </h2>
          <button
            onClick={() => setOpenAbout(false)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* CUERPO DEL PANEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100%-56px)]">
          {/* ASIDE IZQUIERDO */}
          <aside className="hidden md:flex flex-col justify-start gap-4 px-8 py-6 bg-slate-50 border-r border-slate-200">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="MES Logo"
                className="h-20 w-auto"
              />
              <p className="text-xl text-slate-600 font-bold">
                Medical Equipment & Supplies
              </p>
            </div>

            <p className="text-slate-700">
              Con más de 5 años de experiencia en el mercado, brindamos
              soluciones médicas confiables a clínicas, hospitales y
              universidades en todo el país. Contamos con licencia de
              funcionamiento vigente y autorización DIGEMID.
            </p>

            <ul className="text-sm text-slate-700 list-disc pl-5">
              <li>Garantizamos tus atenciones</li>
              <li>Traducimos tus necesidades</li>
              <li>Optimizamos tus recursos</li>
            </ul>
          </aside>

          {/* CONTENIDO DERECHO */}
          <section className="overflow-auto px-6 sm:px-8 py-6 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Misión
              </h3>
              <p className="text-sm text-slate-700">
                Brindar equipamiento clínico con altos estándares de
                servicio.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Visión
              </h3>
              <p className="text-sm text-slate-700">
                Ser el socio estratégico más confiable del sector salud.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Valores
              </h3>
              <p className="text-sm text-slate-700">
                Transparencia · Compromiso · Innovación · Servicio al
                cliente.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Nuestros clientes
              </h3>
              <div className="mt-3 grid grid-cols-3 gap-4 items-center">
                <img
                  src="/images/clientes/angloamericana.png"
                  className="h-20 opacity-90"
                  alt=""
                />
                <img
                  src="/images/clientes/san-pablo.png"
                  className="h-20 opacity-90"
                  alt=""
                />
                <img
                  src="/images/clientes/ucv.png"
                  className="h-20 opacity-90"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


{/* PANEL CONTACTO */}
<AnimatePresence>
  {openContact && (
    <motion.div
      className="fixed inset-0 z-[60]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contacto-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* BACKDROP */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpenContact(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* PANEL */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full md:w-[900px] bg-white shadow-2xl overflow-hidden"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 80, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200">
          <h2
            id="contacto-title"
            className="text-base font-semibold text-slate-900"
          >
            Contáctanos
          </h2>

          <button
            onClick={() => setOpenContact(false)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* CUERPO */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100%-56px)]">
          {/* ASIDE IZQUIERDO */}
          <aside className="hidden md:flex flex-col justify-start px-8 pt-6 bg-slate-50 border-r border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Fortalece tu gestión con una respuesta rápida y confiable
            </h3>

            <p className="text-base text-slate-700 mb-8">
              <span className="font-semibold">Horario de atención</span>
              <br />
              Lunes a Viernes: 9:00 a.m. – 6:00 p.m.
              <br />
              Sábados: 9:00 a.m. – 1:00 p.m.
              <br />
              <span className="text-slate-500">
                Domingos y feriados: Cerrado
              </span>

              <br />
              <br />

              <span className="font-semibold">Teléfonos</span>
              <br />
              <span className="text-slate-600">
                944&nbsp;638&nbsp;288 &nbsp;|&nbsp; 953&nbsp;691&nbsp;257
              </span>
            </p>

            <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-300 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7101400419944!2d-77.06175482504682!3d-12.05495133810202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f4538f41ad%3A0xa4b9dfb32e!2sAv.%20Oscar%20R.%20Benavides%20679%2C%20Lima!5e0!3m2!1ses!2spe!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          {/* FORMULARIO */}
          <section className="overflow-auto p-6 sm:p-8">
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Gracias! Tu mensaje fue enviado.");
                setOpenContact(false);
              }}
            >
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Nombre
                </label>
                <input
                  ref={nameInputRef}
                  name="nombre"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Celular
                </label>
                <input
                  name="celular"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  placeholder="Ej. 944 638 288"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  placeholder="tu@correo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  name="mensaje"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  placeholder="Cuéntanos qué necesitas…"
                />
              </div>

              <div className="mt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow"
                  style={{ backgroundColor: "#208790" }}
                >
                  Enviar
                </button>

                <button
                  type="button"
                  onClick={() => setOpenContact(false)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </section>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}

