import { Banner } from "@/components/shared/banners/Banner";
import SkilledDedicatedExperts from "@/components/shared/sections/SkilledDedicatedExperts";
import React from "react";
import ReviewsSection from "../hosting/web-hosting/reviews/ReviewSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";

const Support = () => {
  return (
    <section>
      <Banner
        title={
          <>
            Reliable, Friendly, and Fast
            <br className="hidden md:block" />
            <span className="block">Hosting Support</span>
          </>
        }
        image="/assets/web-hosting/webhero.webp"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        cta={{
          text: "Claim Offer Now",
        }}
        description="At Hostfame, we don’t just offer support; we deliver solutions.Our expert team is available 24/7 to help you with any questions, big or small."
      />
      <SkilledDedicatedExperts />
      <ReviewsSection />
      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
    </section>
  );
};

export default Support;
