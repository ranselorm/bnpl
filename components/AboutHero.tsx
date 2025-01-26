"use client";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative bg-gray-100 bg-center bg-no-repeat bg-cover h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundImage: `url('/images/abouthero.jpg')`,
      }}
    >
      <div className="container mx-auto h-full flex items-center">
        {/* Text Section */}
        <motion.div
          className="bg-white shadow-lg rounded-xl p-6 w-full md:w-6/12 md:h-80 h-auto flex flex-col justify-between"
          variants={containerVariants}
        >
          <p className="text-sm text-primary uppercase tracking-wider font-medium mb-4">
            About Us
          </p>
          <h1 className="text-xl md:text-3xl font-bold mb-4">
            Empowering Dreams with Flexible Financing
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We provide hire purchase plans for appliances, office equipment, and
            building materials to help you achieve your goals.
          </p>
          <ScrollLink
            activeClass="text-primary"
            to="#"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="cursor-pointer bg-dark hover:bg-primary transition duration-150 py-3 px-4 rounded-full text-white w-max"
          >
            Learn more
          </ScrollLink>
        </motion.div>
        {/* Image Section */}
      </div>
    </motion.section>
  );
};

export default AboutHero;
