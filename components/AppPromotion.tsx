"use client";

import React from "react";

const AppPromotion: React.FC = () => {
  return (
    <section className="bg-primary/20 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Content */}
        <div>
          <h2
            className="text-3xl md:text-6xl font-bold text-dark mb-4"
            style={{ lineHeight: 1.2 }}
          >
            Easy-peasy financing at your fingertips.
          </h2>
          <p className="text-dark mb-6 text-lg md:text-2xl">
            Get the app today.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="inline-block"
              aria-label="Download on the App Store"
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
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="bg-primary absolute w-64 h-64 md:w-96 md:h-96 rounded-full z-0"></div>
          <img
            src="/images/preview.png"
            alt="Phone Preview"
            className="relative w-[180] md:w-[280px] h-auto z-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
