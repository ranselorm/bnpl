"use client";

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

  return (
    <section className="py-16 rounded-t-3xl">
      <div className="container mx-auto text-center space-y-8 px-6">
        {/* Title */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            It's all about you
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            From shopping for the latest gadgets to booking your dream vacation,
            we’re here to help you manage your payments easily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg flex flex-col gap-5 items-center text-center border border-primary"
            >
              <div className="text-primary">
                <Icon icon={feature.icon} className="text-6xl" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
