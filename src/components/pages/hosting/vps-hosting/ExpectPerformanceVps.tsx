"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import {
  FiArrowRight,
  FiServer,
  FiShield,
  FiZap,
  FiTerminal,
  FiUsers,
  FiDatabase,
  FiCloud,
  FiGlobe,
} from "react-icons/fi";
import { classNameForWhiteHover } from "../../home/Home";

type CTA = { label: string; href: string; variant?: "solid" | "ghost" };
type Feature = { icon: JSX.Element; title: string; desc: string };

type VpsData = {
  kicker: string;
  heading: string;
  subheading: string;
  ctas: CTA[];
  highlights: Feature[];
  images: {
    big: { src: string; alt: string };
    small: { src: string; alt: string };
  };
};

const defaultData: VpsData = {
  kicker: "VPS that actually feels fast",
  heading: "Scale calmly with Hostie VPS",
  subheading:
    "Dedicated resources, stable throughput, and full root control,  made simple for teams and solo builders.",
  ctas: [
    { label: "Choose a plan", href: "#", variant: "solid" },
    { label: "See specs", href: "#", variant: "ghost" },
  ],
  highlights: [
    {
      icon: <FiServer className="text-primary" aria-hidden />,
      title: "NGINX / Apache ready",
      desc: "Prepped for your preferred web stack with sane defaults.",
    },
    {
      icon: <FiUsers className="text-primary" aria-hidden />,
      title: "Unlimited SFTP users",
      desc: "Create separate logins without hitting artificial limits.",
    },
    {
      icon: <FiShield className="text-primary" aria-hidden />,
      title: "Secure SSH access",
      desc: "Key-based auth and locked-down defaults out of the box.",
    },
    {
      icon: <FiZap className="text-primary" aria-hidden />,
      title: "Consistent throughput",
      desc: "Noisy neighbors tamed. Your apps stay snappy.",
    },
    {
      icon: <FiTerminal className="text-primary" aria-hidden />,
      title: "Full root control",
      desc: "Install what you want. No walled garden.",
    },
    {
      icon: <FiDatabase className="text-primary" aria-hidden />,
      title: "Managed Databases",
      desc: "Spin up MySQL, Postgres, or Redis with minimal setup.",
    },
    {
      icon: <FiCloud className="text-primary" aria-hidden />,
      title: "Automated Backups",
      desc: "Daily snapshots ensure your data is always safe.",
    },
    {
      icon: <FiGlobe className="text-primary" aria-hidden />,
      title: "Global Reach",
      desc: "Deploy closer to your users with multiple region options.",
    },
  ],
  images: {
    big: {
      src: "/assets/vps-big.png",
      alt: "Modern server room lighting",
    },
    small: {
      src: "https://themewant.com/products/wordpress/hostie/wp-content/uploads/2024/02/vps-small.png",
      alt: "Rack close-up",
    },
  },
};

export default function ExpectPerformanceVps({
  data = defaultData,
}: {
  data?: VpsData;
}) {
  const d = data;

  return (
    <section aria-label="VPS showcase">
      <div className="py-16">
        {/* Top copy */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-primary">
            {d.kicker}
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-text">
            {d.heading}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-text/70">
            {d.subheading}
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            {d.ctas.map((cta) =>
              cta.variant === "ghost" ? (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 transition hover:scale-[1.05] duration-300"
                >
                  {cta.label}
                  <FiArrowRight aria-hidden />
                </Link>
              ) : (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={`inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition ${classNameForWhiteHover}`}
                >
                  {cta.label}
                  <FiArrowRight aria-hidden />
                </Link>
              )
            )}
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-12 grid items-end gap-10 lg:grid-cols-2 h-full">
          {/* Feature cards (left) */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {d.highlights.map((item, idx) => (
              <li
                key={idx}
                className="rounded-xl border border-border-light-gray bg-card-background backdrop-blur-sm p-5 shadow-sm hover:shadow transition"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm text-text/90">{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Image mosaic (right),  big right image + floating small one */}
          <div className="relative     mb-6  flex-col flex   justify-end">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl">
              <Image
                src={d.images.big.src}
                alt={d.images.big.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Small overlay image */}
            <div className="absolute -left-4 -bottom-6 w-2/3 sm:w-1/2">
              <div className="rounded-xl border border-primary/20 bg-white p-2 shadow-xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                  <Image
                    src={d.images.small.src}
                    alt={d.images.small.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full ring-4 ring-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
