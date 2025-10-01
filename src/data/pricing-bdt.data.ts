import { PricingData } from "@/types/pricing.types";

export const webHostingPricingBdtData: PricingData = {
  title: "Choose Your Perfect Plan",
  yearlyDiscount: 58,
  plans: [
    {
      id: "starter",
      name: "Starter",
      description:
        "Perfect for individuals and personal blogs who want to get online quickly.",
      icon: "/assets/pricing/starter-42.svg",
      hrefBdt: "https://my.hostfame.com/index.php?rp=/store/web-hosting-bd/starter",
      currency: "$",
      monthlyPriceBdt: 299,
      yearlyPriceBdt: 999,
      monthlyPrevPriceBdt: 299,
      yearlyPrevPriceBdt: 3588,
      offerBdt: 73,
      ctaText: "Choose plan",
      renewalTextMonthlyBdt: "Renews at 2950tk/year",
      renewalTextYearlyBdt: "Renews at 2950tk/year",
      guarantee: "30 Days Money Back guarantee",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "10 GB NVMe Storage",
              included: true,
              description: "Fast NVMe storage designed for personal sites or small projects. Ensures quick load times and smooth performance.",
            },
            {
              name: "1 Websites Hosted",
              included: true,
              description: "Host a single website with reliable performance. Great for blogs, resumes, or small business pages.",
            },
            {
              name: "1 Email Account",
              included: true,
              description: "Includes one professional inbox with webmail access. A simple way to brand your communications.",
            },
            {
              name: "100 GB Bandwidth",
              included: true,
              description: "Generous data allowance to handle everyday traffic. Suitable for blogs and small personal sites.",
            },
            {
              name: "1 MySQL Databases",
              included: true,
              description: "Set up one MySQL database for WordPress, blogs, or CMS apps. Easy to configure and manage.",
            },
            {
              name: "1 Days Backup Retention",
              included: true,
              description: "Daily backups are stored for one day, giving you peace of mind and quick restores if needed.",
            },
            {
              name: "Basic Antivirus Protection",
              included: true,
              description: "Baseline malware protection included to help safeguard your site against common threats.",
            },
            {
              name: "Free Migration (1 Site)",
              included: true,
              description: "We’ll transfer one existing website to our platform at no cost, making setup hassle-free.",
            },
          ],
        },
        {
          title: "Server Features",
          features: [
            {
              name: "1 CPU Core",
              included: true,
              description: "One dedicated core for consistent performance. Ideal for lightweight workloads and single sites.",
            },
            {
              name: "512 MB RAM",
              included: true,
              description: "Entry-level memory allocation that supports basic websites, blogs, or landing pages.",
            },
            {
              name: "20 IOPS",
              included: true,
              description: "Handles basic input/output operations for small-scale sites with light traffic.",
            },
            {
              name: "HTTP/3 Compression",
              included: true,
              description: "Boost website speed with modern protocol support and data compression technology.",
            },
            {
              name: "No SSH Access",
              included: false,
              description: "SSH is not available on this plan. Upgrade to Pro or Business for advanced developer tools.",
            },
            {
              name: "1-Click WP Installer",
              included: true,
              description: "Install WordPress instantly and start building your site in just a few minutes.",
            },
            {
              name: "2FA Authentication",
              included: true,
              description: "Protect your account with secure two-factor authentication for safer logins.",
            },
            {
              name: "Basic DNS Zone Editor",
              included: true,
              description: "Easily update and manage common DNS records such as A, MX, and CNAME.",
            },
            {
              name: "99.9% SLA",
              included: true,
              description: "Reliable uptime backed by a service-level guarantee, ensuring your site stays online.",
            },
            {
              name: "PHP Included",
              included: true,
              description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
          ],
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "1 Mail Account",
              included: true,
              description: "Includes a single mailbox with webmail access. Perfect for individuals or hobby sites.",
            },
            {
              name: "Webmail Included",
              included: true,
              description: "Check your emails on any device with our easy-to-use webmail service.",
            },
            {
              name: "No Abuse or Spam Guarantee",
              included: false,
              description: "This plan does not include enterprise-level mail deliverability guarantees or abuse protection.",
            },
            {
              name: "No SpamAssassin",
              included: false,
              description: "Advanced spam filtering is excluded. Upgrade to higher plans for stronger protections.",
            },
            {
              name: "No Email Forwarding",
              included: false,
              description: "Email forwarding is not included with this plan. Available with Pro and Business plans.",
            },
          ],
        },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description:
        "Designed for growing websites and small businesses that need more power.",
      icon: "/assets/pricing/pro.svg",
      hrefBdt: "https://my.hostfame.com/index.php?rp=/store/web-hosting-bd/pro",
      currency: "$",
      monthlyPriceBdt: 449,
      yearlyPriceBdt: 2985,
      monthlyPrevPriceBdt: 449,
      yearlyPrevPriceBdt: 5388,
      offerBdt: 45,
      isPopular: true,
      ctaText: "Choose plan",
      renewalTextMonthlyBdt: "Renews at 4950tk/year",
      renewalTextYearlyBdt: "Renews at 4950tk/year",
      guarantee: "30 Days Money Back guarantee",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "20 GB NVMe Storage",
              included: true,
              description: "Plenty of high-speed storage for blogs, small stores, or portfolio sites. Handles media and backups easily.",
            },
            {
              name: "5 Websites Hosted",
              included: true,
              description: "Host up to five websites under one plan. Ideal for freelancers, entrepreneurs, or side projects.",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Create unlimited branded mailboxes for your team or business communications.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Grow your site without worrying about bandwidth limits. Fair-use policies apply.",
            },
            {
              name: "Unlimited MySQL Databases",
              included: true,
              description: "Create as many databases as needed for apps, blogs, and multi-site installations.",
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description: "Daily backups stored for 7 days, giving you more restore options if issues occur.",
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true,
              description: "Comprehensive security suite to protect your sites from malware and vulnerabilities.",
            },
            {
              name: "Free Migration (Up to 5 Sites)",
              included: true,
              description: "We’ll transfer up to 5 existing websites for free, with minimal downtime or hassle.",
            },
          ],
        },
        {
          title: "Server Features",
          features: [
            {
              name: "2 CPU Cores",
              included: true,
              description: "Double the compute power to handle dynamic sites, small e-commerce stores, or apps.",
            },
            {
              name: "2 GB RAM",
              included: true,
              description: "Enhanced memory allocation for heavier themes, plugins, and caching systems.",
            },
            {
              name: "100 IOPS",
              included: true,
              description: "Increased disk operations capacity for smoother performance and reliability.",
            },
            {
              name: "HTTP/3, Brotli, Compression",
              included: true,
              description: "Modern speed optimizations to ensure faster page loads and improved web experience.",
            },
            {
              name: "SSH Access Included",
              included: true,
              description: "Enables developers to manage files, deployments, and scripts securely from the command line.",
            },
            {
              name: "1-Click WP Installer",
              included: true,
              description: "Set up WordPress quickly and start building without technical complexity.",
            },
            {
              name: "2FA Authentication",
              included: true,
              description: "Strengthen account security with two-factor login protection.",
            },
            {
              name: "Advanced DNS Manager",
              included: true,
              description: "Gain full control over DNS configurations with an advanced management panel.",
            },
            {
              name: "99.9% SLA",
              included: true,
              description: "Guaranteed uptime backed by SLA for reliable business operations.",
            },
            {
              name: "PHP + Laravel + Node + Python",
              included: true,
              description: "Supports multiple runtimes and frameworks for developers working with modern apps.",
            },
          ],
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "No limits on inboxes—create accounts for teams, staff, or departments easily.",
            },
            {
              name: "Webmail, Outlook Integration",
              included: true,
              description: "Check emails on webmail or link to Outlook and other desktop clients.",
            },
            {
              name: "Mail Delivery Guarantee",
              included: true,
              description: "Ensure reliable inbox delivery with provider-backed service-level guarantees.",
            },
            {
              name: "SpamAssassin Included",
              included: true,
              description: "Advanced spam filtering blocks junk mail and phishing attempts effectively.",
            },
            {
              name: "Email Forwarding Included",
              included: true,
              description: "Set up custom forwarding and aliases to manage team communication better.",
            },
          ],
        },
      ],
    },
    {
      id: "business",
      name: "Business",
      description:
        "Enterprise-grade hosting designed for large-scale websites and mission-critical applications.",
      icon: "/assets/pricing/ultimate.svg",
      hrefBdt: "https://my.hostfame.com/index.php?rp=/store/web-hosting-bd/business",
      currency: "$",
      monthlyPriceBdt: 699,
      yearlyPriceBdt: 4985,
      monthlyPrevPriceBdt: 699,
      yearlyPrevPriceBdt: 8388,
      offerBdt: 41,
      ctaText: "Choose Plan",
      renewalTextMonthlyBdt: "Renews at 7950tk/year",
      renewalTextYearlyBdt: "Renews at 7950tk/year",
      guarantee: "30 Days Money Back guarantee",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "30 GB NVMe Storage",
              included: true,
              description: "Enterprise-grade storage for heavy sites, apps, or media content. Fast, reliable, and secure.",
            },
            {
              name: "20 Website Hosted",
              included: true,
              description: "Host up to 20 websites under one plan. Perfect for agencies or larger businesses.",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "No cap on inboxes. Provide every team or department with professional emails.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Scale your site traffic without limits. Built to support high-volume users reliably.",
            },
            {
              name: "Unlimited MySQL Databases",
              included: true,
              description: "Create unlimited databases for apps, content systems, and client projects.",
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description: "Automatic daily backups stored for 7 days, with restore points for disaster recovery.",
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true,
              description: "Advanced malware scanning and threat protection to secure mission-critical sites.",
            },
            {
              name: "Free Migration (Unlimited)",
              included: true,
              description: "Unlimited site transfers included. Move all your websites to us with expert support.",
            },
          ],
        },
        {
          title: "Server Features",
          features: [
            {
              name: "4 CPU Cores",
              included: true,
              description: "Robust compute power for enterprise-level workloads, complex apps, and heavy traffic.",
            },
            {
              name: "4 GB RAM",
              included: true,
              description: "Plenty of memory for demanding sites, caching, and intensive plugins or frameworks.",
            },
            {
              name: "200 IOPS",
              included: true,
              description: "Handles large data loads with high disk operation speeds for smooth performance.",
            },
            {
              name: "HTTP/3, Brotli + WPAccelerator",
              included: true,
              description: "High-performance stack with accelerator for maximum site speed and optimization.",
            },
            {
              name: "SSH Access Included",
              included: true,
              description: "Full command-line access for developers to deploy and manage advanced projects.",
            },
            {
              name: "1-Click WP Installer",
              included: true,
              description: "Install WordPress instantly and launch enterprise projects quickly.",
            },
            {
              name: "2FA Authentication",
              included: true,
              description: "Protect business-critical accounts with secure two-factor login systems.",
            },
            {
              name: "Advanced DNS Manager + DNSSEC",
              included: true,
              description: "Secure, verifiable DNS management with DNSSEC support for enterprise-level reliability.",
            },
            {
              name: "99.9% SLA + SLA Credit Guarantee",
              included: true,
              description: "Guaranteed uptime with compensation credits for qualifying outages.",
            },
            {
              name: "PHP + Laravel + Python + Node.js Included",
              included: true,
              description: "Run multiple frameworks and languages. Ideal for developers with diverse needs.",
            },
          ],
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Unlimited accounts for staff, clients, or departments. No mailbox restrictions.",
            },
            {
              name: "Webmail, Outlook Integration",
              included: true,
              description: "Access emails via browser or sync with Outlook and other mail clients easily.",
            },
            {
              name: "Mail Delivery Guarantee",
              included: true,
              description: "Ensure timely, reliable email delivery backed by provider-level SLAs.",
            },
            {
              name: "SpamAssassin Included",
              included: true,
              description: "Advanced filtering protects against spam, phishing, and junk mail threats.",
            },
            {
              name: "Email Forwarding Included",
              included: true,
              description: "Easily forward emails and create aliases for streamlined communication.",
            },
          ],
        },
      ],
    },
  ],
};
