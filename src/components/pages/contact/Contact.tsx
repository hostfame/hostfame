import { Banner } from "@/components/shared/banners/Banner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";
import ContactTiles from "./ContactTiles";
import PrioritySupport from "../support/PrioritySupport";
import { AnimationBanner } from "../home/Home";
import SupportBanner from "@/components/shared/sections/SupportBanner";

const Contact = () => {
  return (
    <section>
      <Banner
        title={<>We’re Here to Help</>}
        image="/assets/web-hosting/webhero.webp"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        cta={{
          text: "Claim Offer Now",
        }}
        heightClassName="h-fit xl:h-[640px] xl:max-h-[640px]"
        description="Have a question, need support, or just want to chat? Our team is available 24/7 to make sure you get the help you need — quickly and easily."
        imageComponent={<AnimationBanner />}
      />
      <SectionWrapper className="mb-8 mt-4">
        <PrioritySupport />
      </SectionWrapper>
      <SectionWrapper className="-mt-8 mb-4">
        <ContactTiles />
      </SectionWrapper>
      <SectionWrapper className="mt-8 mb-12">
        <SupportBanner />
      </SectionWrapper>
    </section>
  );
};

export default Contact;
