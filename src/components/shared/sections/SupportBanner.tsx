// app/components/SupportBanner.tsx

import { classNameForWhiteHover } from "@/components/pages/home/Home";
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
  ctaLabel: "Chat on WhatsApp",
  ctaHref: "http://wa.me/+8801884586407",
};

export type SupportBannerProps = Omit<
  ComponentPropsWithoutRef<"section">,
  "children"
> & {
  data?: Partial<BannerContent>;
};

export default function SupportBanner({
  data,
  className = "",
  ...rest
}: SupportBannerProps) {
  const merged = { ...content, ...data };

  return (
    <section
      aria-label="Support and live chat"
      className={[
        "relative overflow-hidden w-full rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-dark",
        "text-text shadow-2xl",
        "px-6 py-10 md:px-12 md:py-14",
        className,
      ].join(" ")}
      {...rest}
    >
      {/* Adventure background elements */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary-extralight/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 grid gap-6 md:grid-cols-12 md:items-center">
        {/* Left: Badge + Title */}
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 !text-white rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse  rounded-full  bg-white/80" />
            {merged.badge}
          </div>

          <h2 className="mt-4 text-pretty text-2xl md:text-4xl !text-white font-black leading-tight tracking-tight">
            {merged.title}
          </h2>

          <p className="mt-3 max-w-prose text-base text-white/90 md:text-lg leading-relaxed">
            {merged.subtitle}
          </p>

          {merged.bullets?.length ? (
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              {merged.bullets.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-white/80"
                  />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Right: CTA card */}
        <div className="md:col-span-5">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex flex-col lg:flex-row max-lg:space-y-3 items-start md:items-center justify-between gap-3">
              <div className="text-sm/5 !text-white">
                <div className="font-medium">Chat with us</div>
                <div className="text-white/80">
                  Real-time answers from our team
                </div>
              </div>
              <Link
                target="_blank"
                href={merged.ctaHref}
                className={`w-full lg:w-auto  text-center whitespace-nowrap rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-teal-900 transition ${classNameForWhiteHover}`}
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
