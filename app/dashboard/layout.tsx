"use client";
import React, { useState } from "react";
import SideDashBar from "./components/SideDashBar";
import TopBar from "./components/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(false);

  return (
    <>
      <div className="flex bg-gray-200" suppressHydrationWarning>
        {/* <div className="relative lg:w-[19%]"> */}
        <SideDashBar state={state} setState={setState} />
        {/* </div> */}
        <div className="w-full relative right-0 lg:w-[81%]">
          <TopBar state={state} setState={setState} />
          {children}
        </div>
      </div>
    </>
  );
}
