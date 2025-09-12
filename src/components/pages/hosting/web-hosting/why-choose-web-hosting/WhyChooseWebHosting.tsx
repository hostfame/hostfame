import React from "react";
import Image from "next/image";
import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import { whyChooseWebHosting } from "@/data/web-hosting/whyChooseWebHosting.data";
import { WhyChooseWebHostingProps } from "@/types/web-hosting/whyChooseWebHosting.types";

const FeatureCard: React.FC<WhyChooseWebHostingProps & { className?: string }> = ({
  title,
  description,
  img,
  className = "",
}) => {
  return (
    <article
      className={`group relative rounded-2xl border border-slate-200/70 bg-white
                  backdrop-blur-sm shadow-[0_12px_30px_rgba(16,24,40,.06)]
                  transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(16,24,40,.10)]
                  ${className}`}
    >
      {/* subtle gradient ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-teal-500/30 transition-all" />

      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0">
            <Image src={img} alt="" fill className="object-contain p-2" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>

        <p className="text-[15px] leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  );
};

export default function WhyChooseWebHosting() {
  return (
    <section className="relative isolate overflow-hidden py-14 md:py-20">
      {/* Curved background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/web-hosting/why-choose-web-hosting/why-choose-bg.png"
          alt=""
          fill
          className="object-cover opacity-95"
          priority
        />
        {/* soft top overlay for contrast */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      </div>

      <CenteredSectionHeader
        title="Why Choose Web Hosting?"
        description="With our Web Hosting plans, you'll receive more resources for less money, ensuring the reliability you can count on. Starting your own business with Hostnin is easier than you think!"
        className="mb-10 md:mb-14"
        classNameForTitle="text-slate-900"
        classNameForDescription="text-slate-600"
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Modern staggered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {whyChooseWebHosting.map((f) => {
            return <FeatureCard key={f.title} {...f} />;
          })}
        </div>

        {/* Decorative line / accent under grid (adds depth) */}
        <div className="pointer-events-none mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-teal-400 to-teal-700 opacity-40" />
      </div>
    </section>
  );
}