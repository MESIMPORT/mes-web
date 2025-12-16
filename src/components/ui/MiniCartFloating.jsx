// src/components/ui/MiniCartFloating.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default function MiniCartFloating({
  cartItems = [],
  cartCount = 0,
  onUpdateQuantity,
  onRemoveFromCart,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleGoToCart = () => {
    navigate("/carrito", { state: { from: location.pathname } });
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón flotante fijo abajo a la derecha */}
      <button
        type="button"
        onClick={handleToggle}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#208790] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-[#1b6b6d]"
      >
        <ShoppingCart className="h-5 w-5" />
        <span>Carrito</span>
        {cartCount > 0 && (
          <span className="ml-1 inline-flex h-5 min-w-[1.4rem] items-center justify-center rounded-full bg-white/20 text-xs">
            {cartCount}
          </span>
        )}
      </button>

      {/* Panel flotante */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 z-40 w-80 max-h-[70vh] rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden">
          {/* Header del panel */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-slate-700" />
              <p className="text-sm font-semibold text-slate-800">
                Tu carrito ({cartCount})
              </p>
            </div>
            <button
              type="button"
              onClick={handleToggle}
              className="rounded-full p-1 hover:bg-slate-200"
            >
              <X className="h-4 w-4 text-slate-600" />
            </button>
          </div>

          {/* Contenido */}
          {cartItems.length === 0 ? (
            <div className="px-4 py-6 text-sm text-slate-500">
              Aún no has agregado productos.
            </div>
          ) : (
            <>

{/* Lista de productos */}
<div className="flex-1 overflow-auto px-3 py-2 space-y-3">
  <AnimatePresence mode="popLayout">
    {cartItems.map((item) => (
<motion.div
  key={`${item.id}-${item.variantLabel || ""}`}
  layout
  initial={{ opacity: 0, x: 16 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 24 }}
  transition={{ duration: 0.22, ease: "easeOut" }}
  className="grid grid-cols-[1fr_auto] gap-2 p-2 rounded-lg border border-slate-100 overflow-hidden"
>

        {/* =====================
            ZONA PDP (NAVEGAR)
        ===================== */}
        <div
          onClick={() =>
            navigate(`/producto/${item.productId || item.id}`)
          }
          className="flex items-center gap-3 rounded-md p-2 cursor-pointer hover:bg-slate-50 transition overflow-hidden"
          title="Ver detalle del producto"
        >
          <img
            src={item.image || "/images/placeholder.jpg"}
            alt={item.name}
            className="h-10 w-10 rounded-md object-cover bg-slate-100 shrink-0"
          />

          <div className="flex-1 min-w-0 overflow-hidden">
            <p className="text-xs font-semibold text-slate-900 truncate hover:underline max-w-full">
              {item.name}
            </p>

            {item.variantLabel && (
              <p className="text-[11px] text-slate-600 truncate max-w-full">
                {item.variantLabel}
              </p>
            )}

            <p className="mt-0.5 text-[11px] text-slate-500 truncate max-w-full">
              Cant: {item.quantity || 1} · S/{" "}
              {((item.price || 0) * (item.quantity || 1)).toFixed(2)}
            </p>
          </div>
        </div>

        {/* =====================
            ZONA ELIMINAR
        ===================== */}
        <div className="flex items-center justify-center border-l border-slate-200 pl-2 w-20">
          <button
            type="button"
            onClick={() =>
              onRemoveFromCart?.(item.id, item.variantLabel)
            }
            className="rounded-md px-2 py-1 text-[11px] font-medium text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition"
            title="Eliminar del carrito"
          >
            Eliminar
          </button>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>





              {/* Total + botón ver carrito */}
              <div className="border-t border-slate-200 px-3 py-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Total estimado</span>
                  <span className="font-semibold text-slate-900">
                    S/ {total.toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleGoToCart}
                  className="w-full rounded-xl bg-[#208790] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#1b6b6d]"
                >
                  Ver carrito completo
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
