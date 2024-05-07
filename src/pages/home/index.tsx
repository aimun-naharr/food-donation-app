import React from "react";
import HeroSection from "../../components/layouts/HeroSection";
import AboutUs from "@/components/layouts/AboutUs";
import SuppliesSection from "@/components/layouts/SuppliesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <SuppliesSection />
    </>
  );
}
