import getJounal from "@/app/action/getJournal";
import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
// import { journals } from "../constants";

const localClimateTimes = [
  {
    upload: "/files/climate-times-journal-nov-2026-ngaju-others.pdf",
    name: "Climate Times Journal - November 2026 - Ngaju & others",
  },
  {
    upload: "/files/climate-times-journal-nov-2026-ngaju-et-al.pdf",
    name: "Climate Times Journal - November 2026 - Ngaju et al.",
  },
];

const ClimateTimes = async () => {
  const journalz = await getJounal();
  const journals = [
    ...localClimateTimes,
    ...journalz.filter((j) => j.category === "CLIMATE TIMES JOURNAL"),
  ];
  return (
    <PageWrapper wrap={true} title="CLIMATE TIMES JOURNAL">
      <GridWrapper lg="3" validated={true}>
        {journals.map((items, index) => {
          return (
            <div className="" key={index}>
              <div className="relative overflow-hidden flex justify-center md:justify-start">
                {/* <div className="w-full h-full relative z-10 top-0 left-0 bg-red-300"></div> */}
                {/* <div className="h-14 w-full bg-white absolute z-10 top-0"></div> */}
                {/* <div className="relative h-96 w-40"></div> */}
                <iframe
                  src={items.upload}
                  title={items.name}
                  scrolling="no"
                  className="cursor-none h-96  scrollable-container"
                ></iframe>
              </div>
              <p className="mt-3 text-sm">{items.name}</p>
            </div>
          );
        })}
      </GridWrapper>
    </PageWrapper>
  );
};

export default ClimateTimes;
