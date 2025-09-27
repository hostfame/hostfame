import React from "react";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Banner } from "@/components/shared/banners/Banner";
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
import { wordpressHostingPricingUsData } from "@/data/pricing.data";

const WordPressHosting = () => {
  return (
    <section className="">
      <Banner
        topTitle={{
          content: "WordPress Hosting",
          className: " bg-white/10 backdrop-blur-md",
        }}
        title={
          <>
            Turbocharge Your
            <br className="hidden md:block" />
            <span className="block">WordPress Website</span>
          </>
        }
        image="/assets/hero-img-1.webp"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        ctaSection={<WordPressHostingCtaSection />}
        description={`Blazing speed, free backups, and real human support optimized for creators, consultants, and small businesses who rely on WordPress to grow.`}
      />
      <SectionWrapper>
        <WordPressHostingFeatures />
      </SectionWrapper>
      <SectionWrapper className="my-12 lg:my-16">
        <Pricing data={wordpressHostingPricingUsData} toggleButton={true} />
      </SectionWrapper>
      <HostingBenefits />
      <SectionWrapper>
        <ManagedHostingHighlights
          data={wordpressHostingManagedHostingHighlightsData}
        />
      </SectionWrapper>
      <SectionWrapper>
        <AllHostingPlans data={wordpressHostingAllHostingPlans} />
      </SectionWrapper>
      <FaqSection />
      <WhyChooseWordpressHosting />
      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
    </section>
  );
};

function WordPressHostingCtaSection() {
  return (
    <section className="flex items-center gap-6">
      <WhiteButton className="!rounded">View Plan</WhiteButton>
      <Link
        href={"#"}
        className="flex text-lg items-center text-center max-lg:underline lg:gap-x-2 cursor-pointer text-white font-bold underline"
      >
        Starting @ $19.99/mo
      </Link>
    </section>
  );
}

export default WordPressHosting;
