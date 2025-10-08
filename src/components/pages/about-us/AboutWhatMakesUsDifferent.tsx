"use client";

import React from "react";
import Image from "next/image";
import { WhatMakesUsDifferentItem } from "@/types/about-us.types";
import { WhatMakesUsDifferentData } from "@/data/about-us.data";
function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderDescription(text: string) {
  const replacements: Record<string, React.ReactNode> = {
    "Website Acceleration Suite": (
      <span className="text-primary-adaptive">Website Acceleration Suite</span>
    ),
    "Website Turbo": <span className="text-primary-adaptive">Website Turbo</span>,
    "Google Cloud": <span className="text-primary-adaptive">Google Cloud</span>,
    "20iCloud": <span className="text-primary-adaptive">20iCloud</span>,
    AWS: <span className="text-primary-adaptive">AWS</span>,
    My20i: <span className="text-primary-adaptive">My20i</span>,
    CDN: <span className="text-primary-adaptive">CDN</span>,
    "Read our reviews": (
      <a href="#" className="text-primary-adaptive underline hover:text-primary-adaptive/80">
        Read our reviews
      </a>
    )
  };

  const phrases = Object.keys(replacements)
    .sort((a, b) => b.length - a.length)
    .map(escapeRegex);
  const re = new RegExp(`(${phrases.join("|")})`, "g");
  const parts = text.split(re);

  return parts.map((part, i) => {
    if (part === "") return null;
    const replacement = Object.keys(replacements).find((k) => k === part);
    return (
      <React.Fragment key={i}>
        {replacement ? replacements[replacement] : part}
      </React.Fragment>
    );
  });
}

export default function AboutWhatMakesUsDifferent() {
  const leftFeatures = WhatMakesUsDifferentData.slice(0, 3);
  const rightFeatures = WhatMakesUsDifferentData.slice(3);

  const renderCard = (item: WhatMakesUsDifferentItem) => {
    const Icon = item.icon;
    return (
      <div
        key={item.id}
        className="bg-card-background backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-4 border border-border-light-gray hover:-translate-y-1"
      >
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-2 items-center">
            <Icon
              className={`${item.iconColor ?? "text-primary"} text-2xl`}
              aria-hidden
            />
            <h3 className="font-semibold text-lg text-text">
              {item.title}
            </h3>
          </div>
          <div>
            
            <p className="text-text/80 leading-tight text-sm">
              {renderDescription(item.description)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      {/* Heading */}
      <div className="text-center mb-6 lg:mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-4">
          What makes us different?
        </h2>
        <p className="text-text/80 max-w-2xl mx-auto ">
          Discover what sets our cloud hosting services apart from the rest.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 items-center">
        {/* Left column */}
        <div className="space-y-2 lg:space-y-4">{leftFeatures.map(renderCard)}</div>

        {/* Middle column: Image */}
        <div className="flex justify-center items-center relative rounded-2xl h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-2xl blur-2xl" />
          <Image
            src="/assets/about/makes-different.png"
            alt="Hosting dashboard preview"
            height={500}
            width={500}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right column */}
        <div className="space-y-2 lg:space-y-4">{rightFeatures.map(renderCard)}</div>
      </div>
    </section>
  );
}
