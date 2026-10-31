"use client";
import { sideBarProps } from "@/types";
import { ChevronDown, ChevronUp, Home, Info, Phone, X } from "lucide-react";
// import React from "react";
import CustomImage from "./CustomImage";
import { navlinks } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = ({ state, setState }: sideBarProps) => {
  const [publicDrop, setpublicDrop] = useState(false);
  const [sheDrop, setSheDrop] = useState(false);
  const [programDrop, setProgramDrop] = useState(false);
  const [climateDrop, setClimateDrop] = useState(false);

  const router = useRouter();

  const handleEvent = (title: string, path?: string) => {
    if (title === "Publication") {
      setpublicDrop(!publicDrop);
    } else if (title === "Programmes") {
      setProgramDrop(!programDrop);
    } else if (title === "Climate Time Sharing") {
      setClimateDrop(!climateDrop);
    } else {
      router.push(path as string);
      setState(false);
    }
  };

  return (
    <div
      className={`w-[80%] md:w-[40%] px-7 fixed overflow-hidden py-6 z-40 block lg:hidden trans-props top-0 right-0 h-screen bg-white text-black ${
        state ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <div className="w-full h-full relative">
        {/* <div className="absolute w-72 z-10 h-72 bg-white shadow-lg -top-40 -left-40 rounded-full"></div>
        <div className="absolute w-[600px] h-[600px] bg-white shadow-lg -top-[350px] -left-[350px] rounded-full"></div>
        <div className="absolute w-72 z-10 h-72 bg-white shadow-xl -bottom-40 -right-40 rounded-full"></div> */}
        {/* <div className="absolute w-[600px] h-[600px] bg-white shadow-xl -right-96 -bottom-56 rounded-full"></div> */}
        <div className="flex-between relative z-10 border-b pb-4">
          <div className="flex-gap gap-4">
            <div className="w-14 h-14  rounded-full">
              <CustomImage
                src="/images/second-logo.jpeg"
                className="rounded-full"
              />
            </div>
            <p className="font-semibold text-xl">EMT</p>
          </div>
          <X className="" onClick={() => setState(false)} />
        </div>
        <div className="mt-20 relative border-b">
          {navlinks.map((item, index) => {
            return (
              <div className="flex-center flex-col text-lg my-7" key={index}>
                <div
                  onClick={() => handleEvent(item.title, item.link)}
                  className="flex items-center gap-2"
                >
                  {item.title}
                  {item.title === "Publication" &&
                    (publicDrop ? <ChevronUp /> : <ChevronDown />)}
                  {item.title === "Climate Time Sharing" &&
                    (climateDrop ? <ChevronUp /> : <ChevronDown />)}
                </div>
                {publicDrop && item.title === "Publication" ?
                  <div className="mt-4 mb-2 w-full flex flex-col items-center">
                    <p
                      className="text-[14px] flex-gap gap-3"
                      onClick={() => setSheDrop(!sheDrop)}
                    >
                      SHE CULTURE{" "}
                      {sheDrop ?
                        <ChevronUp />
                      : <ChevronDown />}
                    </p>
                    {sheDrop && (
                      <div className="my-3 flex-center flex-col">
                        <div
                          className="text-[13px]"
                          onClick={() =>
                            handleEvent(
                              "null",
                              "/publication/she-culture/2024-journal",
                            )
                          }
                        >
                          2024 JOURNAL
                        </div>
                        <div
                          className="text-[13px]"
                          onClick={() =>
                            handleEvent(
                              "null",
                              "/publication/she-culture/other-she-culture",
                            )
                          }
                        >
                          OTHER SHE CULTURE
                        </div>
                        <Link
                          href="/publication/she-culture/volume-8-no-5"
                          onClick={() => setState(false)}
                          className="text-[13px]"
                        >
                          VOLUME 8, NO 5
                        </Link>
                        <Link
                          href="/publication/she-culture/volume-8-no-6"
                          onClick={() => setState(false)}
                          className="text-[13px]"
                        >
                          VOLUME 8, NO. 6
                        </Link>
                      </div>
                    )}
                    <p className="text-[14px] my-2">CLIMATE TIMES JOURNAL</p>
                    <p className="text-[14px]">OTHER PUBLICATION</p>{" "}
                  </div>
                : null}
                {programDrop && item.title === "Programmes" ? (
                  <a
                    href="https://environmenttargets.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setState(false)}
                    className="mt-4 text-[14px]"
                  >
                    EMT DIGITAL SOLUTION
                  </a>
                ) : null}
                {climateDrop && item.title === "Climate Time Sharing" ? (
                  <Link
                    href="/publication/climate-times"
                    onClick={() => setState(false)}
                    className="mt-4 text-[14px]"
                  >
                    CLIMATE TIMES JOURNAL
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
        {/* <div className="mt-10 relative"> */}
        {/* <Link
          onClick={() => setState(false)}
          href="/about-us"
          className="flex-gap gap-5"
        >
          <Info /> <p>Learn More</p>
        </Link> */}
        {/* </div> */}
        <div className="mt-14 w-full bg-base-color py-3 flex-center text-white rounded-lg relative">
          <Link
            onClick={() => setState(false)}
            href="/contact"
            className="flex-gap gap-5"
          >
            <Phone /> <p>Contact Us</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
