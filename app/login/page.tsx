// "use client";
import React from "react";
import Login from "./components/Login";
// import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <div>
      {/* <SessionProvider> */}
      <Login />
      {/* </SessionProvider> */}
    </div>
  );
};

export default page;
