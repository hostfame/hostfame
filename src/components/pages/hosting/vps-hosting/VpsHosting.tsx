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

const VpsHosting = () => {
  return (
    <div>
      <PromoTopBar />
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
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        // cta={{
        //   text: "Claim Offer Now",
        // }}
        description="Power your apps, websites, and projects with full root access, SSD storage, and 24/7 real human support."
        imageProps={{ width: 400, height: 400 }}
        heightClassName="h-fit xl:h-[580px] xl:max-h-[580px]"
        ctaSection={<VpsHostingCtaSection />}
        imageComponent={<AnimationBanner />}
      />

      <SectionWrapper className="my-12 md:my-16">
        <NextLevelVPS />
      </SectionWrapper>
      <SectionWrapper className="my-12 md:my-16">
        <CloudVps />
      </SectionWrapper>
      <ReviewsSection />
      <SectionWrapper className="my-12 md:my-16">
        <PremiumVpsHosting />
      </SectionWrapper>
      <SectionWrapper className="my-12 md:my-16">
        <ExpectPerformanceVps />
      </SectionWrapper>

      <FaqSection />
      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
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

function VpsHostingCtaSection() {
  return (
    <section className="flex items-center gap-6">
      <WhiteButton className="!rounded">View Plan</WhiteButton>
      <Link
        href={"#"}
        className="flex text-lg items-center text-center max-lg:underline lg:gap-x-2 cursor-pointer text-white font-bold underline"
      >
        Starting @ $19.99/mo
      </Link>
    </section>
  );
}

export default VpsHosting;
