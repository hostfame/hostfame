import { featureRows, hostingPlans } from "@/data/hostingPlan.data";
import Image from "next/image";
import { Button } from "../html/Button";
import HostingPriceValue from "./HostingPriceValue";

const Check = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="h-5 w-5 flex-none text-green-500"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
      clipRule="evenodd"
    />
  </svg>
);

const Cross = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="h-5 w-5 flex-none text-rose-500"
    fill="currentColor"
  >
    <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z" />
  </svg>
);

const Dot = () => (
  <span
    aria-hidden
    className="inline-block h-1.5 w-1.5 rounded-full bg-muted"
  />
);

const HeaderImage = ({ width, height }: { width: string; height: string }) => {
  return (
    <div
      className={`relative ${width} ${height} shrink-0 overflow-hidden rounded-xl `}
    >
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
    <section className="">
      <div>
        {/* Card wrapper */}
        <div className="relative overflow-hidden rounded-2xl border border-border-light-gray bg-card-background">
          {/* Top bar with illustration */}
          <div className="flex flex-col items-start gap-6 border-b border-border-light-gray p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <section className=" lg:hidden">
                <HeaderImage width={"w-20"} height={"h-20"} />
              </section>
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-text-accent sm:text-2xl">
                  Simple, scalable hosting
                </h2>
                <p className="text-sm text-description-text">
                  Compare hostingPlans and pick the perfect fit. Minimalist UI,
                  same layout you wanted—refined.
                </p>
              </div>
            </div>

            {/* Mini legend */}
            <div className="flex items-center gap-4 text-xs lg:text-sm text-description-text">
              <div className="flex items-center gap-2">
                <Check />
                <span className=" text-nowrap">Included</span>
              </div>
              <Dot />
              <div className="flex items-center gap-2">
                <Cross />
                <span className=" text-nowrap">Not included</span>
              </div>
            </div>
          </div>

          {/* Cards (mobile / small screens) */}
          <div className="lg:hidden grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
            {hostingPlans.map((plan) => (
              <article
                key={plan.id}
                className="group space-y-6 flex flex-col rounded-xl border border-border-light-gray bg-card-background p-5 shadow-sm transition-all hover:shadow-md"
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
                  <Button size="sm" variant="bordered" className=" w-full">
                    {plan.cta}
                  </Button>
                </header>

                {/* Divider */}
                <div className="h-px w-full bg-muted" />

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
                          className="flex items-center justify-between rounded-md border border-muted px-3 py-2"
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

          {/* Comparison (md+) — table-less, section-based grid */}
          <section className="hidden lg:block border-t border-border-light-gray px-4 pb-6">
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
                      <Button size="sm" variant="bordered" className="w-full">
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
                  className="min-w-full border-t border-border-light-gray"
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
      </div>
    </section>
  );
}
