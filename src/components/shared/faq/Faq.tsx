// File: components/sections/FaqSection.tsx
"use client";

import React from "react";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import { AccordionItemData } from "@/types/accordion.types";
import Accordion from "../accordion/Accordion";

export type FaqSectionProps = {
  /** Props passed directly to CenteredSectionHeader */
  headerProps: React.ComponentProps<typeof CenteredSectionHeader>;
  /** Items for the FAQ accordion on the right */
  items: AccordionItemData[];
  /** Optionally open a specific item initially */
  defaultOpenId?: string | null;
  /** Optional wrapper className for outer section */
  className?: string;
};

/**
 * Common FAQ Section
 * Layout: Left (title via CenteredSectionHeader) | Right (Accordion)
 * Responsive: stacks on small screens; two columns on md+
 */
const FAQ: React.FC<FaqSectionProps> = ({
  headerProps,
  items,
  defaultOpenId = items[0]?.id ?? null,
  className,
}) => {
  return (
    <section
      aria-labelledby="faq-heading"
      className={`w-full ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(240px,360px)_1fr] md:gap-12">
          {/* Left: Title / Copy */}
          <div className="md:pt-2 flex items-start justify-center md:justify-start">
            <CenteredSectionHeader {...headerProps} />
          </div>

          {/* Right: Accordion */}
          <div className="rounded-2xl bg-white p-2 shadow-md ring-1 ring-black/5 sm:p-3">
            <Accordion
              items={items}
              defaultOpenId={defaultOpenId}
              className="bg-gradient-to-b from-slate-50/30 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
