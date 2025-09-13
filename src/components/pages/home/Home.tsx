import React from "react";
import { Banner } from "@/components/shared/banners/Banner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import HostingFlashSale from "./HostingFlashSale";
import ExperienceHostfameAdvantage from "./ExperienceHostfameAdvantage";
import HostingPlan from "@/components/shared/sections/HostingPlan";
import DifferentHostingPlans from "@/components/shared/sections/DifferentHostingPlans";
import {
  differentHostingPlansData,
  hostingForGrowthData,
} from "@/data/home.data";
import SpeedAndSupport from "./SpeedAndSupport";
import HostingForGrowth from "./HostingForGrowth";
import WhiteButton from "@/components/shared/html/WhiteButton";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import PromoTopBar from "@/components/shared/promo/PromoTopbar";
import DomainHero from "@/components/shared/sections/DomainHero";
import WhyChooseHostFame from "@/components/shared/sections/WhyChooseHostFame";
import FaqSection from "../hosting/faqs/FaqSection";
import DataCenters from "@/components/shared/sections/DataCenters";

const Home = () => {
  return (
    <section>
      <PromoTopBar />
      <Banner
        title={
          <>
            Reliable Hosting.
            <br className="hidden md:block" />
            <span className="block">Backed by Humans.</span>
          </>
        }
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        // cta={{
        //   text: "Claim Offer Now",
        // }}
        description="Launch your site in minutes with unmatched speed, free backups, and real human help anytime you need it."
        imageProps={{ width: 400, height: 400 }}
        heightClassName="h-fit xl:h-[580px] xl:max-h-[580px]"
        ctaSection={<HomeCtaSection />}
        imageComponent={
          <div
            className={` lg:justify-center w-full max-w-md md:max-w-lg lg:max-w-xl  relative flex flex-col  items-center justify-end h-full`}
          >
            <Image
              src={
                "https://hostfame.com/wp-content/uploads/2024/01/hosting-01.svg"
              }
              alt={"Home Banner"}
              width={600}
              height={600}
              className={`object-contain   w-[50%]  top-bottom2`}
              priority
            />
            <Image
              src={
                "https://hostfame.com/wp-content/uploads/2024/01/hosting.svg"
              }
              width={600}
              height={600}
              alt="Hosting illustration"
              className="absolute  -bottom-[30%]"
            />
            <Image
              src={"https://hostfame.com/wp-content/uploads/2024/01/left.svg"}
              width={50}
              height={100}
              alt="Hosting illustration"
              className="absolute  h-[50%] left-0 top-0 top-bottom"
            />
            <Image
              src={"https://hostfame.com/wp-content/uploads/2024/01/left.svg"}
              width={50}
              height={100}
              alt="Hosting illustration"
              className="absolute  h-[50%] right-0  -bottom-8 bottom-top"
            />
            <Image
              src={"https://hostfame.com/wp-content/uploads/2024/01/top.svg"}
              width={50}
              height={100}
              alt="Hosting illustration"
              className="absolute  h-[50%] left-8 -bottom-8 bottom-top"
            />
          </div>
        }
      />

      <SectionWrapper className="my-12 lg:my-16">
        <DifferentHostingPlans data={differentHostingPlansData} />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <SpeedAndSupport />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <DomainHero />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <HostingForGrowth data={hostingForGrowthData} />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <DataCenters />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <HostingFlashSale />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <WhyChooseHostFame />
      </SectionWrapper>
      <SectionWrapper className="my-12 lg:my-16">
        <HostingPlan />
      </SectionWrapper>
      <SectionWrapper className="my-12 lg:my-16">
        <ExperienceHostfameAdvantage />
      </SectionWrapper>

      <FaqSection />
    </section>
  );
};

function HomeCtaSection() {
  return (
    <section className=" space-y-5 flex flex-col max-lg:items-center">
      <WhiteButton>Start My Hosting Now</WhiteButton>
      <Link
        href={"#"}
        className="flex  text-lg items-center text-center max-lg:underline lg:gap-x-2 cursor-pointer text-white font-bold"
      >
        Trusted By Agencies & Startups
        <BsArrowRightShort size={24} className="hidden lg:block" />
      </Link>
    </section>
  );
}

export default Home;
