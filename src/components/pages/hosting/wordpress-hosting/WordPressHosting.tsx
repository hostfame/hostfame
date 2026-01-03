import React from "react";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import Hero1 from "@/components/shared/hero/Hero1";
import WordPressHostingFeatures from "./WordPressHostingFeatures";
import WhyChooseWordpressHosting from "@/components/shared/sections/WhyChooseWordpressHosting";
import {
  wordpressHostingAllHostingPlans,
  wordpressHostingManagedHostingHighlightsData,
} from "@/types/wordpress-hosting/wordpress-hosting.data";
import ManagedHostingHighlights from "@/components/shared/sections/ManagedHostingHighlights";
import FaqSection from "../faqs/FaqSection";
import AllHostingPlans from "@/components/shared/sections/AllHostingPlans";
import HostingBenefits from "../web-hosting/HostingBenefits";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import WhiteButton from "@/components/shared/html/WhiteButton";
import Link from "next/link";
import { Pricing } from "@/components/shared/pricing/Pricing";
import { wordpressHostingPricingData } from "@/data/pricing.data";
import DualPricing from "@/components/shared/sections/domain-hero/DualPricing";
import ReviewsSection from "../web-hosting/reviews/ReviewSection";
import WordPressHostingPricing from "./WordPressHostingPricing";
import SearchDomainName from "../web-hosting/searchDomainName/SearchDomainName";

const WordPressHosting = () => {
  return (
    <section className="">
      <Hero1
        badge="WordPress Hosting"
        title={
          <>
            Turbocharge Your
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-white via-primary-extralight to-white bg-clip-text text-transparent">WordPress Website</span>
          </>
        }
        description="Blazing speed, free backups, and real human support optimized for creators, consultants, and small businesses who rely on WordPress to grow."
        primaryCta={{ text: "View Pricing", href: "#wordpress-hosting-pricing" }}
        secondaryCta={{ 
          text: (
            <>
              Starting @ <DualPricing price="$19.99" pricebdt="৳1,999" /> /mo
            </>
          ), 
          href: "#wordpress-hosting-pricing" 
        }}
      />

      {/* <SectionWrapper className=" my-12 md:my-16">
        <WordPressHostingFeatures />
      </SectionWrapper> */}

      <SectionWrapper id="wordpress-hosting-pricing" className="my-12 md:my-16">
        <WordPressHostingPricing />
      </SectionWrapper>

      {/* <SectionWrapper className="my-12 md:my-16">
        <HostingBenefits />
      </SectionWrapper> */}

      <ReviewsSection />

      <SectionWrapper className="my-12 md:my-16">
        <SearchDomainName />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <ManagedHostingHighlights
          data={wordpressHostingManagedHostingHighlightsData}
        />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <AllHostingPlans data={wordpressHostingAllHostingPlans} />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <WhyChooseWordpressHosting />
      </SectionWrapper>

      <FaqSection />
    </section>
  );
};


export default WordPressHosting;
