import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const images = [
    "/images/img-53.jpeg",
    "/images/img-54.jpeg",
    "/images/img-55.jpeg",
    "/images/img-56.jpeg",
    "/images/img-57.jpeg",
    "/images/img-58.jpeg",
    "/images/img-59.jpeg",
    "/images/img-60.jpeg",
    "/images/img-61.jpeg",
    "/images/img-62.jpeg",
    "/images/img-63.jpeg",
    "/images/img-64.jpeg",
    "/images/img-65.jpeg",
    "/images/img-66.jpeg",
  ];
  return (
    <div>
      <div className="page-wrapper relative py-20 overflow-hidden lg:py-20 bg-base-color w-full">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-base-color shadow-2xl rounded-full"></div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-white opacity-10 rounded-full"></div>
        <div className="lg:w-1/2 relative">
          <p className="text-white text-2xl lg:text-4xl font-semibold">
            Events and Programmes
          </p>
          <p className="my-10 text-white">
            CENTRE FOR CLIMATE CHANGE AND SUSTAINABLE DEVELOPMENT STUDIES ( CCC&SDS)
            RIVERS STATE, UNIVERSITY ( RSU), PORT HARCOURT.
          </p>
          <div className="text-white flex-gap gap-2">
            <Link href="/">Home</Link>
            <ChevronRight className="w-5" />
            <p>Events and Programmes</p>
          </div>
        </div>
      </div>
      <div className="page-wrapper py-16 px-4">
        <h2 className="text-4xl font-semibold mb-6 flex text-center justify-center items-center">
          Events Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-40 overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`event-${index}`}
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
