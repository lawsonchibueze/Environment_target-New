import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { certificateImages } from "../constants";
import CustomImage from "@/components/CustomImage";
import { ArrowRight } from "lucide-react";

const Certificate = () => {
  return (
    <PageWrapper title="Certificate" wrap={true}>
      <div className="mb-10 flex-center">
        <CustomImage
          src="/images/img-28.jpg"
          alt="Climate Reality Leadership Corps logo"
          className="w-40 object-contain"
        />
      </div>
      <div className="mb-10 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
        <div className="flex flex-col items-center gap-3">
          <CustomImage
            src="/images/iftdo-member-old.png"
            alt="Old IFTDO member logo"
            className="w-52 object-contain"
          />
          <p className="font-semibold text-base-color">Old logo</p>
        </div>
        <ArrowRight
          aria-label="Points to the new membership logo"
          className="h-10 w-10 rotate-90 text-base-color md:rotate-0"
        />
        <div className="flex flex-col items-center gap-3">
          <CustomImage
            src="/images/iftdo-member.jpeg"
            alt="New IFTDO member logo"
            className="w-52 object-contain"
          />
          <p className="font-semibold text-base-color">New logo</p>
        </div>
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
