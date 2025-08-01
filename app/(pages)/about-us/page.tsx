import React from "react";
import AboutUsHero from "./components/AboutUsHero";
import AboutSection from "./components/AboutSection";
import AboutHistory from "./components/AboutHistory";
import HeroAboutCompany from "../components/HeroAboutCompany";
import AbutCore from "./components/AbutCore";
import AboutMissVisi from "./components/AboutMissVisi";

const page = () => {
  return (
    <div>
      <AboutUsHero />
      <AboutSection />
      <HeroAboutCompany />
      <AboutHistory />
      <AboutMissVisi />
      <AbutCore />
      {/* <HeroContact /> */}
    </div>
  );
};

export default page;
