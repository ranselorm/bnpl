"use client";

import React, { useRef, useEffect, useState } from "react";

const Steps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  const steps = [
    {
      step: "Step 1",
      title: "Download mobile app.",
      description:
        "Visit the Google Play Store, search for 'Cyrus consumer-paylater,' and install the Cyrus consumer app.",
      bgColor: "bg-blue-500",
    },
    {
      step: "Step 2",
      title: "Create and verify your account.",
      description:
        "Create an account with your basic info and upload a government-issued ID to verify your identity.",
      bgColor: "bg-blue-300",
    },
    {
      step: "Step 3",
      title: "Verify your income.",
      description:
        "Verify your income using our quick income verification, bank statements, pay slip, or employment letter to qualify for credit.",
      bgColor: "bg-green-400",
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (containerRef.current) {
        const { top, bottom } = containerRef.current.getBoundingClientRect();
        setIsSticky(top <= 0 && bottom >= window.innerHeight);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Main Container */}
      <div className="relative flex min-h-screen">
        {/* Left Section */}
        <div
          className={`w-1/3 px-8 ${
            isSticky ? "sticky top-0" : ""
          } flex flex-col justify-center bg-black text-white`}
        >
          <h2 className="text-5xl font-bold mb-4">
            Get Started In Just 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-300">
            Three simple steps to unlock the power of CCF and revolutionize your
            shopping experience.
          </p>
        </div>

        {/* Right Section */}
        <div
          ref={containerRef}
          className="w-2/3 space-y-8 px-8"
          style={{ height: `${steps.length * 100}vh` }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg text-black ${step.bgColor}`}
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 className="text-xl font-bold">
                {step.step}: {step.title}
              </h3>
              <p className="mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
