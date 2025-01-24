"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });

    // Animate the logo
    timeline.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0 }
    );

    // Animate the navigation links
    if (navLinksRef.current) {
      const navLinks = Array.from(navLinksRef.current.querySelectorAll("li")); // Use querySelectorAll to get <li> elements
      timeline.fromTo(
        navLinks,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.2 }, // Staggered animation for links
        "<" // Start at the same time as the logo animation
      );
    }

    // Animate the button
    timeline.fromTo(
      buttonRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0 },
      "<" // Start at the same time as the other animations
    );
  }, []);

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <img
              ref={logoRef}
              src="/images/logo.webp"
              alt="logo"
              width={120}
              height={40}
              className="opacity-0" // Initially hidden
            />
          </Link>

          {/* Nav Links */}
          <ul
            ref={navLinksRef}
            className="flex space-x-8 text-gray-800 text-lg opacity-0" // Initially hidden
          >
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

          {/* Desktop Download Button */}
          <div ref={buttonRef} className="hidden md:block opacity-0">
            <Link
              href="/get-the-app"
              className="bg-dark w-max flex items-center text-white px-3 py-2 rounded-full hover:bg-primary transition gap-3"
            >
              <Icon icon="ic:baseline-apple" className="text-3xl" />
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button */}
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
