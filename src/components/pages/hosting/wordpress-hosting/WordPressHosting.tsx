import React from "react";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Banner } from "@/components/shared/banners/Banner";
import WordPressHostingFeatures from "./WordPressHostingFeatures";
import WhyChooseWordpressHosting from "@/components/shared/sections/WhyChooseWordpressHosting";
import { wordpressHostingAllHostingPlans, wordpressHostingManagedHostingHighlightsData } from "@/types/wordpress-hosting/wordpress-hosting.data";
import ManagedHostingHighlights from "@/components/shared/sections/ManagedHostingHighlights";
import FaqSection from "../faqs/FaqSection";
import AllHostingPlans from "@/components/shared/sections/AllHostingPlans";

const WordPressHosting = () => {
  return (
    <section className="">
      <Banner
        title={
          <>
            Get Fastest Hosting
            <br className="hidden md:block" />
            <span className="sr-only"> — </span>
            <span className="block">Up to 76% Discount</span>
          </>
        }
        image="/assets/web-hosting/webhero.webp"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        cta={{
          text: "Claim Offer Now",
        }}
        lists={[
          "Free .COM Domain on Trinnially",
          "Genuine & Latest Control Panel",
          "Free WildCard SSL for Lifetime",
        ]}
      />
      <WordPressHostingFeatures />
      <SectionWrapper>
        <ManagedHostingHighlights data={wordpressHostingManagedHostingHighlightsData}/>
      </SectionWrapper>

      <SectionWrapper>
        <AllHostingPlans data={wordpressHostingAllHostingPlans} />
      </SectionWrapper>
      <WhyChooseWordpressHosting />
      <FaqSection />
    </section>
  );
};

export default WordPressHosting;
