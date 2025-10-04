"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
import { useIpProviderContextValue } from "@/providers/IpProvider";

interface DifferentHostingPlansProps {
  title: string;
  description: string;
  hostingPlansData: HostingPlanFeatureProps[];
}

interface HostingPlanFeatureProps {
  id: number;
  title: string;
  description: string;
  price: string;
  priceBdt: string;
  buttonText: string;
  link: string;
  icon: string;
}

export default function DifferentHostingPlans({
  data
}: {
  data: DifferentHostingPlansProps;
}) {
  const countryCode = useIpProviderContextValue();

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector("div.flex-shrink-0");
      if (card) {
        const cardWidth = (card as HTMLElement).offsetWidth + 24; // card width + gap (24px = gap-6)
        sliderRef.current.scrollBy({
          left: direction === "left" ? -cardWidth : cardWidth,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <section className="relative">
      {/* Header */}
      <CenteredSectionHeader
        title={data.title}
        description={data.description}
        className="!text-left !mx-0"
        classNameForTitle="!text-left !mx-0"
        classNameForDescription="!text-left !mx-0"
      />

      {/* Slider */}
      <div
        ref={sliderRef}
        className="
          flex py-2 gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory
          lg:grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] xl:overflow-visible
        "
      >
        {data.hostingPlansData.map((plan) => (
          <div
            key={plan.id}
            className="
              flex-shrink-0 flex flex-col items-center justify-center
              w-full sm:w-full md:w-1/2 lg:w-full
              p-6 bg-background rounded-2xl shadow-md
              hover:bg-gradient-to-r hover:from-primary hover:to-primary-light
              group snap-start duration-700 transition
            "
          >
            {/* Icon */}
            <div className="w-20 h-20 mb-4 p-2 rounded-full bg-card">
              <Image
                width={100}
                height={100}
                loading="lazy"
                src={plan.icon}
                alt={plan.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content (scales up on hover) */}
            <section className="px-4 lg:px-0 flex flex-col h-[250px] transition-transform duration-300 group-hover:scale-105 text-center">
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold group-hover:text-white">
                  {plan.title}
                </h3>
                <p className="text-description-text group-hover:text-white">
                  {plan.description}
                </p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold group-hover:text-white">
                  {countryCode === "BD" ? plan.priceBdt : plan.price}
                </p>
                <Link
                  href={plan.link}
                  className="flex items-center justify-center gap-2 mt-auto w-full text-center py-2 px-4 rounded-lg bg-primary text-white group-hover:bg-white group-hover:text-primary font-medium transition"
                >
                  {plan.buttonText}
                  <FaArrowRight size={16} />
                </Link>
              </div>
            </section>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 -left-2 -right-2 top-16 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:hidden pointer-events-none">
        <button
          onClick={() => scroll("left")}
          className="
            bg-primary/70 border border-border-light-gray h-10 w-10 flex items-center justify-center rounded-full shadow hover:bg-primary/80 text-toggle-text transition pointer-events-auto
          "
        >
          <FaAngleLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="
            bg-primary/70 border border-border-light-gray h-10 w-10 flex items-center justify-center rounded-full shadow hover:bg-primary/80 text-toggle-text transition pointer-events-auto
          "
        >
          <FaAngleRight size={20} />
        </button>
      </div>
    </section>
  );
}
