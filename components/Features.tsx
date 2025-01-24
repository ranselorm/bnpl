"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FeatureCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <motion.div
    className="bg-white overflow-hidden shadow-lg rounded-xl flex flex-col items-center text-center border border-gray-300 hover:scale-105 transform transition-all duration-300"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      },
    }}
  >
    <div
      className="bg-red-300 w-full flex items-center justify-center p-6"
      style={{
        backgroundImage: `url('/images/bg.png')`,
      }}
    >
      <motion.div
        className="w-32 h-32 mb-4 flex justify-center"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={120}
          height={120}
          className="object-contain"
        />
      </motion.div>
    </div>
    <div className="p-4">
      <h3 className="text-2xl font-bold text-primary mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-lg mt-8">{description}</p>
    </div>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      imageSrc: "/images/qr-code.svg",
      title: "Adaptable Payment Choice",
      description:
        "Relish the liberty to select from numerous accommodating asset financing.",
    },
    {
      imageSrc: "/images/fingerprint.svg",
      title: "Trusted & Transparent",
      description:
        "We are open about our fees and charges, and our terms and conditions are straightforward.",
    },
    {
      imageSrc: "/images/store.svg",
      title: "A wide range of stores to shop from",
      description:
        "We offer a wide range of stores to shop from, so you can find everything you need in one place.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        duration: 1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-gray-50 py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/background-pattern.png')`,
          opacity: 0.1,
        }}
      ></div>
      <motion.div
        className="relative container mx-auto px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-12 md:max-w-2xl w-full mx-auto"
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">CCF</span> Difference
          </h2>
          <p className="text-dark text-lg text-center">
            With Cyrus Consumer Finance, you can shop with the freedom you
            deserve and pay with unmatched flexibility.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
