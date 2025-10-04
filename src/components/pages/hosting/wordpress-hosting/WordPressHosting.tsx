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
import { wordpressHostingPricingData } from "@/data/pricing.data";
import DualPricing from "@/components/shared/sections/domain-hero/DualPricing";
import ReviewsSection from "../web-hosting/reviews/ReviewSection";
import WordPressHostingPricing from "./WordPressHostingPricing";

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

function WordPressHostingCtaSection() {
  return (
    <section className="flex items-center gap-6">
      <WhiteButton href="#wordpress-hosting-pricing" className="!rounded !text-nowrap">View Pricing</WhiteButton>
      <Link
        href={"#wordpress-hosting-pricing"}
        className="flex text-base md:text-lg items-center text-center max-lg:underline lg:gap-x-2 text-white font-bold underline"
      >
        Starting @ <DualPricing price="$19.99" pricebdt="৳1,999" />/mo
      </Link>
    </section>
  );
}

export default WordPressHosting;
