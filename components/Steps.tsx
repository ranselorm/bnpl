"use client";

import Image from "next/image";

const StepsSection = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Download mobile app.",
      description:
        "Visit the Google Play Store, search for “Cyrus consumer-paylater,” and install the Cyrus consumer App.",
    },
    {
      step: "Step 2",
      title: "Create and verify your account",
      description:
        "Create an account with your basic info and upload a government-issued ID to verify your identity to get started.",
    },
    {
      step: "Step 3",
      title: "Verify your income.",
      description:
        "Verify your income using our quick income verification, bank statements, pay slip or employment letter to qualify for credit.",
    },
  ];

  return (
    <section
      className="bg-cover bg-center py-16 bg-no-repeat text-white bg-primary/20 rounded-t-[50px]"
      style={{
        backgroundImage: "url('/images/pattern-bg.png')",
        backgroundPosition: "50%",
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl text-black md:text-5xl font-bold mb-4">
            Get Started
          </h2>
          <p className="text-dark text-lg">
            Three simple steps to unlock the power of CCF and revolutionize your
            shopping experience.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 p-4 flex items-center justify-center text-lg font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm text-dark font-medium">{step.step}</p>
                  <h3 className="text-2xl font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="text-dark">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}

          <div className="">
            <div className="bg-white rounded-xl p-6 shadow-lg h-[600px]">
              <img
                src="https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb"
                alt=""
                width={300}
                height={300}
                className="w-full object-cover rounded-lg h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
