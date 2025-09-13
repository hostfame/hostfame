import { ReactElement } from "react";
import { TbCpu, TbShieldCheck, TbServerBolt } from "react-icons/tb";
import { LuHardDrive, LuCog, LuTerminal } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";

type Feature = {
  id: string;
  icon: ReactElement;
  title: string;
  description: string;
};

type VpsData = {
  eyebrow: string;
  heading: string;
  description: string;
  progressLabel: string;
  progressValue: number; // 0 - 100 (decorative only, static)
  features: Feature[];
};

const data: VpsData = {
  eyebrow: "VPS Toolkit",
  heading: "Performance, Control & Peace of Mind",
  description:
    "Launch production-grade workloads with consistent speed and zero guesswork. Everything below is ready out of the box—no tuning required.",
  progressLabel: "Provisioning capacity",
  progressValue: 78,
  features: [
    {
      id: "nvme",
      icon: <LuHardDrive size={35} className="" aria-hidden="true" />,
      title: "NVMe Throughput",
      description:
        "Fast reads/writes for snappy apps and shorter build times—NVMe storage by default.",
    },
    {
      id: "root",
      icon: <LuTerminal size={35} className="" aria-hidden="true" />,
      title: "Root-Level Access",
      description:
        "Own the box. SSH in, customize configs, and automate your stack the way you like.",
    },
    {
      id: "scalable",
      icon: <TbCpu size={35} className="" aria-hidden="true" />,
      title: "Scalable Resources",
      description:
        "Scale vCPU, RAM, and disk without re-architecting. Capacity that grows with you.",
    },
    {
      id: "security",
      icon: <TbShieldCheck size={35} className="" aria-hidden="true" />,
      title: "Hardened Security",
      description:
        "DDoS protection and sensible firewall defaults keep noise out of your services.",
    },
    {
      id: "os",
      icon: <LuCog size={35} className="" aria-hidden="true" />,
      title: "OS Freedom",
      description:
        "Deploy your preferred Linux distribution and tooling—no lock-in, no surprises.",
    },
    {
      id: "control",
      icon: <TbServerBolt size={35} className="" aria-hidden="true" />,
      title: "Admin Control",
      description:
        "Optional control panels like cPanel or Plesk make day-to-day ops effortless.",
    },
  ],
};

export default function VpsPerformance() {
  const pct = Math.max(0, Math.min(100, data.progressValue));

  return (
    <section className="relative mx-auto text-text">
      <div className="relative space-y-4">
        {/* Eyebrow */}
        <div className=" w-full flex justify-center items-center">
          <div className="  inline-flex items-center gap-2 rounded-full border border-border-light-gray bg-primary-light text-white px-3 py-1 text-xs tracking-wide ">
            <HiOutlineBolt className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{data.eyebrow}</span>
          </div>
        </div>

        {/* Heading + copy */}
        <CenteredSectionHeader
          title={data.heading}
          description={data.description}
        />

        {/* Static progress bar */}
        {/* <div className="0">
          <div className=" flex items-center justify-between text-xs text-description-text">
            <span>{data.progressLabel}</span>
            <span aria-hidden="true">{pct}%</span>
          </div>
          <div
            className="relative h-2 w-full overflow-hidden rounded-full bg-border-light-gray"
            role="img"
            aria-label={`${data.progressLabel}: ${pct}%`}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-700 bg-gradient-to-r from-toggle to-border-dark-gray"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div> */}

        {/* Feature grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.features.map((f) => (
            <article
              key={f.id}
              className=" space-y-4 group rounded-2xl border border-border-light-gray bg-card-background p-5 transition-transform hover:-translate-y-0.5 hover:bg-gradient-to-t from-primary-light to-primary-extralight shadow-lg"
            >
              <div className=" inline-flex items-center justify-center rounded-lg bg-white-background p-3 text-toggle shadow-sm ring-1 ring-inset ring-border-light-gray transition-all group-hover:shadow-lg">
                {f.icon}
              </div>
              <div className="space-y-1">
                <h3 className=" text-lg font-medium text-text transition-colors group-hover:text-white">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-text/80 transition-colors group-hover:text-white">
                  {f.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
