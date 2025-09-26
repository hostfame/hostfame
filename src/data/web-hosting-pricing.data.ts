import { PricingData } from "@/types/pricing.types";

export const webHostingBanglaPricingData: PricingData = {
  title: "Choose Your Perfect Plan",
  yearlyDiscount: 0, // per-plan discounts shown as `offer` (% OFF)
  plans: [
    // ——— STARTER ———
    {
      id: "starter",
      name: "Starter",
      description:
        "Ideal for individuals and personal blogs getting online quickly.",
      icon: "/assets/pricing/starter-42.svg",
      currency: "$",
      // Prices aligned to table (199 tk/mo or 999 tk/yr). USD uses 1 USD = 120 tk.
      monthlyPrice: 1.66,
      yearlyPrice: 8.33, // 999 / 120
      monthlyPrevPrice: 0.0,
      yearlyPrevPrice: 17.92, // renewal 2150 / 120

      monthlyPriceBdt: 199,
      yearlyPriceBdt: 999,
      monthlyPrevPriceBdt: 0.0,
      yearlyPrevPriceBdt: 2150,
      offer: 54, // ≈ (2150-999)/2150
      ctaText: "Choose plan",
      renewalText: "Renews at 2150 tk/year",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "5GB NVMe Storage",
              included: true,
              description: "Fast NVMe storage for a small site.",
            },
            {
              name: "1 Websites Hosted",
              included: true,
              description: "Generous bandwidth cap for low–moderate traffic.",
            },
            {
              name: "1 Email Account",
              included: true,
              description: "Automatic HTTPS for security and trust.",
            },
            {
              name: "Free .COM Domain (Annual)",
              included: true,
              description: "Host a single project.",
            },
            {
              name: "100 GB Bandwidth",
              included: true,
              description: "One branded inbox.",
            },
            {
              name: "1 MySQL Databases",
              included: true,
              description: "First year registration included.",
            },
            {
              name: "1 Days Backup Retention",
              included: true,
              description: "Suitable for a single WordPress install.",
            },
            {
              name: "Basic Antivirus Protection",
              included: true,
              description: "Daily backups with 1 day of restore points.",
            },
            {
              name: "Free Migration (1 Site)",
              included: true,
              description: "Baseline malware/virus protection.",
            },
          ],
        },
        {
          title: "Server Features",
          features: [
            {
              name: "1 CPU Core",
              included: true,
              description: "Dedicated share of compute.",
            },
            {
              name: "512 MB RAM",
              included: true,
              description: "For lightweight themes and plugins.",
            },
            {
              name: "20 IOPS",
              included: true,
              description: "Disk I/O operations per second.",
            },
            {
              name: "HTTP/3 Compression",
              included: true,
              description: "Modern protocol for performance.",
            },
            {
              name: "No SSH Access",
              included: false,
              description: "SSH not available on Starter.",
            },
            {
              name: "1-Click WP Installer",
              included: true,
              description: "Launch WordPress quickly with a single click.",
            },
            {
              name: "2FA Authentication",
              included: true,
              description: "Protect account access.",
            },
            {
              name: "Basic DNS Zone Editor",
              included: true,
              description: "Edit common DNS records.",
            },
            {
              name: "99.9% SLA",
              included: true,
              description: "Availability backed by SLA.",
            },
            {
              name: "PHP Included",
              included: true,
              description: "Run PHP applications.",
            },
          ],
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "1 Mail Account",
              included: true,
              description: "Single mailbox with webmail.",
            },
            {
              name: "Webmail Included",
              included: true,
              description: "Browser-based email access.",
            },
            {
              name: "No Abuse or Spam Guarantee",
              included: false,
              description:
                "Mail abuse/spam or deliverability guarantees are not included on Starter.",
            },
            {
              name: "No SpamAssassin",
              included: false,
              description: "Advanced spam filtering not included.",
            },
            {
              name: "No Email Forwarding",
              included: false,
              description: "Forwarding unavailable on Starter.",
            },
          ],
        },
        // {
        //   title: "Developer-Friendly Features",
        //   features: [
        //     { name: "SSH Access", included: false, description: "Not available on Starter." },
        //     { name: "Git Integration", included: false, description: "Not available on Starter." },
        //     { name: "WP-CLI Support", included: false, description: "Not available on Starter." },
        //     { name: "Custom Cron Jobs", included: true, description: "Schedule background tasks." },
        //     { name: "Multiple PHP Versions", included: true, description: "Choose the PHP version you need." },
        //   ],
        // },
      ],
    },

    // ——— PRO ———
    {
      id: "pro",
      name: "Pro",
      description:
        "For growing websites and small businesses needing extra power.",
      icon: "/assets/pricing/pro.svg",
      currency: "$",
      // 349 tk/mo or 2985 tk/yr
      monthlyPrice: 2.91,
      yearlyPrice: 24.88, // 2985 / 120
      monthlyPrevPrice: 0.0,
      yearlyPrevPrice: 41.25, // renewal 4950 / 120

      monthlyPriceBdt: 349,
      yearlyPriceBdt: 2985,
      monthlyPrevPriceBdt: 0.0,
      yearlyPrevPriceBdt: 4950,
      offer: 40, // ≈ (4950-2985)/4950
      isPopular: true,
      ctaText: "Choose plan",
      renewalText: "Renews at 4950 tk/year",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "15GB NVMe Storage",
              included: true,
              description: "More space for media and backups.",
            },
            {
              name: "5 Websites Hosted",
              included: true,
              description: "No set traffic cap (fair use applies).",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "HTTPS by default.",
            },
            {
              name: "Free .COM Domain (Annual)",
              included: true,
              description: "Host up to five sites.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Create as many inboxes as needed.",
            },
            {
              name: "Unlimited MySQL Databases",
              included: true,
              description: "First-year .COM included.",
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description: "Great for multiple apps/sites.",
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true,
              description: "Daily backups retained for 7 days.",
            },
            {
              name: "Free Migration (Up to 5 Sites)",
              included: true,
              description: "Enhanced security suite.",
            },
          ],
        },
        {
          title: "Server Features",
          features: [
            {
              name: "2 CPU Cores",
              included: true,
              description: "Extra compute for dynamic workloads.",
            },
            {
              name: "2 GB RAM",
              included: true,
              description: "Handles heavier themes and caching.",
            },
            {
              name: "100 IOPS",
              included: true,
              description: "Higher disk operations ceiling.",
            },
            {
              name: "HTTP/3, Brotli, Compression",
              included: true,
              description: "Modern web performance stack.",
            },
            {
              name: "SSH Access Included",
              included: true,
              description: "Enable CLI workflows and deploys.",
            },
            {
              name: "1-Click WP Installer",
              included: true,
              description: "Launch WordPress quickly with a single click.",
            },
            {
              name: "2FA Authentication",
              included: true,
              description: "Protect account access.",
            },
            {
              name: "Advanced DNS Manager",
              included: true,
              description: "Full control over DNS records.",
            },
            {
              name: "99.9% SLA",
              included: true,
              description: "Availability backed by SLA.",
            },
            {
              name: "PHP + Laravel + Node + Python",
              included: true,
              description: "Multi-runtime support.",
            },
          ],
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "No mailbox limit.",
            },
            {
              name: "Webmail, Outlook Integration",
              included: true,
              description: "Access via webmail or desktop clients.",
            },
            {
              name: "Mail Delivery Guarantee",
              included: true,
              description: "Deliverability backed by provider SLAs.",
            },
            {
              name: "SpamAssassin Included",
              included: true,
              description: "Server-side spam and phishing filters.",
            },
            {
              name: "Email Forwarding Included",
              included: true,
              description: "Create aliases and forwards.",
            },
          ],
        },
        // {
        //   title: "Developer-Friendly Features",
        //   features: [
        //     { name: "SSH Access", included: true, description: "Secure shell for CLI workflows." },
        //     { name: "Git Integration", included: true, description: "Pull from repos to streamline releases." },
        //     { name: "WP-CLI Support", included: true, description: "Manage WordPress from the command line." },
        //     { name: "Custom Cron Jobs", included: true, description: "Schedule background tasks and maintenance." },
        //     { name: "Multiple PHP Versions", included: true, description: "Per-site PHP selection." },
        //   ],
        // },
      ],
    },

    // ——— BUSINESS ———
    {
      id: "business",
      name: "Business",
      description:
        "For enterprises, large-scale websites, and mission-critical apps.",
      icon: "/assets/pricing/ultimate.svg",
      currency: "$",
      // 699 tk/mo or 4985 tk/yr
      monthlyPrice: 5.83,
      yearlyPrice: 41.54, // 4985 / 120
      monthlyPrevPrice: 0.0,
      yearlyPrevPrice: 66.25, // renewal 7950 / 120

      monthlyPriceBdt: 699,
      yearlyPriceBdt: 4985,
      monthlyPrevPriceBdt: 0.0,
      yearlyPrevPriceBdt: 7950,
      offer: 37, // ≈ (7950-4985)/7950
      ctaText: "Choose plan",
      renewalText: "Renews at 7950 tk/year",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "30GB NVMe Storage",
              included: true,
              description: "Room for larger sites and media.",
            },
            {
              name: "20 Website Hosted",
              included: true,
              description: "Predictable costs as traffic grows.",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Site-wide HTTPS.",
            },
            {
              name: "Free .COM Domain (Annual)",
              included: true,
              description: "Host many sites under one plan.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Create inboxes for all teams.",
            },
            {
              name: "Unlimited MySQL Databases",
              included: true,
              description: "First-year domain included.",
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description: "No database count limits.",
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true,
              description: "Daily backups with 7-day history.",
            },
            {
              name: "Free Migration (Unlimited)",
              included: true,
              description: "Enterprise-grade protections.",
            },
          ],
        },
        {
          title: "Server Features",
          features: [
            {
              name: "4 CPU Cores",
              included: true,
              description: "Parallelism for complex workloads.",
            },
            {
              name: "4 GB RAM",
              included: true,
              description: "Headroom for object caches and builders.",
            },
            {
              name: "200 IOPS",
              included: true,
              description: "High disk operation capacity.",
            },
            {
              name: "HTTP/3, Brotli + WPAccelerator",
              included: true,
              description: "Performance stack with accelerator.",
            },
            {
              name: "SSH Access Included",
              included: true,
              description: "CLI and automation support.",
            },
            {
              name: "1-Click WP Installer",
              included: true,
              description: "Launch WordPress quickly with a single click.",
            },
            {
              name: "2FA Authentication",
              included: true,
              description: "Account protection.",
            },
            {
              name: "Advanced DNS Manager + DNSSEC",
              included: true,
              description: "Hardened, verifiable DNS.",
            },
            {
              name: "99.9% SLA + SLA Credit Guarantee",
              included: true,
              description: "Credits applied for qualifying outages.",
            },
            {
              name: "PHP + Laravel + Python + Node.js Included",
              included: true,
              description: "Multi-runtime support.",
            },
          ],
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "No mailbox limit.",
            },
            {
              name: "Webmail, Outlook Integration",
              included: true,
              description: "Access via webmail or desktop clients.",
            },
            {
              name: "Mail Delivery Guarantee",
              included: true,
              description: "Deliverability backed by provider SLAs.",
            },
            {
              name: "SpamAssassin Included",
              included: true,
              description: "Robust spam & phishing filtering.",
            },
            {
              name: "Email Forwarding Included",
              included: true,
              description: "Create aliases and forwards.",
            },
          ],
        },
        // {
        //   title: "Developer-Friendly Features",
        //   features: [
        //     { name: "SSH Access", included: true, description: "Secure shell across environments." },
        //     { name: "Git & CI/CD Integration", included: true, description: "Hook into pipelines for deploys." },
        //     { name: "WP-CLI & Custom Scripts", included: true, description: "Automate admin tasks." },
        //     { name: "Custom Cron & Task Scheduling", included: true, description: "Flexible job scheduling." },
        //     { name: "Multiple PHP Versions", included: true, description: "Per-site PHP targeting." },
        //   ],
        // },
      ],
    },
  ],
};
