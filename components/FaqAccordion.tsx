"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import Link from "next/link";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How does Buy-Now - Pay-Later work?",
      answer:
        "Buy Now, Pay Later is a payment method that allows you to make purchases and receive your items immediately, while spreading the cost into manageable installments.",
    },
    {
      question:
        "What stores or online retailers accept the Buy Now, Pay Later app?",
      answer:
        "Our app is widely accepted at various online and physical stores, including major retailers and e-commerce platforms.",
    },
    {
      question: "What is CCF?",
      answer:
        "CCF is a leading provider of hire-purchase services for appliances and building materials, offering financing plans for government workers.",
    },
    {
      question: "When do I receive my item?",
      answer:
        "You will receive your item based on the financing option you select, either immediately after downpayment or upon completion of a financing plan.",
    },
    {
      question: "What forms of payment can I use?",
      answer:
        "CCF accepts mobile money payments (MTN, Vodafone, Airtel Tigo) and Visa cards.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-12 px-4">
        <motion.div
          className="md:w-[40%]"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Answers to Your <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Get answers to commonly asked questions about CCF and its features.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          className="flex-1 md:w-2/3"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                className={`border border-gray-300 rounded-md mb-4 overflow-hidden ${
                  isActive ? "bg-gray-50 shadow" : ""
                }`}
                custom={index}
                variants={itemVariants}
              >
                <div
                  className="flex items-center gap-4 p-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                  role="button"
                  aria-expanded={isActive}
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full text-primary"
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isActive ? <X size={16} /> : <Plus size={16} />}
                  </motion.div>
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                </div>

                {/* Answer */}
                <motion.div
                  className="px-6 pb-4 text-gray-600 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {faq.answer}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
