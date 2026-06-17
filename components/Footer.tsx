import { navlinks } from "@/constants";
import PageWrapper from "./PageWrapper";
// import { snsServices } from "@/app/constants";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-base-color border-none border">
      <div className="page-wrapper">
        <div className=" w-full relative pt-12">
          {/* <div className="flex-center w-full">
           
          </div> */}
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="">
            <div className="flex-gap gap-5">
              {/* <div className="p-7 rounded-full bg-white"></div> */}
              <CustomImage
                src="/images/second-logo.jpeg"
                className="rounded-full w-14"
              />
              <p className="font-semibold text-xl text-white">
                Environment & Millennium Targets Ltd
              </p>
            </div>
            <p className="mt-5 text-sm line-clamp-3 text-white">
              {` EMT-CREED is governed and managed by a management team and board of directors from diverse professional background and cultures and with specialized skills, competency and expertise in many fields .`}
            </p>
            <div className="mt-6 relative">
              <input
                type="text"
                placeholder="Email"
                className="p-4 placeholder-black bg-white w-full"
              />
              <CustomButton
                className="absolute top-[7px] py-3 right-2 w-28 rounded-none text-white"
                title="Suscribe"
              />
            </div>
          </div>
          <div className="grid lg:w-[85%] grid-cols-3 gap-4">
            {/* {snsServices.map((item, index) => {
              return (
                <div
                  className="h-14 overflow-hidden flex-gap gap-5"
                  key={index}
                >
                  <CustomImage src={item.img} className="" />
                </div>
              );
            })} */}
          </div>
          <div className="">
            <p className="font-semibold text-white text-xl">Links</p>
            <div className="mt-5 w-full flex  justify-normal md:justify-center lg:justify-normal gap-20">
              <div className="">
                {navlinks.slice(0, 4).map((item, index) => {
                  return (
                    <div
                      className="my-5 flex-gap gap-4 text-white text-sm"
                      key={index}
                    >
                      <div className="p-[3px] bg-white"></div>
                      <p>{item.title}</p>
                    </div>
                  );
                })}
              </div>
              <div className="">
                {/* {footerDet.map((item, index) => {
                  return (
                    <div
                      className="text-sm text-white flex-gap gap-4 my-5"
                      key={index}
                    >
                      <div className="p-[3px] bg-white"></div>
                      <p>{item}</p>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-white bg-opacity-45 mt-8"></div>
        <div className="flex justify-between items-center flex-col lg:flex-row  py-7">
          <p className="text-white text-center lg:mt-0 text-font">{`© ${year} Environment & Millennium Targets Limited | All Rights Reserved`}</p>
          <a
            href="http://www.appnovia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-font"
          >
            Built by Appnovia Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
