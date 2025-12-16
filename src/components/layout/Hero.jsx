// =============================
// Hero.jsx — columnas laterales ONLY (sin franjas arriba/abajo)
// =============================
import React, { useState, useEffect, useRef } from "react";

const SLIDE_INTERVAL = 3000;

export default function Hero() {
  const images = [
    "/images/HERO1.png",
    "/images/HERO2.png",
    "/images/HERO3.png",
    "/images/HERO4.png",
    "/images/HERO5.png",
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // AUTOPLAY
  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, SLIDE_INTERVAL);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  // SWIPE
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      setIndex((prev) =>
        distance > 0
          ? prev === images.length - 1
            ? 0
            : prev + 1
          : prev === 0
          ? images.length - 1
          : prev - 1
      );
      startAutoPlay();
    }
  };

  return (
    <section
      className="relative w-full h-[50vh] md:h-[65vh] bg-[#208790] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Hero ${i + 1}`}
            className="
              absolute
              top-0
              bottom-0
              left-1/2
              -translate-x-1/2
              h-full
              w-auto
              object-contain
            "
            draggable={false}
          />
        </div>
      ))}

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index
                ? "bg-white scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
