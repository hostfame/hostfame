import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { type IconType } from "react-icons";
import { GiPriceTag } from "react-icons/gi";
import {
  LuSettings2,
  LuSparkles,
  LuSearchCheck,
  LuShieldCheck,
  LuLifeBuoy,
} from "react-icons/lu";

// All content lives here so it’s easy to localize or tweak copy later
const content = {
  eyebrow: "Why choose our registrar",
  title: "Domain search & registration, reimagined",
  intro:
    "Transparent pricing, powerful management, and real humans when you need them. Everything you need to launch with confidence.",
  features: [
    {
      icon: GiPriceTag,
      title: "Transparent pricing",
      description:
        "Simple, honest rates with no hidden fees or surprise add‑ons. Renewals stay predictable across your portfolio.",
    },
    {
      icon: LuSettings2,
      title: "Unified management",
      description:
        "A streamlined dashboard to configure DNS, forwarding, privacy, and contacts—organized the way teams actually work.",
    },
    {
      icon: LuSparkles,
      title: "Included essentials",
      description:
        "Privacy protection, DNS management, and a starter site are bundled at no extra cost—ready from day one.",
    },
    {
      icon: LuSearchCheck,
      title: "Smart discovery",
      description:
        "Bulk search, filters, and intelligent suggestions help you uncover on‑brand, available names fast.",
    },
    {
      icon: LuShieldCheck,
      title: "Hardened security",
      description:
        "Domain locks, 2‑factor authentication, and account controls safeguard your assets against hijacking.",
    },
    {
      icon: LuLifeBuoy,
      title: "Expert support",
      description:
        "Specialists who actually know domains—available by chat or email to help at every step of the way.",
    },
  ] as Array<{ icon: IconType; title: string; description: string }>,
} as const;

export default function WhyChooseOurDomain() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark my-12 md:my-16">
      <SectionWrapper className="relative isolate overflow-hidden  text-white">
        {/* subtle light texture */}
        {/* <div
        className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
        aria-hidden
      >
        <div className="absolute -top-24 left-1/2 h-72 w-[120vw] -translate-x-1/2 rounded-full blur-3xl bg-white/10" />
      </div> */}

        <div className="mx-auto max-w-7xl py-18">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              {content.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-3 text-sm/6 text-white/80 sm:text-base/7">
              {content.intro}
            </p>
          </div>

          {/* Feature Grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.features.map((f, i) => (
              <FeatureCard
                key={i}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>

        {/* angled edge */}
      </SectionWrapper>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/20">
          <Icon className="h-6 w-6 text-white" aria-hidden />
        </div>
        <div>
          <h3 className="text-white text-base font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-description-text mt-1 text-sm/6 text-white/80">
            {description}
          </p>
        </div>
      </div>
      {/* Decorative accent */}
      <div className="pointer-events-none absolute -bottom-6 right-6 h-24 w-24 scale-0 rounded-full bg-white/10 blur-2xl transition duration-300 group-hover:scale-100" />
    </div>
  );
}
