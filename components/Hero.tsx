"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import ClippedImages from "./ClippedImages";

const Hero = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-12 bg-light"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <main className="container mx-auto px-4">
        <div className="flex md:items-start items-center flex-col md:flex-row">
          <div className="flex-1 md:w-3/6">
            <motion.div
              className="bg-pink w-max pl-1 md:py-1 py-[1px] pr-2 rounded-full flex items-center text-primary group md:text-sm text-xs mb-4 md:mb-0"
              variants={sectionVariants}
            >
              <span className="bg-white px-4 py-2 md:py-2 rounded-full mr-3">
                New
              </span>
              Better now availabe
              <Icon
                icon="lsicon:arrow-right-outline"
                className="ml-2 translate-x-0 group-hover:translate-x-2 transition duration-300"
              />
            </motion.div>
            <motion.h1
              className="text-2xl md:text-[55px] font-semibold md:leading-normal md:max-w-3xl w-full text-primary"
              variants={sectionVariants}
            >
              Empower Your <span className="text-black">Finances</span> For A
              Brighter Future.
            </motion.h1>
            <motion.p
              className="my-6 md:leading-loose text-base md:text-xl"
              variants={sectionVariants}
            >
              Optimize funding for your upcoming needs
              <br className="md:flex hidden" /> Welcome to a shopping experience
              like never before With Cyrus Consumer Finance App
            </motion.p>
            <motion.div variants={sectionVariants}>
              <a
                href="https://www.apple.com/app-store/"
                className="bg-dark w-max flex items-center text-white px-3 py-2 rounded-full hover:bg-primary transition gap-3 mb-10 md:mb-0"
                target="blank"
              >
                <Icon icon="ic:baseline-apple" className="text-3xl" />
                Download App
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative flex md:w-2/6 justify-center items-center"
            variants={sectionVariants}
          >
            <div className="bg-primary absolute w-64 h-64 md:w-96 md:h-96 rounded-full z-0"></div>
            <img
              src="/images/preview.png"
              alt="Phone Preview"
              className="relative w-[100] md:w-[300px] h-auto z-10 object-contain"
            />
          </motion.div>
        </div>
        <ClippedImages />
      </main>
    </motion.section>
  );
};

export default Hero;
