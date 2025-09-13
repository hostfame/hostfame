import { Banner } from "@/components/shared/banners/Banner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";
import HostingFlashSale from "./HostingFlashSale";
import ExperienceHostfameAdvantage from "./ExperienceHostfameAdvantage";
import HostingPlan from '@/components/shared/sections/HostingPlan'

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
        cta={{
          text: "Claim Offer Now",
        }}
        description="Launch your site in minutes with unmatched speed, free backups, and real human help anytime you need it."
      />

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

export default Home;
