"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  const sharedVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <nav className="bg-white sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/">
          <motion.img
            src="/images/logo.webp"
            alt="logo"
            width={120}
            height={40}
            variants={sharedVariants}
            initial="hidden"
            animate="visible"
          />
        </Link>

        <motion.ul
          className="flex space-x-8 text-dark text-base font-medium"
          variants={sharedVariants}
          initial="hidden"
          animate="visible"
        >
          <li>
            <Link href="/ways-to-pay" className="hover:text-primary transition">
              Features
            </Link>
          </li>
          <li>
            <Link href="/company" className="hover:text-primary transition">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="/company" className="hover:text-primary transition">
              Testimonials
            </Link>
          </li>
        </motion.ul>

        <motion.div
          className="hidden md:block"
          variants={sharedVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="https://www.apple.com/app-store/"
            className="bg-dark w-max flex items-center text-white px-3 py-2 rounded-full hover:bg-primary transition gap-3"
          >
            <Icon icon="ic:baseline-apple" className="text-3xl" />
            Download App
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
