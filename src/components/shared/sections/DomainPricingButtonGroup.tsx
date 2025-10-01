"use client";
import React from "react";
import { Button } from "../html/Button";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import { redirectLinkConfig } from "@/config/redirect-links.config";

const DomainPricingButtonGroup = () => {
  const countryCode = useIpProviderContextValue();
  return (
    <div className="flex justify-center gap-3 pt-2">
      <Button
        href={
          redirectLinkConfig.domainLink +
          `&currency=${countryCode === "BD" ? "2" : "1"}`
        }
        target="_blank"
        size="sm"
      >
        Register
      </Button>
      <Button
        href={
          redirectLinkConfig.transferLink +
          `&currency=${countryCode === "BD" ? "2" : "1"}`
        }
        target="_blank"
        variant="bordered"
        size="sm"
      >
        Transfer
      </Button>
    </div>
  );
};

export default DomainPricingButtonGroup;
