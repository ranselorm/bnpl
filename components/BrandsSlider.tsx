import React from "react";
import Marquee from "react-fast-marquee";

const BrandSlider = () => {
  const brands = [
    { src: "/images/b1.png", alt: "microsoft" },
    { src: "/images/b2.png", alt: "Asus" },
    { src: "/images/b3.png", alt: "hp" },
    { src: "/images/b6.png", alt: "sony" },
    { src: "/images/b4.png", alt: "apple" },
    { src: "/images/b5n.png", alt: "dell" },
    { src: "/images/b7.png", alt: "nokia" },
    { src: "/images/b8.png", alt: "samsung" },
    { src: "/images/acer.png", alt: "acer" },
  ];

  return (
    <div className="py-16">
      <div className="flex items-center justify-between gap-8 mx-auto container px-4">
        {/* Title */}
        <div className="w-5/12">
          <h3 className="text-lg w-full">
            WE ARE PARTNERED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE.
          </h3>
        </div>

        <div className="flex-1 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-100/25 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-100/25 to-transparent z-10"></div>

          <Marquee speed={40} gradient={false} pauseOnHover>
            <div className="flex items-center space-x-12 px-2">
              {brands.map((brand, index) => (
                <img
                  key={index}
                  src={brand.src}
                  alt={brand.alt}
                  className="h-16"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
