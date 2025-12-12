// =============================
// Hero.jsx
// =============================
import React, { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/images/HERO1.png",
    "/images/HERO2.png",
    "/images/HERO3.png",
    "/images/HERO4.png",
    "/images/HERO5.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-[#208790]">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={src} className="w-full h-full object-contain" />
        </div>
      ))}
    </section>
  );
}
