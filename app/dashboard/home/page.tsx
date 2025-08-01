import React from "react";
import { HomeTopComp } from "./components/HomeTopComp";
import HomeBottomComp from "./components/HomeBottomComp";

const page = () => {
  return (
    <div className="overflow-x-auto mb-20">
      <HomeTopComp />
      <HomeBottomComp />
    </div>
  );
};

export default page;
