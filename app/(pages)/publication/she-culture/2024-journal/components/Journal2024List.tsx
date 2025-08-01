import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { journals } from "../../constants";

const Journal2024List = () => {
  return (
    <PageWrapper wrap={true} title="2024 Journal">
      <GridWrapper lg="3" validated={true}>
        {journals.map((items, index) => {
          return (
            <div className="" key={index}>
              <div className="relative overflow-hidden flex justify-center md:justify-start">
                {/* <div className="w-full h-full relative z-10 top-0 left-0 bg-red-300"></div> */}
                {/* <div className="h-14 w-full bg-white absolute z-10 top-0"></div> */}
                {/* <div className="relative h-96 w-40"></div> */}
                <iframe
                  src={items}
                  scrolling="no"
                  className="cursor-none h-96  scrollable-container"
                ></iframe>
              </div>
            </div>
          );
        })}
      </GridWrapper>
    </PageWrapper>
  );
};

export default Journal2024List;
