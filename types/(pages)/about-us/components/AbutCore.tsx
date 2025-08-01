import PageWrapper from "@/components/PageWrapper";
import { Telescope } from "lucide-react";
import React from "react";

const AbutCore = () => {
  return (
    <PageWrapper wrap={true} title="Core Values & Ethics">
      <div className="w-full rounded-lg py-7 md:py-12 relative px-6 md:px-20 bg-[#DD5505]">
        <p className="text-3xl font-bold text-white">Core Values & Ethics</p>
        <p className="mt-4 text-white lg:w-[60%]">
          We shall at all times share and accept following as our core values
          and operational ethics Professionalism, respect, transparency,
          equality and cultural diversityProfile of Directors, Consultants,
          advisors and Consulting support trainers
        </p>
        <Telescope className="opacity-20 text-white absolute -right-12 -bottom-12 w-96 h-96" />
      </div>
    </PageWrapper>
  );
};

export default AbutCore;
