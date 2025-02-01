"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

// Variants for the container that will stagger its children.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Adjust this value for faster or slower staggering.
    },
  },
};

// Variants for each child (image container).
const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const ClippedImages = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Change amount to 0.2 for 20% if desired.
    >
      {/* First Grid Cell */}
      <motion.div
        className="relative w-full h-72 rounded-2xl bg-[#d4d4d4] overflow-hidden"
        variants={childVariants}
      >
        <MotionImage
          src="/images/tv.png"
          alt="Sofa"
          fill
          objectFit="contain"
          className="clip-circle"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Second Grid Cell (Flex container with two images) */}
      <motion.div
        className="relative w-full flex gap-x-6 h-72 overflow-hidden"
        variants={childVariants}
      >
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
      </motion.div>

      {/* Third Grid Cell */}
      <motion.div
        className="relative w-full h-72 rounded-2xl bg-[#d4d4d4] overflow-hidden"
        variants={childVariants}
      >
        <MotionImage
          src="/images/ph.png"
          alt="Sofa"
          fill
          objectFit="contain"
          className="clip-circle"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ClippedImages;
