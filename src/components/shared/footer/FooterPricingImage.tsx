"use client";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import Image from "next/image";
import React from "react";

const FooterPricingImage = () => {
  const countryCode = useIpProviderContextValue();

  console.log("countryCode", countryCode);

  if (countryCode !== "BD") {
    return <></>;
  }

  return (
    <div className="mx-auto max-w-7xl rounded-md shadow w-full">
      <Image
        src="/assets/SSLCommerz-Pay-With-logo-All-Size-01.png"
        alt="Supported payment methods"
        width={1920}
        height={400}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
};

export default FooterPricingImage;
