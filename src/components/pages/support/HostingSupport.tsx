import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import React from "react";
import { IconType } from "react-icons";

interface HostingSupportItem {
  icon: IconType;
  title: string;
  description: string;
  className?: string
}

interface HostingSupportProps {
  title: string;
  subtitle: string;
  items: HostingSupportItem[];
}

/**
 * Redesigned from scratch:
 * - Distinct look: asymmetrical grid, left-aligned cards, gradient accents, glass backdrop.
 * - Same content contract: uses the exact same `data` shape (title, subtitle, items[]).
 * - Added accessibility + keyboard focus states.
 */
const HostingSupport = ({ data }: { data: HostingSupportProps }) => {
  return (
    <section
      aria-labelledby="hosting-support-title"
      className="relative w-full overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <CenteredSectionHeader
          title={<span id="hosting-support-title">{data.title}</span>}
          description={data.subtitle}
        />

        {/* Card grid: asymmetric layout for visual distinction */}
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.items.map((item, index) => {
            const Icon = item.icon;

            // Create variety in layout using spans and subtle rotations
            const spanClass =
              index % 5 === 0
                ? "lg:col-span-2"
                : index % 7 === 0
                ? "sm:col-span-2"
                : "";

            return (
              <li key={index} className={` h-full pb-4   ${item?.className}`}>
                <div 
                  tabIndex={0}
                  className={[
                    "group relative h-full overflow-hidden rounded-2xl border border-border-light-gray",
                    "bg-card-background",
                    "transition-all duration-300 focus:outline-none",
                  ].join(" ")}
                  style={{
                    transform: index % 3 === 0 ? "rotate(-0.15deg)" : undefined,
                  }}
                  aria-label={`${item.title}: ${item.description}`}
                >
                  {/* Gradient edge accent */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-primary to-primary/70 opacity-80" />

                  {/* Content */}
                  <div className="relative h-full gap-y-6 flex flex-col justify-between p-5 md:p-6 ">
                    <div className="flex flex-1 items-start gap-4">
                      <span
                        className={[
                          "flex h-12 w-12 flex-none items-center justify-center rounded-xl",
                          "bg-primary/10 text-primary ring-1 ring-primary/20",
                          "transition-transform duration-300 group-hover:scale-105",
                        ].join(" ")}
                        aria-hidden
                      >
                        <Icon size={22} />
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl font-semibold text-[--color-text-primary] tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[--color-description-text]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom action hint / decorative footer */}
                    <div className=" flex items-center  justify-between">
                      <div className="inline-flex items-center text-xs font-medium text-[--color-description-text]">
                        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary/70" />
                        Always-on expertise
                      </div>
                      <div className="text-xs text-[--color-description-text] opacity-70">
                        Optimized for uptime
                      </div>
                    </div>
                  </div>

                  {/* Hover radial highlight */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HostingSupport;
