import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroMembership = () => {
  return (
    <div>
      <div className="page-wrapper relative py-20 overflow-hidden lg:py-20 bg-base-color w-full">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-base-color shadow-2xl rounded-full"></div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-white opacity-10 rounded-full"></div>
        <div className="lg:w-1/2 relative">
          <p className="text-white text-2xl lg:text-4xl font-semibold">
            Membership & Affiliate
          </p>
          <p className="my-10 text-white"></p>
          <div className="text-white flex-gap gap-2">
            <Link href="/">Home</Link>
            <ChevronRight className="w-5" />
            <p>Membership & Affiliate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMembership;
