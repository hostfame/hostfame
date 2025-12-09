// components/domain/DomainRegistrationSummary.tsx
"use client";

import { HiShieldCheck } from "react-icons/hi";
import { TbWorldWww, TbLayoutBoardSplit, TbSettingsCheck } from "react-icons/tb";
import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";

/** ─────────────────────────────────────────────────────────────
 *  Data lives here (easy to localize / A/B test)
 *  ────────────────────────────────────────────────────────────*/
export const DomainRegistrationSummaryData = {
  eyebrow: "Free Add-ons",
  title: "What’s Included With Every Domain Registration",
  description:
    "Everything you need to launch quickly and manage with confidence, no upsells, no surprises.",
  items: [
    {
      title: "Free Domain Privacy",
      desc: "Keep your personal information private. Our WHOIS privacy protection is included at no extra cost.",
      icon: HiShieldCheck,
      note: "Included forever",
      footerText: "No extra fees • Available on all domains",
    },
    {
      title: "Free Website Builder",
      desc: "Launch fast with our drag-and-drop site builder, perfect for a simple site or landing page.",
      icon: TbLayoutBoardSplit,
      note: "No coding needed",
      footerText: "No extra fees • Available on all hosting",

    },
    {
      title: "Free DNS Management",
      desc: "Full control of your DNS with simple tools for forwarding, email records, and subdomains.",
      icon: TbSettingsCheck,
      note: "Power user friendly",
      footerText: "No extra fees • Available on all domains",

    },
    {
      title: "Free Domain Portfolio Tools",
      desc: "Manage and organize all your domains in one dashboard, with bulk edit and smart filters.",
      icon: TbWorldWww,
      note: "Scale with ease",
      footerText: "No extra fees • Available on all domains",

    },
  ],
};

type Item = (typeof DomainRegistrationSummaryData)["items"][number];

/** ─────────────────────────────────────────────────────────────
 *  Component
 *  ────────────────────────────────────────────────────────────*/
export default function DomainRegistrationSummary() {
  return (
    <section className="relative flex flex-col  gap-y-8">


      <CenteredSectionHeader
        // eyebrow={DomainRegistrationSummaryData.eyebrow}
        title={DomainRegistrationSummaryData.title}
        description={DomainRegistrationSummaryData.description}
      />

      <ul
        role="list"
        className="mx-auto grid  grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {DomainRegistrationSummaryData.items.map((item: Item, idx: number) => {
          const Icon = item.icon;
          return (
            <li
              key={idx}
              className="group relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Accent ring on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-teal-400/0 transition-[ring,box-shadow] duration-300 group-hover:ring-2 group-hover:ring-teal-400/40"
              ></span>

              {/* Icon medallion */}
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-500/10 ring-1 ring-teal-500/20">
                  <Icon size={26} className="text-teal-600" />
                </span>
                {item.note ? (
                  <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-2 py-0.5 text-[11px] font-medium text-teal-600 dark:text-teal-400">
                    {item.note}
                  </span>
                ) : null}
              </div>

              {/* Text */}
              <h3 className="text-text text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-description-text flex-1 mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* Footline */}
              <div className="mt-4 flex items-center gap-2 text-xs text-description-text">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500/70" />
                No extra fees • Available on all domains
              </div>
            </li>
          );
        })}
      </ul>

      {/* Section CTA (optional; remove if not needed) */}
      {/* <div className="mx-auto mt-8 max-w-6xl text-center">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-xl border border-teal-700/20 bg-white/70 px-4 py-2 text-sm font-medium text-text backdrop-blur transition-colors hover:bg-white"
        >
          View full feature list
        </a>
      </div> */}
    </section>
  );
}
