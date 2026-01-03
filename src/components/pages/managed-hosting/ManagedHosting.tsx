import React from "react";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import ManagedHostingThatGrows from "@/components/shared/sections/ManagedHostingThatGrows";
import PrioritySupport from "../support/PrioritySupport";
import Hero1 from "@/components/shared/hero/Hero1";
import ReviewsSection from "../hosting/web-hosting/reviews/ReviewSection";
import HostingForGrowth from "../home/HostingForGrowth";
import { whatAreSpecialsData } from "@/data/whatAreSpecials.data";
import WhatAreSpecials from "@/components/shared/sections/WhatAreSpecials";
import { Pricing } from "../../shared/pricing/Pricing";
import FaqSection from "../hosting/faqs/FaqSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import { manageHostingPricingData } from "@/data/pricing.data";
import Image from "next/image";
import WhiteButton from "@/components/shared/html/WhiteButton";
import Link from "next/link";
import DualPricing from "@/components/shared/sections/domain-hero/DualPricing";
import SearchDomainName from "../hosting/web-hosting/searchDomainName/SearchDomainName";

const ManagedHosting = () => {
  return (
    <section className="">
      <Hero1
        badge="Managed VPS Hosting"
        title={
          <>
            Powerful
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-white via-primary-extralight to-white bg-clip-text text-transparent">Managed Hosting</span>
            <br className="hidden md:block" />
            Built for Growth
          </>
        }
        description="Managed Hosting You Can Actually Count On"
        primaryCta={{ text: "View Plan", href: "#manage-hosting-pricing" }}
        secondaryCta={{ 
          text: (
            <>
              Starting @ <DualPricing price="$27.99" pricebdt="৳2,799" /> /mo
            </>
          ), 
          href: "#manage-hosting-pricing" 
        }}
      />
      <SectionWrapper className="my-12 lg:my-16" id="manage-hosting-pricing">
        <Pricing data={manageHostingPricingData} toggleButton={true} />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <SearchDomainName />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <ManagedHostingThatGrows />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <WhatAreSpecials />
      </SectionWrapper>

      <ReviewsSection />

      {/* <WhatAreSpecials /> */}

      <SectionWrapper className="my-12 md:my-16">
        <PrioritySupport />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
      <FaqSection />
    </section>
  );
};


export default ManagedHosting;
