import { imageProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomImage = ({ src, className, alt }: imageProps) => {
  return (
    <Image
      src={src}
      height={9999}
      width={9999}
      className={className}
      // loading="lazy"
      alt={alt ? alt : "custom-alternative"}
    />
  );
};

export default CustomImage;
