import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";
import DomainPricing from "../../shared/sections/DomainPricing";
import WhyChooseHostfame from "./WhyChooseHostfame";
import FaqSection from "../hosting/faqs/FaqSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import DomainBanner from "@/components/shared/sections/DomainBanner";
import DomainRegistrationSummary from "./DomainRegistrationSummary";
import WhyChooseOurDomain from "./WhyChooseOurDomain";

const Domain = () => {
  return (
    <div>
      <DomainBanner />

      <SectionWrapper className="my-12 md:my-16">
        <DomainPricing />
      </SectionWrapper>

      <SectionWrapper>
        <WhyChooseHostfame />
      </SectionWrapper>

      <FaqSection />

      <WhyChooseOurDomain />
      <SectionWrapper className="my-12 md:my-16">
        <DomainRegistrationSummary />
      </SectionWrapper>

      <SectionWrapper className="mb-12 md:mb-16">
        <SupportBanner />
      </SectionWrapper>
    </div>
  );
};

export default Domain;
