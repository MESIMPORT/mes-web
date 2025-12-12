import React, { useState, useEffect } from "react";

function LightboxImage({ src, alt, className = "" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
<img
  src={src}
  alt={alt}
  loading="lazy"
  className={`cursor-zoom-in ${className}`}
  onClickCapture={(e) => e.stopPropagation()}   // ← evita que el <li> navegue
  onClick={() => setOpen(true)}
/>


      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-[95vw] max-h-[90vh] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 rounded-full bg-white/90 px-2 py-1 text-sm shadow"
            >
              ✕
            </button>

            <img
              src={src}
              alt={alt}
              className="max-w-[95vw] max-h-[90vh] object-contain cursor-zoom-out"
              draggable={false}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default LightboxImage;
