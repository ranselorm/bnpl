"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const ClippedImages = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
      <div className="relative w-full h-72 rounded-2xl bg-[#d4d4d4] overflow-hidden">
        <MotionImage
          src="/images/tv.png"
          alt="Sofa"
          fill
          objectFit="contain"
          className="clip-circle"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="relative w-full flex gap-x-6 h-72 overflow-hidden">
        <div className="relative w-1/2 h-full rounded-2xl bg-[#d4d4d4] overflow-hidden">
          <MotionImage
            src="/images/bl.png"
            alt="phone"
            fill
            objectFit="cover"
            className="clip-circle"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="relative w-1/2 h-full rounded-2xl bg-[#d4d4d4] overflow-hidden">
          <MotionImage
            src="/images/fridge.png"
            alt="Sewing Machine"
            fill
            objectFit="cover"
            className="clip-circle"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="relative w-full h-72 rounded-2xl bg-[#d4d4d4] overflow-hidden">
        <MotionImage
          src="/images/ph.png"
          alt="Sofa"
          fill
          objectFit="contain"
          className="clip-circle"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default ClippedImages;
