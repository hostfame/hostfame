import { PolicyMetaSection } from "@/components/shared/PolicyMetaSection";
import TermsAndConditionBanner, { defaultRefundPolicyBannerData } from "@/components/shared/sections/TermsAndConditionBanner";
import TermsBody from "@/components/shared/sections/TermsBody";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { refundPolicy } from "@/data/refund-policy.data";
import React from "react";

export const dynamic = "force-static";


const RefundPolicyPage = () => {
  return (
    <section className=" pb-8">
      <TermsAndConditionBanner data={defaultRefundPolicyBannerData} />
      <SectionWrapper className=" ">
        <PolicyMetaSection
          effectiveDateISO={refundPolicy.effectiveDateISO}
          description={refundPolicy.intro}
          updatedDateISO={refundPolicy.updatedDateISO}
        />
      </SectionWrapper>
      <SectionWrapper id="privacy-content">
        <TermsBody data={refundPolicy}/>
      </SectionWrapper>
    </section>
  );
};

export default RefundPolicyPage;
