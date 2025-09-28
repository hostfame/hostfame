import { LuCpu, LuMemoryStick, LuHardDrive, LuGauge, } from "react-icons/lu";
import { Button } from "../html/Button";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import { CloudVpsProps } from "@/types/cloudVps.types";
import DualPricing from "./domain-hero/DualPricing";

const cloudVpsData: CloudVpsProps = {
  headline: "High-Speed Cloud VPS",
  planLabel: "Starter Plus",
  priceMonthly: "$19.99/mo",
  priceMonthlyBdt: "৳1,999/mo",
  ctaText: "Purchase Plan",
  features: [
    {
      icon: <LuCpu className="text-xl" aria-hidden />,
      title: "Shared vCPU",
      subtitle: "3 vCPU Cores",
    },
    {
      icon: <LuMemoryStick className="text-xl" aria-hidden />,
      title: "Dedicated RAM",
      subtitle: "4 GB RAM",
    },
    {
      icon: <LuHardDrive className="text-xl" aria-hidden />,
      title: "NVMe Storage",
      subtitle: "80 GB NVMe",
    },
    {
      icon: <LuGauge className="text-xl" aria-hidden />,
      title: "Port Speed",
      subtitle: "1 Gbit",
    },
  ],
};

export default function CloudVps() {
  return (
    <section
      className=" w-full rounded-2xl border p-8 md:p-10 shadow-sm bg-white-background border-border-light-gray text-text "
      aria-label="VPS pricing"
    >
      {/* Headline */}
      <CenteredSectionHeader title={cloudVpsData.headline} />

      {/* Plan Tag */}
      <div className="mt-6 flex justify-center">
        <span
          className=" inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-toggle text-toggle-text   "
        >
          {/* A tiny dot to mimic a badge light */}
          <span className="h-2 w-2 rounded-full bg-toggle-text/70" />
          {cloudVpsData.planLabel}
        </span>
      </div>

      {/* Static progress bar */}
      <div className="mt-10">
        <div className="relative h-2 rounded-full bg-border-light-gray">
          {/* “filled” part (purely decorative, not interactive) */}
          <div className="absolute left-0 top-0 h-2 w-1/4 rounded-full bg-primary-light" />
          {/* Static knob */}
          <div className="absolute left-1/4 -top-1.5 h-5 w-5 rounded-full border-2 border-border-dark-gray bg-slider-background shadow-sm" />
        </div>
      </div>

      {/* Features */}
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cloudVpsData.features.map((f, i) => (
          <li
            key={i}
            className=" group rounded-xl border bg-gradient-to-t from-primary-light to-primary-extralight border-border-light-gray px-4 py-5 transition-transform hover:-translate-y-0.5 "
          >
            <div className="flex items-center gap-3">
              <span
                className=" inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-light-gray bg-gray-background   "
              >
                {f.icon}
              </span>
              <div>
                <p className="text-white text-sm font-medium">{f.title}</p>
                <p className="text-white/80 text-xs">
                  {f.subtitle}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <DualPricing price={cloudVpsData.priceMonthly} pricebdt={cloudVpsData.priceMonthlyBdt} className=" text-2xl font-semibold !text-text" />
        <Button
          variant="bordered"
          size="sm"
        >
          {cloudVpsData.ctaText}
        </Button>
      </div>
    </section>
  );
}
