import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { certificateImages } from "../constants";
import CustomImage from "@/components/CustomImage";
import { ArrowRight } from "lucide-react";

const Certificate = () => {
  return (
    <PageWrapper title="Certificate" wrap={true}>
      <div className="mb-10 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
        <CustomImage
          src="/images/img-28.jpg"
          alt="Previous membership logo"
          className="w-64 rounded-full object-contain md:w-40"
        />
        <ArrowRight
          aria-label="Points to the new membership logo"
          className="h-10 w-10 rotate-90 text-base-color md:rotate-0"
        />
        <CustomImage
          src="/images/iftdo-member.jpeg"
          alt="IF TDO member logo"
          className="w-52 object-contain"
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
