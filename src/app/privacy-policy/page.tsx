import TermsAndConditionBanner, { defaultPrivacyBannerData } from "@/components/shared/sections/TermsAndConditionBanner";
import TermsBody from "@/components/shared/sections/TermsBody";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { privacyPolicy } from "@/data/privacy-policies.data";
import React from "react";

export const dynamic = "force-static";


const PrivacyPolicyPage = () => {
  return (
    <section>
      <TermsAndConditionBanner data={defaultPrivacyBannerData} />
      <SectionWrapper id="privacy-content">
        <TermsBody data={privacyPolicy}/>
      </SectionWrapper>
    </section>
  );
};

export default PrivacyPolicyPage;
