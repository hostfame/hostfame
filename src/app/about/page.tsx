import AboutUsText from "@/components/pages/about-us/AboutUsText";
import AboutWhatMakesUsDifferent from "@/components/pages/about-us/AboutWhatMakesUsDifferent";
import AdvancedFeaturesSection from "@/components/pages/about-us/AdvancedFeaturesSection";
import ContactInfoSection from "@/components/pages/about-us/ContactInfoSection";
import Founders from "@/components/pages/about-us/Founders";
import OurStrengths from "@/components/pages/about-us/OurStrength";
import VisionMission from "@/components/pages/about-us/VisionMission";
import WhyDifferent from "@/components/pages/about-us/WhyDifferent";
import TermsAndConditionBanner, {
  aboutUsBannerData
} from "@/components/shared/sections/TermsAndConditionBanner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";

export const dynamic = "force-static";

const RefundPolicyPage = () => {
  return (
    <section className=" pb-8">
      <TermsAndConditionBanner data={aboutUsBannerData} />
      <SectionWrapper id="about-content">
        <AboutUsText />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <Founders />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <AdvancedFeaturesSection />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <WhyDifferent />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <VisionMission />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <AboutWhatMakesUsDifferent />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <OurStrengths />
      </SectionWrapper>

      <SectionWrapper>
        <ContactInfoSection />
      </SectionWrapper>
    </section>
  );
};

export default RefundPolicyPage;
