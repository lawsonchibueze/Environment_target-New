import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroVolume8No5 = () => {
  return (
    <div>
      <div className="page-wrapper relative w-full overflow-hidden bg-base-color py-20 lg:py-20">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-base-color shadow-2xl"></div>
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white opacity-10"></div>
        <div className="relative lg:w-1/2">
          <p className="text-2xl font-semibold text-white lg:text-4xl">
            VOLUME 8, NO 5
          </p>
          <div className="mt-7 flex items-center gap-2 text-white">
            <Link href="/">Home</Link>
            <ChevronRight className="w-5" />
            <p>Publication</p>
            <ChevronRight className="w-5" />
            <p>VOLUME 8, NO 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVolume8No5;
