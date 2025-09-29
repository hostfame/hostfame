import React from "react";
import SearchDomainName from "./searchDomainName/SearchDomainName";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import WebHostingPartners from "./WebHostingPartners";
import MoneyBack from "./MoneyBack";
import { Pricing } from "../../../shared/pricing/Pricing";
import WebHostingFeatures from "./WebHostingFeatures";
import { Banner } from "@/components/shared/banners/Banner";
import PromoTopBar from "@/components/shared/promo/PromoTopbar";
import ReviewsSection from "./reviews/ReviewSection";
import AdvancedFeatures from "./advance-features/AdvanceFeatures";
import FaqSection from "../faqs/FaqSection";
import QuestionSection from "./QuestionSection";
import MigrateYourSite from "./MigrateYourSite";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";
import WhyChooseWebHosting from "./why-choose-web-hosting/WhyChooseWebHosting";
import WhiteButton from "@/components/shared/html/WhiteButton";
import Link from "next/link";
import Image from "next/image";
import { webHostingPricingData } from "@/data/pricing.data";
import WebhostingPricing from "./WebhostingPricing";

const WebHosting = () => {
  return (
    <section className="">
      {/* <PromoTopBar /> */}
      <Banner
        topTitle={{
          content: "Limited Offer: 90% OFF Hosting",
          className: " bg-white/10 backdrop-blur-md",
        }}
        // heightClassName="h-fit xl:h-[830px] xl:max-h-[830px]"
        title={
          <>
            Get Ultra-Fast
            <br className="hidden md:block" />
            <span className="">Hosting With 24/7</span>
            <br className="hidden md:block" />
            <span className="">Expert Support</span>
          </>
        }
        image="/assets/web-hosting/webhero.webp"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        description={
          <section className=" space-y-6">
            <p>
              Perfect for local businesses, stores, and pros who need speed,
              uptime, and real human help.
            </p>

            <section className="flex gap-20">
              <section className=" flex items-center gap-2">
                <Image
                  src={"/assets/diamond.svg"}
                  alt={"diamond"}
                  width={40}
                  height={40}
                />
                <p>
                  24/7 Chat & Call <br />
                  30 Day Refund
                </p>
              </section>
              <section className=" flex items-center gap-2">
                <Image
                  src={"/assets/wordpress.svg"}
                  alt={"wordpress"}
                  width={40}
                  height={40}
                />
                <p>
                  One Click WordPress <br /> No Hassle. No Stress.
                </p>
              </section>
            </section>
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

      <SectionWrapper className="my-12 md:my-16">
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

      <FaqSection />
    </section>
  );
};

function WebHostingCtaSection() {
  return (
    <section className="flex items-center gap-6">
      <WhiteButton href="#web-hosting-pricing" className="">Get Started - Risk Free</WhiteButton>
    </section>
  );
}
export default WebHosting;
