import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { socialIcons } from "../constants";
import CustomButton from "@/components/CustomButton";

const HeroContact = () => {
  return (
    <PageWrapper wrap={true} title="Contact Us">
      <p className="text-center lg:text-3xl my-6 font-bold">
        Get In Touch With Us
      </p>
      <GridWrapper lg="3" validated={true}>
        <div className="lg:col-span-2 border rounded-lg w-full py-10 px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="lg:col-span-1">
              <input
                type="text"
                className="bg-gray-100 rounded-lg placeholder-black w-full p-4 outline-none"
                placeholder="Name*"
              />
            </div>
            <div className="lg:col-span-1">
              <input
                type="text"
                className="bg-gray-100 placeholder-black rounded-lg w-full p-4 outline-none"
                placeholder="Email*"
              />
            </div>
            <div className="lg:col-span-1">
              <input
                type="number"
                className="bg-gray-100 placeholder-black rounded-lg w-full p-4 outline-none"
                placeholder="Phone Number*"
              />
            </div>
            <div className="lg:col-span-1">
              <input
                type="text"
                className="bg-gray-100 placeholder-black rounded-lg w-full p-4 outline-none"
                placeholder="Subject*"
              />
            </div>
            <div className="lg:col-span-2">
              <textarea
                rows={4}
                placeholder="Message....."
                className="p-4 outline-none bg-gray-100 placeholder-black w-full "
              ></textarea>
            </div>
          </div>
          <div className="flex items-start md:items-center mt-6 gap-2">
            <input type="checkbox" name="" id="" />
            <p>I agree to the Terms & Conditions and Privacy Policy</p>
          </div>
          <CustomButton className="w-full py-3 lg:py-4 text-white mt-5" />
        </div>
        <div className="bg-gray-100 px-6 lg:px-10 py-5 lg:col-span-1 rounded-lg">
          <div className="">
            <p className="lg:text-lg font-bold">Our Address</p>
            <p className="mt-3">
              El Chumo Inc. 1347 Andover Park Drive, Houston Texas
            </p>
          </div>
          <div className="mt-7">
            <p className="lg:text-lg font-bold">Email Address</p>
            <p className="mt-3">environmenttargets@yahoo.com</p>
            <p className="mt-1">support@clim.com</p>
          </div>
          <div className="mt-7">
            <p className="lg:text-lg font-bold">24/7 Support</p>
            <p className="mt-3 text-sm">+234 893 909 843</p>
            <p className="mt-1 text-sm">+234 893 909 843</p>
          </div>
          <div className="mt-7">
            <p className="lg:text-lg font-bold">Follow us</p>
            <div className="mt-3 flex-gap gap-3">
              {socialIcons.map((Item, index) => {
                return (
                  <div
                    className="w-10 h-10 flex-center border rounded-full"
                    key={index}
                  >
                    <Item className="w-5 text-gray-700" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </GridWrapper>
    </PageWrapper>
  );
};

export default HeroContact;
