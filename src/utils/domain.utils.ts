import { redirectLinkConfig } from "@/config/redirect-links.config";

export const getDomainUrl = (domain: string) => {
  return `${redirectLinkConfig.domainSearchLink}${domain}`;
};
