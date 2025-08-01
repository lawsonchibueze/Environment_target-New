"use client";
import DropDown from "@/components/CustomDropdown";
import React, { useState } from "react";
import { pdfDropdown } from "../constants";
import CustomImage from "@/components/CustomImage";
import { pdfFile } from "../../constants";
import { ChevronDown } from "lucide-react";

const PdfViewComp = () => {
  const [state, setState] = useState("2024 JOURNAL");

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="rounded shadow-2xl border p-6 mt-10 bg-white">
        <div className="mt-5 flex-between flex-col md:flex-row gap-6">
          <p className="text-2xl font-semibold">PDF Documents</p>
          <div className="">
            <DropDown
              items={pdfDropdown}
              handleChange={(e: any) => setState(e.target.value)}
              label="Categories"
            />
          </div>
        </div>
        <div className="mt-9">
          <p className="font-semibold flex-gap gap-2">
            {state} <ChevronDown />
          </p>
          <div className="mt-8 grid grid-cols-2 md:border md:p-4 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {pdfFile.map((item, index) => {
              return (
                <div
                  className="cursor-pointer hover:bg-gray-200 trans-props py-7 flex flex-col items-center"
                  key={index}
                >
                  <CustomImage src="/images/pdf-icon.png" className="w-14" />
                  <p className="mt-3 text-sm">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewComp;
