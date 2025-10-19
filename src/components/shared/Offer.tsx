"use client";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import React from "react";
import { BsTags } from "react-icons/bs";

const Offer = () => {
  const countryCode = useIpProviderContextValue();


  
  const text =
    countryCode === "BD"
      ? ".COM Domains Only ৳888/Year (Limited Time Offer)"
      : ".COM Domains Only $6.99/Year (Limited Time Offer)";

  return (
    <section className="flex font-bold  z-40 bg-offer-bg p-2 text-offer-text  w-full justify-center items-center gap-x-1 text-xs">
      <BsTags size={15} />
      {text}
    </section>
  );
};

export default Offer;
