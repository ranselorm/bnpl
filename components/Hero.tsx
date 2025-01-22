"use client";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ClippedImages from "./ClippedImages";

const Hero = () => {
  return (
    <section className="py-12">
      <main className="container mx-auto px-4">
        <div>
          <h1 className="text-3xl md:text-[60px] font-bold md:leading-none">
            A better way to finance your <br className="md:flex hidden" />
            next
            <span className="ml-4 text-primary">
              <Typewriter
                words={[
                  "asset",
                  "mobile phone",
                  "laptop",
                  "sewing machine",
                  "soundbar",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                cursorColor="black"
              />
            </span>
            .
          </h1>
          <p className="my-6 md:leading-loose md:text-xl">
            Optimize funding for your upcoming needs
            <br className="md:flex hidden" /> Welcome to a shopping experience
            like never before With Cyrus Consumer Finance App
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/get-the-app"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Get App
            </Link>
            <Link
              href="/get-the-app"
              className="bg-transparent border-primary border text-dark px-6 py-3 rounded-full hover:bg-dark hover:text-white hover:border-dark transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <ClippedImages />
      </main>
    </section>
  );
};

export default Hero;
