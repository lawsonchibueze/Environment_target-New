"use client";
import CustomButton from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import GridWrapper from "@/components/GridWrapper";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { breakpoint } from "@/constants";
import { heroimages } from "../constants";

const Hero = () => {
  return (
    <div className="relative lg:rounded-bl-[200px] bg-base-color overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-base-color shadow-2xl rounded-full"></div>
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-white opacity-10 rounded-full"></div>
      <GridWrapper
        validated={true}
        className="page-wrapper w-full py-20 lg:py-40"
      >
        <div className="relative order-last lg:order-none">
          <p className="text-[24px] md:text-[30px] lg:text-[48px] lg:w-[70%] font-bold text-white">
            EMT Climate Change Pledge
          </p>
          <p className="mt-8 text-white">
            Environment & Millennium Targets LTD, (EMT) comprises a team of
            experienced consultants who render advisory and Training consultancy
            services in environment management, climate change, sustainable
            development and sustainable resource management.
          </p>
          {/* <div className="flex items-center flex-col lg:flex-row mt-8 lg:mt-10 gap-6">
            <CustomButton
              bgColor="bg-blue-600"
              title="Contact Us"
              className="py-3 lg:py-4 text-white w-full lg:w-40"
            />
            <CustomButton
              bgColor="bg-base-color"
              title="About Us"
              className="py-3 lg:py-4 text-white border-white border w-full lg:w-40"
            />
          </div> */}
        </div>
        <div className="flex md:h-[600px] lg:h-auto overflow-hidden justify-center">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            loop={true}
            breakpoints={breakpoint}
            className="flex w-full"
          >
            {heroimages.map((item, index) => {
              return (
                <SwiperSlide className="" key={index}>
                  <div className="flex flex-col items-end relative">
                    <div className="lg:w-[80%] flex-center rounded-lg lg:rounded-xl overflow-hidden">
                      <CustomImage src={item} />
                    </div>
                    {/* <div className="rounded-xl w-32 absolute -bottom-4 right-0">
                      <CustomImage
                        src={"/images/img-2.jpg"}
                        className="rounded-[30px]"
                      />
                    </div> */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </GridWrapper>
    </div>
  );
};

export default Hero;
