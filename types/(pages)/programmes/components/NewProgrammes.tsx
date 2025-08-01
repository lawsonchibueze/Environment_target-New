import CustomImage from "@/components/CustomImage";
import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { progDet } from "../constants";

const NewProgrammes = () => {
  return (
    <PageWrapper wrap={true} title="New Programmes">
      <GridWrapper validated={true} md="2" lg="3">
        {progDet
          .filter((item) => item.feature === "new")
          .map((item, index) => {
            return (
              <div
                className="cursor-pointer hover:-translate-y-4 trans-props group"
                key={index}
              >
                {/* <div className="overflow-hidden md:h-64">
                  <CustomImage
                    src={item.img}
                    className="group-hover:scale-110 w-full trans-props"
                  />
                </div> */}
                <div className="bg-gray-100 group-hover:bg-gray-200 trans-props py-6 px-5">
                  <p className="font-bold">{item.title}</p>
                  <div className="flex-between text-sm mt-4 text-base-color">
                    <p className="font-semibold">₦250, 000</p>
                    <p className="font-semibold">$450</p>
                  </div>
                </div>
              </div>
            );
          })}
      </GridWrapper>
    </PageWrapper>
  );
};

export default NewProgrammes;
