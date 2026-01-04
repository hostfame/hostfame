import NextLevelVPS from "@/components/shared/sections/NextLevelVPS";
import React from "react";
import CloudVps from "../../../shared/sections/CloudVps";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import PremiumVpsHosting from "@/components/shared/sections/PremiumVpsHosting";
import ReviewsSection from "../web-hosting/reviews/ReviewSection";
import FaqSection from "../faqs/FaqSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import ExpectPerformanceVps from "./ExpectPerformanceVps";
import PromoTopBar from "@/components/shared/promo/PromoTopbar";
import Hero1 from "@/components/shared/hero/Hero1";
import Image from "next/image";
import WhiteButton from "@/components/shared/html/WhiteButton";
import Link from "next/link";
import DualPricing from "@/components/shared/sections/domain-hero/DualPricing";
import VPSPricing from "@/components/pages/hosting/vps-hosting/VPSPricing/VPSPricing";

const VpsHosting = () => {
  return (
    <div>
      <PromoTopBar />
      <Hero1
        badge="Managed VPS Hosting"
        title={
          <>
            High-Performance
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-white via-primary-extralight to-white bg-clip-text text-transparent">VPS Hosting</span>
            <br className="hidden md:block" />
            Built for Speed & Control
          </>
        }
        description="Power your apps, websites, and projects with full root access, SSD storage, and 24/7 real human support."
        primaryCta={{ text: "View Plan", href: "#vps-hosting-pricing" }}
        secondaryCta={{
          text: (
            <>
              Starting @ <DualPricing price="$9.99" pricebdt="৳999" /> /mo
            </>
          ),
          href: "#vps-hosting-pricing"
        }}
      />

      <SectionWrapper
        className="mb-12 lg:mb-12 mt-16 lg:mt-24 !z-50"
        id="vps-hosting-pricing"
      >
        <CloudVps />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <NextLevelVPS />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16" id="vps-pricing">
        <VPSPricing />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <PremiumVpsHosting />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <ExpectPerformanceVps />
      </SectionWrapper>

      <ReviewsSection />

      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
      <FaqSection />
    </div>
  );
};


export default VpsHosting;
