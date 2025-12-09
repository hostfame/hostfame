import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";
import DomainPricing from "../../shared/sections/DomainPricing";
import WhyChooseHostfame from "./WhyChooseHostfame";
import FaqSection from "../hosting/faqs/FaqSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import DomainBanner from "@/components/shared/sections/DomainBanner";
import DomainRegistrationSummary from "./DomainRegistrationSummary";
import WhyChooseOurDomain from "./WhyChooseOurDomain";
import HowDomainWorks from "./HowDomainWorks";
import DomainTransferSection from "./DomainTransferSection";
import DomainExtensionsGuide from "./DomainExtensionsGuide";
import DomainStatsSection from "./DomainStatsSection";

const Domain = () => {
  return (
    <section>
      <DomainBanner />

      <SectionWrapper className="my-12 md:my-16">
        <DomainPricing />
      </SectionWrapper>

      <HowDomainWorks />

      <SectionWrapper>
        <WhyChooseHostfame />
      </SectionWrapper>

      <DomainExtensionsGuide />

      <WhyChooseOurDomain />

      <DomainTransferSection />

      <DomainStatsSection />

      <SectionWrapper className="my-12 md:my-16">
        <DomainRegistrationSummary />
      </SectionWrapper>

      <SectionWrapper className="mb-12 md:mb-16">
        <SupportBanner />
      </SectionWrapper>
      
      <FaqSection />
    </section>
  );
};

export default Domain;
