// PricingTable.tsx
import { VPSHostingData, VPSPlans } from "@/data/vpsHosting.data";
import { VPSPlan } from "@/types/vps-hosting/vps-hosting.types";
import { Check } from "lucide-react";
import React from "react";

// only feature keys (exclude name & price)
type FeatureKey = keyof Omit<VPSPlan, "name" | "price">;

const features: { key: FeatureKey; label: string; boolean?: boolean }[] = [
  { key: "vcpu", label: "vCPU" },
  { key: "ram", label: "Memory (RAM)" },
  { key: "storage", label: "NVMe SSD Storage" },
  { key: "provisioning", label: "Provisioning Time" },
  { key: "bandwidth", label: "Bandwidth" },
  { key: "inode", label: "Inode Limit" },
  { key: "dedicatedIP", label: "Dedicated IP", boolean: true },
  { key: "root", label: "Full Root Access", boolean: true },
  { key: "antiDDoS", label: "1 Tbps+ Anti-DDoS", boolean: true },
  { key: "windowsSupport", label: "Windows & Linux Support", boolean: true },
  { key: "support24", label: "24/7/365 Support", boolean: true }
];

export default function VPSPricing() {
  return (
    <section>
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary">
          {VPSHostingData.title}
        </h2>
        <p className="text-color-description-text mt-2">
          {VPSHostingData.description}
        </p>
      </div>

      {/* -------------------------
            DESKTOP TABLE (lg and up)
           ------------------------- */}
      <div className="hidden lg:block">
        <div className="overflow-auto rounded-xl border border-border">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                {/* Features header (sticky left) */}
                <th
                  className="w-56 p-4 text-left bg-primary text-primary-foreground font-semibold sticky top-0 left-0 z-40 border-r border-border"
                  scope="col"
                >
                  Features
                </th>

                {/* Plan headers */}
                {VPSPlans.map((plan, i) => (
                  <th
                    key={plan.name}
                    className="p-4 text-center bg-primary text-primary-foreground sticky top-0 z-30 border-l border-border"
                    scope="col"
                  >
                    <div className="text-sm font-semibold">{plan.name}</div>

                    <div className="w-full mt-3 inline-block px-6 py-2 rounded-xl bg-primary-light text-primary-foreground font-bold text-2xl">
                      {plan.price}
                      <span className="block text-sm font-normal text-color-description-text">
                        /mo
                      </span>
                    </div>

                    <button className="mt-4 w-full bg-white text-primary rounded-md py-2 font-medium hover:scale-105 transition duration-500">
                      {VPSHostingData.orderNow}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((feat, rowIdx) => (
                <tr
                  key={feat.key}
                  className={rowIdx % 2 === 0 ? "bg-card" : ""}
                >
                  {/* feature label column (sticky left) */}
                  <td className="p-4 sticky left-0 z-20 bg-card border-t border-border whitespace-nowrap">
                    {feat.label}
                  </td>

                  {/* feature values */}
                  {VPSPlans.map((plan, colIdx) => {
                    // Narrow types for rendering
                    if (feat.boolean) {
                      const boolVal = Boolean(plan[feat.key] as boolean);
                      return (
                        <td
                          key={plan.name + feat.key}
                          className="p-4 text-center border-t border-border border-l align-top"
                        >
                          <div className="flex items-center justify-center">
                            {boolVal ? (
                              <div className="inline-flex items-center justify-center rounded p-1">
                                <Check className="h-5 w-5 text-green-500" />
                              </div>
                            ) : (
                              <span className="text-color-description-text">
                                —
                              </span>
                            )}
                          </div>
                        </td>
                      );
                    } else {
                      const textVal = String(plan[feat.key] as string);
                      return (
                        <td
                          key={plan.name + feat.key}
                          className="p-4 text-center border-t border-border border-l align-top"
                        >
                          <span>{textVal}</span>
                        </td>
                      );
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* -------------------------
            MOBILE STACKED CARDS (< lg)
           ------------------------- */}
      <div className="block lg:hidden space-y-6">
        {VPSPlans.map((plan, idx) => (
          <article
            key={plan.name}
            className="rounded-xl overflow-hidden border border-border bg-white shadow-sm"
          >
            {/* Card header */}
            <div className="bg-primary text-primary-foreground p-4">
              <div className="text-center text-xl font-semibold">
                {plan.name}
              </div>

              <div className="w-full mt-3 mx-auto flex flex-col items-center px-6 py-4 rounded-lg bg-primary-light text-primary-foreground font-bold text-2xl">
                {plan.price}
                <span className="block text-sm font-normal text-color-description-text">
                  /mo
                </span>
              </div>

              <button className="mt-4 w-full bg-white text-primary rounded-md py-2 font-medium">
                {VPSHostingData.orderNow}
              </button>
            </div>

            {/* Card content: feature rows */}
            <div className="p-4 space-y-3">
              {features.map((f) => {
                if (f.boolean) {
                  const boolVal = Boolean(plan[f.key] as boolean);
                  return (
                    <div
                      key={f.key}
                      className="flex items-center justify-between bg-gray-50 rounded-md p-3 border border-border"
                    >
                      <div className="text-sm text-color-description-text">
                        {f.label}
                      </div>
                      <div className="flex items-center justify-center">
                        {boolVal ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <span className="text-color-description-text">—</span>
                        )}
                      </div>
                    </div>
                  );
                } else {
                  const textVal = String(plan[f.key] as string);
                  return (
                    <div
                      key={f.key}
                      className="flex items-center justify-between bg-gray-50 rounded-md p-3 border border-border"
                    >
                      <div className="text-sm text-color-description-text">
                        {f.label}
                      </div>
                      <div className="text-sm font-medium">{textVal}</div>
                    </div>
                  );
                }
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
