import { redirectLinkConfig } from "@/config/redirect-links.config";

export const getDomainUrl = (domain: string, countryCode: string) => {
  return `${redirectLinkConfig.domainSearchLink}${domain}&currency=${
    countryCode === "BD" ? "2" : "1"
  }`;
};
