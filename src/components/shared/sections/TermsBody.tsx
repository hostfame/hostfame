/* eslint-disable @typescript-eslint/no-explicit-any */
// components/terms/TermsBody.tsx
"use client";

import { Section, TermsData, termsData } from "@/data/terms-and-services.data";
import React from "react";
import {
  FiChevronRight,
  FiAlertTriangle,
  FiCreditCard,
  FiLifeBuoy,
  FiCheckCircle,
} from "react-icons/fi";

/* =========================
 * UI helpers
 * ========================= */
const IconBullet: React.FC = () => (
  <FiCheckCircle className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
);

/* =========================
 * TermsBody (no header/footer)
 * ========================= */
export default function TermsBody({
  data = termsData,
  showIntro = false, // keep intro optional to avoid duplicating banner copy
}: {
  data?: TermsData;
  showIntro?: boolean;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {showIntro && (
        <p className="mb-8 max-w-3xl text-description-text">{data.intro}</p>
      )}

      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* TOC */}
        <nav
          aria-label="Table of contents"
          className="lg:sticky lg:top-24 self-start"
        >
          <div className="rounded-xl border p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-dark-text">
              <FiChevronRight className="h-4 w-4" />
              On this page
            </div>
            <ul className="space-y-2">
              {data.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block text-sm text-description-text hover:underline"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick notes */}
          <div className="mt-4 hidden rounded-xl border p-4 lg:block">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-dark-text">
              <FiAlertTriangle className="h-4 w-4" />
              Quick Notes
            </div>
            <ul className="space-y-2 text-sm text-description-text">
              <li className="flex items-start gap-2">
                <FiCreditCard className="mt-0.5 h-4 w-4" />
                <span>30-day money-back on hosting plans.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiLifeBuoy className="mt-0.5 h-4 w-4" />
                <span>24/7 support via email, WhatsApp, live chat.</span>
              </li>
            </ul>
          </div>
        </nav>

        {/* Content */}
        <article className="space-y-10">
          {data.sections.map((section) => {
            const hasKeyValues = "keyValues" in section;
            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <h2 className="text-xl font-semibold text-dark-text">
                  {section.title}
                </h2>

                {"paragraphs" in section &&
                  section.paragraphs?.map((p, i) => (
                    <p key={i} className="mt-3 text-description-text">
                      {p}
                    </p>
                  ))}

                {hasKeyValues && (
                  <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {(
                      section as Extract<Section, { keyValues: any }>
                    ).keyValues.map((kv, idx) => (
                      <div key={idx} className="rounded-lg border p-3 text-sm">
                        <dt className="font-medium text-dark-text">{kv.key}</dt>
                        <dd className="mt-1 text-description-text">
                          {kv.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {"bullets" in section &&
                  section.bullets &&
                  section.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-description-text"
                        >
                          <IconBullet />
                          <span>{b.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                {"note" in section && section.note && (
                  <p className="mt-4 text-sm italic text-description-text">
                    {section.note}
                  </p>
                )}
              </section>
            );
          })}
        </article>
      </div>
    </div>
  );
}
