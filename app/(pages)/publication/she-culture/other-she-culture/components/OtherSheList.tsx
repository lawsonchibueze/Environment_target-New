import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const OtherSheList = ({
  journals,
}: {
  journals: {
    id: string;
    category: string;
    upload: string;
    name: string;
  }[];
}) => {
  // fix
  console.log(journals);
  return (
    <div>
      {journals.length > 0 ? (
        <PageWrapper wrap={true} title="OTHER SHE CULTURE">
          <GridWrapper lg="3" validated={true}>
            {journals.map((items, index) => {
              return (
                <div className="" key={index}>
                  <div className="relative overflow-hidden flex justify-center md:justify-start">
                    <iframe
                      src={items.upload}
                      className="cursor-none h-96  scrollable-container"
                    ></iframe>
                  </div>
                  <p className="mt-3 text-sm">{items.name}</p>
                </div>
              );
            })}
          </GridWrapper>
        </PageWrapper>
      ) : (
        <div>No journals found in this category.</div>
      )}
    </div>
  );
};

export default OtherSheList;
