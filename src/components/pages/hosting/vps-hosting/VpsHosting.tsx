import NextLevelVPS from "@/components/shared/sections/NextLevelVPS";
import React from "react";
import CloudVps from "../../../shared/sections/CloudVps";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import PremiumVpsHosting from "@/components/shared/sections/PremiumVpsHosting";
import ReviewsSection from "../web-hosting/reviews/ReviewSection";
import FaqSection from "../faqs/FaqSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import ExpectPerformanceVps from "./ExpectPerformanceVps";
import PromoTopBar from "@/components/shared/promo/PromoTopbar";
import { Banner } from "@/components/shared/banners/Banner";
import Image from "next/image";
import WhiteButton from "@/components/shared/html/WhiteButton";
import Link from "next/link";
import DualPricing from "@/components/shared/sections/domain-hero/DualPricing";
import VPSPricing from "@/components/shared/sections/VPSPricing/VPSPricing";

const VpsHosting = () => {
  return (
    <div>
      <PromoTopBar />
      <Banner
        topTitle={{
          content: "Managed VPS Hosting",
          className: " bg-white/10 backdrop-blur-md"
        }}
        heightClassName="h-fit min-[1024px]:!h-[880px] min-[1090px]:!h-[800px]  min-[1216px]:!h-[750px]"
        title={
          <>
            High-Performance
            <br className="hidden md:block" />
            VPS Hosting Built for
            <br className="hidden md:block" />
            Speed & Control
          </>
        }
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        // cta={{
        //   text: "Claim Offer Now",
        // }}
        description="Power your apps, websites, and projects with full root access, SSD storage, and 24/7 real human support."
        imageProps={{ width: 400, height: 400 }}
        // heightClassName="h-fit xl:h-[640px] xl:max-h-[640px]"
        ctaSection={<VpsHostingCtaSection />}
        imageComponent={<AnimationBanner />}
      />

      <SectionWrapper
        className="mb-12 lg:mb-12 mt-12 lg:-mt-16 !z-50"
        id="vps-hosting-pricing"
      >
        <CloudVps />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <NextLevelVPS />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16" id="vps-pricing">
        <VPSPricing />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <PremiumVpsHosting />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <ExpectPerformanceVps />
      </SectionWrapper>

      <ReviewsSection />

      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
      <FaqSection />
    </div>
  );
};

export function AnimationBanner() {
  return (
    <div
      className={` lg:justify-center w-full max-w-md md:max-w-lg lg:max-w-xl  relative flex flex-col  items-center justify-end h-full`}
    >
      <Image
        src={"/assets/banner__vps__image.svg"}
        width={400}
        height={400}
        alt="Hosting illustration"
        className="z-10 top-bottom2"
      />
      <Image
        src={"/assets/banner__vps__image-sm1.svg"}
        alt={"Home Banner"}
        width={250}
        height={250}
        className={`absolute object-contain top-bottom2 top-0 left-20`}
        priority
      />
    </div>
  );
}

export function VpsHostingCtaSection() {
  return (
    <section className="flex max-[460px]:flex-col flex-row items-center gap-6">
      <WhiteButton href="#vps-hosting-pricing" className="!rounded">
        View Plan
      </WhiteButton>
      <Link
        href={"#"}
        className="flex text-lg items-center text-center border-b  lg:gap-x-2 text-white font-bold"
      >
        Starting @ <DualPricing price="$19.99" pricebdt="৳1,999" />
        /mo
      </Link>
    </section>
  );
}

export default VpsHosting;
