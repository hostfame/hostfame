"use client";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import React from "react";

const SearchDomainDomainPriceValue = ({
  priceUsd,
  priceBdt,
}: {
  priceUsd: string;
  priceBdt: string;
}) => {
  const countryCode = useIpProviderContextValue();

  const price = countryCode === "BD" ? priceBdt : priceUsd;

  return <p className=" text-text font-semibold text-lg">{price}</p>;
};

export default SearchDomainDomainPriceValue;
