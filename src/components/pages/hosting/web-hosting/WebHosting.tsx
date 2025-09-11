import React from "react";
import SearchDomainName from "./searchDomainName/SearchDomainName";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import WebHostingPartners from "./WebHostingPartners";
import { Pricing } from "./pricing/Pricing";

const WebHosting = () => {
  return (
    <section className="space-y-8 lg:space-y-12 ">
      <SectionWrapper>
        <SearchDomainName />
        <Pricing />
      </SectionWrapper>

      <WebHostingPartners />
    </section>
  );
};

export default WebHosting;
