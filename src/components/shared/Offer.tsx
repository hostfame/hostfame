"use client";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import React from "react";
import { BsTags } from "react-icons/bs";

const Offer = () => {
  const countryCode = useIpProviderContextValue();

  const text =
    countryCode === "BD"
      ? "Only ৳999/year Hosting with 24/7 Support"
      : "Only $9.99/year Hosting with 24/7 Support";

  return (
    <section className="flex font-bold  z-40 bg-offer-bg p-2 text-offer-text  w-full justify-center items-center gap-x-1 text-xs">
      <BsTags size={15} />
      {text}
    </section>
  );
};

export default Offer;
