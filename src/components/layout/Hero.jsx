// =============================
// Hero.jsx — limpio y optimizado
// =============================
import { useState, useEffect, useRef } from "react";

const SLIDE_INTERVAL = 3000;

const IMAGES = [
  "/images/HERO1.png",
  "/images/HERO2.png",
  "/images/HERO3.png",
  "/images/HERO4.png",
  "/images/HERO5.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // AUTOPLAY
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(id);
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
          ? (prev + 1) % IMAGES.length
          : (prev - 1 + IMAGES.length) % IMAGES.length
      );
    }
  };

  return (
    <section
      className="relative w-full h-[50vh] md:h-[65vh] bg-[#208790] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {IMAGES.map((src, i) => (
        <div
          key={src}
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
        {IMAGES.map((_, i) => (
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
