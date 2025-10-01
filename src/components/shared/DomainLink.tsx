"use client"
import { redirectLinkConfig } from "@/config/redirect-links.config";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import Link from "next/link";
import React from "react";

const DomainLink = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const countryCode = useIpProviderContextValue();

  const currencyQuery = `currency=${countryCode === "BD" ? "2" : "1"}`;

  return (
    <Link
      href={redirectLinkConfig.domainLink + `&${currencyQuery}`}
      className={className}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default DomainLink;
