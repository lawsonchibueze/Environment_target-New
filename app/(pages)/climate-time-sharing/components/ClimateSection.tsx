import CustomImage from "@/components/CustomImage";
import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const ClimateSection = () => {
  return (
    <PageWrapper title="Forest and Foods">
      <div className="bg w-full max-h-[1000px] py-40 bg-abt-bg bg-no-repeat bg-cover bg-center bg-fixed relative">
        <div className="bg-white bg-opacity-90 absolute h-full w-full top-0"></div>
        <GridWrapper validated={true} className="relative page-wrapper">
          <div className="flex flex-col lg:flex-row lg:h-[800px] lg:space-x-10">
            <CustomImage
              src="/images/forest.png"
              alt="forest"
              className=" rounded-lg  object-contain shadow-sm"
            />
          </div>
          <div className="">
            <div className="">
              <p className="mt-5 mb-4 font-bold lg:text-lg">Forest and Foods</p>

              <p>
                {`The United Nations General Assembly proclaimed 21 March the International Day of Forests (IDF) in 2012.`}
              </p>
              {/* <p className="mt-5 font-bold lg:text-lg">Details:</p> */}
              <p className="mt-4">
                {` It's a day set as side to celebrate and raise awareness of the
                importance of all kinds of forests .`}
              </p>
              <p className="mt-4">
                {`
 Join Environment and Millennium Targets ltd( ETM) to celebrate this year's International Day of Forest, with a theme; FOREST & FOOD, Focus on importance of forests in ensuring food security, nutrition, and livelihoods, both for people and the planet.`}
              </p>
            </div>
            <div className=" overflow-hidden mt-10 rounded-lg">
              <CustomImage
                src="/images/img-10.jpeg"
                className="lsx rounded-lg object-contain shadow-sm"
                alt="banner"
              />
            </div>
          </div>
        </GridWrapper>
      </div>
    </PageWrapper>
  );
};

export default ClimateSection;
