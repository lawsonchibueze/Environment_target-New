import { navLinksProps } from "@/types";
import {
  Hammer,
  Home,
  Info,
  Mail,
  MapPinnedIcon,
  PhoneCall,
} from "lucide-react";

export const navlinks: navLinksProps[] = [
  { title: "Home", link: "/", img: "/icons/home-black.png", icon: Home },
  {
    title: "About Us",
    link: "/about-us",
    img: "/icons/about.png",
    // dd: true,
    icon: Info,
  },
  {
    title: "Management",
    link: "/management",
    img: "/icons/medical.png",
    icon: Hammer,
    // dd: true,
  },
  // { title: "Clientele", link: "/clientele", img: "/icons/blog.png" },
  {
    title: "Membership & Afflliate",
    link: "/membership",
    img: "/icons/gallery.png",
    icon: PhoneCall,
  },
  {
    title: "Publication",
    dd: true,
    link: "/#",
    img: "/icons/testimonial.png",
  },
  {
    title: "Programmes",
    dd: true,
    link: "/programmes",
    img: "/icons/contact.png",
  },
  {
    title: "Technical Partnership",
    link: "/technical-partnership",
    img: "/icons/partnership.png",
  },

  {
    title: "Climate Time Sharing",
    link: "/climate-time-sharing",
    dd: true,
    img: "/icons/contact.png",
  },
];

export const motionTrans = {
  ease: "easeInOut",
  duration: 0.8,
  delay: 0.8,
};

export const breakpoint = {
  // When window width is >= 640px
  640: {
    slidesPerView: 1,
    // spaceBetween: 10,
  },
  // When window width is >= 768px
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  // When window width is >= 1024px
  1024: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
  // 1280: {
  //   slidesPerView: 5,
  //   // spaceBetween: 30,
  // },
};
