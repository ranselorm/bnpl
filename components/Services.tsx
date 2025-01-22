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
  <div className="flex flex-col items-center text-center">
    <div className="w-40 h-40 mb-4">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="px-6 py-2 border-2 border-black rounded hover:bg-gray-200 transition">
      {buttonLabel}
    </button>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/icons/icon1.png",
      title: "Buy Now, Pay Later: Credit",
      description:
        "Select an item, make a down payment, get your item and enjoy the flexibility of paying over time.",
      buttonLabel: "Learn more",
    },
    {
      imageSrc: "/icons/icon2.png",
      title: "Pay4Me: Peer-to-peer financing",
      description:
        "Get the support of a caring community with Pay4Me. Let your family and friends help you pay for the things you need.",
      buttonLabel: "Learn more",
    },
    {
      imageSrc: "/icons/icon3.png",
      title: "KeepMyPrice: 30-days layaway",
      description:
        "Protect yourself from inflation. Lock in the price of an item with a deposit for 30 days and self-finance your purchase.",
      buttonLabel: "Learn more",
    },
  ];

  return (
    <section className="bg-white py-16 text-center">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Level up your buying power and unlock your dream
        </h2>
        <p className="text-gray-600 mb-12">
          Ready to unlock your dreams? Motito has your back! We're here to show
          you fresh ways to get what you want, exactly when you want it.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
