import CustomImage from "@/components/CustomImage";
import { sideBarProps } from "@/types";
import { Menu, Search, UserCog2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const TopBar = ({ state, setState }: sideBarProps) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();
  return (
    <div className="w-ful px-4 md:px-6 lg:px-8 py-3 sticky top-0 z-30 bg-white border-b flex-between">
      <Menu
        // src="/icons/menu.png"
        onClick={() => setState(!state)}
        className="w-8 block lg:hidden"
      />

      <div className="relative hidden lg:block">
        <input
          type="text"
          className="border w-72 py-2 px-4  rounded outline-none"
          placeholder="Search here...."
        />
        <Search className="absolute top-2 right-3 text-gray-400" />
      </div>
      <div className="flex-gap gap-5">
        <div className="relative"></div>
        <div className="">
          <div
            suppressHydrationWarning
            className="font-semibold flex-center text-white gap-3 py-3 rounded px-4 text-sm bg-gradient-to-r from-sky-700 via-blue-900 to-gray-900"
          >
            {formattedDateTime}
            {/* <time dateTime="2016-10-25" suppressHydrationWarning /> */}
            <div
              className="h-2 w-2 bg-white rounded-full blinking-div"
              //   initial={{ opacity: 1 }}
              //   animate={{ opacity: 0 }}
              //   transition={{ duration: 1, yoyo: 6 }}
            ></div>
          </div>
        </div>
        <div className="">
          <div className="p-4 border rounded-full">
            <UserCog2 />
          </div>
          {/* <p className="">Admin</p> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
