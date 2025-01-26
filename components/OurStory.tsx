"use client";
import { motion } from "framer-motion";

const OurStory = () => {
  const sharedVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="bg-cover bg-center py-16 bg-no-repeat text-white rounded-t-[50px] bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg h-[550px]"
            variants={sharedVariants}
          >
            <img
              src="/images/build.jpg"
              alt="Get Started"
              width={500}
              height={500}
              className="w-full object-cover rounded-lg h-full"
            />
          </motion.div>
          <motion.div
            className="space-y-8"
            variants={sharedVariants}
            id="our-story"
          >
            <div className="flex items-start space-x-4">
              <div className="text-dark text-center md:text-left">
                <h2 className="text-xl md:text-3xl mb-5">WHO ARE WE?</h2>
                <p className="text-base text-gray-700 font-medium leading-loose">
                  CCF is a leading provider of home appliance, office equipment
                  and building materials on hire purchase terms, offering an
                  extensive line of financing plans to government workers on the
                  Control Accountants General Department & Police Service
                  payroll in Ghana.
                </p>
                <p className="text-base text-gray-700 font-medium leading-loose my-4">
                  CCF through hire purchase business has helped thousands of
                  Government workers to realize their dreams. From flexible
                  finance plans, that add peace of mind, our programs are
                  designed to meet the unique needs of consumers. We are
                  committed to offering quality products that provide
                  convenience and value, and to delivering consistent support
                  that helps ensure customer satisfaction
                </p>
                <p className="text-base text-gray-700 font-medium leading-loose my-4">
                  CF was incorporated under the companies’ code of 1963 Act 179
                  to engage in credit to purchase household appliances and
                  electronic equipment.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
