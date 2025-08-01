import React from "react";
import { inputProps } from "../types";
import CustomImage from "./CustomImage";
// import { inputProps } from "../../types";

const CustomInput = ({
  type,
  placeholder,
  label,
  icon,
  id,
  name,
  handleChange,
  className,
  value,
}: inputProps) => {
  return (
    <div className={`w-full ${className}}`}>
      <label className="text-sm md:text-base font-semibold">{label} </label>
      <div className="relative">
        <input
          type={type}
          required
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full py-[12px] md:py-[10px] mt-2 border rounded focus:border-black trans-props pl-5 outline-none `}
        />
        <div className="absolute right-3 top-4">
          {icon && <CustomImage src={icon} alt="icon" className="w-6" />}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
