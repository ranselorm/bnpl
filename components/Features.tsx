"use client";

import Image from "next/image";

const FeatureCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white overflow-hidden shadow-lg rounded-xl flex flex-col items-center text-center border border-gray-300">
    <div
      className="bg-red-300 w-full flex items-center justify-center p-6"
      style={{
        backgroundImage: `url('/images/bg.png')`,
        // opacity: 0.1,
      }}
    >
      <div className="w-32 h-32 mb-4 flex justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={120}
          height={120}
          className="object-contain animate-pulse"
        />
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-2xl font-bold text-primary mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-lg mt-8">{description}</p>
    </div>
  </div>
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

  return (
    <section className="relative bg-gray-50 py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/background-pattern.png')`,
          opacity: 0.1,
        }}
      ></div>
      <div className="relative container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12 md:max-w-2xl w-full mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">CCF</span> Difference
          </h2>
          <p className="text-gray-600 text-xl text-center">
            With Cyrus Consumer Finance, you can shop with the freedom you
            deserve and pay with unmatched flexibility.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
