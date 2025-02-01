"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const Discover: React.FC = () => {
  const items = [
    {
      title: "CCF Buy Now, Pay Later: Credit",
      description:
        "Select an item, make a down payment, get your item, and enjoy the flexibility of paying over time. Pay for your purchase over time with flexible payment plans that fit your budget. Choose from a variety of payment options.",
      imageSrc: "/images/discovery1.svg",
    },
    {
      title: "Pay4Me: Peer-to-peer financing",
      description:
        "Get the support of a caring community with Pay4Me. Let your family and friends help you pay for the things you need.Involve your community in your financial aspirations. Let our peer-to-peer platform empower your friends and family to support your goals.",
      imageSrc: "/images/discovery2.svg",
    },
    {
      title: "KeepMyPrice: 30-days Layaway",
      description:
        "Protect yourself from inflation. Lock in price of item with a deposit for 30 days and self-finance your purchase. With CCF's Keep My Price, inflation fears are a thing of the past. Start saving towards your dream asset by locking price of item for 30 days.",
      imageSrc: "/images/discovery3.svg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16" id="discover">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Discover What We <span className="text-black">Offer</span>
          </h2>
          <p className="text-dark text-lg mt-4 md:max-w-xl mx-auto w-full">
            Elevate your e-commerce experience with our powerful feature set
            designed for unparalleled excellence.
          </p>
        </div>

        <Carousel>
          <CarouselContent className="space-x-6">
            {items.map((item, index) => (
              <CarouselItem key={index} className="w-full flex-shrink-0">
                <motion.div
                  className="h-auto overflow-hidden rounded-3xl p-6 bg-primary/30 group"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <Card className="bg-transparent border-none shadow-none">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <div className="flex-1 text-left">
                        <h3 className="text-2xl md:text-3xl font-bold">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 my-4 text-lg">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          width={450}
                          height={450}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-between items-center mt-4 relative">
            <CarouselPrevious className="absolute left-0 transform -translate-y-1/2 top-1/2 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300" />
            <CarouselNext className="absolute right-0 transform -translate-y-1/2 top-1/2 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Discover;
