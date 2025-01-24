"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      className="bg-white sticky top-0 z-50 py-4"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/">
          <img src="/images/logo.webp" alt="logo" width={120} height={40} />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark focus:outline-none"
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

        <ul className="hidden md:flex space-x-8 text-dark text-base font-medium">
          <li>
            <ScrollLink
              activeClass="text-primary"
              to="discover"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer"
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="text-primary"
              to="steps"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer"
            >
              How It Works
            </ScrollLink>
          </li>
          <li>
            <Link href="#" className="hover:text-primary transition">
              Testimonials
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <a
            href="https://www.apple.com/app-store/"
            className="bg-dark w-max flex items-center text-white px-3 py-2 rounded-full hover:bg-primary transition gap-3 mb-10 md:mb-0"
            target="blank"
          >
            <Icon icon="ic:baseline-apple" className="text-3xl" />
            Download App
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col justify-between px-6 py-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between w-full mb-8">
              <Link href="/">
                <img
                  src="/images/logo.webp"
                  alt="logo"
                  width={120}
                  height={40}
                />
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="text-dark focus:outline-none"
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
            </div>

            <ul className="flex flex-col items-start space-y-6 text-lg font-medium w-full">
              <li>
                <Link
                  href="#features"
                  className="hover:text-primary transition"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-primary transition"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-primary transition"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </Link>
              </li>
            </ul>

            <a
              href="https://www.apple.com/app-store/"
              className="bg-dark w-full flex items-center justify-center text-white px-3 py-2 rounded-full hover:bg-primary transition gap-3"
              target="blank"
            >
              <Icon icon="ic:baseline-apple" className="text-3xl" />
              Download App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
