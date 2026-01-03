import React from "react";
import SearchDomainName from "./searchDomainName/SearchDomainName";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import WebHostingPartners from "./WebHostingPartners";
import MoneyBack from "./MoneyBack";
import Hero1 from "@/components/shared/hero/Hero1";
import ReviewsSection from "./reviews/ReviewSection";
import AdvancedFeatures from "./advance-features/AdvanceFeatures";
import FaqSection from "../faqs/FaqSection";
import QuestionSection from "./QuestionSection";
import MigrateYourSite from "./MigrateYourSite";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";
import WhyChooseWebHosting from "./why-choose-web-hosting/WhyChooseWebHosting";
import WhiteButton from "@/components/shared/html/WhiteButton";
import Image from "next/image";
import WebhostingPricing from "./WebhostingPricing";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import { CentralBannerTimer } from "@/components/shared/banners/CentralBannerTimer";

const WebHosting = () => {
  return (
    <section className="">
      <Hero1
        badge="Limited Offer: 72% OFF Hosting"
        title={
          <>
            <span className="whitespace-nowrap">Get Ultra-Fast Hosting</span>
            <br />
            <span className="bg-gradient-to-r from-white via-primary-extralight to-white bg-clip-text text-transparent whitespace-nowrap">with 24/7 Expert Support</span>
          </>
        }
        description={<CentralBannerTimer />}
        primaryCta={{ text: "Get Started - Risk Free", href: "#web-hosting-pricing" }}
      />
      {/* <HostingBenefits /> */}

      <SectionWrapper id="web-hosting-pricing" className="mt-24 lg:mt-32 mb-12 lg:mb-16">
        <WebhostingPricing />
      </SectionWrapper>

      <ReviewsSection />

      <SectionWrapper className="my-12 md:my-16">
        <SearchDomainName />
      </SectionWrapper>

      <WebHostingPartners />

      <SectionWrapper className="my-12 md:my-16">
        <WhyChooseWebHosting />
      </SectionWrapper>

      <SectionWrapper className="mt-12 md:mt-16">
        <MoneyBack />
      </SectionWrapper>

      <WhatMakesUsDifferent />

      {/* <SectionWrapper>
        <WebHostingFeatures />
      </SectionWrapper> */}

      <SectionWrapper className="my-12 md:my-16">
        <QuestionSection />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <AdvancedFeatures />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <MigrateYourSite />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>

      <FaqSection />
    </section>
  );
};

export default WebHosting;
