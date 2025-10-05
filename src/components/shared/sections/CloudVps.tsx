/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMemo, useState } from "react";
import { LuCpu, LuMemoryStick, LuHardDrive, LuGauge } from "react-icons/lu";
import { Button } from "../html/Button";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import DualPricing from "./domain-hero/DualPricing";
import { TiersData } from "@/data/cloudVps.data";
import CloudeVpsPurchasePlanBtn from "./CloudeVpsPurchasePlanBtn";
import { useIpProviderContextValue } from "@/providers/IpProvider";

const FEATURE_META = [
  {
    icon: <LuCpu className="text-xl text-white" aria-hidden />,
    title: "Shared vCPU",
    k: "cpu"
  },
  {
    icon: <LuMemoryStick className="text-xl text-white" aria-hidden />,
    title: "Dedicated RAM",
    k: "ram"
  },
  {
    icon: <LuHardDrive className="text-xl text-white" aria-hidden />,
    title: "NVMe Storage",
    k: "ssd"
  },
  {
    icon: <LuGauge className="text-xl text-white" aria-hidden />,
    title: "Port Speed",
    k: "net"
  }
];

export default function CloudVps() {
  // default to Starter Plus to mirror your original state
  const [step, setStep] = useState(1); // 0..3
  const current = useMemo(() => TiersData[step], [step]);

  console.log('current', current)

  const percent = useMemo(() => (step / (TiersData.length - 1)) * 100, [step]);

  return (
    <section
      className="w-full rounded-2xl !z-50 border p-6 md:p-10 shadow-sm bg-white-background border-border-light-gray text-text"
      aria-label="VPS pricing"
    >
      {/* Headline */}
      <CenteredSectionHeader title="High-Speed Cloud VPS" />

      {/* Plan Tag */}
      <div className="mt-5 flex justify-center" aria-live="polite">
        <span
          key={current.key}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-toggle text-toggle-text fade-in-up"
        >
          <span className="h-2 w-2 rounded-full bg-toggle-text/70" />
          {current.label}
        </span>
      </div>

      {/* RANGE INPUT ,  custom slider with smooth fill + smooth thumb */}
      <div className="mt-8">
        <div className="mx-auto max-w-3xl">
          <div
            className="relative text-primary-light py-4" // <— adds vertical space for a comfy hitbox
            style={{ ["--p" as any]: `${percent}%` }}
          >
            {/* Real input (a11y/keyboard/touch). Full overlay, highest z-index */}
            <input
              type="range"
              min={0}
              max={TiersData.length - 1}
              step={1}
              value={step}
              onChange={(e) => setStep(e.target.valueAsNumber)}
              aria-label="Select plan tier"
              // full overlay + big hit area + prevents page scroll on touch-drag
              className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 touch-none"
            />

            {/* Visual track */}
            <div className="relative h-2 rounded-full bg-border-light-gray/70 pointer-events-none">
              {/* Smooth fill */}
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-current transition-[width] duration-300 ease-in-out motion-reduce:transition-none"
                style={{ width: "var(--p)" }}
                aria-hidden
              />
              {/* Smooth thumb */}
              <div
                className={[
                  "absolute top-1/2 left-[var(--p)] -translate-x-1/2 -translate-y-1/2",
                  "h-[30px] w-[30px] rounded-full bg-white border-2 border-current",
                  "shadow-[0_0_0_6px_rgba(16,185,129,0.12)]",
                  "transition-[left] duration-300 ease-in-out motion-reduce:transition-none",
                  "peer-focus-visible:ring-4 peer-focus-visible:ring-[rgba(16,185,129,0.25)]",
                  "peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-white"
                ].join(" ")}
                aria-hidden
              />
            </div>
          </div>

          {/* Tick marks + labels (from my previous message, stays aligned) */}
          <div className="relative mt-3 h-10">
            {TiersData.map((t, i) => {
              const active = i === step;
              const left = `${(i / (TiersData.length - 1)) * 100}%`;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setStep(i)}
                  aria-label={`Select ${t.label}`}
                  className={[
                    "absolute -translate-x-1/2 flex flex-col items-center"
                  ].join(" ")}
                  style={{ left }}
                >
                  <span
                    className={[
                      "h-2 w-2 rounded-full transition-colors duration-300",
                      active ? "bg-primary-light" : "bg-border-light-gray"
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "mt-2 text-xs font-medium tracking-wide transition-colors duration-300 whitespace-nowrap text-center",
                      active
                        ? "text-primary-light"
                        : "text-text/80 hover:text-text"
                    ].join(" ")}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features */}
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_META.map((f) => (
          <li
            key={f.k}
            className="group rounded-xl border  border-primary/60 px-4 py-5  hover:-translate-y-1.5 bg-card-background group snap-start duration-700 transition"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                {f.icon}
              </span>
              <div className="min-h-[2.25rem]">
                <p className="text-text text-sm font-medium">{f.title}</p>
                {/* key forces re-mount -> CSS animation plays on change */}
                <p
                  key={current.features[f.k as keyof typeof current.features]}
                  className="text-text/80 text-xs fade-in-up"
                >
                  {current.features[f.k as keyof typeof current.features]}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div key={current.key} className="fade-in-up">
          <DualPricing
            price={current.priceMonthly}
            pricebdt={current.priceMonthlyBdt}
            className="text-2xl font-semibold !text-text"
          />
        </div>
        <CloudeVpsPurchasePlanBtn href={current?.href} />
      </div>

      {/* Local CSS for tiny animations & reduced-motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .fade-in-up,
          .fade-in {
            animation-duration: 0ms !important;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .fade-in-up {
          animation: fadeInUp 180ms ease-out both;
        }
        .fade-in {
          animation: fadeIn 180ms ease-out both;
        }
      `}</style>
    </section>
  );
}
