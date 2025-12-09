import Link from "next/link";
import { IconType } from "react-icons";
import { FiZap, FiHeadphones, FiRotateCcw, FiArrowRight } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

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
    label: "Start Your Journey",
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
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-dark px-8 py-14 sm:px-10 md:px-14 md:py-20 animate-fade-in-up">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary-extralight/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: Content */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-8 cursor-default backdrop-blur-sm">
            <LuSparkles className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide uppercase">The Hostfame Advantage</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            {data.heading}
          </h2>
          <p className="mt-6 max-w-lg text-white/85 text-lg leading-relaxed">
            {data.blurb}
          </p>

          <Link
            href={data.cta.href}
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary shadow-2xl shadow-black/20 transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl btn-adventure"
          >
            {data.cta.label}
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Right: Feature Cards */}
        <div className="flex flex-col gap-5">
          {data.features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="adventure-card card-shine flex items-center gap-5 rounded-2xl bg-white px-7 py-6 shadow-lg group"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary group-hover:to-primary-dark transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Icon className="text-2xl text-primary group-hover:text-white transition-colors" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="mt-1 text-description-text">
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
