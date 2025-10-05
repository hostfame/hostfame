// Server component
import React from "react";
import Image from "next/image";
import FeaturesTab from "./FeaturesTab";
import { featureTabs } from "@/data/features-tab.data";

export default function AdvancedFeatures({
  className = "",
  initialActiveFeature, // optional: you can pass a starting slug if you want
}: {
  className?: string;
  initialActiveFeature?: string;
}) {
  return (
    <section className={`${className}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left illustration */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[260px] w-[360px] sm:h-[320px] sm:w-[440px] lg:h-[360px] lg:w-[520px]">
            {/* <Image
              src="/assets/advance-feature.svg"
              alt="Advanced features"
              fill
              className="object-contain"
              priority
            /> */}
            <Image
              src="/assets/gifs/hostfame-gif-circle-appear.gif" // put your image in public/images
              alt="WordPress Hosting"
              width={450}
              height={350}
              unoptimized
              className="object-contain min-[1180px]:scale-[1.20]"
            />
          </div>
        </div>

        {/* Right: tabs + content (client) */}
        <div>
          <h2 className="text-3xl md:text-3xl lg:text-[40px] font-bold text-text  sm:mb-4 leading-tight pr-2 text-center lg:text-left">
            Advance features for the
            <br className="hidden sm:block" /> advanced user
          </h2>

          <FeaturesTab
            tabs={featureTabs}
            initialActive={initialActiveFeature}
          />
        </div>
      </div>
    </section>
  );
}
