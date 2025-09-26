"use client";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import { HostingPlanProps } from "@/types/hostingPlan.types";
import React from "react";

const HostingPriceValue = ({ plan }: { plan: HostingPlanProps }) => {
  const countryCode = useIpProviderContextValue();

  const price = countryCode === "BD" ? plan.priceBdt : plan.price;

  return (
    <span className="text-2xl font-bold text-text-accent sm:text-3xl">
      {price}
    </span>
  );
};

export default HostingPriceValue;
