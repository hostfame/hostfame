import React from "react";
import Image from "next/image";
import { CtaButton, CtaButtonProps } from "../html/CtaButton";
import { BannerTimer } from "./BannerTimer";
import { IoCheckmark } from "react-icons/io5";

export type BannerProps = {
  title: React.ReactNode;

  /** Right-hand illustration image */
  image?: string;
  imageAlt?: string;

  /** Left-side decorative wave image */
  waveImage?: string;
  waveAlt?: string;

  /** Left-side lists  */
  lists?: string[];

  /** Background gradient (string passed directly to `background` CSS) */
  bgGradient: string;

  /** CTA */
  cta?: Omit<CtaButtonProps, "className"> & { className?: string };

  /** Countdown */
  countdownTarget?: Date | number | string;

  /** Layout/Styling */
  className?: string;
  containerClassName?: string;
};

export const Banner: React.FC<BannerProps> = ({
  title,
  image,
  imageAlt = "Banner visual",
  waveImage,
  waveAlt = "",
  bgGradient,
  cta,
  countdownTarget,
  className = "",
  containerClassName = "",
  lists = [],
}) => {
  return (
    <section
      className={`relative w-full text-white bg-no-repeat h-screen max-h-[780px] overflow-hidden ${className}`}
      style={{
        backgroundPosition: "left center, center center",
        backgroundSize: "contain",
        backgroundImage: `url(${waveImage}), ${bgGradient}`,
      }}
    >
      {/* Left decorative wave */}
      {waveImage && (
        <Image
          src={waveImage}
          alt={waveAlt}
          fill
          className="pointer-events-none select-none object-cover opacity-70"
          priority
        />
      )}

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center
                    place-items-center lg:place-items-stretch ${containerClassName}`}
      >
        {/* Content */}
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-yellow-400 font-semibold text-base sm:text-xl">
            Expertly Crafted for Online Businesses
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {title}
          </h1>

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

          {typeof countdownTarget !== "undefined" && (
            <BannerTimer target={countdownTarget} />
          )}

          {cta && (
            <CtaButton {...cta} className={`mt-4 ${cta.className ?? ""}`} />
          )}
        </div>

        {/* Right visual */}
        {image && (
          <div className="flex justify-center lg:justify-end relative w-full max-w-md md:max-w-lg lg:max-w-xl">
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={600}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
};
