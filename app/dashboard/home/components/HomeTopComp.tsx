"use client";
import CustomButton from "@/components/CustomButton";
import { ChevronRight, Info } from "lucide-react";
// import Link from "next/link";
import React from "react";
import { welcomeCard } from "../../constants";

export const HomeTopComp = () => {
  return (
    <div>
      <div className="w-full bg-base-color text-white  px-4 md:px-6 lg:px-8 relative py-20 lg:pt-16 lg:pb-36">
        <div className="flex-between flex-col lg:flex-row">
          <p className="text-3xl font-semibold">Welcome Admin!!</p>
          <div className="flex-gap flex-col md:flex-row w-full lg:w-auto mt-7 lg:mt-0 gap-5">
            <CustomButton
              title="Upload PDF"
              navigate={true}
              link="/dashboard/home"
              className="rounded-none w-full md:w-36 text-sm py-2"
              bgColor="bg-blue-500"
            />
            <CustomButton
              title="View PDF"
              navigate={true}
              link="/dashboard/pdf"
              className="rounded-none w-full md:w-36 bg-opacity-20 text-sm py-2"
              bgColor="bg-blue-500"
            />
          </div>
        </div>
        <p className="mt-10 flex-gap gap-3">
          <Info /> Overview
        </p>
        <div className="relative">
          <div className="relative lg:absolute z-10 w-full grid md:grid-cols-2 gap-10 lg:grid-cols-3 mt-5">
            {welcomeCard.map((item, index) => {
              return (
                <div
                  className="w-full py-6 shadow px-5 bg-black/30 backdrop-blur-lg"
                  key={index}
                >
                  <item.icon className="w-14 h-12" />
                  <p className="mt-5">{item.title}</p>
                  <div className="flex-between mt-5">
                    <p className="text-2xl font-semibold">{item.total}</p>
                    <p className="text-sm flex-gap gap-3">
                      View All <ChevronRight />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
