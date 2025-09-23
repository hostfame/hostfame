import { hostingCopy, hostingFeatures, hostingStats } from "@/data/whyChooseWordPress.data";
import Image from "next/image";
import { IconType } from "react-icons";
import { FiShield, FiCheckCircle, FiZap, FiMessageSquare } from "react-icons/fi";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import SectionWrapper from "../wrappers/SectionWrapper";

const iconMap: Record<string, IconType> = {
  shield: FiShield,
  guarantee: FiCheckCircle,
  speed: FiZap,
  support: FiMessageSquare,
};

export default function WhyChooseWordpressHosting() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Decorative background element */}
      <div
        aria-hidden
        className="absolute inset-0 "
      />

      <SectionWrapper className="">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left: Copy + Features */}
          <div className="relative z-10 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              {hostingCopy.eyebrow}
            </p>

            <CenteredSectionHeader
              title={hostingCopy.heading}
              className="text-left "
              classNameForTitle="!text-wrap"
            />

            <p className="max-w-lg text-lg text-text/80 leading-relaxed">
              {hostingCopy.subheading}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {hostingStats.map((s, i) => (
                <div
                  key={i}
                  className="transition-opacity duration-500 ease-in-out hover:opacity-100 opacity-90"
                >
                  <div className="text-4xl font-extrabold text-primary-light">
                    {s.value}
                  </div>
                  <div className="text-sm font-medium text-text uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature list */}
            <ul className="grid gap-6 sm:grid-cols-2">
              {hostingFeatures.map((f) => {
                const Icon = iconMap[f.icon];
                return (
                  <li
                    key={f.id}
                    className="group relative flex gap-4 rounded-2xl bg-background p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary-light" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-text">{f.title}</h3>
                      <p className="mt-2 text-sm text-text/70 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="relative z-10 flex justify-center items-center">
            <Image
              src={"/assets/wordpress__feature__big_img.png.webp"}
              alt="feature-wordpress"
              height={700}
              width={700}
              className=" absolute"
            />
            <Image
              src={"/assets/feature-wordpress.svg"}
              alt="feature-wordpress"
              height={300}
              width={300}
              className=" absolute"
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}