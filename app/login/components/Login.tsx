"use client";
import CustomButton from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import CustomInput from "@/components/CustomInput";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // const session = useSession();

  const handleSubmit = (e: React.FormEvent) => {
    // console.log(password, email);
    e.preventDefault();
    setIsLoading(true);
    const cred = { email, password };
    // console.log("cred", cred);
    if (!email || !password) {
      toast.error("please fill all input to continue");
    }
    signIn("credentials", {
      ...cred,
      redirect: false,
    }).then((callback) => {
      // console.log(callback);
      if (!callback?.error) {
        router.refresh();
        toast.success("Login Successful");
        setTimeout(() => {
          setIsLoading(false);
          router.push("/dashboard/upload-pdf");
        }, 3000);
      }
      if (callback?.error) {
        toast.error("error occured while login in");
        setIsLoading(false);
      }
    });
  };

  // if (session) {
  //   router.push("/dashboard/upload-pdf");
  // }

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="lg:w-[55%] h-full bg-blue-200 rounded-r-xl hidden lg:flex justify-center items-center">
        <div className="w-[60%] flex-center flex-col">
          {/* <div className="p-7 bg-gray-300 rounded-full"> */}
          <CustomImage src="/images/img-31.png" className="w-[60%]" />
          {/* </div> */}
          <p className="text-2xl text-center mt-5 font-semibold">
            Environment & Millennium Targets LTD
          </p>
          <p className="mt-5 text-center">
            (EMT) comprises a team of experienced consultants who render
            advisory and Training consultancy services in environment management
          </p>
          <div className="flex justify-end w-full mt-6 gap-3">
            <div className="p-[5px] bg-blue-500 rounded-full"></div>
            <div className="p-[5px] bg-blue-500 rounded-full"></div>
            <div className="p-[5px] bg-blue-500 rounded-full"></div>
            <div className="p-[5px] bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="lg:w-[45%] px-4 md:px-0 h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex items-center lg:justify-center mt-40 lg:mt-0 h-full flex-col"
        >
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="flex-center mb-12 gap-4">
              <CustomImage
                src="/images/second-logo.jpeg"
                className="w-12 rounded-full"
              />
              <p className="text-3xl font-semibold">EMT</p>
            </div>
            <CustomInput
              label="Email"
              handleChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <div className="py-4"></div>
            <CustomInput
              label="Password"
              placeholder="Password"
              type="password"
              handleChange={(e) => setPassword(e.target.value)}
              // className="mt-"
            />
            <p className="text-end text-blue-400 text-sm mt-5">
              Forgot Password
            </p>
            {!isLoading ?
              <CustomButton className="py-[14px] text-white mt-6 w-full" />
            : <CustomButton
                loading
                disabled
                className="py-[14px] text-white mt-6 w-full"
              />
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
