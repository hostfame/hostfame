// components/PrioritySupport.tsx
import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import Image from "next/image";
import { LuHeadphones, LuShieldCheck, LuZap, LuGauge } from "react-icons/lu";

const FEATURES = [
  {
    title: "Expert Support",
    blurb: "Handled by our top agents",
    Icon: LuHeadphones,
  },
  {
    title: "Secure Daily Backups",
    blurb: "Daily, weekly, and monthly",
    Icon: LuShieldCheck,
  },
  {
    title: "Lightning Response",
    blurb: "Help from our fastest agents",
    Icon: LuZap,
  },
  {
    title: "Built for Performance",
    blurb: "Powered by fastest servers",
    Icon: LuGauge,
  },
];

export default function PrioritySupport() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-7 items-center">
        {/* Image side */}
        <div className="relative lg:col-span-3">
          <div className="absolute -inset-2 -z-10 rounded-3xl  blur-xl opacity-70" />
          <div className="overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-xl bg-white">
            <Image
              src="https://hostfame.com/wp-content/uploads/2024/02/support__feature.png.webp"
              alt="Real support agents at work"
              width={600}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* small corner badge */}
          <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow ring-1 ring-black/5">
            Real people. No bots.
          </div>
        </div>

        {/* Content side */}
        <div className="space-y-2 lg:col-span-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-border-light-gray">
            Priority Support
          </div>

          <CenteredSectionHeader
            className="!text-left"
            title="Priority Support, Powered by Real People"
            description={
              "Get faster help when you need it most. You won't encounter any bots or delays."
            }
            classNameForTitle="!text-3xl md:!text-4xl"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {FEATURES.map(({ title, blurb, Icon }) => (
              <div
                key={title}
                className="group flex items-start gap-4 rounded-2xl border border-border-dark-gray bg-white-background p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-background ring-1 ring-border-light-gray">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-description-text">{blurb}</p>
                </div>
              </div>
            ))}
          </div>

          {/* reassurance bar */}
          {/* <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-white-background p-3 text-xs text-text ring-1 ring-border-dark-gray">
            <span className="font-semibold text-text">Get help faster</span>
            <span className="hidden sm:inline">•</span>
            <span>No bots or delays</span>
            <span className="hidden sm:inline">•</span>
            <span>Friendly, knowledgeable humans</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
