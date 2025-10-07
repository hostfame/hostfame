import AboutUsText from "@/components/pages/about-us/AboutUsText";
import ContactInfoSection from "@/components/pages/about-us/ContactInfoSection";
import TermsAndConditionBanner, { aboutUsBannerData } from "@/components/shared/sections/TermsAndConditionBanner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";

export const dynamic = "force-static";


const RefundPolicyPage = () => {
  return (
    <section className=" pb-8">
      <TermsAndConditionBanner data={aboutUsBannerData} />
      <SectionWrapper id="about-content">
        <AboutUsText/>
      </SectionWrapper>

      <SectionWrapper >
        <ContactInfoSection/>
      </SectionWrapper>
    </section>
  );
};

export default RefundPolicyPage;
