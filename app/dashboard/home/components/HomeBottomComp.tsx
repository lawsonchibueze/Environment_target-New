import React from "react";
import { pdfFile } from "../../constants";
import { File, Key } from "lucide-react";
import CustomImage from "@/components/CustomImage";
import getJounal from "@/app/action/getJournal";

const HomeBottomComp = async () => {
  const journalz = await getJounal();

  return (
    <div className=" px-4 md:px-6 lg:px-8 mt-32">
      <div className="border p-6 shadow-xl bg-white rounded">
        <p className="text-xl font-semibold">PDF Documents</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {journalz.map((item, index) => {
            return (
              <div
                className="cursor-pointer hover:bg-gray-200 trans-props py-7 flex flex-col items-center"
                key={index}
              >
                <iframe src={item.upload} className="w-14" />
                <p className="mt-3 text-sm">{item.category}</p>
                <p className="mt-3 text-sm">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeBottomComp;
