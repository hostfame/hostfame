// WordPressHostingFeatures.tsx
import React from "react";
import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import { defaultFeatures } from "@/data/wordpress-hosting-features.data";

export type Feature = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  featured?: boolean; // optional legacy flag
  className?: string; // <-- NEW: manual spans per item
};

interface WordPressHostingFeaturesProps {
  features?: Feature[];
  className?: string;
}

const WordPressHostingFeatures: React.FC<WordPressHostingFeaturesProps> = ({
  features = defaultFeatures,
  className = "",
}) => {
  return (
    <section className={`  w-full py-16 sm:py-20 ${className}`}>
      <CenteredSectionHeader
        title="WordPress Hosting Features"
        description="Everything you need for a fast, secure, and effortless WordPress experience."
        className="mb-10"
      />

      <ul
        className="
  mx-auto grid 
  grid-cols-12 
  gap-4 auto-rows-[1fr]
"
      >
        {features.map(({ title, description, Icon, className }, idx) => (
          <li
            key={idx}
            className={`
        group relative overflow-hidden rounded-2xl
         bg-gradient-to-b from-primary-light via-primary-light to-primary text-white shadow-sm ring-1 ring-black/5
        transition hover:-translate-y-[2px] hover:shadow-md
        ${className ?? "md:col-span-4"} 
      `}
          >
            <div className="relative p-6 sm:p-7 md:p-8 flex h-full flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-white text-sm sm:text-base flex-1">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WordPressHostingFeatures;
