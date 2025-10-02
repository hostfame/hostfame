"use client";
import { Pricing } from "@/components/shared/pricing/Pricing";
import { wordpressHostingPricingData } from "@/data/pricing.data";
import { wordpressHostingBdtPricingData } from "@/data/pricing-bdt.data";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import React from "react";

const WordPressHostingPricing = () => {
  const countryCode = useIpProviderContextValue();

  const data =
    countryCode === "BD" ? wordpressHostingBdtPricingData : wordpressHostingPricingData;

  return (
      <Pricing data={data} toggleButton={true} />
  );
};

export default WordPressHostingPricing;
