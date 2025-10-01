import { PricingData } from "@/types/pricing.types";

export const webHostingPricingBdtData: PricingData = {
  title: "Choose Your Perfect Plan",
  yearlyDiscount: 58, // per-plan discounts shown as `offer` (% OFF)
  plans: [
    //,,,  STARTER,,, 
    {
      id: "starter",
      name: "Starter",
      description:
        "Ideal for individuals and personal blogs who want to get online quickly. Affordable entry-level hosting with essential features to launch smoothly.",
      icon: "/assets/pricing/starter-42.svg",
      currency: "$",
      monthlyPriceBdt: 199,
      yearlyPriceBdt: 999,
      monthlyPrevPriceBdt: 344,
      yearlyPrevPriceBdt: 2388,
      offer: 58,
      ctaText: "Choose plan",
      renewalTextMonthlyBdt: "Renews at 2150 tk/year",
      renewalTextYearlyBdt: "Renews at 2150 tk/year",
      guarantee: "30 Days Money Back guarantee",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "5GB NVMe Storage",
              included: true,
              description: "Fast NVMe storage optimized for small websites. Ideal for personal blogs or portfolio sites with light traffic.",
            },
            {
              name: "1 Websites Hosted",
              included: true,
              description: "Host one website with ease. Perfect for individuals launching their first project or online presence.",
            },
            {
              name: "1 Email Account",
              included: true,
              description: "Includes one professional mailbox. Stay connected with a simple, branded email identity.",
            },
            {
              name: "100 GB Bandwidth",
              included: true,
              description: "Generous data allowance to support normal browsing, media, and file transfers each month.",
            },
            {
              name: "1 MySQL Databases",
              included: true,
              description: "Set up a single database for WordPress, blogs, or CMS apps. Easy to manage and reliable.",
            },
            {
              name: "1 Days Backup Retention",
              included: true,
              description: "Daily backups are taken automatically, with 1-day restore points available for emergencies.",
            },
            {
              name: "Basic Antivirus Protection",
              included: true,
              description: "Baseline malware and virus protection to keep your site secure and operational.",
            },
            {
              name: "Free Migration (1 Site)",
              included: true,
              description: "Move one existing website to our servers at no cost, handled by our expert support team.",
            },
          ],
        },
        {
          title: "Server Features",
          features: [
            {
              name: "1 CPU Core",
              included: true,
              description: "Dedicated processing power suitable for lightweight themes, plugins, and low traffic.",
            },
            {
              name: "512 MB RAM",
              included: true,
              description: "Entry-level memory allocation designed for small websites or personal projects.",
            },
            {
              name: "20 IOPS",
              included: true,
              description: "Handles light read/write operations. Great for websites with modest data activity.",
            },
            {
              name: "HTTP/3 Compression",
              included: true,
              description: "Boost site loading speed with modern protocols and improved data compression.",
            },
            {
              name: "No SSH Access",
              included: false,
              description: "SSH terminal access is not available with Starter. Upgrade for advanced developer tools.",
            },
            {
              name: "1-Click WP Installer",
              included: true,
              description: "Install WordPress instantly with one click. Start building your site without hassle.",
            },
            {
              name: "2FA Authentication",
              included: true,
              description: "Secure your account with two-factor authentication for better login protection.",
            },
            {
              name: "Basic DNS Zone Editor",
              included: true,
              description: "Modify essential DNS records like A, MX, and CNAME with an easy-to-use editor.",
            },
            {
              name: "99.9% SLA",
              included: true,
              description: "Enjoy reliable uptime backed by a strong Service Level Agreement guarantee.",
            },
            {
              name: "PHP Included",
              included: true,
              description: "Run websites or apps built in PHP seamlessly on our optimized hosting servers.",
            },
          ],
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "1 Mail Account",
              included: true,
              description: "Comes with one email account and browser-based webmail access for convenience.",
            },
            {
              name: "Webmail Included",
              included: true,
              description: "Easily access your inbox from any device using our built-in webmail client.",
            },
            {
              name: "No Abuse or Spam Guarantee",
              included: false,
              description: "Advanced email security guarantees are not available. Upgrade for enterprise email reliability.",
            },
            {
              name: "No SpamAssassin",
              included: false,
              description: "Spam filtering and advanced mail protections are excluded in this plan.",
            },
            {
              name: "No Email Forwarding",
              included: false,
              description: "Email forwarding and aliases are unavailable in Starter. Higher plans include this feature.",
            },
          ],
        },
      ],
    },

    //,,,  PRO,,, 
    {
      id: "pro",
      name: "Pro",
      description:
        "Perfect for growing websites and small businesses that need more performance. Offers flexibility, reliability, and added resources to scale smoothly.",
      icon: "/assets/pricing/pro.svg",
      currency: "$",
      monthlyPriceBdt: 349,
      yearlyPriceBdt: 2985,
      monthlyPrevPriceBdt: 582,
      yearlyPrevPriceBdt: 4188,
      offer: 64,
      isPopular: true,
      ctaText: "Choose plan",
      renewalTextMonthlyBdt: "Renews at 4950 tk/year",
      renewalTextYearlyBdt: "Renews at 4950 tk/year",
      guarantee: "30 Days Money Back guarantee",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "15GB NVMe Storage",
              included: true,
              description: "Plenty of NVMe storage space for media-heavy sites. Reliable and fast for business needs.",
            },
            {
              name: "5 Websites Hosted",
              included: true,
              description: "Host up to five websites on a single account. Great for entrepreneurs or side projects.",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Create unlimited professional email inboxes. Perfect for teams and business communications.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "No hard traffic caps, just fair use. Grow your site’s audience without bandwidth worries.",
            },
            {
              name: "Unlimited MySQL Databases",
              included: true,
              description: "Create as many databases as you need for apps, blogs, or multi-site setups.",
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description: "Daily backups with 7-day restore points. Keep your data safe and easy to recover.",
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true,
              description: "Stronger malware and virus protection. Enhanced security for growing businesses.",
            },
            {
              name: "Free Migration (Up to 5 Sites)",
              included: true,
              description: "Transfer up to 5 existing websites to our platform with full migration support included.",
            },
          ],
        },
        {
          title: "Server Features",
          features: [
            {
              name: "2 CPU Cores",
              included: true,
              description: "Boost your site with double the processing power. Handles larger workloads smoothly.",
            },
            {
              name: "2 GB RAM",
              included: true,
              description: "Extra memory for high-performance themes, plugins, and caching systems.",
            },
            {
              name: "100 IOPS",
              included: true,
              description: "Increased read/write capacity to support larger databases and web apps.",
            },
            {
              name: "HTTP/3, Brotli, Compression",
              included: true,
              description: "Speed-enhancing protocols and compression for faster, more reliable performance.",
            },
            {
              name: "SSH Access Included",
              included: true,
              description: "Access your hosting environment via secure shell for advanced management.",
            },
            {
              name: "1-Click WP Installer",
              included: true,
              description: "Install WordPress instantly. Get your site running in just minutes with no complexity.",
            },
            {
              name: "2FA Authentication",
              included: true,
              description: "Keep your account secure with two-factor login. Adds an extra layer of safety.",
            },
            {
              name: "Advanced DNS Manager",
              included: true,
              description: "Full control over DNS records and configurations for better flexibility.",
            },
            {
              name: "99.9% SLA",
              included: true,
              description: "Guaranteed uptime backed by SLA. Reliable performance for small business sites.",
            },
            {
              name: "PHP + Laravel + Node + Python",
              included: true,
              description: "Multi-runtime support for modern frameworks and apps like Node.js or Laravel.",
            },
          ],
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "No mailbox restrictions. Create as many accounts as your team or projects need.",
            },
            {
              name: "Webmail, Outlook Integration",
              included: true,
              description: "Access mail via web browser or integrate with desktop clients like Outlook.",
            },
            {
              name: "Mail Delivery Guarantee",
              included: true,
              description: "Deliverability backed by provider SLAs. Ensures reliable inbox delivery.",
            },
            {
              name: "SpamAssassin Included",
              included: true,
              description: "Advanced server-side spam filtering to protect against phishing and junk mail.",
            },
            {
              name: "Email Forwarding Included",
              included: true,
              description: "Set up aliases and forwarding rules. Easily manage communications.",
            },
          ],
        },
      ],
    },

    //,,,  BUSINESS,,, 
    {
      id: "business",
      name: "Business",
      description:
        "Tailored for enterprises, large websites, and mission-critical applications. Designed with maximum power, security, and reliability for demanding workloads.",
      icon: "/assets/pricing/ultimate.svg",
      currency: "$",
      monthlyPriceBdt: 699,
      yearlyPriceBdt: 4985,
      monthlyPrevPriceBdt: 1398,
      yearlyPrevPriceBdt: 8388,
      offer: 50,
      ctaText: "Buy Now",
      renewalTextMonthlyBdt: "Renews at 7950 tk/year",
      renewalTextYearlyBdt: "Renews at 7950 tk/year",
      guarantee: "30 Days Money Back guarantee",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "30GB NVMe Storage",
              included: true,
              description: "Enterprise-grade NVMe storage with ample room. Perfect for large-scale sites and apps.",
            },
            {
              name: "20 Website Hosted",
              included: true,
              description: "Host up to 20 sites under one plan. Excellent for agencies or multi-site businesses.",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "No limits on professional inbox creation. Organize emails across teams with ease.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "No strict traffic limits—scale your business online without bandwidth concerns.",
            },
            {
              name: "Unlimited MySQL Databases",
              included: true,
              description: "Host unlimited databases for apps, content platforms, or client sites.",
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description: "Daily backups with 7 days of recovery history. Protects you against unexpected loss.",
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true,
              description: "Advanced protection against threats, viruses, and malicious activity.",
            },
            {
              name: "Free Migration (Unlimited)",
              included: true,
              description: "Unlimited website migrations handled by experts. Smooth transfers with no downtime.",
            },
          ],
        },
        {
          title: "Server Features",
          features: [
            {
              name: "4 CPU Cores",
              included: true,
              description: "Dedicated compute resources for complex workloads. Supports larger-scale apps.",
            },
            {
              name: "4 GB RAM",
              included: true,
              description: "Plenty of memory for caching, databases, and advanced plugins or apps.",
            },
            {
              name: "200 IOPS",
              included: true,
              description: "High disk operation rate for demanding tasks, databases, and large data handling.",
            },
            {
              name: "HTTP/3, Brotli + WPAccelerator",
              included: true,
              description: "Optimized performance stack with accelerators. Faster speed for high-traffic sites.",
            },
            {
              name: "SSH Access Included",
              included: true,
              description: "Full SSH access for developers. Manage deployments, scripts, and automation easily.",
            },
            {
              name: "1-Click WP Installer",
              included: true,
              description: "Quickly launch WordPress projects with an easy one-click installation.",
            },
            {
              name: "2FA Authentication",
              included: true,
              description: "Protect sensitive accounts with secure two-factor login systems.",
            },
            {
              name: "Advanced DNS Manager + DNSSEC",
              included: true,
              description: "Secure, verifiable DNS records with DNSSEC for enterprise-grade reliability.",
            },
            {
              name: "99.9% SLA + SLA Credit Guarantee",
              included: true,
              description: "Guaranteed uptime with credit compensation for qualifying outages.",
            },
            {
              name: "PHP + Laravel + Python + Node.js Included",
              included: true,
              description: "Run multiple frameworks and languages. Perfect for enterprise applications.",
            },
          ],
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Unlimited mailboxes with professional-grade reliability. Ideal for large teams.",
            },
            {
              name: "Webmail, Outlook Integration",
              included: true,
              description: "Seamless access via webmail or desktop tools like Outlook and Thunderbird.",
            },
            {
              name: "Mail Delivery Guarantee",
              included: true,
              description: "Guaranteed deliverability to inboxes. Ensures business-critical emails arrive on time.",
            },
            {
              name: "SpamAssassin Included",
              included: true,
              description: "Powerful spam and phishing filtering. Protects business communication channels.",
            },
            {
              name: "Email Forwarding Included",
              included: true,
              description: "Set up custom forwarding and aliases for easier team email management.",
            },
          ],
        },
      ],
    },
  ],
};
