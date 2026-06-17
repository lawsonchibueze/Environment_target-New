"use client";
import CustomImage from "@/components/CustomImage";
import { sideBarProps } from "@/types";
import React, { useState } from "react";
import { dashbaordlinks } from "../constants";
import Link from "next/link";
import { title } from "process";
import { ExternalLinkIcon, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const SideDashBar = ({ state, setState }: sideBarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`h-screen absolute w-2/3 trans-props z-40 lg:sticky top-0 lg:w-[19%] bg-base-color ${
        state ? "translate-x-0" : "-translate-x-[100%] lg:translate-x-0"
      }`}
    >
      <div className="w-full h-full  py-7 fixed top-0">
        <div className="flex-between px-8 lg:px-10 items-center text-white">
          <div className="flex gap-5 items-center">
            <CustomImage
              src="/images/second-logo.jpeg"
              className="w-12 lg:w-14 rounded-full"
            />
            <p className="text-3xl font-semibold">EMT</p>
          </div>
          <X onClick={() => setState(false)} className="block lg:hidden" />
        </div>
        <div className="mt-32  text-white">
          <div className="my-4 text-xs text-white px-8 lg:px-10">Overview</div>
          {dashbaordlinks.map((item, index) => {
            const isActive = pathname === item.link;

            return (
              <Link
                href={item.link}
                onClick={() => setState(false)}
                className={`my-3 px-8 lg:px-10 py-3 lg:py-4 flex items-center trans-props relative gap-5 ${
                  isActive ? "bg-white bg-opacity-5" : ""
                }`}
                key={index}
              >
                {isActive && (
                  <div className="absolute right-0 top-0 h-full w-[6px] bg-yellow-500 rounded-l"></div>
                )}
                <item.icon /> <p>{item.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        onClick={() => signOut()}
        className="my-9 flex items-center cursor-pointer text-white px-8 lg:px-10  absolute bottom-20 gap-5"
      >
        <ExternalLinkIcon /> <p>Logout</p>
      </div>
    </div>
  );
};

export default SideDashBar;
