"use client";

import { CATEGORIES, FAQS } from "@/data/faqs.data";
import { FaqCategory, FaqItem } from "@/types/faqs.types";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";

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

  // Which FAQ (by id) is open in the current category
  const [openId, setOpenId] = useState<string | null>(null);

  const visibleFaqs = useMemo(
    () => faqs.filter((f) => f.categoryId === active),
    [faqs, active]
  );

  // When category changes, open the first item (if any)
  useEffect(() => {
    setOpenId(visibleFaqs[0]?.id ?? null);
  }, [active, visibleFaqs]);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id)); // toggle; ensures only one at a time
  };

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
                className={`w-full rounded-2xl px-5 py-4 text-left shadow-sm ring-1 ring-black/5 transition-all duration-300 ease-out
                flex items-center gap-4
                ${
                  selected
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-white text-slate-800 hover:shadow"
                }
              `}
              >
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full shadow ring-1 ring-black/5 transition-colors
                    ${
                      selected
                        ? "bg-white/20 text-white"
                        : "bg-white text-teal-600"
                    }
                  `}
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
      <div className="rounded-2xl bg-white p-2 md:p-3 shadow-md ring-1 ring-black/5">
        <div
          key={active} /* smooth fade/slide when category changes */
          className="divide-y divide-slate-200/70 overflow-hidden rounded-xl transition-all duration-300 ease-out"
        >
          {visibleFaqs.map((f) => (
            <AccordionItem
              key={f.id}
              id={f.id}
              question={f.question}
              answer={f.answer}
              isOpen={openId === f.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqBoard;

/* ------------------------------------------------------------------ */
/* Accordion item (controlled)                                         */
/* ------------------------------------------------------------------ */
const AccordionItem: React.FC<{
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}> = ({ id, question, answer, isOpen, onToggle }) => {
  return (
    <div className="px-4">
      <button
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between gap-4 py-5 transition-colors duration-300 hover:text-teal-700"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        id={`faq-trigger-${id}`}
      >
        <span className="text-[15px] max-md:text-left font-medium text-slate-900">
          {question}
        </span>

        {/* plus icon rotates when open */}
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300
          ${
            isOpen
              ? "bg-blue-50 text-teal-600"
              : "bg-transparent text-teal-600"
          }
        `}
          aria-hidden
        >
          {isOpen ? <FiMinus className="size-5"/> : <AiOutlinePlus className="h-5 w-5" />}
        </span>
      </button>

      {/* animated answer: smooth height & opacity */}
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-trigger-${id}`}
        className={`grid overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="min-h-0">
          <p className="pb-5 text-[15px] leading-6 text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};
