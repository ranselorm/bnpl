"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav className="bg-white sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <img src="/images/logo.webp" alt="logo" width={120} height={40} />
          </Link>

          {/* Menu Toggle (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`fixed top-0 right-0 h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } md:static md:translate-x-0 md:flex md:items-center w-4/5 md:w-auto`}
          >
            {/* Mobile Logo */}
            <div className="flex items-center text-blue-900 px-4 pt-4 md:hidden">
              <img
                src="/images/logo.webp"
                alt="Motito Logo"
                width={100}
                height={100}
              />
            </div>

            <button
              className="absolute top-4 right-4 text-gray-800 md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col md:flex-row md:space-x-8 text-gray-800 text-lg h-full justify-center items-center">
              <li>
                <Link
                  href="/ways-to-pay"
                  className="hover:text-primary transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-primary transition">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/get-the-app"
              className="bg-dark w-max flex items-center text-white px-3 py-2 rounded-full hover:bg-primary transition gap-3"
            >
              <Icon icon="ic:baseline-apple" className="text-3xl" />
              Download App
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
