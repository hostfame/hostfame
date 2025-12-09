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
import Link from "next/link";
import Image from "next/image";
import PromoTopBar from "@/components/shared/promo/PromoTopbar";
import DomainHero from "@/components/shared/sections/DomainHero";
import WhyChooseHostFame from "@/components/shared/sections/WhyChooseHostFame";
import FaqSection from "../hosting/faqs/FaqSection";
import DataCenters from "@/components/shared/sections/DataCenters";


export const classNameForWhiteHover =
  "hover:scale-[1.05] duration-300";

const Home = () => {
  return (
    <section>
      <Banner
        topTitle={{
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23.9799 11.9805C23.9799 10.3545 23.2659 8.8205 22.0549 7.8565C22.1949 6.2345 21.6149 4.6455 20.4649 3.4945C19.3149 2.3455 17.7299 1.7635 16.1879 1.9395C14.1739 -0.616499 9.82288 -0.664499 7.85588 1.9045C4.62288 1.5205 1.51388 4.5645 1.93988 7.7725C-0.616121 9.7865 -0.665121 14.1375 1.90488 16.1055C1.76488 17.7275 2.34488 19.3165 3.49488 20.4675C4.64488 21.6165 6.23188 22.1985 7.77188 22.0225C9.78588 24.5785 14.1369 24.6265 16.1039 22.0575C17.7239 22.1965 19.3139 21.6185 20.4649 20.4675C21.6139 19.3175 22.1939 17.7275 22.0199 16.1905C23.2659 15.1425 23.9799 13.6085 23.9799 11.9825V11.9805ZM7.97988 8.9805C7.98588 7.6725 9.97388 7.6725 9.97988 8.9805C9.97388 10.2885 7.98588 10.2885 7.97988 8.9805ZM10.8119 15.5355C10.5039 15.9985 9.87888 16.1165 9.42488 15.8125C8.96488 15.5065 8.84088 14.8855 9.14788 14.4255L13.1479 8.4255C13.4539 7.9665 14.0739 7.8405 14.5349 8.1485C14.9949 8.4545 15.1189 9.0755 14.8119 9.5355L10.8119 15.5355ZM14.9799 15.9805C13.6719 15.9745 13.6719 13.9865 14.9799 13.9805C16.2879 13.9865 16.2879 15.9745 14.9799 15.9805Z"
                fill="#FFC107"
              ></path>
            </svg>
          ),
          content: "Upto 72% Off on Web Hosting",
          className: " border rounded-full",
        }}
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
        // heightClassName="h-fit xl:min-h-[580px] xl:max-h-[630px]"
        ctaSection={<HomeCtaSection />}
        imageComponent={<AnimationBanner />}
        promoTemplate={<PromoTopBar />}
      />

      <SectionWrapper id="different-hosting-plans" className="my-12 lg:my-16">
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
        <WhyChooseHostFame />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <HostingPlan />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <HostingFlashSale />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <DataCenters />
      </SectionWrapper>

      <SectionWrapper className="my-12 lg:my-16">
        <ExperienceHostfameAdvantage />
      </SectionWrapper>

      <FaqSection />
    </section>
  );
};

export function AnimationBanner() {
  return (
    <div
      className={` lg:justify-center w-full max-w-md md:max-w-lg lg:max-w-xl  relative flex flex-col  items-center justify-end h-full`}
    >
      <Image
        src={"/assets/hosting-01.svg"}
        alt={"Home Banner"}
        width={600}
        height={600}
        className={`object-contain   w-[50%]  top-bottom2`}
        priority
      />
      <Image
        src={"/assets/hosting.svg"}
        width={600}
        height={600}
        alt="Hosting illustration"
        className="absolute  -bottom-[30%]"
      />
      <Image
        src={"/assets/left.svg"}
        width={50}
        height={100}
        alt="Hosting illustration"
        className="absolute  h-[50%] left-0 top-0 top-bottom"
      />
      <Image
        src={"/assets/left.svg"}
        width={50}
        height={100}
        alt="Hosting illustration"
        className="absolute  h-[50%] right-0  -bottom-8 bottom-top"
      />
      <Image
        src={"/assets/top.svg"}
        width={50}
        height={100}
        alt="Hosting illustration"
        className="absolute  h-[50%] left-8 -bottom-8 bottom-top"
      />
    </div>
  );
}

function HomeCtaSection() {
  return (
    <section className=" space-y-6">
      <section className=" flex gap-4 items-center justify-center lg:justify-start flex-wrap">
        <WhiteButton href="#different-hosting-plans">Start My Hosting Now</WhiteButton>
        
        <Link
          href={"/web-hosting"}
          className="flex  text-lg items-center text-center max-lg:underline lg:gap-x-2 text-white font-bold"
        >
          Faster Website Starts Here
          {/* <BsArrowRightShort size={24} className="hidden lg:block" /> */}
        </Link>
      </section>

      <section className="flex gap-3 items-center justify-center lg:justify-start">
        <Image
          src={"/assets/dollar.svg"}
          alt={"dollar"}
          width={30}
          height={30}
        />
        <p className="text-sm md:text-base text-nowrap">
          30-Day Money-Back Guarantee. Cancel Anytime.
        </p>
      </section>
    </section>
  );
}

export default Home;
