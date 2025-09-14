// app/components/WhyChooseHostFame.tsx
import Image from "next/image";
import { IconType } from "react-icons";
import { FiZap, FiHeadphones, FiRotateCcw } from "react-icons/fi";

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

const data: {
  heading: string;
  blurb?: string;
  features: Feature[];
  image: { src: string; alt: string };
} = {
  heading: "Why Choose HostFame for Your Hosting Needs?",
  blurb:
    "Reliable, fast, and friendly — here’s what makes our hosting a smart choice.",
  features: [
    {
      title: "Blazing-Fast Performance",
      description:
        "High-speed hosting tuned for better SEO, lower bounce rates, and faster loads.",
      icon: FiZap,
    },
    {
      title: "Expert 24/7 Support",
      description:
        "A dedicated team available around the clock to help with any technical issues.",
      icon: FiHeadphones,
    },
    {
      title: "Money-Back Guarantee",
      description:
        "Try us with confidence — if you’re not happy, you can get your money back.",
      icon: FiRotateCcw,
    },
  ],
  image: {
    src: "https://hostfame.com/wp-content/uploads/2024/03/contact-form.png.webp",
    alt: "Illustration of email and cloud elements symbolizing fast, reliable hosting",
  },
};

export default function WhyChooseHostFame() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8">
      <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2">
        {/* Left: copy + features */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-text-accent sm:text-4xl">
            {data.heading}
          </h2>
          {/* {data.blurb && (
            <p className="mt-3 max-w-prose text-description-text sm:text-lg">
              {data.blurb}
            </p>
          )} */}

          <ul className="mt-8 flex flex-col gap-y-6">
            {data.features.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className=" flex h-full   items-center gap-4  bg-card-background  pr-4 py-2 transition "
              >
                <div className="w-1  h-[55px]  bg-gradient-to-b from-primary-light via-primary to-primary-dark rounded-full"></div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-gray-200 ring-1 ring-black/5">
                  <Icon className="text-2xl text-primary-dark" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-text-accent sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-description-text">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image on gradient panel */}
        <div className="mx-auto w-full max-w-2xl h-full rounded-3xl flex justify-center items-center bg-gradient-to-br from-primary-light via-primary-light to-primary/60">
          <div className="relative overflow-hidden rounded-3xl h-full w-full flex justify-center  items-center   p-3 shadow-xl sm:p-4">
            {/* subtle glow accents */}
            <div className="pointer-events-none absolute -top-8 -left-8 h-24 w-24 rounded-full bg-white/15 blur-xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-white/10 blur-xl" />

            {/* image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://hostfame.com/wp-content/uploads/2024/03/contact-form.png.webp"
                alt="Contact form illustration"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
