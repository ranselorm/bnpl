"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactForm = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image with Text Overlay */}
        <div className="relative">
          <img
            src="/images/happy.png"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Dark Overlay just for the text */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 rounded-b-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full">
                <span className="text-lg font-bold">M</span>
              </div>
              <h3 className="text-xl font-semibold">Contact us</h3>
            </div>
            <p className="mb-4">
              Ask about our financing plans or payment options. We're here to
              help.
            </p>
            <div className="text-sm space-y-1">
              <p>2nd Floor, Vertical Square</p>
              <p>Community 6, Tema</p>
              <p>Adjacent Hotel Joecarl</p>
              <p>Tel: +233 20 933 4842</p>
              <p>Email: cyrusheadoffice@gmail.com</p>
              <p>Email: info@cyrusfinance.com</p>
              <p>Website: www.cyrusfinance.com</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Stephen" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doh" className="mt-2" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">E-mail Address *</Label>
            <Input
              id="email"
              placeholder="stephdoh@example.com"
              type="email"
              required
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              placeholder="+233 244 558 5250"
              type="tel"
              required
              className="mt-2 focus:ring-primary focus:outline-none"
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

          <Button type="submit" className="w-full md:w-auto rounded-full">
            Send
            <Icon icon="formkit:arrowright" className="text-3xl" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
