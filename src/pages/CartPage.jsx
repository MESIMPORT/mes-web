// src/pages/CartPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { modelosAnatomicosYSimuladoresProducts } from "../data/products/modelosAnatomicosYSimuladores";

// IDs de productos con entrega extendida (modelos anatómicos)
const EXTENDED_DELIVERY_IDS = new Set(
  modelosAnatomicosYSimuladoresProducts.map((p) => String(p.id))
);

const getDeliveryInfo = (itemId) => {
  if (EXTENDED_DELIVERY_IDS.has(String(itemId))) {
    return { label: "15 – 25 días hábiles", color: "text-amber-600", bg: "bg-amber-50 border-amber-200" };
  }
  return { label: "2 – 5 días hábiles", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" };
};

const openExternal = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function CartPage({
  cartItems,
  cartCount,
  onUpdateQuantity,
  onRemoveFromCart,
}) {
  // Datos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Para navegar al PDP
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  // Construcción del mensaje a enviar
  const buildMessage = () => {
    const lineasProductos = cartItems.map((item) => {
      const qty = item.quantity || 1;
      const subtotal = ((item.price || 0) * qty).toFixed(2);
      return `- ${item.name} x${qty} (S/ ${subtotal})`;
    });

    return `
Hola, soy ${name || "(sin nombre)"}.

Quiero cotizar estos productos:
${lineasProductos.join("\n")}

Total estimado: S/ ${total.toFixed(2)}

Correo: ${email || "-"}
Teléfono: ${phone || "-"}

Notas:
${notes || "-"}
    `.trim();
  };

  const handleWhatsApp = () => {
    if (cartItems.length === 0) return;
    const base = "https://wa.me/51999999999";
    const text = buildMessage();
    openExternal(`${base}?text=${encodeURIComponent(text)}`);
  };


  const handleEmail = () => {
    if (cartItems.length === 0) return;
    const subject = "Cotización desde carrito web";
    const body = buildMessage();

    const mailtoUrl =
      "mailto:ventas@tuempresa.com" +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    openExternal(mailtoUrl);
  };


  return (
    <>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          Carrito de compras
        </h1>

        {cartItems.length === 0 ? (
          <p className="mt-4 text-slate-600">
            Tu carrito está vacío. Agrega productos desde el catálogo.
          </p>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
            {/* Lista de productos */}
            <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
              {cartItems.map((item) => {
                const lineTotal =
                  (item.price || 0) * (item.quantity || 1);

                const detailPath =
                  item.detailPath || `/producto/${item.productId || item.id}`;

                return (
                  <li
                    key={item.id}
                    className="p-4 flex flex-col sm:flex-row gap-3 sm:gap-4"
                  >
                    <div className="flex gap-3 sm:gap-4 flex-1">
                      <img
                        src={item.image || "/images/placeholder.jpg"}
                        alt={item.name}
                        className="h-16 w-16 rounded-md object-cover bg-slate-100"
                      />

                      <div className="flex-1">
                        <button
                          type="button"
                          onClick={() => navigate(detailPath)}
                          className="text-sm font-semibold text-slate-900 text-left hover:underline"
                        >
                          {item.name}
                        </button>

                        {(item.variantLabel || item.variant?.label) && (
                          <p className="mt-1 text-xs text-slate-600">
                            {item.variantLabel || item.variant?.label}
                          </p>
                        )}

                        {/* Tiempo de entrega */}
                        {(() => {
                          const delivery = getDeliveryInfo(item.id);
                          return (
                            <span className={`inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full border text-xs font-medium ${delivery.bg} ${delivery.color}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                              </svg>
                              Entrega estimada: {delivery.label}
                            </span>
                          );
                        })()}

                        {/* Controles */}
                        <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                          <div className="inline-flex items-center gap-2 text-xs text-slate-700">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, item.variantLabel, item.quantity - 1)}
                              className="h-7 w-7 rounded-full border border-slate-300 flex items-center justify-center text-sm hover:bg-slate-100"
                            >
                              −
                            </button>

                            <span className="min-w-[2rem] text-center">
                              {item.quantity || 1}
                            </span>

                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, item.variantLabel, item.quantity + 1)}
                              className="h-7 w-7 rounded-full border border-slate-300 flex items-center justify-center text-sm hover:bg-slate-100"
                            >
                              +
                            </button>

                            <button
                              type="button"
                              onClick={() => onRemoveFromCart(item.id, item.variantLabel)}
                              className="ml-6 sm:ml-10 h-7 w-7 flex items-center justify-center rounded-full border border-rose-300 text-rose-600 hover:bg-rose-50 cursor-pointer"
                              aria-label="Eliminar producto"
                            >
                              🗑
                            </button>
                          </div>

                          <p className="mt-2 sm:mt-0 sm:ml-auto text-sm font-semibold text-slate-900">
                            S/ {lineTotal.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Resumen y formulario */}
            <aside className="space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h2 className="text-base font-semibold text-slate-900">
                  Resumen
                </h2>
                <p className="mt-2 text-sm text-slate-700">
                  Total estimado:{" "}
                  <span className="font-semibold">
                    S/ {total.toFixed(2)}
                  </span>
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-3">
                <h2 className="text-base font-semibold text-slate-900">
                  Tus datos
                </h2>

                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Correo"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                  placeholder="Notas adicionales"
                  rows={3}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />

                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    Enviar por WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={handleEmail}
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                    style={{ backgroundColor: "#208790" }}
                  >
                    Enviar por correo
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}
