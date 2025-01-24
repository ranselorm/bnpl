import AppPromotion from "@/components/AppPromotion";
import BrandSlider from "@/components/BrandsSlider";
import FAQAccordion from "@/components/FaqAccordion";
import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import StepsSection from "@/components/Steps";
import TopStores from "@/components/TopStores";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandSlider />
      <Discover />
      {/* <WhyChooseUs /> */}
      {/* <StepsSection /> */}
      <StepsSection />
      <TopStores />
      <AppPromotion />
      <FAQAccordion />
      {/* <BrandSlider /> */}
    </div>
  );
}
