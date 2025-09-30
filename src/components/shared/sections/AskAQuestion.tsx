"use client";

import {
  FiPhoneCall,
  FiMessageCircle,
  FiCalendar,
  FiArrowRight
} from "react-icons/fi";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import { ContactAskAQuestionData } from "@/data/contact.data";

type Bullet = {
  icon: ReactNode;
  text: string;
};

type Stat = {
  label: string;
  value: string;
};

type ContactTeaserData = {
  eyebrow: string;
  title: string;
  tagline: string;
  bullets: Bullet[];
  stats: Stat[];
  image: {
    src: string;
    alt: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

const data: ContactTeaserData = {
  eyebrow: "Got a question?",
  title: "Talk to a real human, fast.",
  tagline:
    "Skip the long forms. Message us and we’ll match you to the right solution for your business, usually within minutes.",
  bullets: [
    { icon: <FiPhoneCall className="h-5 w-5" />, text: "Free discovery call" },
    {
      icon: <FiMessageCircle className="h-5 w-5" />,
      text: "No bots, experts only"
    },
    { icon: <FiCalendar className="h-5 w-5" />, text: "Same-day scheduling" }
  ],
  stats: [
    { label: "Avg. first response", value: "< 15 min" },
    { label: "Customer satisfaction", value: "98%" },
    { label: "Time zones covered", value: "24/7" }
  ],
  image: {
    src: "/assets/contact-form.png",
    alt: "Envelope and paper plane illustration"
  },
  cta: {
    label: "Book a quick chat",
    href: "/contact" // change if needed
  }
};

export default function AskAQuestion() {
  return (
    <section
      aria-labelledby="contact-teaser"
      className="relative isolate overflow-hidden  rounded-2xl shadow-lg shadow-primary/10 border border-primary/10"
    >
      {/* soft background blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy block */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card-background px-3 py-1 text-xs uppercase tracking-wide text-text/70">
              {ContactAskAQuestionData.eyebrow}
            </span>

            <h2
              id="contact-teaser"
              className="mt-5 text-4xl font-black leading-[1.05] text-text sm:text-5xl"
            >
              {ContactAskAQuestionData.title}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-text/80">
              {ContactAskAQuestionData.tagline}
            </p>

            {/* Bullets */}
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ContactAskAQuestionData.bullets.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <li
                    key={idx}
                    className="flex items-center gap-3 rounded-xl bg-card-background p-3 ring-1 ring-white/10 border border-border-light-gray"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 text-text">
                      <Icon size={20} />
                    </span>
                    <span className="text-sm text-text/90">{b.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="mt-7 flex items-center gap-4">
              <Link
                href={ContactAskAQuestionData.cta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-toggle text-background transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-text/30"
              >
                {ContactAskAQuestionData.cta.label}
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Stats strip */}
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {data.stats.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-card-background border border-border-dark-gray py-4 px-2 text-center ring-1 ring-white/10"
                >
                  <dt className="text-[11px] uppercase tracking-wide text-text/60">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-text">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual block */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                height={1000}
                width={1000}
                src={data.image.src}
                alt={data.image.alt}
                className="h-full w-full object-contain object-center"
                loading="lazy"
              />
            </div>

            {/* caption */}
            <p className="mt-3 text-center text-xs text-text/60">
              {ContactAskAQuestionData.preferText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
