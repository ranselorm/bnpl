"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Marquee from "react-fast-marquee";

interface Brand {
  src: string;
  alt: string;
}

const brands: Brand[] = [
  { src: "/images/b1.png", alt: "Microsoft" },
  { src: "/images/b2.png", alt: "Asus" },
  { src: "/images/b3.png", alt: "HP" },
  { src: "/images/b6.png", alt: "Sony" },
  { src: "/images/b4.png", alt: "Apple" },
  { src: "/images/b5n.png", alt: "Dell" },
  { src: "/images/b7.png", alt: "Nokia" },
  { src: "/images/b8.png", alt: "Samsung" },
  { src: "/images/acer.png", alt: "Acer" },
];

/**
 * Standard Fisher–Yates shuffle.
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Returns a random derangement of the provided array—that is,
 * a permutation where no element remains in its original position.
 */
function randomDerangement<T>(array: T[]): T[] {
  let deranged: T[];
  do {
    deranged = shuffleArray(array);
  } while (deranged.some((item, index) => item === array[index]));
  return deranged;
}

/**
 * A helper component to render a vertical column of brand icons.
 * A top margin (except for the first item) is applied so that duplicates match in height.
 */
const BrandColumn: React.FC<{ brands: Brand[] }> = ({ brands }) => {
  return (
    <div className="flex flex-col">
      {brands.map((brand, index) => (
        <div
          key={index}
          className={`flex justify-center items-center h-[120px] ${
            index !== 0 ? "mt-10" : ""
          }`}
        >
          <img src={brand.src} alt={brand.alt} className="h-16 md:h-20" />
        </div>
      ))}
    </div>
  );
};

const DesktopMarquee: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const column1Brands = useMemo(() => shuffleArray(brands), []);
  const column2Brands = useMemo(
    () => randomDerangement(column1Brands),
    [column1Brands]
  );

  const marqueeControls1 = useAnimation();
  const marqueeControls2 = useAnimation();

  useEffect(() => {
    if (!mounted) return;
    marqueeControls1.set({ y: "0%" });
    marqueeControls2.set({ y: "0%" });
    marqueeControls1.start({
      y: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
    marqueeControls2.start({
      y: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="relative flex gap-6 h-[400px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-teal-500 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-teal-500 to-transparent z-10"></div>

      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        <motion.div
          initial={{ y: "0%" }}
          animate={marqueeControls1}
          className="flex flex-col"
        >
          <BrandColumn brands={column1Brands} />
          <BrandColumn brands={column1Brands} />
        </motion.div>
        <motion.div
          initial={{ y: "0%" }}
          animate={marqueeControls2}
          className="flex flex-col"
        >
          <BrandColumn brands={column2Brands} />
          <BrandColumn brands={column2Brands} />
        </motion.div>
      </div>
    </div>
  );
};

const MobileMarquee: React.FC = () => {
  const shuffledBrands = useMemo(() => shuffleArray(brands), []);
  return (
    <Marquee direction="left" speed={50} gradient={false}>
      <div className="flex gap-6 items-center">
        {shuffledBrands.map((brand, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-[120px]"
          >
            <img src={brand.src} alt={brand.alt} className="h-16 md:h-20" />
          </div>
        ))}
      </div>
    </Marquee>
  );
};

const BrandSlider: React.FC = () => {
  return (
    <div className="py-16 bg-teal-500 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">
            Our Trusted Brands And Partners
          </h3>
          <p className="max-w-md text-lg">
            A vibrant montage of happy customers shopping in various stores and
            online, using their devices to make purchases.
          </p>
        </div>

        <div className="md:w-2/3">
          <div className="hidden md:block">
            <DesktopMarquee />
          </div>
          <div className="block md:hidden">
            <MobileMarquee />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
