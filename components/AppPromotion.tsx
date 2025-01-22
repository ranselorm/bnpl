"use client";

import React from "react";

const AppPromotion: React.FC = () => {
  return (
    <section className="bg-purple-200 py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Easy-peasy financing at your fingertips.
          </h2>
          <p className="text-lg text-gray-700 mb-6">Get the app today.</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="inline-block"
              aria-label="Download on the App Store"
            >
              <img
                src="/images/app-store.png"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
            <a
              href="#"
              className="inline-block"
              aria-label="Get it on Google Play"
            >
              <img
                src="/images/google-play.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Circular Background */}
          <div className="bg-primary absolute w-96 h-96 rounded-full z-0"></div>
          {/* Phone Image */}
          <img
            src="/images/preview.png"
            alt="Phone Preview"
            className="relative w-[280px] h-auto z-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
