"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { FaHeadset, FaBolt } from "react-icons/fa";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import SectionWrapper from "../wrappers/SectionWrapper";
import Link from "next/link";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface SkilledExpertsData {
  title: string;
  description: string;
  features: Feature[];
  images: string[];
  cta: string;
  ctaHref: string;
}

export const skilledExpertsData: SkilledExpertsData = {
  title: "Skilled & Dedicated Experts",
  description:
    "Our team is highly trained and ready to assist you anytime. With advanced support and optimized hosting solutions, we make sure your business runs smoothly without stress.",
  features: [
    {
      icon: <FaHeadset size={22} />,
      title: "24/7 Expert Support",
      description:
        "Our friendly support team is always available to help you stay stress-free.",
    },
    {
      icon: <FaBolt size={22} />,
      title: "Up to 20X Faster Hosting",
      description:
        "Experience lightning-fast performance and smooth operation with our optimized control panel.",
    },
  ],
  images: [
    "https://themewant.com/products/wordpress/hostie/wp-content/uploads/2024/02/image-1.png",
    "https://themewant.com/products/wordpress/hostie/wp-content/uploads/2024/02/image-2.png",
  ],
  cta: "Chat with Us",
  ctaHref: "http://wa.me/+8801884586407",
};

const SkilledDedicatedExperts = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-labelledby="experts-heading"
    >
      {/* Decorative background */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" /> */}

      {/* Container */}
      <SectionWrapper className=" space-y-4 pt-16 lg:pt-24 pb-8 lg:pb-12">
        {/* Header */}

        <CenteredSectionHeader
          title={skilledExpertsData.title}
          description={skilledExpertsData.description}
        />

        {/* Content */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1fr]">
          {/* Collage / Media */}
          <div className="relative">
            {/* Frame */}
            {/* <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-tr from-primary/30 via-transparent to-primary/30 blur" /> */}
            <div className="relative rounded-2xl border border-white/10 bg-white/60 p-4 backdrop-blur-md shadow-xl dark:bg-white/5">
              {/* Main image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-black/5">
                <Image
                  src={skilledExpertsData.images[0]}
                  alt="Expert working"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating secondary card */}
              <div className="pointer-events-none absolute -bottom-6 -right-4 hidden w-[55%] rotate-3 overflow-hidden rounded-xl border border-black/10 bg-white/70 p-2 shadow-lg backdrop-blur md:block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={skilledExpertsData.images[1]}
                    alt="Technology workspace"
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Accent badge */}
              <div className="absolute -left-3 -top-3 hidden rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow md:block">
                Live & Ready
              </div>
            </div>

            {/* Dotted background accent */}
            <div
              aria-hidden
              className="mt-8 grid grid-cols-12 gap-2 opacity-20"
            >
              {Array.from({ length: 96 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1 w-1 rounded-full bg-current"
                  style={{ color: "var(--tw-prose-body, #94a3b8)" }}
                />
              ))}
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-6">
            {/* Feature cards */}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {skilledExpertsData.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="group relative rounded-xl border border-white/10 bg-white/60 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-white/5"
                >
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                        {/* wrap the icon to control color via parent */}
                        <span className="inline-flex">{feature.icon}</span>
                      </span>
                      <h3 className="text-lg font-semibold text-text">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-text/90">
                      {feature.description}
                    </p>
                  </div>

                  {/* subtle gradient border on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5 transition-all duration-300 group-hover:ring-primary/30" />
                </li>
              ))}
            </ul>

            {/* CTA block */}
            <div className="flex flex-col items-start gap-4 rounded-xl border border-dashed border-primary/30 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm text-text/90">
                Need a quick answer or tailored advice? Hop into a conversation
                with our specialists right now.
              </p>
              <Link
                href={skilledExpertsData.ctaHref}
                target="_blank"
                className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 text-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 hover:scale-[1.05] duration-300"
                aria-label={skilledExpertsData.cta}
                type="button"
              >
                {skilledExpertsData.cta}
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l5 5a1.002 1.002 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L12.586 11H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* small note */}
            <p className="text-xs text-text/80">
              Always-on coverage, optimized infrastructure, and human help, no
              tickets lost in the void.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default SkilledDedicatedExperts;
