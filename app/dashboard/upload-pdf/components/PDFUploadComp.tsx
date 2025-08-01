"use client";
import CustomButton from "@/components/CustomButton";
import DropDown from "@/components/CustomDropdown";
import CustomInput from "@/components/CustomInput";
import React, { FormEvent, useState } from "react";
import { pdfDropdown } from "../../pdf/constants";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

const PDFUploadComp = () => {
  const [file, setFile] = useState<any>(null);
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (!state || !file) {
      toast.error("Please you cannot submit empty fields");
    }
    try {
      await uploadNewFile().then(async (e) => {
        await axios.post(`/api/upload`, {
          upload: e.secure_url,
          category: state,
          name: name,
        });
      });
      toast.success("Submitted successfully");
      router.refresh();
      setFile(null);
      setState("");
      setName("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };

  const uploadNewFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rjgyqmly");
    setIsLoading(true);
    const data = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((r) => r.json())
      .catch((error) => {
        toast.error(error);
      });

    return data;
  };

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="rounded shadow-2xl border p-8 mt-10 bg-white">
        <form
          onSubmit={handleSubmit}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="">
            <label className="text-sm md:text-base font-semibold">File</label>

            <input
              // label="File"
              placeholder="file"
              type="file"
              className="mt-3"
              onChange={handleFileChange}
              // value={file}
            />
          </div>
          <DropDown
            items={pdfDropdown}
            handleChange={(e: any) => setState(e.target.value)}
            label="Categories"
            value={state}
          />
          <div>
            <CustomInput
              value={name}
              handleChange={(e: any) => setName(e.target.value)}
              placeholder="Name"
              label="Name"
            />
          </div>

          <div className="md:col-span-2 lg:col-span-4 flex justify-end">
            {!isLoading ? (
              <CustomButton
                className="py-3 w-full md:w-36 text-white"
                type="submit"
              />
            ) : (
              <CustomButton
                className="py-3 w-full md:w-36 text-white"
                disabled
                loading
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PDFUploadComp;
