import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ❌ No tocar el scroll del catálogo
    if (pathname === "/catalogo") return;

    // ✅ TODAS las demás páginas (PDP incluido) empiezan arriba
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
