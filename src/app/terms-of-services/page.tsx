import TermsAndConditionBanner from "@/components/shared/sections/TermsAndConditionBanner";
import TermsBody from "@/components/shared/sections/TermsBody";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";

export const dynamic = "force-static";

const TermsAndConditionPage = () => {
  return (
    <section>
      <TermsAndConditionBanner />
      <SectionWrapper id="tos-content">
        <TermsBody />
      </SectionWrapper>
    </section>
  );
};

export default TermsAndConditionPage;
