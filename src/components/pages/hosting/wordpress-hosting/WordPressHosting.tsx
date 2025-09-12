import React from "react";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Banner } from "@/components/shared/banners/Banner";
import WordPressHostingFeatures from "./WordPressHostingFeatures";
import WhyChooseWordpressHosting from "@/components/shared/sections/WhyChooseWordpressHosting";
import { wordpressHostingAllHostingPlans, wordpressHostingManagedHostingHighlightsData } from "@/types/wordpress-hosting/wordpress-hosting.data";
import ManagedHostingHighlights from "@/components/shared/sections/ManagedHostingHighlights";
import FaqSection from "../faqs/FaqSection";
import AllHostingPlans from "@/components/shared/sections/AllHostingPlans";
import HostingBenefits from "../web-hosting/HostingBenefits";
import SupportBanner from "@/components/shared/sections/SupportBanner";

const WordPressHosting = () => {
  return (
    <section className="">
      <Banner
        title={
          <>
            Turbocharge Your
            <br className="hidden md:block" />
            <span className="block">WordPress Website</span>
          </>
        }
        image="/assets/web-hosting/webhero.webp"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        cta={{
          text: "Claim Offer Now",
        }}
        lists={[
          "Blazing speed to keep your WordPress site running fast.",
          "Free backups so your data is always safe.",
          "Human support designed for creators, consultants, and small businesses.",
        ]}
      />
      <WordPressHostingFeatures />
      <HostingBenefits />
      <SectionWrapper>
        <ManagedHostingHighlights data={wordpressHostingManagedHostingHighlightsData}/>
      </SectionWrapper>
      <AllHostingPlans data={wordpressHostingAllHostingPlans}/>
      <FaqSection />
      <WhyChooseWordpressHosting/>
      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
    </section>
  );
};

export default WordPressHosting;
