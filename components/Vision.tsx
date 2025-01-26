"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerVariants}
      >
        <motion.div className="relative h-[600px] " variants={itemVariants}>
          <img
            src="/images/vision.jpg"
            alt="Vision"
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute bottom-0 w-full mx-auto rounded-b-xl p-4 text-white">
            <div className="bg-white text-black rounded-xl p-4 h-[250px]">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-medium">Vision</h3>
              </div>
              <p className="mb-4 text-lg leading-relaxed">
                Our vision is to build a world-class financial services
                organization
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className="relative h-[600px] " variants={itemVariants}>
          <img
            src="/images/mission.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute bottom-0 w-full mx-auto rounded-b-xl p-4 text-white">
            <div className="bg-white text-black rounded-xl p-4 h-[250px]">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-medium">Mission</h3>
              </div>
              <p className="mb-4 text-lg leading-relaxed">
                CCF mission is to be the leading continental trade and finance
                company, driving economic growth and creating opportunities for
                businesses and people around the world. As we grow, our clients,
                communities and stakeholders will prosper with us
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Vision;
