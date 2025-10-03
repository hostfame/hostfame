/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMemo, useState } from "react";
import { LuCpu, LuMemoryStick, LuHardDrive, LuGauge } from "react-icons/lu";
import { Button } from "../html/Button";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import DualPricing from "./domain-hero/DualPricing";
import { TiersData } from "@/data/cloudVps.data";

const FEATURE_META = [
  {
    icon: <LuCpu className="text-xl" aria-hidden />,
    title: "Shared vCPU",
    k: "cpu",
  },
  {
    icon: <LuMemoryStick className="text-xl" aria-hidden />,
    title: "Dedicated RAM",
    k: "ram",
  },
  {
    icon: <LuHardDrive className="text-xl" aria-hidden />,
    title: "NVMe Storage",
    k: "ssd",
  },
  {
    icon: <LuGauge className="text-xl" aria-hidden />,
    title: "Port Speed",
    k: "net",
  },
];

const purchaseUrl = `https://my.hostfame.com/cart.php?a=confproduct&i={{index}}`

export default function CloudVps() {
  // default to Starter Plus to mirror your original state
  const [step, setStep] = useState(1); // 0..3
  const current = useMemo(() => TiersData[step], [step]);

  const percent = useMemo(() => (step / (TiersData.length - 1)) * 100, [step]);

  return (
    <section
      className="w-full rounded-2xl border p-6 md:p-10 shadow-sm bg-white-background border-border-light-gray text-text"
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
            className="relative text-primary-light"
            style={{ ["--p" as any]: `${percent}%` }}
          >
            {/* Real input (a11y/keyboard). Hidden visually, but on top for all pointer events */}
            <input
              type="range"
              min={0}
              max={TiersData.length - 1}
              step={1}
              value={step}
              onChange={(e) => setStep(parseInt(e.target.value, 10))}
              aria-label="Select plan tier"
              className="peer absolute inset-0 h-8 w-full opacity-0 cursor-pointer"
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
                  "h-[22px] w-[22px] rounded-full bg-white border-2 border-current",
                  "shadow-[0_0_0_6px_rgba(16,185,129,0.12)]",
                  "transition-[left] duration-300 ease-in-out motion-reduce:transition-none",
                  "peer-focus-visible:ring-4 peer-focus-visible:ring-[rgba(16,185,129,0.25)]",
                  "peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-white",
                ].join(" ")}
                aria-hidden
              />
            </div>
          </div>

          {/* Tick marks + labels */}
          <div className="relative mt-3">
            <div className="flex justify-between items-center">
              {TiersData.map((t, i) => {
                const active = i === step;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setStep(i)}
                    className={`group w-fit flex flex-col items-center ${t.className}`}
                    aria-label={`Select ${t.label}`}
                  >
                    <span
                      className={[
                        "h-2 w-2 rounded-full transition-colors duration-300",
                        active ? "bg-primary-light" : "bg-border-light-gray",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "mt-2 text-xs font-medium tracking-wide transition-colors duration-300",
                        active
                          ? "text-primary-light"
                          : "text-gray-500 group-hover:text-text",
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
      </div>

      {/* Features */}
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_META.map((f) => (
          <li
            key={f.k}
            className="group rounded-xl border bg-gradient-to-t from-primary-light to-primary-extralight border-border-light-gray px-4 py-5 transition-transform duration-200 hover:-translate-y-0.5 will-change-transform"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-light-gray bg-gray-background">
                {f.icon}
              </span>
              <div className="min-h-[2.25rem]">
                <p className="text-white text-sm font-medium">{f.title}</p>
                {/* key forces re-mount -> CSS animation plays on change */}
                <p
                  key={current.features[f.k as keyof typeof current.features]}
                  className="text-white/80 text-xs fade-in-up"
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
        <Button target="_blank" href={purchaseUrl.replace("{{index}}", `${step + 1}`)} variant="bordered" size="sm">
          Purchase Plan
        </Button>
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
