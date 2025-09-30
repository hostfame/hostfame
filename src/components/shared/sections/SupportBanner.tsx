// app/components/SupportBanner.tsx

import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type BannerContent = {
  badge: string;
  title: string;
  subtitle: string;
  bullets?: string[];
  ctaLabel: string;
  ctaHref: string;
};

const content: BannerContent = {
  badge: "Need help choosing a plan?",
  title: "Need help? We’re always here for you.",
  subtitle:
    "Talk to a real human, no bots, no long forms. Get guidance on plans, migrations, and billing.",
  bullets: ["Live chat 24/7", "Average response under 2 minutes"],
  ctaLabel: "Go to Live chat Page",
  ctaHref: "https://tawk.to/chat/67f13177a1155b1916a6f189/1io32ifig",
};

export type SupportBannerProps = Omit<ComponentPropsWithoutRef<"section">, "children"> & {
  data?: Partial<BannerContent>;
};

export default function SupportBanner({ data, className = "", ...rest }: SupportBannerProps) {
  const merged = { ...content, ...data };

  return (
    <section
      aria-label="Support and live chat"
      className={[
        "relative overflow-hidden w-full rounded-2xl bg-gradient-to-r from-teal-950 to-teal-800",
        "text-text shadow-xl",
        "px-6 py-8 md:px-10 md:py-10",
        className,
      ].join(" ")}
      {...rest}
    >
      {/* Background Circles */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-bl from-white to-gray-300 opacity-15" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-tr from-white to-gray-400 opacity-15" />

      {/* Content */}
      <div className="relative z-10 grid gap-6 md:grid-cols-12 md:items-center">
        {/* Left: Badge + Title */}
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 !text-white rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse  rounded-full  bg-white/80" />
            {merged.badge}
          </div>

          <h2 className="mt-3 text-pretty text-2xl !text-white font-semibold leading-snug md:text-3xl">
            {merged.title}
          </h2>

          <p className="mt-2 max-w-prose text-sm/6 text-white/85 md:text-base/7">
            {merged.subtitle}
          </p>

          {merged.bullets?.length ? (
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              {merged.bullets.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Right: CTA card */}
        <div className="md:col-span-5">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex sm:block lg:flex  max-lg:space-y-3 items-center justify-between gap-3">
              <div className="text-sm/5 !text-white">
                <div className="font-medium">Chat with us</div>
                <div className="text-white/80">Real-time answers from our team</div>
              </div>
              <Link
                href={merged.ctaHref}
                className="whitespace-nowrap rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-teal-900 transition hover:bg-white"
              >
                {merged.ctaLabel}
              </Link>
            </div>

            {/* Mini meta row to vary layout from source */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/80">
              <div className="rounded-md bg-white/5 px-3 py-2">
                <div className="font-semibold">Coverage</div>
                <div>Global 24/7</div>
              </div>
              <div className="rounded-md bg-white/5 px-3 py-2">
                <div className="font-semibold">Topics</div>
                <div>Plans • Billing • Setup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
