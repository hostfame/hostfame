import { redirectLinkConfig } from "@/config/redirect-links.config";
import Link from "next/link";
import React from "react";

const DomainLink = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={redirectLinkConfig.domainLink}
      className={className}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default DomainLink;
