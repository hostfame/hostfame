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
    <section className="py-16 sm:py-20">
      {/* header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs md:text-sm font-semibold text-primary">
          Priority Support
        </span>

        <CenteredSectionHeader
          title="Priority Support, Powered by Real People"
          description="Get faster help when you need it most. You won't encounter any bots or
          delays."
        />
      </div>

      {/* grid layout */}
      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        {/* left: features in 2x2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURES.map(({ title, blurb, Icon }) => (
            <div
              key={title}
              className="flex flex-col hover:scale-[1.03] duration-300 gap-3 rounded-2xl border border-border-light-gray bg-card-background p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-description-text">{blurb}</p>
              </div>
            </div>
          ))}
        </div>

        {/* right: image with overlay badges */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-border-dark-gray">
            <Image
              src="/assets/support__feature.png.webp"
              alt="Real support agents at work"
              width={700}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* overlay badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-card-background px-3 py-1 text-xs font-semibold text-primary shadow ring-1 ring-gray-200">
              Faster Help
            </span>
            <span className="rounded-full bg-card-background px-3 py-1 text-xs font-semibold text-gray-700 shadow ring-1 ring-gray-200">
              Human First
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary shadow ring-1 ring-primary/20">
              24/7
            </span>
          </div>
          <div className="absolute bottom-4 left-4 bg-card-background/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-medium text-gray-700 shadow">
            Real people. No bots.
          </div>
        </div>
      </div>
    </section>
  );
}
