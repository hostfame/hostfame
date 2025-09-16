import React from "react";
import Image from "next/image";
import { CtaButton, CtaButtonProps } from "../html/CtaButton";
import { BannerTimer } from "./BannerTimer";
import { IoCheckmark } from "react-icons/io5";

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
  classNameForTitle?: string
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
  className = "",
  containerClassName = "",
  lists = [],
  heightClassName = "h-fit xl:h-[740px] xl:max-h-[740px]",
  ctaSection,
  imageProps = {
    width: 600,
    height: 600,
  },
  classNameForImage,
  classNameForImageWrapper,
  imageComponent,
  classNameForTitle
}) => {
  return (
    <section
      className={`relative flex justify-center items-center w-full bg-gradient-to-br from-primary via-primary to-primary-dark text-white bg-no-repeat overflow-hidden ${heightClassName} ${className}`}
      style={{
        backgroundPosition: "left center, center center",
        backgroundSize: "contain",
        // backgroundImage: `${bgGradient}`,
      }}
    >
      {/* Left decorative wave */}
      {/* {waveImage && (
        <Image
          src={waveImage}
          alt={waveAlt}
          fill
          className="pointer-events-none select-none object-cover opacity-70"
          priority
        />
      )} */}

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center place-items-center lg:place-items-stretch ${containerClassName}`}
      >
        {/* Content */}
        <div className="space-y-6 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
          <p
            className={`flex gap-2 items-center font-semibold w-fit px-3 py-2 ${topTitle.className}`}
          >
            {topTitle.icon}{" "}
            <span className={` text-lg ${topTitle.classNameForContent}`}>
              {topTitle.content}
            </span>
          </p>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight ${classNameForTitle}`}>
            {title}
          </h1>

          {description && (
            <p className="text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
          )}

          {lists.length > 0 && (
            <ul className="space-y-2 flex flex-col items-center lg:items-start">
              {lists.map((list) => (
                <li
                  key={list}
                  className="flex items-center justify-center lg:justify-start gap-x-1 text-base md:text-lg"
                >
                  <IoCheckmark className="text-lg md:text-xl" /> {list}
                </li>
              ))}
            </ul>
          )}

          {typeof countdownTarget !== "undefined" && (
            <BannerTimer target={countdownTarget} />
          )}

          {cta && !ctaSection && (
            <CtaButton {...cta} className={`mt-4 ${cta.className ?? ""}`} />
          )}

          {ctaSection && ctaSection}
        </div>

        {/* Right visual */}
        {image && !imageComponent && (
          <div
            className={`flex justify-center lg:justify-end relative w-full max-w-md md:max-w-lg lg:max-w-xl  ${classNameForImageWrapper}`}
          >
            <Image
              src={image}
              alt={imageAlt}
              width={imageProps?.width || 600}
              height={imageProps?.height || 600}
              className={`object-contain  h-auto ${
                classNameForImage || "w-full"
              }`}
              priority
            />
          </div>
        )}
        {imageComponent}
      </div>
    </section>
  );
};
