"use client";
import { Pricing } from "@/components/shared/pricing/Pricing";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { webHostingPricingUsData } from "@/data/pricing.data";
import { webHostingPricingBdtData } from "@/data/pricing-bdt.data";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import React, { use } from "react";

const WebhostingPricing = () => {
  const countryCode = useIpProviderContextValue();

  const data =
    countryCode === "BD" ? webHostingPricingBdtData : webHostingPricingUsData;

  return (
    <SectionWrapper className="my-12 lg:my-16">
      <Pricing data={data} toggleButton={true} />
    </SectionWrapper>
  );
};

export default WebhostingPricing;
