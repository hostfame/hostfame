import { Banner } from "@/components/shared/banners/Banner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";
import ContactTiles from "./ContactTiles";
import PrioritySupport from "../support/PrioritySupport";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import Image from "next/image";
import Link from "next/link";
import WhiteButton from "@/components/shared/html/WhiteButton";
import AskAQuestion from "@/components/shared/sections/AskAQuestion";

const Contact = () => {
  return (
    <section>
      <Banner
        topTitle={{
          content: "Get In Touch",
          className: " bg-white/10 backdrop-blur-md",
        }}
        title={<>We’re Here to Help</>}
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        cta={{
          text: "Claim Offer Now"
        }}
        description="Have a question, need support, or just want to chat? Our team is available 24/7 to make sure you get the help you need — quickly and easily."
        heightClassName="h-fit xl:h-[640px] xl:max-h-[640px]"
        ctaSection={<ContactCtaSection />}
        imageProps={{ width: 400, height: 400 }}
        imageComponent={<AnimationBanner />}
      />
      <SectionWrapper className="mb-8 mt-4">
        <PrioritySupport />
      </SectionWrapper>
      <SectionWrapper className="-mt-8 mb-4">
        <ContactTiles />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <AskAQuestion />
      </SectionWrapper>

      <SectionWrapper className="mt-8 mb-12">
        <SupportBanner />
      </SectionWrapper>
    </section>
  );
};

export function AnimationBanner() {
  return (
    <div
      className={` lg:justify-center w-full max-w-md md:max-w-lg lg:max-w-xl  relative flex flex-col items-center justify-end h-full`}
    >
      <section className=" flex justify-end items-end w-full h-full">
        <Image
          src="/assets/banner__contact__image.svg"
          width={350}
          height={350}
          alt="Hosting illustration"
          className="z-10 "
        />
      </section>
      <Image
        src={"/assets/banner__contact__image-sm3.svg"}
        width={70}
        height={70}
        alt="Hosting illustration"
        className=" z-10 absolute left-40 -top-12 swing-bottom"
      />
      <Image
        src={"/assets/banner__contact__image-sm1.svg"}
        alt={"Home Banner"}
        width={180}
        height={180}
        className={`absolute left-38`}
        priority
      />
      <Image
        src={"/assets/banner__contact__image-sm2.svg"}
        width={150}
        height={150}
        alt="Hosting illustration"
        className=" absolute -top-12 left-70 top-bottom2"
      />
      <Image
        src={"/assets/banner__contact__image-sm4.svg"}
        width={100}
        height={100}
        alt="Hosting illustration"
        className=" absolute -top-18 right-5 left-right"
      />
    </div>
  );
}

function ContactCtaSection() {
  return (
    <section className=" ">
      <Link
        href={"#"}
      >
        <WhiteButton className="!rounded !bg-amber-400 !border-0 py-2 px-7 text-lg ">View Details</WhiteButton>
      </Link>
    </section>
  );
}

export default Contact;
