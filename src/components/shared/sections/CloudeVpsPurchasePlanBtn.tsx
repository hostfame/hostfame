"use client"
import React from "react";
import { Button } from "../html/Button";
import { useIpProviderContextValue } from "@/providers/IpProvider";

const CloudeVpsPurchasePlanBtn = ({ href }: { href: string }) => {
    
    const countryCode = useIpProviderContextValue()

    const currencyQuery = `currency=${countryCode === "BD" ? "2" : "1"}`

  return (
    <Button target="_blank" href={href + `&${currencyQuery}`} variant="bordered" size="sm">
      Purchase Plan
    </Button>
  );
};

export default CloudeVpsPurchasePlanBtn;
