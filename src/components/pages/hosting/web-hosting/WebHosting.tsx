import React from "react";
import SearchDomainName from "./searchDomainName/SearchDomainName";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import WebHostingPartners from "./WebHostingPartners";
import MoneyBack from "./MoneyBack";
import { Pricing } from "./pricing/Pricing";
import WebHostingFeatures from "./WebHostingFeatures";
import { Banner } from "@/components/shared/banners/Banner";
import PromoTopBar from "@/components/shared/promo/PromoTopbar";
import HostingBenefits from "./HostingBenefits";
import ReviewsSection from "./reviews/ReviewSection";
import AdvancedFeatures from "./advance-features/AdvanceFeatures";
import FaqSection from "../faqs/FaqSection";

const WebHosting = () => {
  return (
    <section className="">
      <PromoTopBar />

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
        bgGradient="linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)"
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
      <HostingBenefits />

      <SectionWrapper>
        <Pricing />
      </SectionWrapper>

      <ReviewsSection />

      <SectionWrapper>
        <SearchDomainName />
      </SectionWrapper>

      <WebHostingPartners />

      <SectionWrapper className="mt-12 md:mt-16">
        <MoneyBack />
      </SectionWrapper>

      <SectionWrapper>
        <WebHostingFeatures />
      </SectionWrapper>
      <AdvancedFeatures />
      <FaqSection />
    </section>
  );
};

export default WebHosting;
