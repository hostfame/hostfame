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
      className={`banner-bg flex flex-col -mt-[1px] w-full text-white bg-no-repeat overflow-hidden min-h-screen relative ${promoTemplate ? " " : ""
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

      {/* Flex container for vertical centering */}
      <div className="flex-1 flex items-center">
        <SectionWrapper
          className={`relative w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center py-8 md:py-12 ${containerClassName}`}
        >
          {/* Content - refined spacing and hierarchy */}
          <div className="space-y-5 text-center lg:text-left flex flex-col justify-center items-center lg:items-start animate-fade-in-up">
            {/* Badge - tighter connection to headline */}
            <p
              className={`flex gap-2 items-center font-semibold w-fit px-4 py-2 backdrop-blur-md rounded-full border border-white/30 bg-white/10 mb-3 ${topTitle.className}`}
            >
              {topTitle.icon}{" "}
              <span className={`text-base tracking-wide ${topTitle.classNameForContent}`}>
                {topTitle.content}
              </span>
            </p>

            {/* Headline - bold and clear */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight ${classNameForTitle}`}
            >
              {title}
            </h1>

            {/* Description - optimal line length for readability */}
            {description && (
              <p className="text-base md:text-lg max-w-md lg:max-w-lg text-white/85 leading-relaxed">
                {description}
              </p>
            )}

            {lists.length > 0 && (
              <ul className="space-y-2.5 flex flex-col items-center lg:items-start pt-1">
                {lists.map((list) => (
                  <li
                    key={list}
                    className="flex items-center justify-center lg:justify-start gap-x-2.5 text-sm md:text-base"
                  >
                    <span className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <IoCheckmark className="text-xs" />
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

            {/* Primary CTA - prominent and action-oriented */}
            {cta && !ctaSection && (
              <div className="pt-2">
                <CtaButton {...cta} className={`btn-adventure text-base md:text-lg px-8 py-4 shadow-xl shadow-black/25 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 ${cta.className ?? ""}`} />
              </div>
            )}

            {ctaSection && <div className="pt-2">{ctaSection}</div>}
          </div>

          {/* Right visual - refined positioning */}
          {image && !imageComponent && (
            <div
              className={`hidden lg:flex justify-center lg:justify-center relative w-full animate-fade-in-up ${classNameForImageWrapper}`}
            >
              <div className="relative max-w-[480px] xl:max-w-[520px]">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={imageProps?.width || 500}
                  height={imageProps?.height || 500}
                  className={`object-contain h-auto drop-shadow-2xl ${classNameForImage || "w-full"}`}
                  priority
                />
              </div>
            </div>
          )}
          <div className="hidden lg:flex justify-center animate-fade-in-up">
            {imageComponent}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};
