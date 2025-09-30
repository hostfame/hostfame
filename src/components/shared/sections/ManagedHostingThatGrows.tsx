import { ManagedHostingThatGrowsProps } from "@/data/managedHostingThatGrows.data";
import {
  FiSettings,
  FiShield,
  FiCreditCard,
  FiCpu,
  FiRotateCw,
  FiZap,
} from "react-icons/fi";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";

export const managedHostingData: ManagedHostingThatGrowsProps = {
  eyebrow: "Managed Hosting",
  heading: "Grows With Your Team",
  intro:
    "Scale performance, security, and reliability, already included with every managed plan.",
  benefits: [
    {
      icon: <FiSettings aria-hidden className="text-xl" />,
      title: "Effortless Control",
      description:
        "Fast, flexible controls for sites and apps, no busywork, just ship.",
    },
    {
      icon: <FiShield aria-hidden className="text-xl" />,
      title: "Proactive Security",
      description:
        "Malware scans, DDoS hardening, and daily vulnerability checks.",
    },
    {
      icon: <FiCreditCard aria-hidden className="text-xl" />,
      title: "30-Day Refund",
      description: "Try us risk-free. If it’s not a fit, we’ll make it right.",
    },
    {
      icon: <FiCpu aria-hidden className="text-xl" />,
      title: "Built for Traffic Spikes",
      description:
        "Auto-scaling resources keep things snappy during peak demand.",
    },
    {
      icon: <FiRotateCw aria-hidden className="text-xl" />,
      title: "Daily Backups",
      description: "Point-in-time restores so recovery is never a fire drill.",
    },
    {
      icon: <FiZap aria-hidden className="text-xl" />,
      title: "LiteSpeed Stack",
      description:
        "Modern HTTP/3 stack for smooth, sharp, and speedy delivery.",
    },
  ],
};

export default function ManagedHostingThatGrows() {
  return (
    <section className="w-full text-text" aria-labelledby="benefits-heading">
      <div className=" space-y-6">
        {/* Heading */}
        <div className="text-center">
          <div className="text-sm font-medium tracking-wide text-primary-light">
            {managedHostingData.eyebrow}
          </div>

          <CenteredSectionHeader
            title={managedHostingData.heading}
            description={managedHostingData.intro}
          />
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {managedHostingData.benefits.map((b, i) => (
            <li
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border-light-gray p-6 shadow-sm hover:-translate-y-0.5 hover:shadow transition-all duration-300"
            >
              {/* base gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card-background to-card-background transition-opacity duration-500 opacity-100 group-hover:opacity-0" />

              {/* hover gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-light to-primary-extralight transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                {/* Icon chip with 'primary' accent */}
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-border-light-gray bg-white shrink-0"
                  aria-hidden
                >
                  <span className="text-primary">{b.icon}</span>
                </span>

                <div className="group-hover:text-white">
                  <h3 className="text-base font-semibold">{b.title}</h3>
                  <p className="text-sm">{b.description}</p>
                </div>
              </div>

              {/* subtle bottom accent bar using 'primary' */}
              <div className="relative h-0.5 w-10 rounded-full bg-primary/70 mt-4" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
