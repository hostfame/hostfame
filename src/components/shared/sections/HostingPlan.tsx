import { featureRows, hostingPlans } from "@/data/hostingPlan.data";
import Image from "next/image";
import { Button } from "../html/Button";
import HostingPriceValue from "./HostingPriceValue";
import { LuCheck, LuX, LuServer } from "react-icons/lu";

const Check = () => (
  <LuCheck className="h-5 w-5 flex-none text-green-500" />
);

const Cross = () => (
  <LuX className="h-5 w-5 flex-none text-rose-400" />
);

const HeaderImage = ({ width, height }: { width: string; height: string }) => {
  return (
    <div className={`relative ${width} ${height} shrink-0 overflow-hidden rounded-xl`}>
      <Image
        src="/assets/pricing-image.svg"
        alt="Hosting illustration"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default function HostingPlans() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-full px-4 py-1.5">
          <LuServer className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">Compare Plans</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-text">
          Simple, Scalable Hosting
        </h2>
        <p className="text-description-text max-w-2xl mx-auto">
          Compare our hosting plans and pick the perfect fit for your needs. All plans include 24/7 support and 99.9% uptime guarantee.
        </p>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 pt-2">
          <div className="flex items-center gap-2 text-sm text-description-text">
            <Check />
            <span>Included</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-description-text">
            <Cross />
            <span>Not included</span>
          </div>
        </div>
      </div>

      {/* Card wrapper */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">

          {/* Cards (mobile / small screens) */}
          <div className="lg:hidden grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
            {hostingPlans.map((plan) => (
              <article
                key={plan.id}
                className="group space-y-6 flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-5 shadow-sm transition-all hover:shadow-md"
              >
                <header className=" space-y-2">
                  <h3 className="text-base font-semibold tracking-tight text-text-accent">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-description-text">
                    {plan.startingAtLabel}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <HostingPriceValue plan={plan} />
                    <span className="text-xs text-description-text">
                      {plan.priceSuffix}
                    </span>
                  </div>
                  <Button href={plan.href} size="sm" variant="bordered" className=" w-full">
                    {plan.cta}
                  </Button>
                </header>

                {/* Divider */}
                <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />

                {/* Key specs */}
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span className="text-description-text">Storage</span>
                    <span className="font-medium text-text">
                      {plan.storage}
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-description-text">
                      Email Accounts
                    </span>
                    <span className="font-medium text-text">{plan.email}</span>
                  </li>
                </ul>

                {/* Features */}
                <ul className="grid grid-cols-1 gap-2 text-sm">
                  {featureRows
                    .filter((f) => f.key !== "storage" && f.key !== "email")
                    .map((f) => {
                      const val =
                        plan.features[f.key as keyof typeof plan.features];
                      return (
                        <li
                          key={`${plan.id}-${f.key}`}
                          className="flex items-center justify-between rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2"
                        >
                          <span className="text-description-text">
                            {f.label}
                          </span>
                          <span className="ml-3">
                            {val ? <Check /> : <Cross />}
                          </span>
                        </li>
                      );
                    })}
                </ul>

                {/* Accent bar */}
                <div className="h-1 w-16 rounded-full opacity-70 text-text-accent" />
              </article>
            ))}
          </div>

          {/* Comparison (md+),  table-less, section-based grid */}
          <section className="hidden lg:block border-t border-gray-200 dark:border-gray-800 px-4 pb-6">
            <div className="overflow-x-auto">
              {/* Header row */}
              <section
                aria-label="Plans header"
                className="min-w-full"
                style={{
                  display: "grid",
                  gridTemplateColumns: `200px repeat(${hostingPlans.length}, minmax(200px,1fr))`,
                }}
              >
                {/* Top-left illustration cell */}
                <div className="flex justify-center items-center py-4 pr-6">
                  <HeaderImage width={"w-56"} height={"h-56"} />
                </div>

                {/* Plan header cells */}
                {hostingPlans.map((p, i) => (
                  <section
                    key={`plan-head-${p.id}`}
                    className="py-4 pr-6 flex flex-col items-center justify-center"
                    style={{ gridColumn: `${i + 2} / span 1` }}
                  >
                    <div className="space-y-2 flex flex-col items-center justify-center">
                      <h3 className="text-base font-semibold text-text-accent">
                        {p.name}
                      </h3>
                      <p className="text-xs text-description-text">
                        {p.startingAtLabel}
                      </p>
                      <div className="flex items-baseline justify-center gap-1">
                        <HostingPriceValue plan={p} />
                        <span className="text-xs text-description-text">
                          {p.priceSuffix}
                        </span>
                      </div>
                      <Button href={p.href} size="sm" variant="bordered" className="w-full">
                        {p.cta}
                      </Button>
                    </div>
                  </section>
                ))}
              </section>

              {/* Feature rows */}
              {featureRows.map((row) => (
                <section
                  key={`row-${row.key}`}
                  className="min-w-full border-t border-gray-200 dark:border-gray-800"
                  style={{
                    display: "grid",
                    gridTemplateColumns: `200px repeat(${hostingPlans.length}, minmax(200px,1fr))`,
                  }}
                >
                  {/* Feature label cell */}
                  <div className="py-3 pr-6 flex items-center justify-center text-center text-text font-medium">
                    {row.label}
                  </div>

                  {/* Feature value cells per plan */}
                  {hostingPlans.map((plan, i) => {
                    if (row.key === "storage") {
                      return (
                        <div
                          key={`${plan.id}-storage`}
                          className="py-3 pr-6 text-center text-text/90"
                          style={{ gridColumn: `${i + 2} / span 1` }}
                        >
                          {plan.storage}
                        </div>
                      );
                    }
                    if (row.key === "email") {
                      return (
                        <div
                          key={`${plan.id}-email`}
                          className="py-3 pr-6 text-center text-text/90"
                          style={{ gridColumn: `${i + 2} / span 1` }}
                        >
                          {plan.email}
                        </div>
                      );
                    }
                    const has =
                      plan.features[row.key as keyof typeof plan.features];
                    return (
                      <div
                        key={`${plan.id}-${row.key}`}
                        className="py-3 pr-6"
                        style={{ gridColumn: `${i + 2} / span 1` }}
                      >
                        <span className="inline-flex w-full items-center justify-center">
                          {has ? <Check /> : <Cross />}
                        </span>
                      </div>
                    );
                  })}
                </section>
              ))}
            </div>
          </section>
        </div>
    </section>
  );
}
