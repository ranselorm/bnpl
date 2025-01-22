"use client";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="py-12">
      <main className="container mx-auto px-4">
        <div>
          <h1 className="text-xl md:text-[70px] font-bold leading-none">
            A better way to finance your <br className="md:flex hidden" />
            next
            <span className="ml-4 text-primary">
              <Typewriter
                words={[
                  "asset",
                  "mobile phones",
                  "laptop",
                  "sewing machine",
                  "soundbar",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                cursorColor="black"
              />
            </span>
            .
          </h1>
          <p className="my-6 leading-loose text-xl">
            Optimize funding for your upcoming needs
            <br className="md:flex hidden" /> Welcome to a shopping experience
            like never before With Cyrus Consumer Finance App
          </p>
          <div>
            <Link
              href="/get-the-app"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Get App
            </Link>
            <Link
              href="/get-the-app"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
