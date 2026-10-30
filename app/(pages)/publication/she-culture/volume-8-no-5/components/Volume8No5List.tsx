import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const journals = [
  {
    upload: "/files/she-culture-volume-8-no-5-ngaju-et-al.pdf",
    name: "SHE Culture - November 2026 - Ngaju et al.",
  },
  {
    upload: "/files/she-culture-volume-8-no-5-nov-2026-edition.pdf",
    name: "SHE Culture - November 2026 Edition",
  },
];

const Volume8No5List = () => {
  return (
    <PageWrapper wrap={true} title="VOLUME 8, NO 5">
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

export default Volume8No5List;
