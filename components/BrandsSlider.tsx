"use client";

import React from "react";

const BrandSlider: React.FC = () => {
  const brands = ["/icons/b1.png", "/icons/b2.png"];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Trusted by Top Brands
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex items-center gap-8 animate-slide">
            {/* Duplicate the array to create a seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="h-12 md:h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-slide {
          display: flex;
          animation: slide 20s linear infinite;
        }

        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default BrandSlider;
