import React from "react";
import SearchDomainName from "./searchDomainName/SearchDomainName";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import WebHostingPartners from "./WebHostingPartners";
import MoneyBack from "./MoneyBack";
import { Pricing } from "./pricing/Pricing";
import WebHostingFeatures from "./WebHostingFeatures";
import QuestionSection from "./QuestionSection";

const WebHosting = () => {
  return (
    <section className="space-y-8 lg:space-y-12 ">
      <SectionWrapper>
        <Pricing />
      </SectionWrapper>

      <SectionWrapper>
        <SearchDomainName />
      </SectionWrapper>

      <WebHostingPartners />

      <SectionWrapper>
        <MoneyBack/>
      </SectionWrapper>

      <SectionWrapper>
        <WebHostingFeatures/>
      </SectionWrapper>

      <SectionWrapper>
        <QuestionSection/>
      </SectionWrapper>
    </section>
  );
};

export default WebHosting;
