"use client";
import { WebHostingData } from "@/data/hosting.data";
import { IoSearch } from "react-icons/io5";
import React from "react";
import { useForm } from "react-hook-form";
import { getDomainUrl } from "@/utils/domain.utils";
import { useIpProviderContextValue } from "@/providers/IpProvider";

type FormValues = {
  domain: string;
};

const SubmitDomainName = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const countryCode = useIpProviderContextValue()

  const handleSearch = (data: FormValues) => {
    const url = getDomainUrl(data.domain, countryCode);

    // open the url in a new tab
    window.open(url, "_blank");
  };
  return (
    <form
      className="flex flex-row border border-gray-200 rounded-xl w-full mx-auto md:mx-0"
      onSubmit={handleSubmit(handleSearch)}
    >
      <input
        type="text"
        {...register("domain", { required: true })}
        placeholder={WebHostingData.domainNameSection.searchPlaceholder}
        className="flex-1 px-2 py-3 sm:px-4 sm:py-4 bg-gray-100 text-lg lg:text-xl outline-none border-none rounded-l-xl font-medium"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-1 bg-gradient-to-r from-primary-light via-primary-light to-primary text-white font-semibold text-lg lg:text-xl px-2 sm:px-7 md:px-9 py-3 sm:py-4 rounded-l-none rounded-r-xl hover:opacity-90 transition"
      >
        <IoSearch size={20} /> Search
      </button>
    </form>
  );
};

export default SubmitDomainName;
