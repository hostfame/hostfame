import CenteredSectionHeader from "../headers/CenteredSectionHeader";

export type Special = {
  title: string;
  description: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type WhatAreSpecialsProps = {
  title: string | React.ReactNode;
  description?: string;
  items: Special[];
};

export const whatAreSpecialsData: WhatAreSpecialsProps = {
  title: "What are Specials?",
  description:
    "Packed with tools that make launching, managing, and growing your website simpler than ever—without extra cost.",
  items: [
    {
      title: "One-Click Install",
      description:
        "Create a full copy for testing or updates, then go live with a single click—no hassle.",
      src: "/placeholders/install.svg",
      alt: "Install icon",
      width: 64,
      height: 64,
    },
    {
      title: "Built-In Analytics",
      description:
        "Get clear usage and performance insights directly in your dashboard with zero setup.",
      src: "/placeholders/analytics.svg",
      alt: "Analytics icon",
      width: 64,
      height: 64,
    },
    {
      title: "Secured Login",
      description:
        "2FA and IP-based restrictions guard your control panel with layered protection.",
      src: "/placeholders/lock.svg",
      alt: "Lock icon",
      width: 64,
      height: 64,
    },
    {
      title: "Email Management",
      description:
        "TLS encryption, spam filtering, and network-level scanning keep your inbox clean.",
      src: "/placeholders/email.svg",
      alt: "Email icon",
      width: 64,
      height: 64,
    },
    {
      title: "Powerful Multisite Hosting",
      description:
        "Manage multiple sites, domains, and policies from a single control plane.",
      src: "/placeholders/multisite.svg",
      alt: "Multisite icon",
      width: 64,
      height: 64,
    },
    {
      title: "Built-In SSH Terminal",
      description:
        "Quick tools and secure access for Git, DNS, database, and server management.",
      src: "/placeholders/terminal.svg",
      alt: "Terminal icon",
      width: 64,
      height: 64,
    },
    {
      title: "Imunify360 Security",
      description:
        "Real-time malware protection and proactive patching to stop threats 24/7.",
      src: "/placeholders/shield.svg",
      alt: "Shield icon",
      width: 64,
      height: 64,
    },
    {
      title: "Daily Data Backup",
      description:
        "Automatic daily & weekly backups with one-click restore options.",
      src: "/placeholders/backup.svg",
      alt: "Backup icon",
      width: 64,
      height: 64,
    },
    {
      title: "PHP Selector (5.6 – Latest)",
      description:
        "Switch between PHP versions per site without manual builds or downtime.",
      src: "/placeholders/php.svg",
      alt: "PHP icon",
      width: 64,
      height: 64,
    },
  ],
};

function PlaceholderBadge() {
  return (
    <div className="relative inline-flex items-center rounded-xl border border-border-light bg-card px-3 py-2">
      <div className="grid grid-cols-4 grid-rows-4 gap-0.5">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-[2px] bg-primary/80" />
        ))}
      </div>
      {/* notch */}
      <span className="absolute -left-1 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 rounded-sm bg-card border border-border-light" />
    </div>
  );
}

export default function WhatAreSpecials() {
  return (
    <section className="w-full bg-background text-text">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <CenteredSectionHeader
          title={whatAreSpecialsData.title}
          description={whatAreSpecialsData.description}
          className="mb-10"
          classNameForDescription="text-muted"
        />

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whatAreSpecialsData.items.map((item, idx) => (
            <li
              key={idx}
              className="
                relative overflow-hidden rounded-2xl border border-border-light
                bg-card p-6 shadow-sm transition
                hover:-translate-y-0.5 hover:shadow
              "
            >
              {/* Vertical accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-primary/70" />

              <div className="flex items-start gap-4">
                {/* Image placeholder (we keep src/alt/width/height in whatAreSpecialsData for future use) */}
                <div className="shrink-0">
                  <PlaceholderBadge />
                </div>

                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>

                  {/* (Optional) debug of future image meta — comment out if not needed */}
                  {/* <pre className="mt-2 text-[10px] text-muted/70">
                    {JSON.stringify(
                      { src: item.src, alt: item.alt, w: item.width, h: item.height },
                      null,
                      0
                    )}
                  </pre> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}