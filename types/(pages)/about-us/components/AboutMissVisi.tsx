import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import { Eye, Goal, Telescope } from "lucide-react";
import React from "react";

const AboutMissVisi = () => {
  return (
    <PageWrapper title="Vision & Mission">
      <GridWrapper
        validated={true}
        className="bg-hero-bg bg-cover relative px-4 md:px-0 py-20 bg-center bg-fixed bg-no-repeat w-full"
      >
        <div className="absolute w-full h-full bg-black bg-opacity-60 top-0"></div>
        <div className="flex-center relative">
          <div className="bg-base-color cursor-pointer hover:-translate-y-3 trans-props hover:bg-opacity-85 px-4 md:px-0 text-white py-20 md:w-2/3 flex-center flex-col">
            <div className="border rounded-full p-4">
              <Goal className="w-20 h-20" />
            </div>
            <p className="text-xl mt-4 font-bold">Our Mission</p>
            <div className="lg:w-[85%] mt-4 text-center">
              To promote and sustain environmental sustainability through
              delivering and facilitating of interactive and innovative
              trainings, research and publication of outstanding informative and
              educative journal on environment and development.
            </div>
          </div>
        </div>
        <div className="flex-center relative">
          <div className="bg-base-color cursor-pointer hover:-translate-y-3 trans-props hover:bg-opacity-85 px-4 md:px-0 text-white py-7 md:w-2/3 flex-center flex-col">
            <div className="border rounded-full p-4">
              <Eye className="w-20 h-20" />
            </div>
            <p className="text-xl mt-4 font-bold">Our Vision</p>
            <div className="lg:w-[85%] mt-4 text-center">
              Our vision is to be a key player and professional team playing
              active role towards creating awareness that will enhance the
              understanding and achievement of the principles,
              objectives,targets and goals set in the UN Sustainable Development
              Goals -SDG, Multilateral Environmental Agreements (MEA’s) as well
              as the various declarations made by the united Nations conferences
              on environment and development starting from Stockholm (1972) to
              Rio in 2012 and other future conferences that may be held on human
              environment and sustainable development. A vision to achieve the
              future we want.
            </div>
          </div>
        </div>
      </GridWrapper>
    </PageWrapper>
  );
};

export default AboutMissVisi;
