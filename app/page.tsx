import AppPromotion from "@/components/AppPromotion";
import FAQAccordion from "@/components/FaqAccordion";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import StepsSection from "@/components/Steps";
import TopStores from "@/components/TopStores";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      {/* <WhyChooseUs /> */}
      <StepsSection />
      <TopStores />
      <AppPromotion />
      <FAQAccordion />
    </div>
  );
}
