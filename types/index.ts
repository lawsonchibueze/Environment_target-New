import { ChangeEvent } from "react";

export interface imageProps {
  src: string;
  className?: string;
  alt?: string;
}

export interface pageWrapperProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
  wrap?: boolean;
}

export interface customButtonProps {
  title?: string;
  className?: string;
  bgColor?: string;
  link?: string;
  handleEvent?: any;
  loading?: boolean;
  disabled?: boolean;
  navigate?: boolean;
  children?: React.ReactNode;
  type?: any;
}

export interface navLinksProps {
  title: string;
  link: string;
  status?: boolean;
  dd?: boolean;
  img: string;
  icon?: any;
}

export interface inputProps {
  type?: string;
  placeholder: string;
  label: string;
  icon?: string;
  id?: string;
  name?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
}

export interface gridWrapperProps {
  children?: React.ReactNode;
  className?: string;
  lg?: string;
  gap?: string;
  md?: string;
  sm?: string;
  validated: boolean;
}

export interface sideBarProps {
  state: boolean;
  // check: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface selectProps {
  placeholder?: string;
  label: string;
  handleChange?: any;
  items: string[];
  name?: string;
  value?: string;
}
