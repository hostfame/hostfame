"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import { LuRocket } from "react-icons/lu";

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
      {/* Header with adventure badge */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full px-5 py-2.5 mb-6 icon-spin-hover cursor-default">
          <LuRocket className="w-5 h-5 text-primary" />
          <span className="text-primary text-sm font-bold tracking-wide uppercase">Choose Your Path</span>
        </div>
        <CenteredSectionHeader
          title={data.title}
          description={data.description}
          className="!text-left !mx-0"
          classNameForTitle="!text-left !mx-0"
          classNameForDescription="!text-left !mx-0"
        />
      </div>

      {/* Slider with dramatic cards */}
      <div
        ref={sliderRef}
        className="
          flex py-4 gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory
          lg:grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] xl:overflow-visible
          stagger-children
        "
      >
        {data.hostingPlansData.map((plan, idx) => (
          <div
            key={plan.id}
            className="
              adventure-card card-shine
              flex-shrink-0 flex flex-col items-center justify-center
              w-full sm:w-full md:w-1/2 lg:w-full
              p-8 bg-white rounded-3xl shadow-lg border border-gray-100
              hover:bg-gradient-to-br hover:from-primary hover:via-primary hover:to-primary-dark
              group snap-start relative overflow-hidden
            "
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Icon with dramatic styling */}
            <div className="relative w-24 h-24 mb-5 p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Image
                width={100}
                height={100}
                loading="lazy"
                src={plan.icon}
                alt={plan.title}
                className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>

            {/* Content */}
            <section className="px-4 lg:px-0 flex flex-col h-[250px] transition-transform duration-500 group-hover:scale-105 text-center relative z-10">
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-white transition-colors">
                  {plan.title}
                </h3>
                <p className="text-description-text group-hover:text-white/90 transition-colors leading-relaxed">
                  {plan.description}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                  {countryCode === "BD" ? plan.priceBdt : plan.price}
                </p>
                <Link
                  href={plan.link}
                  className="flex items-center justify-center gap-2.5 mt-auto w-full text-center py-3.5 px-6 rounded-xl bg-primary text-white group-hover:bg-white group-hover:text-primary font-bold transition-all duration-300 shadow-lg group-hover:shadow-xl"
                >
                  {plan.buttonText}
                  <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </section>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - more stylish */}
      <div className="absolute inset-y-0 -left-2 -right-2 top-32 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:hidden pointer-events-none">
        <button
          onClick={() => scroll("left")}
          className="
            bg-white border-2 border-primary h-12 w-12 flex items-center justify-center rounded-full shadow-lg hover:bg-primary hover:text-white text-primary transition-all duration-300 pointer-events-auto hover:scale-110
          "
        >
          <FaAngleLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="
            bg-white border-2 border-primary h-12 w-12 flex items-center justify-center rounded-full shadow-lg hover:bg-primary hover:text-white text-primary transition-all duration-300 pointer-events-auto hover:scale-110
          "
        >
          <FaAngleRight size={20} />
        </button>
      </div>
    </section>
  );
}
