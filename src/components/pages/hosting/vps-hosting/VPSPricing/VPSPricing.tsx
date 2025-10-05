"use client";

import React, { useEffect, useRef, useState } from "react";
import { VPSHostingData, VPSPlans } from "@/data/vpsHosting.data";
import { VPSPlan } from "@/types/vps-hosting/vps-hosting.types";
import { Check } from "lucide-react";
import VPSPricingHeader from "./VPSPricingHeader";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import { Button } from "@/components/shared/html/Button";

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
  const countryCode = useIpProviderContextValue();

  const currencyQuery = `currency=${countryCode === "BD" ? "2" : "1"}`;

  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null); // overflow-auto wrapper
  const tableRef = useRef<HTMLTableElement | null>(null);
  const headerRef = useRef<HTMLTableSectionElement | null>(null); // ref to real THEAD

  const [isSticky, setIsSticky] = useState(false);
  const [leftPx, setLeftPx] = useState(0);
  const [widthPx, setWidthPx] = useState<number | undefined>(undefined);
  const [scrollLeft, setScrollLeft] = useState(0);

  // update measurements and sticky state
  useEffect(() => {
    const update = () => {
      const hdr = headerRef.current;
      const tbl = tableRef.current;
      const wrap = wrapperRef.current;
      const sec = sectionRef.current;

      if (!hdr || !tbl || !wrap || !sec) {
        setIsSticky(false);
        return;
      }

      const headerRect = hdr.getBoundingClientRect();
      const tableRect = tbl.getBoundingClientRect();
      const wrapperRect = wrap.getBoundingClientRect();

      // width/left for the fixed clone
      setLeftPx(Math.round(wrapperRect.left));
      setWidthPx(Math.round(wrapperRect.width));

      // track horizontal scroll inside wrapper so the fixed clone aligns
      setScrollLeft(wrap.scrollLeft);

      const headerHeight = headerRect.height;

      // Sticky condition:
      // - header top passed the viewport top (headerRect.top <= 0)
      // - table still has space below header (tableRect.bottom > headerHeight)
      if (headerRect.top <= 0 && tableRect.bottom > headerHeight + 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // initial check
    update();

    // listeners
    const onScroll = () => update();
    const onResize = () => update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // wrapper horizontal scroll
    const wrapEl = wrapperRef.current;
    const onWrapScroll = () => {
      if (!wrapEl) return;
      setScrollLeft(wrapEl.scrollLeft);
      // keep left/width up to date if wrapper moves horizontally
      const r = wrapEl.getBoundingClientRect();
      setLeftPx(Math.round(r.left));
      setWidthPx(Math.round(r.width));
    };
    wrapEl?.addEventListener("scroll", onWrapScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      wrapEl?.removeEventListener("scroll", onWrapScroll);
    };
  }, []);

  return (
    <section ref={sectionRef}>
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text">{VPSHostingData.title}</h2>
        <p className="text-color-description-text mt-2">
          {VPSHostingData.description}
        </p>
      </div>

      {/* -------------------------
            DESKTOP TABLE (lg and up)
           ------------------------- */}
      <div className="hidden lg:block">
        {/* wrapperRef is the scrolling container we align to */}
        <div
          ref={wrapperRef}
          className="overflow-auto rounded-xl border border-border relative"
        >
          <table ref={tableRef} className="min-w-full border-collapse relative">
            {/* Real header inside table (we forwardRef so headerRef points to this THEAD) */}
            <VPSPricingHeader countryCode={countryCode} currencyQuery={currencyQuery} ref={headerRef} />

            <tbody>
              {features.map((feat, rowIdx) => (
                <tr key={feat.key}>
                  {/* feature label column (sticky left) */}
                  <td className="p-4 sticky left-0 z-20 border-t border-border whitespace-nowrap">
                    {feat.label}
                  </td>

                  {/* feature values */}
                  {VPSPlans.map((plan) => {
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

          {/* Fixed clone header that appears at the top of the viewport */}
          {isSticky && (
            <div
              // container for the fixed header (will be placed at top and aligned with wrapper)
              style={{
                position: "fixed",
                top: "64px",
                left: leftPx,
                width: widthPx,
                zIndex: 50,
                boxSizing: "border-box",
                // add pointer events so buttons are clickable on the clone
                pointerEvents: "auto"
              }}
              className="shadow-md"
            >
              {/* translateX to handle horizontal scroll inside wrapper */}
              <div
                style={{
                  transform: `translateX(-${scrollLeft}px)`,
                  willChange: "transform"
                }}
              >
                <table className="min-w-full border-collapse">
                  {/* clone header with isClone so we don't include sticky classes inside clone */}
                  <VPSPricingHeader countryCode={countryCode} currencyQuery={currencyQuery} isClone />
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* -------------------------
            MOBILE STACKED CARDS (< lg)
           ------------------------- */}
      <div className="block lg:hidden space-y-6">
        {VPSPlans.map((plan) => (
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
                {countryCode === "BD" ? plan.priceBDT : plan.priceUSD}
                <span className="block text-sm font-normal text-color-description-text">
                  /mo
                </span>
              </div>

              <Button
                target="_blank"
                href={plan.href + `&${currencyQuery}`}
                variant="bordered"
                size="sm"
                className="mt-4 w-full bg-white  text-primary !rounded-md !py-2 font-medium hover:!bg-white hover:!text-primary !hover:scale-105 transition duration-500 text-nowrap"
              >
                {VPSHostingData.orderNow}
              </Button>
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
