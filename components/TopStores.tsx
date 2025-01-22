"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const TopStores: React.FC = () => {
  const stores = [
    {
      name: "XIAOMI GHANA",
      imageSrc: "/images/jane.jpg", // Replace with the actual image path
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Top stores we <span className="text-primary">work with.</span>
          </h2>
          <p className="text-gray-600 mt-4">
            We have partnered with the best brands and stores to help you buy
            what you need with ease.
          </p>
        </div>

        {/* Carousel */}
        <Carousel>
          <CarouselContent className="flex space-x-4">
            {stores.map((store, index) => (
              <CarouselItem
                key={index}
                className="basis-2/3 md:basis-1/2 flex-shrink-0"
              >
                <Card className="h-[300px] overflow-hidden relative group">
                  {/* Image with overlay */}
                  <div className="relative w-full h-full overflow-hidden">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between items-center mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TopStores;
