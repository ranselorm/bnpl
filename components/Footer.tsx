"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary/20 py-8 rounded-t-[40px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start border-b border-gray-400 pt-4 pb-16">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/logo.webp"
            alt="Cyrus Consumer Finance Logo"
            className="h-16 mb-4"
          />
        </div>

        <div className="text-center md:text-left md:max-w-lg">
          <p className="text-2xl text-gray-800 font-medium mb-7">
            Empowering your financial journey, one transaction at a time.
          </p>
          <div className="flex space-x-4 md:justify-start justify-center">
            <a
              href="#"
              className="inline-block"
              aria-label="Download on the App Store"
            >
              <img
                src="/icons/appstore.png"
                alt="Download on the App Store"
                className="h-12 w-6xl"
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
      </div>

      <div className="mt-6 pt-4">
        <div className="container mx-auto px-6 md:px-12 flex justify-between text-sm text-gray-500">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} Cyrus Consumer Finance. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
