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
      {/* DRAMATIC Adventure decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-primary-extralight/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Animated particles */}
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-white/40 rounded-full animate-particle" />
        <div className="absolute top-40 left-[25%] w-2 h-2 bg-white/30 rounded-full animate-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 right-[20%] w-4 h-4 bg-white/20 rounded-full animate-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-[15%] w-2 h-2 bg-white/30 rounded-full animate-particle" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-60 right-[30%] w-3 h-3 bg-white/25 rounded-full animate-particle" style={{ animationDelay: '4s' }} />
        
        {/* Compass decoration - larger and more visible */}
        <div className="absolute top-20 right-10 opacity-[0.07] hidden xl:block">
          <LuCompass className="w-64 h-64 text-white rotate-clockwise" />
        </div>
        
        {/* Grid overlay for cinematic feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Sparkle decorations - more and bigger */}
        <LuSparkles className="absolute top-32 left-[20%] w-8 h-8 text-white/40 animate-pulse" />
        <LuSparkles className="absolute top-1/2 left-[5%] w-6 h-6 text-white/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <LuSparkles className="absolute bottom-32 right-[25%] w-7 h-7 text-white/35 animate-pulse" style={{ animationDelay: '1s' }} />
        <LuSparkles className="absolute top-[40%] right-[15%] w-5 h-5 text-white/25 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <Navbar isTransparent />
      {promoTemplate && promoTemplate}

      <SectionWrapper
        className={`relative max-md:pt-8 max-md:pb-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center ${containerClassName}`}
      >
        {/* Content with dramatic entrance */}
        <div className="space-y-7 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
          <p
            className={`flex gap-2.5 items-center font-bold w-fit px-5 py-3 backdrop-blur-md rounded-full border border-white/30 bg-white/10 animate-hero-text icon-spin-hover ${topTitle.className}`}
          >
            {topTitle.icon}{" "}
            <span className={`text-lg tracking-wide ${topTitle.classNameForContent}`}>
              {topTitle.content}
            </span>
          </p>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight animate-hero-text neon-text ${classNameForTitle}`}
            style={{ animationDelay: '0.2s' }}
          >
            {title}
          </h1>

          {description && (
            <div className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-white/90 leading-relaxed animate-hero-text" style={{ animationDelay: '0.4s' }}>
              {description}
            </div>
          )}

          {lists.length > 0 && (
            <ul className="space-y-3 flex flex-col items-center lg:items-start">
              {lists.map((list, idx) => (
                <li
                  key={list}
                  className="flex items-center justify-center lg:justify-start gap-x-3 text-base md:text-lg animate-hero-text"
                  style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
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
            <div className="pt-4 animate-hero-text" style={{ animationDelay: '0.7s' }}>
              <CtaButton {...cta} className={`btn-adventure animate-glow-pulse text-lg px-10 py-5 shadow-2xl shadow-black/20 ${cta.className ?? ""}`} />
            </div>
          )}

          {ctaSection && ctaSection}
        </div>

        {/* Right visual with dramatic effects */}
        {image && !imageComponent && (
          <div
            className={`hidden lg:flex justify-center lg:justify-end relative w-full max-w-md md:max-w-lg lg:max-w-xl ${classNameForImageWrapper}`}
          >
            <div className="relative animate-hero-float">
              <Image
                src={image}
                alt={imageAlt}
                width={imageProps?.width || 600}
                height={imageProps?.height || 600}
                className={`object-contain h-auto drop-shadow-2xl ${classNameForImage || "w-full"}`}
                priority
              />
              {/* Multiple glow layers behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl -z-10 scale-125 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary-extralight/30 to-transparent rounded-full blur-2xl -z-10 scale-110" />
            </div>
          </div>
        )}
        <div className="hidden lg:block animate-hero-float" style={{ animationDelay: '0.3s' }}>
          {imageComponent}
        </div>
      </SectionWrapper>
    </section>
  );
};
