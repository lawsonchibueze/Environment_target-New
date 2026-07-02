import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React, { Suspense } from "react";
import getJounal from "@/app/action/getJournal";

const OtherSheList = async () => {
  let journals: {
    id: string;
    category: string;
    upload: string;
    name: string;
  }[] = [];

  try {
    const journalz = await getJounal();

    journals = journalz.filter((j) => {
      return j.category === "VOLUME 8 NO 2";
    });
  } catch (error) {
    console.log(error);
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageWrapper wrap={true} title="VOLUME 8 NO 2">
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
    </Suspense>
  );
};

export default OtherSheList;
