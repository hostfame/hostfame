"use client";
import { WebHostingData } from "@/data/hosting.data";
import { IoSearch } from "react-icons/io5";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  domain: string;
};

const SubmitDomainName = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const handleSearch = (data: FormValues) => {
    console.log("Domain searched:", data.domain);
  };

  return (
    <form
      className="flex flex-row max-w-xs md:max-w-md lg:max-w-xl mx-auto md:mx-0"
      onSubmit={handleSubmit(handleSearch)}
    >
      <input
        type="text"
        {...register("domain", { required: true })}
        placeholder={WebHostingData.domainNameSection.searchPlaceholder}
        className="flex-1 px-3 py-3 sm:px-4 sm:py-4 bg-[#F3F3F5] text-sm sm:text-base outline-none border-none rounded-t-md sm:rounded-t-none sm:rounded-l-md"
      />
      <button
        type="submit"
        className="flex items-center justify-center cursor-pointer gap-1 sbg-gradient-to-r from-primary-blue to-secondary-blue text-white font-semibold text-sm sm:text-base px-4 sm:px-7 md:px-9 py-3 sm:py-4 rounded-l-none rounded-r-md hover:opacity-90 transition"
      >
        <IoSearch size={20}/> Search
      </button>
    </form>
  );
};

export default SubmitDomainName;
