"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 px-4">
        {/* Left Section */}
        <div className="md:w-[40%]">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Answers to Your <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Get answers to commonly asked questions about CCF and its features.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800">
            Contact Us
          </button>
        </div>

        {/* Right Section - Accordion */}
        <div className="flex-1 md:w-2/3">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`border border-gray-300 rounded-md mb-4 overflow-hidden transition-all duration-300 ${
                  isActive ? "bg-gray-50" : ""
                }`}
              >
                <div
                  className="flex items-center gap-4 p-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full text-primary">
                    {isActive ? <X size={16} /> : <Plus size={16} />}
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{
                    maxHeight: isActive ? "1000px" : "0",
                  }}
                >
                  <div className="px-14 pb-3 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
