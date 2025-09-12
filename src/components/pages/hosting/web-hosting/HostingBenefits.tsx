import { features } from "@/data/hosting.data";
import { Feature } from "@/types/hosting.types";
import React from "react";

type FeatureCardProps = Feature & { className?: string };

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  bgIcon: BgIcon,
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-2xl bg-white p-6 md:p-8 shadow-[0_8px_24px_rgba(10,30,70,0.08)] ${className}`}
    >
      {/* Decorative big icon (top-right, faint) */}
      {BgIcon && (
        <BgIcon
          aria-hidden
          className="absolute right-6 top-4 h-16 w-16 md:h-20 md:w-20  text-gray-800/10 opacity-90"
        />
      )}

      {/* Small icon badge */}
      <div className="mb-5">
        <div className="inline-flex w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 items-center justify-center rounded-full bg-white shadow-lg ">
          <Icon className=" size-[50%] text-teal-700" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-semibold text-slate-800">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-6 text-slate-600">{description}</p>
    </div>
  );
};

/** ----------------------------------------------------------------
 *  Section
 *  ---------------------------------------------------------------- */
export default function HostingBenefits() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:-mt-[13%]  lg:-mt-[10.5%] 2xl:-mt-32  min-[1178px]:-mt-[10%]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
