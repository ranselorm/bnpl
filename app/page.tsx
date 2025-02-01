import AppPromotion from "@/components/AppPromotion";
import BrandSlider from "@/components/BrandsSlider";
import FAQAccordion from "@/components/FaqAccordion";
import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import StepsSection from "@/components/Steps";
import TopStores from "@/components/TopStores";
import FeaturesSection from "@/components/Features";
import Brands from "@/components/Brands";
import ClippedImages from "@/components/ClippedImages";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClippedImages />
      <BrandSlider />
      <Discover />
      <StepsSection />
      <FeaturesSection />
      <TopStores />
      <Brands />
      <AppPromotion />
      <FAQAccordion />
    </div>
  );
}
