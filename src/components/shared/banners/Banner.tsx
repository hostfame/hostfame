import React, { ReactNode } from "react";
import Image from "next/image";
import { CtaButton, CtaButtonProps } from "../html/CtaButton";
import { BannerTimer } from "./BannerTimer";
import { CentralBannerTimer } from "./CentralBannerTimer";
import { IoCheckmark } from "react-icons/io5";
import SectionWrapper from "../wrappers/SectionWrapper";
import Navbar from "@/components/navbar/Navbar";

export type BannerProps = {
  topTitle: {
    icon?: React.ReactNode;
    content?: string;
    className?: string;
    classNameForContent?: string;
  };
  title: React.ReactNode;

  /** Right-hand illustration image */
  image?: string;
  imageAlt?: string;

  /** Left-side decorative wave image */
  waveImage?: string;
  waveAlt?: string;

  /** Left-side lists  */
  lists?: string[];
  description?: React.ReactNode;

  /** Background gradient (string passed directly to `background` CSS) */
  // bgGradient: string;

  /** CTA */
  cta?: Omit<CtaButtonProps, "className"> & { className?: string };

  /** Countdown */
  countdownTarget?: Date | number | string;
  /** Use central synchronized timer (auto-restarts) */
  useCentralTimer?: boolean;

  /** Layout/Styling */
  className?: string;
  containerClassName?: string;
  heightClassName?: string;

  ctaSection?: React.ReactNode;

  imageProps?: {
    width: number;
    height: number;
  };
  classNameForImage?: string;
  classNameForImageWrapper?: string;
  imageComponent?: React.ReactNode;
  classNameForTitle?: string;
  promoTemplate?: ReactNode;
};

export const Banner: React.FC<BannerProps> = ({
  topTitle,
  title,
  image,
  imageAlt = "Banner visual",
  description,
  // bgGradient = "linear-gradient(278deg, #008081 16%, #069999 98%)",
  cta,
  countdownTarget,
  useCentralTimer = false,
  className = "",
  containerClassName = "",
  lists = [],
  // heightClassName = "h-fit xl:h-[780px] xl:max-h-[780px]",
  heightClassName = "h-fit",
  ctaSection,
  imageProps = {
    width: 600,
    height: 600,
  },
  classNameForImage,
  classNameForImageWrapper,
  imageComponent,
  classNameForTitle,
  promoTemplate,
}) => {
  return (
    <section
      className={`banner-bg justify-center -mt-[1px] items-center w-full text-white bg-no-repeat overflow-hidden min-h-screen relative ${promoTemplate ? " " : ""
        } ${heightClassName} ${className}`}
      style={{
        backgroundPosition: "left center, center center",
        backgroundSize: "contain",
      }}
    >
      {/* Background decorative elements - subtle gradient orbs only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-primary-extralight/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <Navbar isTransparent />
      {promoTemplate && promoTemplate}

      <SectionWrapper
        className={`relative max-md:pt-8 max-md:pb-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center ${containerClassName}`}
      >
        {/* Content - all animations happen together */}
        <div className="space-y-7 text-center lg:text-left flex flex-col justify-center items-center lg:items-start animate-fade-in-up">
          <p
            className={`flex gap-2.5 items-center font-bold w-fit px-5 py-3 backdrop-blur-md rounded-full border border-white/30 bg-white/10 ${topTitle.className}`}
          >
            {topTitle.icon}{" "}
            <span className={`text-lg tracking-wide ${topTitle.classNameForContent}`}>
              {topTitle.content}
            </span>
          </p>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight ${classNameForTitle}`}
          >
            {title}
          </h1>

          {description && (
            <div className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-white/90 leading-relaxed">
              {description}
            </div>
          )}

          {lists.length > 0 && (
            <ul className="space-y-3 flex flex-col items-center lg:items-start">
              {lists.map((list) => (
                <li
                  key={list}
                  className="flex items-center justify-center lg:justify-start gap-x-3 text-base md:text-lg"
                >
                  <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <IoCheckmark className="text-sm" />
                  </span>
                  {list}
                </li>
              ))}
            </ul>
          )}

          {useCentralTimer && <CentralBannerTimer />}
          {!useCentralTimer && typeof countdownTarget !== "undefined" && (
            <BannerTimer target={countdownTarget} />
          )}

          {cta && !ctaSection && (
            <div className="pt-4">
              <CtaButton {...cta} className={`btn-adventure text-lg px-10 py-5 shadow-2xl shadow-black/20 ${cta.className ?? ""}`} />
            </div>
          )}

          {ctaSection && ctaSection}
        </div>

        {/* Right visual */}
        {image && !imageComponent && (
          <div
            className={`hidden lg:flex justify-center lg:justify-end relative w-full max-w-md md:max-w-lg lg:max-w-xl animate-fade-in-up ${classNameForImageWrapper}`}
          >
            <div className="relative">
              <Image
                src={image}
                alt={imageAlt}
                width={imageProps?.width || 600}
                height={imageProps?.height || 600}
                className={`object-contain h-auto drop-shadow-2xl ${classNameForImage || "w-full"}`}
                priority
              />
            </div>
          </div>
        )}
        <div className="hidden lg:block animate-fade-in-up">
          {imageComponent}
        </div>
      </SectionWrapper>
    </section>
  );
};
