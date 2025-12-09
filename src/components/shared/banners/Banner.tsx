import React, { ReactNode } from "react";
import Image from "next/image";
import { CtaButton, CtaButtonProps } from "../html/CtaButton";
import { BannerTimer } from "./BannerTimer";
import { CentralBannerTimer } from "./CentralBannerTimer";
import { IoCheckmark } from "react-icons/io5";
import SectionWrapper from "../wrappers/SectionWrapper";
import Navbar from "@/components/navbar/Navbar";
import { LuCompass, LuSparkles } from "react-icons/lu";

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
      {/* Adventure decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-extralight/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Compass decoration */}
        <div className="absolute top-32 right-20 opacity-10 hidden xl:block">
          <LuCompass className="w-32 h-32 text-white rotate-clockwise" />
        </div>
        
        {/* Sparkle decorations */}
        <LuSparkles className="absolute top-40 left-1/4 w-6 h-6 text-white/30 animate-pulse" />
        <LuSparkles className="absolute bottom-40 right-1/3 w-4 h-4 text-white/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <LuSparkles className="absolute top-1/3 right-1/4 w-5 h-5 text-white/25 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Navbar isTransparent />
      {promoTemplate && promoTemplate}

      <SectionWrapper
        className={`relative max-md:pt-8 max-md:pb-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center ${containerClassName}`}
      >
        {/* Content */}
        <div className="space-y-6 text-center lg:text-left flex flex-col justify-center items-center lg:items-start animate-slide-left">
          <p
            className={`flex gap-2 items-center font-semibold w-fit px-4 py-2.5 backdrop-blur-sm rounded-full border border-white/20 ${topTitle.className}`}
          >
            {topTitle.icon}{" "}
            <span className={`text-lg tracking-wide ${topTitle.classNameForContent}`}>
              {topTitle.content}
            </span>
          </p>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight ${classNameForTitle}`}
          >
            {title}
          </h1>

          {description && (
            <div className="text-base md:text-xl max-w-xl mx-auto lg:mx-0 text-white/90 leading-relaxed">
              {description}
            </div>
          )}

          {lists.length > 0 && (
            <ul className="space-y-3 flex flex-col items-center lg:items-start">
              {lists.map((list, idx) => (
                <li
                  key={list}
                  className="flex items-center justify-center lg:justify-start gap-x-2 text-base md:text-lg animate-slide-up"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
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
            <div className="pt-2">
              <CtaButton {...cta} className={`btn-adventure text-lg px-8 py-4 ${cta.className ?? ""}`} />
            </div>
          )}

          {ctaSection && ctaSection}
        </div>

        {/* Right visual */}
        {image && !imageComponent && (
          <div
            className={`hidden lg:flex justify-center lg:justify-end relative w-full max-w-md md:max-w-lg lg:max-w-xl animate-slide-right ${classNameForImageWrapper}`}
          >
            <div className="relative hover-float">
              <Image
                src={image}
                alt={imageAlt}
                width={imageProps?.width || 600}
                height={imageProps?.height || 600}
                className={`object-contain h-auto drop-shadow-2xl ${classNameForImage || "w-full"}`}
                priority
              />
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-extralight/20 to-transparent rounded-full blur-3xl -z-10 scale-110" />
            </div>
          </div>
        )}
        <div className="hidden lg:block animate-slide-right">
          {imageComponent}
        </div>
      </SectionWrapper>
    </section>
  );
};
