"use client";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ClippedImages from "./ClippedImages";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import BrandSlider from "./BrandsSlider";

const Hero = () => {
  return (
    <section className="py-12 bg-light">
      <main className="container mx-auto px-4">
        <div className="flex  md:items-start items-center  flex-col md:flex-row">
          <div className="flex-1 md:w-3/6">
            <div className="bg-pink w-max pl-1 py-1 pr-2 rounded-full flex items-center text-primary group">
              <span className="bg-white px-4 py-2 rounded-full text-sm mr-3">
                New
              </span>
              Better now availabe
              <Icon
                icon="lsicon:arrow-right-outline"
                className="ml-2 translate-x-0 group-hover:translate-x-2 transition duration-300"
              />
            </div>
            <h1 className="text-3xl md:text-[55px] font-semibold md:leading-normal max-w-3xl w-full text-primary">
              Empower Your <span className="text-black">Finances</span> For A
              Brighter Future.
            </h1>
            <p className="my-6 md:leading-loose md:text-xl">
              Optimize funding for your upcoming needs
              <br className="md:flex hidden" /> Welcome to a shopping experience
              like never before With Cyrus Consumer Finance App
            </p>
            <Link
              href="https://www.apple.com/app-store/"
              className="bg-dark w-max flex items-center text-white px-3 py-2 rounded-full hover:bg-primary transition gap-3"
            >
              <Icon icon="ic:baseline-apple" className="text-3xl" />
              Download App
            </Link>
          </div>
          <div className="relative flex md:w-2/6 justify-center items-center">
            <div className="bg-primary absolute w-64 h-64 md:w-96 md:h-96 rounded-full z-0"></div>
            <img
              src="/images/preview.png"
              alt="Phone Preview"
              className="relative w-[180] md:w-[300px] h-auto z-10 object-contain"
            />
          </div>
        </div>
        {/* <BrandSlider /> */}
        <ClippedImages />
      </main>
    </section>
  );
};

export default Hero;
