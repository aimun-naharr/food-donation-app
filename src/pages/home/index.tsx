import HeroSection from "../../components/layouts/HeroSection";
import AboutUs from "@/components/layouts/AboutUs";
import SuppliesSection from "@/components/layouts/SuppliesSection";
import TestimonialsSection from "@/components/layouts/TestimonialsSection";

export default function Home() {
  return (
    <>
      {/* <NumberTicker value={20} /> */}
      <HeroSection />
      <AboutUs />
      <SuppliesSection />
      <TestimonialsSection />
    </>
  );
}
