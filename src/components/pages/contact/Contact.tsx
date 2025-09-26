import { Banner } from "@/components/shared/banners/Banner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";
import ContactTiles from "./ContactTiles";
// import PrioritySupport from "../support/PrioritySupport";
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
        // heightClassName="h-fit lg:h-[550px] lg:max-h-[550px]"
        ctaSection={<ContactCtaSection />}
        imageProps={{ width: 400, height: 400 }}
        imageComponent={<AnimationBanner />}
        classNameForTitle="text-nowrap"
      />
      {/* <SectionWrapper className="mb-8 mt-4">
        <PrioritySupport />
      </SectionWrapper> */}
      <SectionWrapper className=" mt-8">
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
      className={` w-full relative  max-lg:mt-[14%] flex justify-center items-center  max-sm:scale-90`}
    >
      
      <Image
        src={"/assets/banner__contact__image-sm3.svg"}
        width={70}
        height={70}
        alt="Hosting illustration"
        className=" z-10 absolute left-[10%]   -top-[10%] swing-bottom"
      />
      <Image
        src={"/assets/banner__contact__image-sm1.svg"}
        alt={"Home Banner"}
        width={180}
        height={180}
        className={` left-[25%] max-sm:scale-90`}
        priority
      />
      <section className=" flex justify-end items-end w-fit h-fit -ml-[15%]">
        <Image
          src="/assets/banner__contact__image.svg"
          width={350}
          height={350}
          alt="Hosting illustration"
          className="z-10   "
        />
      </section>
      <Image
        src={"/assets/banner__contact__image-sm2.svg"}
        width={150}
        height={150}
        alt="Hosting illustration"
        className=" absolute max-sm:scale-90 -top-[20%] left-[40%] top-bottom2"
      />
      <Image
        src={"/assets/banner__contact__image-sm4.svg"}
        width={100}
        height={100}
        alt="Hosting illustration"
        className=" absolute   right-0 top-0   left-right"
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
