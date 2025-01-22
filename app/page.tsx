import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import StepsSection from "@/components/Steps";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      {/* <WhyChooseUs /> */}
      <StepsSection />
    </div>
  );
}
