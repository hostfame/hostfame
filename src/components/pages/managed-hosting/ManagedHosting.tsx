import React from "react";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import ManagedHostingThatGrows from "@/components/shared/sections/ManagedHostingThatGrows";
import PrioritySupport from "../support/PrioritySupport";
import { Banner } from "@/components/shared/banners/Banner";
import { VpsHostingCtaSection } from "../hosting/vps-hosting/VpsHosting";
import ReviewsSection from "../hosting/web-hosting/reviews/ReviewSection";
import HostingForGrowth from "../home/HostingForGrowth";
import { whatAreSpecialsData } from "@/data/whatAreSpecials.data";
import WhatAreSpecials from "@/components/shared/sections/WhatAreSpecials";
import { Pricing } from "../hosting/web-hosting/pricing/Pricing";
import FaqSection from "../hosting/faqs/FaqSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";

const ManagedHosting = () => {
  return (
    <section className="">
      <Banner
        topTitle={{
          content: "Managed VPS Hosting",
          className: " bg-white/10 backdrop-blur-md",
        }}
        title={
          <>
            High-Performance
            <br className="hidden md:block" />
            VPS Hosting Built for
            <br className="hidden md:block" />
            Speed & Control
          </>
        }
        image="/assets/manage-hosting.png"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        classNameForImage="w-[80%]"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        // cta={{
        //   text: "Claim Offer Now",
        // }}
        description="Power your apps, websites, and projects with full root access, SSD storage, and 24/7 real human support."
        imageProps={{ width: 400, height: 400 }}
        heightClassName="h-fit xl:h-[580px] xl:max-h-[580px]"
        ctaSection={<VpsHostingCtaSection />}
      />
      <SectionWrapper>
        <Pricing />
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
      <FaqSection />
      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
    </section>
  );
};

export default ManagedHosting;
