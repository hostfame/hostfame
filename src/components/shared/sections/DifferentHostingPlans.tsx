"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";

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
  buttonText: string;
  link: string;
  icon: string;
}

export default function DifferentHostingPlans({
  data
}: {
  data: DifferentHostingPlansProps;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-background text-foreground">
      <div className="px-4">
        <CenteredSectionHeader
          title={data.title}
          description={data.description}
        />

        {/* Slider */}
        <section className="relative">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-card p-2 rounded-full shadow-md hidden md:flex"
          >
            ←
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
          >
            {data.hostingPlansData.map((plan: HostingPlanFeatureProps) => (
              <div
                key={plan.id}
                className="flex-shrink-0 w-72 p-6 bg-card rounded-2xl shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-primary-light group snap-start"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-4">
                  <Image
                    width={200}
                    height={200}
                    src={plan.icon}
                    alt={plan.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content (scales up on hover) */}
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-white">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-description-text group-hover:text-white">
                    {plan.description}
                  </p>
                  <p className="mt-4 font-medium text-text-primary group-hover:text-white">
                    {plan.price}
                  </p>
                  <Link
                    href={plan.link}
                    className="mt-6 inline-block w-full text-center py-2 px-4 rounded-lg bg-primary text-white font-medium hover:bg-primary-light transition"
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-card p-2 rounded-full shadow-md hidden md:flex"
          >
            →
          </button>
        </section>
      </div>
    </section>
  );
}
