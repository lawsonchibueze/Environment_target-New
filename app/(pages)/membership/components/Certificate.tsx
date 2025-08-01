import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { certificateImages } from "../constants";
import CustomImage from "@/components/CustomImage";

const Certificate = () => {
  return (
    <PageWrapper title="Certificate" wrap={true}>
      <div className="flex-center mb-10">
        <CustomImage
          src="/images/img-28.jpg"
          className="md:w-40 rounded-full"
        />
      </div>
      <GridWrapper validated={true} lg="3">
        {certificateImages.map((item, index) => {
          return (
            <div className="" key={index}>
              <CustomImage src={item} />
            </div>
          );
        })}
      </GridWrapper>
    </PageWrapper>
  );
};

export default Certificate;
