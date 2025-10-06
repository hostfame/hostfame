import { PolicyMetaSection } from "@/components/shared/PolicyMetaSection";
import TermsAndConditionBanner from "@/components/shared/sections/TermsAndConditionBanner";
import TermsBody from "@/components/shared/sections/TermsBody";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { termsData } from "@/data/terms-and-services.data";
import React from "react";

export const dynamic = "force-static";

const TermsAndConditionPage = () => {
  return (
    <section className=" pb-8">
      <TermsAndConditionBanner />
      <SectionWrapper className=" ">
        <PolicyMetaSection
          effectiveDateISO={termsData.effectiveDateISO}
          description={termsData.intro}
          updatedDateISO={termsData.updatedDateISO}
        />
      </SectionWrapper>
      <SectionWrapper id="tos-content">
        <TermsBody />
      </SectionWrapper>
    </section>
  );
};

export default TermsAndConditionPage;
