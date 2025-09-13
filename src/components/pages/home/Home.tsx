import React from "react";
import { Banner } from "@/components/shared/banners/Banner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import HostingFlashSale from "./HostingFlashSale";
import ExperienceHostfameAdvantage from "./ExperienceHostfameAdvantage";
import HostingPlan from '@/components/shared/sections/HostingPlan'
import DifferentHostingPlans from "@/components/shared/sections/DifferentHostingPlans";
import { differentHostingPlansData, hostingForGrowthData } from "@/data/home.data";
import SpeedAndSupport from "./SpeedAndSupport";
import HostingForGrowth from "./HostingForGrowth";
import WhiteButton from "@/components/shared/html/WhiteButton";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

const Home = () => {
  return (
    <section>
      <Banner
        title={
          <>
            Reliable Hosting.
            <br className="hidden md:block" />
            <span className="block">Backed by Humans.</span>
          </>
        }
        image="/assets/web-hosting/webhero.webp"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        // cta={{
        //   text: "Claim Offer Now",
        // }}
        description="Launch your site in minutes with unmatched speed, free backups, and real human help anytime you need it."
      />

      <SectionWrapper className="my-12 lg:my-16">
        <DifferentHostingPlans data={differentHostingPlansData} />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <SpeedAndSupport/>
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <HostingForGrowth data={hostingForGrowthData} />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <HostingFlashSale />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <ExperienceHostfameAdvantage />
      </SectionWrapper>
      <SectionWrapper className="my-12 lg:my-16">
        <HostingPlan />
      </SectionWrapper>
    </section>
  );
};

function HomeCtaSection() {
  return (
    <section className=" space-y-5 flex flex-col max-lg:items-center">
      <WhiteButton>Start My Hosting Now</WhiteButton>
      <Link href={"#"} className="flex  text-lg items-center text-center max-lg:underline lg:gap-x-2 cursor-pointer text-white font-bold">
        Trusted By Agencies & Startups
        <BsArrowRightShort size={24} className="hidden lg:block"/>
      </Link>
    </section>
  );
}

export default Home;
