import { Banner } from "@/components/shared/banners/Banner";
import SkilledDedicatedExperts from "@/components/shared/sections/SkilledDedicatedExperts";
import React from "react";
import ReviewsSection from "../hosting/web-hosting/reviews/ReviewSection";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import HostingSupport from "./HostingSupport";
import { hostingSupportData } from "@/data/support.data";
import Link from "next/link";
import Image from "next/image";
import AskAQuestion from "@/components/shared/sections/AskAQuestion";
import FaqSection from "../hosting/faqs/FaqSection";


const Support = () => {
  return (
    <section>
      <Banner
        topTitle={{
          content: "24/7 Support",
          className: " bg-white/10 backdrop-blur-md",
        }}
        title={
          <>
            Reliable, Friendly, and Fast Hosting Support
          </>
        }
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        cta={{
          text: "Claim Offer Now"
        }}
        // heightClassName="h-fit xl:h-[680px] xl:max-h-[680px]"
        description="At Hostfame, we don't just offer support; we deliver solutions.Our expert team is available 24/7 to help you with any questions, big or small."
        ctaSection={<SupportCtaSection />}
        imageComponent={<AnimationBanner />}
      />
      <SkilledDedicatedExperts />
      <SectionWrapper className=" mb-12 md:mb-16">
        <HostingSupport data={hostingSupportData} />
      </SectionWrapper>


      <ReviewsSection />

      <SectionWrapper className="my-12 md:my-16">
        <AskAQuestion />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <SupportBanner />
      </SectionWrapper>
      <FaqSection />
    </section>
  );
};

function AnimationBanner() {
  return (
    <div
      className={` lg:justify-center w-full max-w-md md:max-w-lg lg:max-w-xl  relative flex flex-col  items-center justify-end h-full`}
    >
      <Image
        src={"/assets/banner__support__image.svg"}
        width={300}
        height={300}
        alt="Support illustration"
        className=" absolute right-15"
      />
      <Image
        src={"/assets/banner__support__image-sm-1.svg"}
        width={200}
        height={200}
        alt="Support illustration"
        className="absolute top-0 right-50 swing-left"
      />
      <Image
        src={"/assets/banner__support__image-sm-2.svg"}
        width={200}
        height={200}
        alt="Support illustration"
        className="absolute bottom-0 right-5 swing-right"
      />
      <Image
        src={"/assets/banner__support__image-sm-3.svg"}
        width={50}
        height={50}
        alt="Support illustration"
        className="absolute bottom-18 left-35 rotate-clockwise"
      />
      <Image
        src={"/assets/banner__support__image-sm-4.svg"}
        width={75}
        height={75}
        alt="Support illustration"
        className="absolute bottom-0 left-50 rotate-clockwise"
      />
      <Image
        src={"/assets/banner__support__image-sm-5.svg"}
        width={55}
        height={55}
        alt="Support illustration"
        className="absolute top-0 right-31"
      />
      <Image
        src={"/assets/banner__support__image-sm-6.svg"}
        width={50}
        height={50}
        alt="Support illustration"
        className="absolute top-10 right-10 rotate-clockwise"
      />
      <Image
        src={"/assets/banner__support__image-sm-7.svg"}
        width={52}
        height={52}
        alt="Support illustration"
        className="absolute top-30 right-0 "
      />
    </div>
  );
}

function SupportCtaSection() {
  return (
    <section className="flex items-center gap-6">
      <Link
        href={"http://tawk.to/"}
        target="_blank"
        className="flex text-lg items-center text-center max-lg:underline gap-x-2 text-white font-bold underline"
      >
        <Image
          src={"/assets/support.svg"}
          alt="support"
          height={30}
          width={30}
        />
        24/7 Hours Dedicated Support
      </Link>
    </section>
  );
}

export default Support;
