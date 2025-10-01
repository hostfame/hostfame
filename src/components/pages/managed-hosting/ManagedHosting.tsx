import React from "react";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import ManagedHostingThatGrows from "@/components/shared/sections/ManagedHostingThatGrows";
import PrioritySupport from "../support/PrioritySupport";
import { Banner } from "@/components/shared/banners/Banner";
import ReviewsSection from "../hosting/web-hosting/reviews/ReviewSection";
import HostingForGrowth from "../home/HostingForGrowth";
import { whatAreSpecialsData } from "@/data/whatAreSpecials.data";
import WhatAreSpecials from "@/components/shared/sections/WhatAreSpecials";
import { Pricing } from "../../shared/pricing/Pricing";
import FaqSection from "../hosting/faqs/FaqSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import { manageHostingPricingData } from "@/data/pricing.data";
import Image from "next/image";
import WhiteButton from "@/components/shared/html/WhiteButton";
import Link from "next/link";
import DualPricing from "@/components/shared/sections/domain-hero/DualPricing";

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
            Powerful
            <br className="hidden md:block" />
            Managed Hosting
            <br className="hidden md:block" />
            Built for Growth
          </>
        }
        image="/assets/manage-hosting.png"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        classNameForImage="w-[80%]"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        // cta={{
        //   text: "Claim Offer Now",
        // }}
        description="Managed Hosting You Can Actually Count On"
        imageProps={{ width: 400, height: 400 }}
        // heightClassName="h-fit xl:h-[660px] xl:max-h-[660px]"
        ctaSection={<VpsHostingCtaSection />}
      />
      <SectionWrapper className="my-12 lg:my-16">
        <Pricing data={manageHostingPricingData} toggleButton={true} />
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

export function VpsHostingCtaSection() {
  return (
    <section className="flex max-[460px]:flex-col flex-row items-center gap-6">
      <WhiteButton className="!rounded">View Plan</WhiteButton>
      <Link
        href={"#"}
        className="flex text-lg items-center text-center border-b  lg:gap-x-2 text-white font-bold"
      >
        Starting @ <DualPricing price="$27.99" pricebdt="৳2,799" />/mo
      </Link>
    </section>
  );
}

export default ManagedHosting;
