// app/components/ExperienceHostfameAdvantage.tsx
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const data = {
  title: "Experience the Hostfame Advantage Today!",
  description:
    "Everything you need to enable your online success: dependable hosting, safe domains, and professional support.",
  cta: {
    label: "Get Started",
    href: "/get-started",
  },
  pills: ["Domain", "Hosting"],
  images: {
    person: {
      src: "https://hostfame.com/wp-content/uploads/2024/01/cta__person.svg",
      alt: "Person with laptop illustration",
    },
    server: {
      src: "https://hostfame.com/wp-content/uploads/2024/01/cta__hosting.svg",
      alt: "Cloud and server stack illustration",
    },
  },
};

export default function ExperienceHostfameAdvantage() {
  return (
    <section
      aria-label="Experience the Hostfame Advantage"
      className="relative isolate rounded-2xl bg-gradient-to-r from-primary-light via-primary to-primary-dark text-white shadow-xl"
    >
      {/* Fixed, shorter banner height */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-14 min-h-[260px] sm:min-h-[280px] md:min-h-[300px]">
          {/* Left: Content */}
          <div className="py-6 md:py-8">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              {data.title}
            </h2>

            <p className="mt-3 max-w-xl text-sm/6 text-white/90 sm:text-base/7">
              {data.description}
            </p>

            <div className="mt-6">
              <Link
                href={data.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-white/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                {data.cta.label}
                <BsArrowRightShort size={20} className=" group-hover:-mr-2 mr-0 duration-200" />
              </Link>
            </div>
          </div>

          {/* Right: Art / Images */}
          <div className="relative h-[200px] sm:h-[220px] md:h-[240px]">
            {/* Person */}
            <div className="absolute -right-1 top-0 h-[140px] w-[140px] sm:h-[170px] sm:w-[170px] md:h-[190px] md:w-[190px]">
              <Image
                src={data.images.person.src}
                alt={data.images.person.alt}
                fill
                priority
                sizes="(min-width:1024px) 190px, (min-width:768px) 170px, 140px"
                className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,.25)]"
              />
            </div>

            {/* Server */}
            <div className="absolute left-0 bottom-0 h-[140px] w-[170px] sm:h-[160px] sm:w-[200px] md:h-[180px] md:w-[220px]">
              <Image
                src={data.images.server.src}
                alt={data.images.server.alt}
                fill
                priority
                sizes="(min-width:1024px) 220px, (min-width:768px) 200px, 170px"
                className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,.25)]"
              />
            </div>

            {/* Accent Pills */}
            <span className="absolute left-2 -top-2 select-none rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium backdrop-blur-sm ring-1 ring-white/20 sm:text-xs">
              {data.pills[0]}
            </span>
            <span className="absolute right-1/3 bottom-1 select-none rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium backdrop-blur-sm ring-1 ring-white/20 sm:text-xs">
              {data.pills[1]}
            </span>

            {/* Decorative ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-xl ring-1 ring-white/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
