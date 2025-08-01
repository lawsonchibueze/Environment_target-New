"use client";

import { pageWrapperProps } from "@/types";
import { motion } from "framer-motion";
import CustomImage from "./CustomImage";

const PageWrapper = ({
  children,
  className,
  title,
  id,
  wrap,
}: pageWrapperProps) => {
  return (
    <motion.div
      id={id}
      transition={{
        ease: "easeInOut",
        duration: 0.8,
        delay: 0.8,
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{
        translateY: [80, 0],
        opacity: [0, 1],
      }}
      className={`${className} ${wrap && "page-wrapper"} my-20`}
    >
      {title && (
        <div className="my-10 flex-center flex-col">
          {/* <div className="flex-gap gap-6"> */}
          <p className="font-semibold text-base-color text-2xl">{title}</p>
          <CustomImage src="/images/section-shape.png" className="w-40 my-2" />
          {/* </div> */}
        </div>
      )}

      {children}
    </motion.div>
  );
};

export default PageWrapper;
