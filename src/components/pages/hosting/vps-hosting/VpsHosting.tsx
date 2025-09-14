import NextLevelVPS from "@/components/shared/sections/NextLevelVPS";
import React from "react";
import CloudVps from "../../../shared/sections/CloudVps";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import PremiumVpsHosting from "@/components/shared/sections/PremiumVpsHosting";
import ReviewsSection from "../web-hosting/reviews/ReviewSection";
import FaqSection from "../faqs/FaqSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import ExpectPerformanceVps from "./ExpectPerformanceVps";

const VpsHosting = () => {
  return (
    <div>
      <SectionWrapper className="my-12 md:my-16">
        <NextLevelVPS />
      </SectionWrapper>
      <SectionWrapper className="my-12 md:my-16">
        <CloudVps />
      </SectionWrapper>
      <ReviewsSection />
      <SectionWrapper className="my-12 md:my-16">
        <PremiumVpsHosting />
      </SectionWrapper>
      <SectionWrapper className="my-12 md:my-16">
        <ExpectPerformanceVps />
      </SectionWrapper>

      <FaqSection />
      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
    </div>
  );
};

export default VpsHosting;
