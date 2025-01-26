"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "mdi:circle-transparent",
      title: "Transparent",
      description:
        "We tell you up front the total amount you’ll pay. That number will never go up.",
    },
    {
      icon: "ph:swap-fill",
      title: "Flexible",
      description: "You choose the payment schedule that works for you.",
    },
    {
      icon: "mdi:scale-balance",
      title: "Fair",
      description: "You’ll never pay late fees, penalties, or hidden interest.",
    },
    {
      icon: "mdi:hand-coin-outline",
      title: "Empowering",
      description: "We empower you with tools and financial freedom.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="py-16 rounded-t-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="container mx-auto text-center space-y-8 px-6"
        variants={containerVariants}
      >
        {/* Title Section */}
        <motion.div
          variants={cardVariants}
          className="text-center space-y-4 md:max-w-3xl w-full mx-auto"
        >
          <h2 className="text-4xl uppercase text-primary">
            It's all about <span className="text-dark">you</span>
          </h2>
          <p className="text-lg text-gray-600">
            From purchasing essential appliances to financing your dream
            projects, we’re here to provide flexible payment solutions that work
            for you.
          </p>
        </motion.div>

        {/* Features Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg flex flex-col gap-5 items-center text-center border border-primary"
              variants={cardVariants}
            >
              <div className="text-primary">
                <Icon icon={feature.icon} className="text-6xl" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;
