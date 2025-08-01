import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { courses } from "../constants";

const HeroCourses = () => {
  return (
    <PageWrapper wrap={true} title="Our Courses">
      <GridWrapper validated={true} lg="3" md="2">
        {courses.map((item, index) => {
          return (
            <div
              className="flex-gap rounded-lg overflow-hidden shadow-xl group gap-4 p-4 border cursor-pointer hover:-translate-y-3 hover:bg-gray-100 trans-props relative"
              key={index}
            >
              <div className="p-4 border rounded-full">
                <item.icon />
              </div>
              <div className="">
                <p className="font-bold">{item.title}</p>
                <p className="mt-1">{item.sectitle}</p>
              </div>
              <div className="absolute opacity-5 -bottom-8 -right-8">
                <item.icon className="w-32 h-32 group-hover:scale-125 trans-props" />
              </div>
            </div>
          );
        })}
      </GridWrapper>
    </PageWrapper>
  );
};

export default HeroCourses;
