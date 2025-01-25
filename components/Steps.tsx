"use client";

import { motion } from "framer-motion";

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

  const sharedVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      className="bg-cover bg-center py-16 bg-no-repeat text-white rounded-t-[50px]"
      id="steps"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Get <span className="text-black">Started</span>
          </h2>
          <p className="text-dark text-base md:text-lg">
            Three simple steps to unlock the power of CCF and revolutionize your
            shopping experience.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="space-y-24" variants={sharedVariants}>
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
          </motion.div>

          <motion.div
            className="bg-primary rounded-xl p-6 shadow-lg h-[600px]"
            variants={sharedVariants}
          >
            <img
              src="/images/happy.png"
              alt="Get Started"
              width={300}
              height={300}
              className="w-full object-cover rounded-lg h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
