"use client";
import { customButtonProps } from "@/types";
import { useRouter } from "next/navigation";

const CustomButton = ({
  title,
  className,
  bgColor,
  handleEvent,
  disabled,
  loading,
  children,
  type,
  navigate,
  link,
}: customButtonProps) => {
  const router = useRouter();
  return (
    <>
      {navigate && link ? (
        <button
          disabled={disabled}
          onClick={() => router.push(link)}
          type={type}
          className={`${className} ${
            bgColor ? bgColor : "bg-base-color"
          } md:px-4 hover:opacity-75 font-bold outline-none disabled:opacity-60 text-sm rounded transition duration-500`}
        >
          {loading ? (
            <div
              aria-label="Loading..."
              role="status"
              className="flex justify-center items-center space-x-2"
            >
              <span className="text-[12px] font-bold text-white">
                Please Wait...
              </span>
              {/* <Loader className="animate-spin" /> */}
            </div>
          ) : (
            <div className="flex-center gap-3">
              {title ? title : "Submit"}
              {children && children}
            </div>
          )}
        </button>
      ) : (
        <button
          disabled={disabled}
          onClick={handleEvent}
          type={type}
          className={`${className} ${
            bgColor ? bgColor : "bg-base-color"
          } md:px-4 hover:opacity-75 font-bold outline-none disabled:opacity-60 text-sm rounded transition duration-500`}
        >
          {loading ? (
            <div
              aria-label="Loading..."
              role="status"
              className="flex justify-center items-center space-x-2"
            >
              <span className="text-[12px] font-bold text-white">
                Please Wait...
              </span>
              {/* <Loader className="animate-spin" /> */}
            </div>
          ) : (
            <div className="flex-center gap-3">
              {title ? title : "Submit"}
              {children && children}
            </div>
          )}
        </button>
      )}
    </>
  );
};

export default CustomButton;
