import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const journals = [
  {
    upload: "/files/she-culture-volume-8-no-6-onubueze-others.pdf",
    name: "SHE Culture - November 2026 No. 6 - Onubueze & others",
  },
  {
    upload: "/files/she-culture-volume-8-no-6-onubueze.pdf",
    name: "SHE Culture - November 2026 No. 6 - Onubueze",
  },
];

const Volume8No6List = () => {
  return (
    <PageWrapper wrap={true} title="VOLUME 8, NO. 6">
      <GridWrapper lg="3" validated={true}>
        {journals.map((item) => (
          <div className="" key={item.upload}>
            <div className="relative flex justify-center overflow-hidden md:justify-start">
              <iframe
                src={item.upload}
                title={item.name}
                className="scrollable-container h-96 cursor-none"
              ></iframe>
            </div>
            <p className="mt-3 text-sm">{item.name}</p>
          </div>
        ))}
      </GridWrapper>
    </PageWrapper>
  );
};

export default Volume8No6List;
