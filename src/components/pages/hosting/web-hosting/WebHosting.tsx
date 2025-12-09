import React from "react";
import SearchDomainName from "./searchDomainName/SearchDomainName";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import WebHostingPartners from "./WebHostingPartners";
import MoneyBack from "./MoneyBack";
import { Banner } from "@/components/shared/banners/Banner";
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
      {/* <PromoTopBar /> */}
      <Banner
        topTitle={{
          content: "Limited Offer: 72% OFF Hosting",
          className: " bg-white/10 backdrop-blur-md"
        }}
        // heightClassName="h-fit xl:h-[830px] xl:max-h-[830px]"
        title={
          <>
            Get Ultra-Fast
            <br className="hidden md:block" />
            <span className="">Hosting With 24/7 </span>
            <br className="hidden md:block" />
            <span className="">Expert Support</span>
          </>
        }
        image="/assets/web-hosting/webhero.webp"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        description={
          <section className=" space-y-6">
            <p>
              Perfect for local businesses, stores, and pros <br />
              who need speed, uptime, and real human help.
            </p>

            <div className="flex gap-8 md:gap-20">
              <div className=" flex items-center gap-1 md:gap-2">
                <Image
                  src={"/assets/diamond.svg"}
                  alt={"diamond"}
                  width={40}
                  height={40}
                />
                <p className="text-sm md:text-base">
                  24/7 Chat & Call <br />
                  30 Day Refund
                </p>
              </div>
              <div className=" flex items-center gap-1 md:gap-2">
                <Image
                  src={"/assets/wordpress.svg"}
                  alt={"wordpress"}
                  width={40}
                  height={40}
                />
                <p className="text-sm md:text-base">
                  One Click WordPress <br /> No Hassle. No Stress.
                </p>
              </div>
            </div>

            {/* Add the timer here OR keep your existing placement */}
            <CentralBannerTimer />
          </section>
        }
        ctaSection={<WebHostingCtaSection />}
      />
      {/* <HostingBenefits /> */}

      <SectionWrapper id="web-hosting-pricing" className="my-12 lg:my-16">
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

function WebHostingCtaSection() {
  return (
    <section className="flex items-center gap-6">
      <WhiteButton href="#web-hosting-pricing" className="">
        Get Started - Risk Free
      </WhiteButton>
    </section>
  );
}
export default WebHosting;
