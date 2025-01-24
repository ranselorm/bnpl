"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const stores = [
  {
    name: "XIAOMI GHANA",
    imageSrc: "/images/xiaomi.jpg",
  },
  {
    name: "HUB COMPUTERS",
    imageSrc: "/images/hub.webp",
  },
  {
    name: "TRIMLYNE",
    imageSrc:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    name: "ASHFOAM",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1684445035187-c4bc7c96bc5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fHww",
  },
  {
    name: "ELECTROMART",
    imageSrc: "/images/gadget.jpg",
  },
];

const TopStores: React.FC = () => {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title and Description */}
        <motion.div className="text-center mb-12" variants={sectionVariants}>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Top stores we <span className="text-black">work with.</span>
          </h2>
          <p className="text-gray-600 mt-4">
            We have partnered with the best brands and stores to help you buy
            what you need with ease.
          </p>
        </motion.div>

        {/* Carousel */}
        <Carousel>
          <CarouselContent className="flex space-x-4">
            {stores.map((store, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 flex-shrink-0"
              >
                <motion.div
                  className="h-[300px] overflow-hidden relative group"
                  variants={cardVariants} // Animate each card
                >
                  <Card>
                    <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
                      <img
                        src={store.imageSrc}
                        alt={store.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 transition-opacity duration-300">
                        <p className="text-white text-lg font-bold">
                          {store.name}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Carousel Controls */}
          <div className="flex justify-between items-center mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </motion.section>
  );
};

export default TopStores;
