import { useState, useEffect } from "react";

import perfume29 from "../../Images/perfume29.png";
import perfume30 from "../../Images/perfume30.png";
import perfume32 from "../../Images/perfume32.png";
import perfume33 from "../../Images/perfume33.png";
import perfume34 from "../../Images/perfume34.png";
import perfume35 from "../../Images/perfume35.png";
import perfume36 from "../../Images/perfume36.png";

const PRODUCTS = [
  { id: 1, image: perfume29, name: "Purple-Mit", type: "Perfume" },
  { id: 2, image: perfume30, name: "Bakarat", type: "Body Spray" },
  { id: 3, image: perfume32, name: "Aqaphine", type: "Perfume" },
  { id: 4, image: perfume33, name: "Blue-Boss", type: "Perfume" },
  { id: 5, image: perfume34, name: "Nemah", type: "Roll-On" },
  { id: 6, image: perfume35, name: "Dubi", type: "Perfume" },
  { id: 7, image: perfume36, name: "CouCut", type: "Body Spray" },
];

// Must match the Tailwind widths on the slides: w-full sm:w-1/2 lg:w-1/3 xl:w-1/4
const getVisibleCount = () => {
  if (typeof window === "undefined") return 4;
  const w = window.innerWidth;
  if (w >= 1280) return 4;
  if (w >= 1024) return 3;
  if (w >= 640) return 2;
  return 1;
};

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = PRODUCTS.length - visibleCount;
  // Keeps the position valid if the screen is resized while scrolled
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handleNextSlide = () => {
    setCurrentIndex(safeIndex < maxIndex ? safeIndex + 1 : 0);
  };

  const handlePreviousSlide = () => {
    setCurrentIndex(safeIndex > 0 ? safeIndex - 1 : maxIndex);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 text-center">
        Our Collection
      </h2>

      {/* Main Carousel Wrapper */}
      <div className="relative group overflow-hidden rounded-2xl">
        
        {/* Left Overlay Button */}
        <button
          type="button"
          onClick={handlePreviousSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 text-white backdrop-blur-md opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg"
        >
          <i className="bi bi-chevron-left text-base sm:text-lg"></i>
        </button>

        {/* Right Overlay Button */}
        <button
          type="button"
          onClick={handleNextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 text-white backdrop-blur-md opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg"
        >
          <i className="bi bi-chevron-right text-base sm:text-lg"></i>
        </button>

        {/* Sliding Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${safeIndex * (100 / visibleCount)}%)`,
          }}
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0 p-2 sm:p-3"
            >
              <div className="h-full rounded-lg shadow-md bg-white/50  p-3 sm:p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Fixed Uniform Image Aspect Ratio */}
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 mb-3 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {product.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;