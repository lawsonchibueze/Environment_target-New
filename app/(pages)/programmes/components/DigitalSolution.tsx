import PageWrapper from "@/components/PageWrapper";
import React from "react";

const DigitalSolution = () => {
  return (
    <PageWrapper wrap={true} title="EMT DIGITAL SOLUTION">
      <div className="flex-center">
        <a
          href="https://environmenttargets.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-base-color px-8 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          Tools by Environment &amp; Millennium Targets
        </a>
      </div>
    </PageWrapper>
  );
};

export default DigitalSolution;
