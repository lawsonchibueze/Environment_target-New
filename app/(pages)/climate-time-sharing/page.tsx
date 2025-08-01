import React from "react";
import ClimateHero from "./components/ClimateHero";
import ClimateGallery from "./components/ClimateGallery";
import ClimateSection from "./components/ClimateSection";

const page = () => {
  return (
    <div>
      <ClimateHero />
      <ClimateSection />
      {/* <ClimateImage /> */}
      <ClimateGallery />
    </div>
  );
};

export default page;
