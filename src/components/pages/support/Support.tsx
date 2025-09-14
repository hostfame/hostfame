import { Banner } from "@/components/shared/banners/Banner";
import SkilledDedicatedExperts from "@/components/shared/sections/SkilledDedicatedExperts";
import React from "react";
import ReviewsSection from "../hosting/web-hosting/reviews/ReviewSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import HostingSupport from "./HostingSupport";
import { hostingSupportData } from "@/data/support.data";

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
        heightClassName="h-fit xl:h-[680px] xl:max-h-[680px]"
        description="At Hostfame, we don’t just offer support; we deliver solutions.Our expert team is available 24/7 to help you with any questions, big or small."
      />
      <SkilledDedicatedExperts />
      <SectionWrapper className="mb-12 md:mb-16">
        <HostingSupport data={hostingSupportData}/>
      </SectionWrapper>
      <ReviewsSection />
      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
    </section>
  );
};

export default Support;
