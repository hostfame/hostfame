import Image from "next/image";
import { AdvancedFeatureTab } from "@/types/about-us.types";

export default function FeaturePanel({ tab }: { tab: AdvancedFeatureTab }) {
  return (
    <section
      id={`panel-${tab.slug}`}
      aria-labelledby={`tab-${tab.slug}`}
      className="grid gap-10 xl:gap-16 pt-10 md:grid-cols-2 items-stretch"
    >
      {/* Left: copy */}
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold tracking-tight">{tab.heading}</h3>
        {tab.blurb && <p className="mt-3 text-muted-foreground">{tab.blurb}</p>}

        <div className="mt-8 lg:mt-12 grid gap-4 sm:grid-cols-2">
          {tab.bullets.map((b) => (
            <div
              key={b.id}
              className="bg-card-background flex items-start gap-3 rounded-xl border px-4 py-6 xl:px-6 xl:py-8 border-primary cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
            >
              <span className="lg:mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-primary">
                ✓
              </span>
              <span className="text-sm lg:text-base">{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: image */}
      <div className="flex">
        <div className="relative overflow-hidden rounded-2xl border shadow-2xl flex-1">
          <Image
            src={tab.image}
            alt={tab.imageAlt}
            fill
            className="object-cover object-center"
            priority={tab.slug === "latest-control-panel"}
          />
        </div>
      </div>
    </section>
  );
}
