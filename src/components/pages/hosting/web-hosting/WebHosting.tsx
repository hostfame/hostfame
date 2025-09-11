import React from "react";
import SearchDomainName from "./searchDomainName/SearchDomainName";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import WebHostingPartners from "./WebHostingPartners";
import MoneyBack from "./MoneyBack";
import WebHostingFeatures from "./WebHostingFeatures";

const WebHosting = () => {
  return (
    <section className="space-y-8 lg:space-y-12 ">
      <SectionWrapper>
        <SearchDomainName />
      </SectionWrapper>

      <WebHostingPartners/>

      <SectionWrapper>
        <MoneyBack/>
      </SectionWrapper>

      <SectionWrapper>
        <WebHostingFeatures/>
      </SectionWrapper>
    </section>
  );
};

export default WebHosting;
