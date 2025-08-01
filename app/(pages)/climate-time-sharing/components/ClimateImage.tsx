import CustomImage from "@/components/CustomImage";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const ClimateImage = () => {
  return (
    <PageWrapper title="">
      <div className="lg:px-40 py-20 lg:py-32 relative">
        <CustomImage
          src="/images/img-49.png"
          className=" rounded-lg h-[800px] object-contain shadow-sm"
        />
      </div>
    </PageWrapper>
  );
};

export default ClimateImage;
