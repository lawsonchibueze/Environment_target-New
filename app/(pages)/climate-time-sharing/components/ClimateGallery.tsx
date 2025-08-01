"use client";
import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { gallery } from "../constants";
import CustomImage from "@/components/CustomImage";
import { motion } from "framer-motion";

const ClimateGallery = () => {
  return (
    <PageWrapper title="Gallery" wrap={true}>
      {/* <GridWrapper validated={true}></GridWrapper> */}
      <div className="mt-20 grid gap-3 md:grid-cols-2 lg:grid-rows-6">
        {gallery.map((item, index) => {
          return (
            <motion.div
              transition={{
                ease: "easeInOut",
                duration: 1.7,
                delay: 0.5,
              }}
              //   initial={{ opacity: 0, translateY: "50%" }}
              whileInView={{
                translateY: ["100%", "0%"],
                opacity: ["0%", "100%"],
                scale: ["0%", "100%"],
              }}
              viewport={{ once: true }}
              className={`overflow-hidden relative group ${item.styles} ${
                item.styles === "row-span-1" ? "md:h-[200px]" : "lg:h-[400px]"
              }`}
              key={index}
            >
              <div className="absolute bg-black w-full h-full z-20 opacity-0 group-hover:opacity-100 bg-opacity-30 trans-props"></div>
              <CustomImage
                src={item.img}
                className="trans-props border rounded shadow-xl object-contain group-hover:scale-110"
                // height={9999}
                // width={9999}
                alt="gallery"
              />
            </motion.div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default ClimateGallery;
