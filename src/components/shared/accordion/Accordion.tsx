// File: components/shared/Accordion.tsx
"use client";

import { AccordionProps } from "@/types/accordion.types";
import React, { useCallback, useId, useMemo, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";

/**
 * Reusable Accordion component.
 * - Uncontrolled by default (manages its own open state)
 * - Supports both data-driven `items` and JSX children via <AccordionItem>
 * - Accessible using button+region with proper aria attributes
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId = null,
  onChange,
  singleOpen = true,
  className,
  children,
}) => {
  // internal state (uncontrolled)
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const handleToggle = useCallback(
    (id: string) => {
      setOpenId((prev) => {
        const next = prev === id ? null : id;
        onChange?.(next);
        return singleOpen ? next : next; // singleOpen reserved if we later support multi
      });
    },
    [onChange, singleOpen]
  );

  const content = useMemo(() => {
    if (items && items.length) {
      return items.map((it) => (
        <AccordionItem
          key={it.id}
          id={it.id}
          isOpen={openId === it.id}
          onToggle={handleToggle}
          header={it.title}
        >
          {it.content}
        </AccordionItem>
      ));
    }
    return children;
  }, [items, children, openId, handleToggle]);

  return (
    <div
      className={
        "divide-y divide-slate-200/70 overflow-hidden rounded-xl transition-all duration-300 ease-out " +
        (className ?? "")
      }
    >
      {content}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* AccordionItem (exported for custom usage)                           */
/* ------------------------------------------------------------------ */
export const AccordionItem: React.FC<{
  id: string;
  header: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: (id: string) => void;
}> = ({ id, header, children, isOpen, onToggle }) => {
  const reactId = useId();
  const triggerId = `faq-trigger-${id}-${reactId}`;
  const panelId = `faq-panel-${id}-${reactId}`;

  return (
    <div className="px-4">
      <button
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between gap-4 py-5 transition-colors duration-300 hover:text-teal-700"
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={triggerId}
      >
        <span className="text-[15px] max-md:text-left font-medium text-text">
          {header}
        </span>

        {/* plus icon rotates when open */}
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-blue-50 text-teal-600" : "bg-transparent text-teal-600"
          }`}
          aria-hidden
        >
          {isOpen ? (
            <FiMinus className="size-5" />
          ) : (
            <AiOutlinePlus className="h-5 w-5" />
          )}
        </span>
      </button>

      {/* animated answer: smooth height & opacity */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="pb-5 text-[15px] leading-6 text-text">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
