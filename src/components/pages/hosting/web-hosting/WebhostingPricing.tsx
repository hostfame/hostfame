"use client";
import { Pricing } from "@/components/shared/pricing/Pricing";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { webHostingPricingData } from "@/data/pricing.data";
import { webHostingPricingBdtData } from "@/data/pricing-bdt.data";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import React, { use } from "react";

const WebhostingPricing = () => {
  const countryCode = useIpProviderContextValue();

  const data =
    countryCode === "BD" ? webHostingPricingBdtData : webHostingPricingData;

  return (
    <SectionWrapper className="my-12 lg:my-16">
      <Pricing data={data} toggleButton={countryCode === "BD" ? true : false} />
    </SectionWrapper>
  );
};

export default WebhostingPricing;
