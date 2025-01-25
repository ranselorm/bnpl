"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image with Text Overlay */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/400"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/50 rounded-xl flex flex-col justify-end p-6 text-white">
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full">
                  <span className="text-lg font-bold">M</span>
                </div>
                <h3 className="text-xl font-semibold">Contact us</h3>
              </div>
              <p className="mt-4">
                Ask about our platform, pricing, implementation, or anything
                else. Our highly trained reps are standing by, ready to help.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">E-mail Address *</Label>
            <Input
              id="email"
              placeholder="Enter your email address"
              type="email"
              required
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              placeholder="+1 778 558 5250"
              type="tel"
              required
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={4}
              className="mt-2 w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-primary focus:outline-none"
            ></textarea>
          </div>

          <Button type="submit" className="w-full md:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
