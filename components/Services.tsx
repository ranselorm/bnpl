"use client";

import Image from "next/image";

type ServiceCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  buttonLabel: string;
};

const ServiceCard = ({
  imageSrc,
  title,
  description,
  buttonLabel,
}: ServiceCardProps) => (
  <div className="flex flex-col items-center text-center w-[350px] h-full justify-between">
    <div className="w-40 h-40 mb-4">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 flex-1 my-4">{description}</p>
    <button className="px-6 py-2 border border-primary rounded-full hover:bg-gray-200 transition">
      {buttonLabel}
    </button>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/icons/icon1.png",
      title: "CCF Buy Now, Pay later: Credit",
      description:
        "Select an item, make a down payment, get your item and enjoy the flexibility of paying over time.",
      buttonLabel: "Learn more",
    },
    {
      imageSrc: "/icons/icon2.png",
      title: "Pay4Me: Peer-to-peer financing",
      description:
        "Let your family and friends support you with Pay4Me. Join a caring community to help you achieve your goals with ease and convenience.",
      buttonLabel: "Learn more",
    },
    {
      imageSrc: "/icons/icon3.png",
      title: "KeepMyPrice: 30-days layaway",
      description:
        "Secure your item price with a deposit for 30 days. Protect yourself from inflation while managing your finances effectively.",
      buttonLabel: "Learn more",
    },
  ];

  return (
    <section className="bg-white py-16 text-center">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto md:max-w-3xl w-full text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 w-full">
            Discover What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Elevate your e-commerce experience with our powerful feature set
            designed for unparalleled excellence. Show you fresh ways to get
            what you want, exactly when you want it.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              buttonLabel={service.buttonLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
