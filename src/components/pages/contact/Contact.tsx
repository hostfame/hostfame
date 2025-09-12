import { Banner } from "@/components/shared/banners/Banner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";
import ContactTiles from "./ContactTiles";
import PrioritySupport from "../support/PrioritySupport";

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
        description="Have a question, need support, or just want to chat? Our team is available 24/7 to make sure you get the help you need — quickly and easily."
      />
      <SectionWrapper className="my-12 md:my-16">
        <PrioritySupport />
      </SectionWrapper>
      <SectionWrapper className="my-12 md:my-16">
        <ContactTiles />
      </SectionWrapper>
    </section>
  );
};

export default Contact;
