"use client";

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";

export type FeatureTab = {
  slug: string;
  label: string;
  description: string;
  bullets: string[];
  cta?: { label: string; href: string };
};

export default function FeatureTabsClient({
  tabs,
  initialActive,
}: {
  tabs: FeatureTab[];
  initialActive?: string;
}) {
  const defaultIdx = useMemo(() => {
    const i = initialActive ? tabs.findIndex((t) => t.slug === initialActive) : -1;
    return i >= 0 ? i : 0;
  }, [tabs, initialActive]);

  const [activeIdx, setActiveIdx] = useState(defaultIdx);
  const active = tabs[activeIdx];

  // Enable animations ONLY after the first interaction
  const [animate, setAnimate] = useState(false);

  // --- Animated underline (left/width) ---
  const navRef = useRef<HTMLDivElement>(null);
  const [underline, setUnderline] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const updateUnderline = () => {
    if (!navRef.current) return;
    const el = navRef.current.querySelector<HTMLElement>(`a[data-slug="${active.slug}"]`);
    if (!el) return;
    const parentRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setUnderline({ left: rect.left - parentRect.left, width: rect.width });
  };

  useLayoutEffect(updateUnderline, [activeIdx]);
  useEffect(() => {
    const onResize = () => updateUnderline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // --- Smooth content height + fade (only after animate=true) ---
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [wrapH, setWrapH] = useState<number | "auto">("auto");
  const [visible, setVisible] = useState(true);

  const measure = () => {
    if (innerRef.current) setWrapH(innerRef.current.offsetHeight);
  };

  useLayoutEffect(() => {
    // initial: no animation, just show natural height
    if (!animate) {
      setWrapH("auto");
      return;
    }
    // on tab change with animation
    setVisible(false);
    requestAnimationFrame(() => {
      measure();           // measure new height
      setVisible(true);    // fade in
    });
  }, [activeIdx, animate]);

  useEffect(() => {
    const onResize = () => (animate ? measure() : setWrapH("auto"));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [animate]);

  const handleTab = (e: React.MouseEvent, slug: string, idx: number) => {
    e.preventDefault();
    if (!animate) setAnimate(true); // enable animations from now on
    setActiveIdx(idx);

    // Optional: reflect selection in URL without navigation
    const url = new URL(window.location.href);
    url.searchParams.set("feature", slug);
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <div className="mt-5">
      {/* Tabs */}
      <div className="border-b border-border-light-gray">
        <div ref={navRef} className="relative flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
          {tabs.map((tab, idx) => {
            const isActive = idx === activeIdx;
            return (
              <Link
                key={tab.slug}
                href={`?feature=${encodeURIComponent(tab.slug)}`}
                data-slug={tab.slug}
                onClick={(e) => handleTab(e, tab.slug, idx)}
                className={`relative pb-2 text-base font-semibold  border-b-[3px] ${
                  isActive ? "text-text border-teal-600" : "text-description-text border-transparent hover:text-primary"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}

          {/* Underline,  no transition initially, slides after first interaction */}
          {/* <span
            className={`absolute bottom-0 h-[2px] rounded bg-teal-600 ${
              animate ? "transition-all duration-300" : ""
            }`}
            style={{ left: underline.left, width: underline.width }}
          /> */}
        </div>
      </div>

      {/* Content wrapper,  height animates only after interaction */}
      <div
        ref={outerRef}
        style={{ height: animate ? (typeof wrapH === "number" ? `${wrapH}px` : "auto") : "auto" }}
        className={`relative mt-5 overflow-hidden ${animate ? "transition-[height] duration-300" : ""}`}
      >
        <div
          key={active.slug}
          ref={innerRef}
          className={`${animate ? "transition-opacity duration-300" : ""} ${
            animate ? (visible ? "opacity-100" : "opacity-0") : "opacity-100"
          }`}
        >
          {/* Description */}
          <p className="text-[15px] leading-6 text-text">{active.description}</p>

          {/* Bullets */}
          <ul className="mt-5 space-y-3">
            {active.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-text">
                <IoCheckmarkCircle className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-[15px] leading-6">{b}</span>
              </li>
            ))}
          </ul>

          {/* Optional CTA */}
          {/* {active.cta && (
            <div className="mt-6">
              <Link
                href={active.cta.href}
                className="inline-flex items-center rounded-lg
                           bg-gradient-to-r from-teal-500 to-teal-700
                           px-5 py-3 text-sm font-semibold text-white shadow
                           transition-colors hover:from-teal-600 hover:to-teal-800"
              >
                {active.cta.label}
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
