import { gridWrapperProps } from "@/types";
import React from "react";

const GridWrapper = ({
  children,
  className,
  lg,
  md,
  sm,
  gap,
  validated,
}: gridWrapperProps) => {
  return (
    <>
      {validated && (
        <div
          className={`grid grid-cols-${sm ? sm : "1"} md:grid-cols-2
          } lg:grid-cols-${lg ? lg : "2"} ${className} gap-${
            gap ? gap : "10"
          } `}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default GridWrapper;
