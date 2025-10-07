"use client";

import Navbar from "@/components/navbar/Navbar";
import React from "react";
import {
  FiShield,
  FiFileText,
  FiDownload,
  FiClock,
  FiCreditCard,
  FiAlertTriangle,
  FiHeadphones
} from "react-icons/fi";
import SectionWrapper from "../wrappers/SectionWrapper";
import { FaWeightScale } from "react-icons/fa6";

/* ---------------- Types ---------------- */
export type BannerIcon =
  | "shield"
  | "file"
  | "download"
  | "clock"
  | "credit-card"
  | "alert-triangle"
  | "support"
  | "scale";

export type TermsOfServiceBannerData = {
  title: string;
  subtitle: string;
  updatedISO?: string; // e.g. "2025-01-01"
  badgeLabel?: string; // e.g. "Updated"
  ctas: {
    label: string;
    href: string;
    variant: "primary" | "ghost";
    icon?: BannerIcon;
  }[];
  highlights: { icon: BannerIcon; text: string }[];
};

/* ---------------- Default Data ---------------- */
export const defaultTosBannerData: TermsOfServiceBannerData = {
  title: "Terms of Service",
  subtitle:
    "These terms govern your use of our cloud hosting. They cover uptime commitments, resource usage, billing, data handling, and support so you can deploy with confidence.",
  updatedISO: "2025-09-01",
  badgeLabel: "Updated",
  ctas: [
    {
      label: "Read the Terms",
      href: "#tos-content",
      variant: "primary",
      icon: "file"
    }
  ],
  highlights: [
    {
      icon: "shield",
      text: "Security-first: DDoS mitigation, network isolation, and encrypted transport by default."
    },
    {
      icon: "file",
      text: "Fair-use & quotas: clear rules on CPU, bandwidth, and storage to keep clusters stable."
    },
    {
      icon: "download",
      text: "Portability: export snapshots, backups, logs, and invoices at any time."
    }
  ]
};

export const defaultPrivacyBannerData: TermsOfServiceBannerData = {
  title: "Privacy Policy",
  subtitle:
    "Learn how we collect, use, store, and protect your personal data across our hosting platform, including analytics, billing details, and support interactions.",
  updatedISO: "2025-09-01",
  badgeLabel: "Updated",
  ctas: [
    {
      label: "Read the Policy",
      href: "#privacy-content",
      variant: "primary",
      icon: "file"
    }
  ],
  highlights: [
    {
      icon: "shield",
      text: "Security by design: encryption in transit, access controls, and audit logging."
    },
    {
      icon: "file",
      text: "Transparency: clear details on data collection, processing, and retention."
    },
    {
      icon: "download",
      text: "Control: request export or deletion of your personal data at any time."
    }
  ]
};

export const defaultRefundPolicyBannerData: TermsOfServiceBannerData = {
  title: "Refund Policy",
  subtitle:
    "Understand how Hostfame handles refund requests, eligibility, timelines, and exceptions under our 30-day money-back guarantee.",
  updatedISO: "2025-09-01",
  badgeLabel: "Updated",
  ctas: [
    {
      label: "Read the Policy",
      href: "#refund-content",
      variant: "primary",
      icon: "file"
    }
  ],
  highlights: [
    {
      icon: "clock",
      text: "30-day money-back guarantee on eligible hosting services."
    },
    {
      icon: "credit-card",
      text: "Refunds processed securely via your original payment method."
    },
    {
      icon: "alert-triangle",
      text: "Certain services like domains and add-ons are non-refundable."
    },
    {
      icon: "support",
      text: "Easy refund requests through your Hostfame Client Area."
    },
    {
      icon: "scale",
      text: "All refunds governed by Wyoming, USA jurisdiction."
    }
  ]
};

export const aboutUsBannerData: TermsOfServiceBannerData = {
  title: "About Hostfame",
  subtitle:
    "Understand how Hostfame handles refund requests, eligibility, timelines, and exceptions under our 30-day money-back guarantee.",
  ctas: [
    {
      label: "Read About Us",
      href: "#about-content",
      variant: "primary",
      icon: "file"
    }
  ],
  highlights: [
    {
      icon: "clock",
      text: "30-day money-back guarantee on eligible hosting services."
    },
    {
      icon: "credit-card",
      text: "Refunds processed securely via your original payment method."
    },
    {
      icon: "alert-triangle",
      text: "Certain services like domains and add-ons are non-refundable."
    },
    {
      icon: "support",
      text: "Easy refund requests through your Hostfame Client Area."
    },
    {
      icon: "scale",
      text: "All refunds governed by Wyoming, USA jurisdiction."
    }
  ]
};

/* ---------------- Icon Map ---------------- */
const IconFromKey: Record<
  BannerIcon,
  React.ComponentType<{ className?: string }>
> = {
  shield: (props) => <FiShield {...props} />,
  file: (props) => <FiFileText {...props} />,
  download: (props) => <FiDownload {...props} />,
  clock: (props) => <FiClock {...props} />,
  "credit-card": (props) => <FiCreditCard {...props} />,
  "alert-triangle": (props) => <FiAlertTriangle {...props} />,
  support: (props) => <FiHeadphones {...props} />,
  scale: (props) => <FaWeightScale {...props} />
};

/* ---------------- Component ---------------- */
/**
 * TermsOfServiceBanner
 * ---------------------------------------------------------
 * Versatile hero/banner for policy pages:
 * - Next.js 15 / React / TypeScript compatible
 * - Tailwind CSS + react-icons
 * - Background: gradient teal tone
 * - All copy & visuals sourced from data props
 */
export interface TermsOfServiceBannerProps {
  data?: TermsOfServiceBannerData;
}

export default function TermsOfServiceBanner({
  data = defaultTosBannerData
}: TermsOfServiceBannerProps) {
  return (
    <section
      className="relative overflow-hidden banner-bg"
      aria-label={`${data.title} banner`}
    >
      <div className="z-40">
        <Navbar isTransparent />
      </div>

      <SectionWrapper className="relative mx-auto pt-6 pb-12 md:pt-10 md:pb-16">
        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_.9fr]">
          {/* Left side - content */}
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-4">
              <h1 className="mb-4 flex items-center gap-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                <span className="inline-grid place-items-center rounded-2xl bg-white/15 p-2 backdrop-blur">
                  <FiFileText className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                {data.title}
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                {data.subtitle}
              </p>

              {data.badgeLabel && (
                <p className="text-sm text-white/70 mt-1">
                  {data.badgeLabel}:{" "}
                  {data.updatedISO &&
                    new Date(data.updatedISO).toLocaleDateString()}
                </p>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {data.ctas.map((cta, i) => {
                const Icon = cta.icon ? IconFromKey[cta.icon] : null;
                const base =
                  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70";
                const styles =
                  cta.variant === "primary"
                    ? "bg-white text-teal-900 shadow-sm hover:shadow-md"
                    : "bg-white/10 text-white backdrop-blur hover:bg-white/15 focus-visible:ring-white/60";
                return (
                  <a key={i} href={cta.href} className={`${base} ${styles}`}>
                    {Icon && <Icon className="h-4 w-4" />} {cta.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right side - highlights */}
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-xl backdrop-blur-sm">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
              At a glance
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              {data.highlights.map((h, idx) => {
                const HIcon = IconFromKey[h.icon];
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 shrink-0 rounded-md bg-white/20 p-1">
                      <HIcon className="h-full w-full" />
                    </div>
                    <span>{h.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
