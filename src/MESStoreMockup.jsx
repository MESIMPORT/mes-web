// MESStoreMockup.jsx
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import PageTransition from "./components/layout/PageTransition";

import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";

import MiniCartFloating from "./components/ui/MiniCartFloating";

// =====================================
// ===   COMPONENTE PRINCIPAL   ===
// =====================================
function MESStoreMockup() {
  const location = useLocation();

  // Estado del carrito
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("MES_CART")) || [];
    } catch {
      return [];
    }
  });

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find(
        (x) => x.id === product.id && x.variantLabel === product.variantLabel
      );

      const updated = exists
        ? prev.map((x) =>
            x.id === product.id && x.variantLabel === product.variantLabel
              ? { ...x, quantity: x.quantity + 1 }
              : x
          )
        : [...prev, { ...product, quantity: 1 }];

      localStorage.setItem("MES_CART", JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdateQuantity = (id, variantLabel, quantity) => {
    setCartItems((prev) => {
      const updated = prev
        .map((item) =>
          item.id === id && item.variantLabel === variantLabel
            ? { ...item, quantity }
            : item
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem("MES_CART", JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveFromCart = (id, variantLabel) => {
    setCartItems((prev) => {
      const updated = prev.filter(
        (item) => !(item.id === id && item.variantLabel === variantLabel)
      );
      localStorage.setItem("MES_CART", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      {/* ===== CONTENIDO PRINCIPAL CON TRANSICIÓN ===== */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage cartCount={cartCount} />
                </PageTransition>
              }
            />

            <Route
              path="/categoria/:slug"
              element={
                <PageTransition>
                  <CategoryPage
                    cartCount={cartCount}
                    onAddToCart={handleAddToCart}
                  />
                </PageTransition>
              }
            />

            <Route
              path="/producto/:id"
              element={
                <PageTransition>
                  <ProductPage
                    onAddToCart={handleAddToCart}
                    cartCount={cartCount}
                  />
                </PageTransition>
              }
            />

            <Route
              path="/carrito"
              element={
                <PageTransition>
                  <CartPage
                    cartItems={cartItems}
                    cartCount={cartCount}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveFromCart={handleRemoveFromCart}
                  />
                </PageTransition>
              }
            />

            <Route
              path="*"
              element={
                <PageTransition>
                  <main className="max-w-5xl mx-auto p-6">
                    <p className="text-slate-600">Página no encontrada.</p>
                  </main>
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      {/* MiniCart flotante */}
      <MiniCartFloating
        cartItems={cartItems}
        cartCount={cartCount}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MESStoreMockup;
