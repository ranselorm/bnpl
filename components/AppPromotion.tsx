"use client";

import React from "react";
import { motion } from "framer-motion";

const AppPromotion: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.3,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-primary/20 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <motion.div>
          <motion.h2
            className="text-3xl md:text-6xl font-bold text-dark mb-4"
            style={{ lineHeight: 1.2 }}
            variants={textVariants}
          >
            Easy-peasy financing at your fingertips.
          </motion.h2>
          <motion.p
            className="text-dark mb-6 text-lg md:text-2xl"
            variants={textVariants}
          >
            Get the app today.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start space-x-4"
            variants={buttonVariants}
          >
            <a
              href="https://www.apple.com/app-store/"
              className="inline-block"
              aria-label="Download on the App Store"
              target="blank"
            >
              <img
                src="/icons/appstore.png"
                alt="Download on the App Store"
                className="h-12 md:w-6xl"
              />
            </a>
            <a
              href="#"
              className="inline-block"
              aria-label="Get it on Google Play"
            >
              <img
                src="/icons/google.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <motion.div
            className="bg-primary absolute w-64 h-64 md:w-96 md:h-96 rounded-full z-0"
            variants={circleVariants}
          ></motion.div>

          <motion.img
            src="/images/preview.png"
            alt="Phone Preview"
            className="relative w-[180] md:w-[280px] h-auto z-10 object-contain"
            variants={imageVariants}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AppPromotion;
