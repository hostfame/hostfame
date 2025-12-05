import Link from "next/link";
import { IconType } from "react-icons";
import { FiZap, FiHeadphones, FiRotateCcw } from "react-icons/fi";

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

const data: {
  heading: string;
  blurb: string;
  cta: { label: string; href: string };
  features: Feature[];
} = {
  heading: "Why Choose HostFame?",
  blurb:
    "Reliable, fast, and friendly — here's what makes our hosting a smart choice for your business.",
  cta: {
    label: "Get Started Now",
    href: "/web-hosting",
  },
  features: [
    {
      title: "Blazing-Fast Performance",
      description:
        "High-speed hosting tuned for better SEO and faster loads.",
      icon: FiZap,
    },
    {
      title: "Expert 24/7 Support",
      description:
        "A dedicated team available around the clock to help you.",
      icon: FiHeadphones,
    },
    {
      title: "Money-Back Guarantee",
      description:
        "Try us with confidence — get your money back if not satisfied.",
      icon: FiRotateCcw,
    },
  ],
};

export default function WhyChooseHostFame() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-950 to-teal-800 px-6 py-12 sm:px-8 md:px-12 md:py-16">
      {/* Decorative Background Circles */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-bl from-white to-gray-300 opacity-15" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-tr from-white to-gray-400 opacity-15" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: Content */}
        <div className="text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {data.heading}
          </h2>
          <p className="mt-4 max-w-lg text-white/80 sm:text-lg">
            {data.blurb}
          </p>

          <Link
            href={data.cta.href}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-900 transition hover:bg-white/90 hover:scale-[1.03] duration-300"
          >
            {data.cta.label}
          </Link>
        </div>

        {/* Right: Feature Cards - Stacked white cards */}
        <div className="flex flex-col gap-4">
          {data.features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-teal-100">
                <Icon className="text-xl text-teal-700" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-0.5 text-sm text-gray-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
