"use client";

// import ThemeSwitch from "@/app/ThemeSwitch";
import { navlinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { ChevronDown } from "lucide-react";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const pathname = usePathname();
  const [state, setState] = useState(false);
  const [publicDrop, setpublicDrop] = useState(false);
  const [publicDrop1, setpublicDrop1] = useState(false);
  const [sheDrop, setSheDrop] = useState(false);
  const [programDrop, setProgramDrop] = useState(false);

  const handleDropDown = (params: boolean, title?: string) => {
    if (title === "Publication") return setpublicDrop(params);
    if (title === "Programmes") return setProgramDrop(params);
    if (title === "Climate Time Sharing") return setpublicDrop1(params);
  };

  return (
    <div className="bg-base-color border-b dark:border-none text-white sticky top-0 z-30 shadow-lg">
      {state && (
        <div
          onClick={() => setState(false)}
          className="w-full h-screen bg-black/30 backdrop-blur-sm absolute top-0 left-0 z-30 "
        ></div>
      )}
      <Sidebar state={state} setState={setState} />

      <div className="w-full py-4 page-wrapper ">
        <div className="flex-between">
          <div className="flex-gap gap-6">
            {/* <div className="p-6 md:p-7 rounded-full bg-red-500"></div> */}
            <CustomImage
              src="/images/second-logo.jpeg"
              className="rounded-full w-20 lg:w-20"
            />

            <p className="text-2xl lg:text-3xl font-semibold">EMT</p>
          </div>
          <div className="flex-gap gap-4 lg:gap-20">
            <div className="hidden lg:flex gap-7 text-[13px]">
              {navlinks.map((item, index) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    href={item.link}
                    onMouseEnter={() => handleDropDown(true, item.title)}
                    onMouseLeave={() => handleDropDown(false, item.title)}
                    className="relative group"
                    key={index}
                  >
                    {
                      item.title === "Publication" && publicDrop ?
                        <div
                          className="absolute -left-5 pt-7 top-0"
                          onMouseOver={() => handleDropDown(true, item.title)}
                          onClick={() => handleDropDown(false, item.title)}
                        >
                          <div className="bg-white p-3 relative w-28 flex gap-2 flex-col text-black">
                            {sheDrop && (
                              <div
                                onMouseEnter={() => setSheDrop(true)}
                                onMouseLeave={() => setSheDrop(false)}
                                className="absolute -right-[184px] top-0 w-52  flex justify-center z-10"
                              >
                                <div className="p-2 bg-white top-0 flex gap-3 flex-col">
                                  <Link
                                    className="hover:bg-slate-200 p-1 rounded-md"
                                    href="/publication/she-culture/volume-8-no-1"
                                  >
                                    VOLUME 8 NO 1
                                  </Link>
                                  <Link
                                    className="hover:bg-slate-200 p-1 rounded-md"
                                    href="/publication/she-culture/volume-8-no-2"
                                  >
                                    VOLUME 8 NO 2
                                  </Link>
                                  <Link
                                    className="hover:bg-slate-200 p-1 rounded-md"
                                    href="/publication/she-culture/volume-8-no-3-2026"
                                  >
                                    VOLUME 8 NO 3 2026
                                  </Link>
                                  <Link
                                    className="hover:bg-slate-200 p-1 rounded-md"
                                    href="/publication/she-culture/volume-8-no-5"
                                    onClick={(event) => event.stopPropagation()}
                                  >
                                    VOLUME 8, NO 5
                                  </Link>
                                  <Link
                                    className="hover:bg-slate-200 p-1 rounded-md"
                                    href="/publication/she-culture/2024-journal"
                                  >
                                    2024 JOURNAL
                                  </Link>
                                  <Link
                                    className="hover:bg-slate-200 p-1 rounded-md"
                                    href="/publication/she-culture/other-she-culture"
                                  >
                                    OTHER SHE CULTURE
                                  </Link>
                                  <Link
                                    className="hover:bg-slate-200 p-1 rounded-md"
                                    href="/publication/she-culture/rebecca-others-2025"
                                  >
                                    REBECCA OTHERS 2025
                                  </Link>
                                  <Link
                                    className="hover:bg-slate-200 p-1 rounded-md"
                                    href="/publication/she-culture/volume-7-no-1"
                                  >
                                    VOLUME 7 NO 1
                                  </Link>
                                  <Link
                                    className="hover:bg-slate-200 p-1 rounded-md"
                                    href="/publication/she-culture/volume-7-no-2"
                                  >
                                    VOLUME 7 NO 2
                                  </Link>
                                </div>
                              </div>
                            )}

                            <button
                              type="button"
                              className="bg-transparent p-0 text-left text-[12px]"
                              onMouseEnter={() => setSheDrop(true)}
                              onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                setSheDrop(true);
                              }}
                            >
                              SHE CULTURE
                            </button>
                            <Link href="/publication/climate-times">
                              <p className="text-[12px]">
                                CLIMATE TIMES JOURNAL
                              </p>
                            </Link>
                            <Link href="/publication/other-journal">
                              <p className="text-[12px]">OTHER PUBLICATION</p>
                            </Link>
                          </div>
                        </div>
                        // : item.title === "Climate Time Sharing" && publicDrop ? (
                        //   <div
                        //     className="absolute -left-5 pt-7 top-0"
                        //     onMouseOver={() => handleDropDown(true, item.title)}
                        //     onClick={() => handleDropDown(true, item.title)}
                        //   >
                        //     <div className="bg-white p-3 relative w-28 flex gap-2 flex-col text-black">
                        //       <Link href="/publication/climate-times">
                        //         <p className="text-[12px]">CLIMATE TIMES JOURNAL</p>
                        //       </Link>
                        //       <Link href="/publication/other-journal">
                        //         <p className="text-[12px]">OTHER PUBLICATION</p>
                        //       </Link>
                        //     </div>
                        //   </div>
                        // )
                      : item.title === "Programmes" && programDrop ?
                        <div
                          className="absolute -left-5 pt-7 top-0"
                          onMouseOver={() => handleDropDown(true, item.title)}
                          onClick={() => handleDropDown(false, item.title)}
                        >
                          <div className="bg-white p-3 relative w-48 text-black">
                            <a
                              href="https://environmenttargets.app"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(event) => event.stopPropagation()}
                              className="text-[12px] hover:bg-slate-200 p-1 rounded-md block"
                            >
                              EMT DIGITAL SOLUTION
                            </a>
                          </div>
                        </div>
                      : item.title === "Climate Time Sharing" && publicDrop1 ?
                        <div
                          className="absolute -left-5 pt-7 top-0"
                          onMouseOver={() => handleDropDown(true, item.title)}
                        >
                          <div className="bg-white p-3 relative w-48 text-black">
                            <Link
                              href="/publication/climate-times"
                              onClick={(event) => event.stopPropagation()}
                              className="text-[12px] hover:bg-slate-200 p-1 rounded-md block"
                            >
                              CLIMATE TIMES JOURNAL
                            </Link>
                          </div>
                        </div>
                      : null
                    }
                    {isActive && (
                      <div className="w-full flex-center">
                        <div className="w-5 h-[3px] shadow-lg rounded-full absolute trans-props -bottom-2 bg-base-color"></div>
                      </div>
                    )}
                    <div className="w-full flex-center">
                      <div className="w-5 h-[3px] rounded-full opacity-0 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-100 trans-props absolute -bottom-2 bg-base-color"></div>
                    </div>
                    {item.title}
                    {item.dd && (
                      <ChevronDown className="w-3 h-3 absolute -right-4 top-1" />
                    )}
                  </Link>
                );
              })}
            </div>
            {/* <ThemeSwitch /> */}
            <div
              className="flex flex-col items-end lg:hidden"
              onClick={() => setState(!state)}
            >
              <div className="h-[3px] w-10 bg-white"></div>
              <div className="h-[3px] w-8 my-2 bg-white"></div>
              <div className="h-[3px] w-6 bg-white"></div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <CustomButton
              className="py-3 lg:w-36 text-white"
              bgColor="bg-blue-500"
              title="Contact Us"
              navigate={true}
              link="/contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
