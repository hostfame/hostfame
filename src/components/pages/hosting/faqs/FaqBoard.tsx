"use client";

import Accordion from "@/components/shared/accordion/Accordion";
import { CATEGORIES, FAQS } from "@/data/faqs.data";
import { FaqCategory, FaqItem } from "@/types/faqs.types";
import React, { useEffect, useMemo, useState } from "react";

type Props = {
  categories?: FaqCategory[];
  faqs?: FaqItem[];
  defaultCategoryId?: string;
};

const FaqBoard: React.FC<Props> = ({
  categories = CATEGORIES,
  faqs = FAQS,
  defaultCategoryId,
}) => {
  const initial = defaultCategoryId ?? categories[0]?.id ?? "";
  const [active, setActive] = useState<string>(initial);

  const visibleFaqs = useMemo(
    () => faqs.filter((f) => f.categoryId === active),
    [faqs, active]
  );

  // compute which item should be open first for each category
  const defaultOpenId = visibleFaqs[0]?.id ?? null;

  // keep "active" in sync if categories change
  useEffect(() => {
    if (!categories.find((c) => c.id === active)) {
      setActive(categories[0]?.id ?? "");
    }
  }, [categories, active]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[320px_1fr]">
      {/* Left: category list */}
      <ul className="space-y-4">
        {categories.map((c) => {
          const Icon = c.icon;
          const selected = c.id === active;

          return (
            <li key={c.id} className="transition-all">
              <button
                onClick={() => setActive(c.id)}
                className={`cursor-pointer w-full rounded-2xl px-5 py-4 text-left shadow-sm ring-1 ring-black/5 transition-all duration-300 ease-out
                flex items-center gap-4
                ${
                  selected
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-gray-background text-text hover:shadow"
                }
              `}
              >
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full shadow ring-1 ring-black/10 transition-colors ${
                    selected
                      ? "bg-white/20 text-white"
                      : "bg-gray-background text-teal-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold">{c.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Right: FAQs list (accordion) */}
      <div className="rounded-2xl bg-background p-2 md:p-3 shadow-md  ring-1 ring-border-light-gray">
        {/* Key by active so it resets when category changes */}
        <Accordion
          key={active}
          defaultOpenId={defaultOpenId}
          items={visibleFaqs.map((f) => ({
            id: f.id,
            title: f.question,
            content: f.answer,
          }))}
        />
      </div>
    </div>
  );
};

export default FaqBoard;
