import { PricingData } from "@/types/pricing.types";

export const DOLLAR_TO_TK_CONVERTION_RATE = 121.69;

export const webHostingPricingData: PricingData = {
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
      monthlyPrice: 1.49,
      yearlyPrice: 0.0,
      monthlyPrevPrice: 4.49,
      yearlyPrevPrice: 0.0,

      monthlyPriceBdt: 179.0,
      yearlyPriceBdt: 0.0,
      monthlyPrevPriceBdt: 538.8,
      yearlyPrevPriceBdt: 0.0,
      offer: 67, // % OFF
      ctaText: "Choose plan",
      renewalText: "36 month term • Free .COM",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "50GB NVMe SSD Storage",
              included: true,
              description:
                "Fast NVMe storage ensures responsive page loads and quick file access.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description:
                "No traffic caps—your site can grow without surprise overage fees.",
            },
            {
              name: "Free SSL Certificate",
              included: true,
              description:
                "Automatic HTTPS keeps visitors safe and boosts trust.",
            },
            {
              name: "1 Website",
              included: true,
              description:
                "Host a single website—perfect for a portfolio, blog, or landing page.",
            },
            {
              name: "5 Email Accounts",
              included: true,
              description:
                "Create up to five branded inboxes for professional communication.",
            },
            {
              name: "Daily Backups (JetBackup)",
              included: true,
              description:
                "Automatic daily restore points so you can roll back with confidence.",
            },
            {
              name: "1-Click WordPress Installer",
              included: true,
              description:
                "Launch WordPress in seconds—no manual setup required.",
            },
            {
              name: "DDoS Protection",
              included: true,
              description:
                "Network-level mitigation shields your site from volumetric attacks.",
            },
            {
              name: "LiteSpeed Web Server",
              included: true,
              description:
                "Modern high-performance web server tuned for speed.",
            },
            {
              name: "Softaculous App Installer",
              included: true,
              description: "Install 400+ apps and CMSs in a single click.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description:
                "Support replies to your email tickets within 30 minutes.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Try risk-free with a full refund window.",
            },
          ],
        },
        {
          title: "Technical Specifications",
          features: [
            {
              name: "1 CPU Core",
              included: true,
              description:
                "Dedicated share of compute to keep your site responsive.",
            },
            {
              name: "1 GB RAM",
              included: true,
              description: "Enough memory for lightweight sites and blogs.",
            },
            {
              name: "10 MB/s I/O Speed",
              included: true,
              description:
                "Balanced disk throughput for entry-level workloads.",
            },
            {
              name: "20 Entry Processes",
              included: true,
              description:
                "Supports concurrent PHP/HTTP processes for small sites.",
            },
            {
              name: "PHP Memory Limit: 512 MB",
              included: true,
              description: "Suitable for basic themes and plugins.",
            },
            {
              name: "250,000 Inodes Limit",
              included: true,
              description:
                "Capacity for up to ~250k files to store site assets.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Select the PHP version your app requires.",
            },
          ],
        },
        {
          title: "WordPress Features",
          features: [
            {
              name: "LiteSpeed Cache for WordPress",
              included: true,
              description: "Page caching and optimization for faster WP sites.",
            },
            {
              name: "Automatic WordPress Updates",
              included: true,
              description: "Core updates applied automatically to stay secure.",
            },
            {
              name: "Pre-configured WordPress Settings",
              included: true,
              description:
                "Sensibly tuned defaults for performance and reliability.",
            },
            {
              name: "Free WordPress Migration",
              included: true,
              description: "We’ll move your WP site in at no extra cost.",
            },
            {
              name: "Basic Plugin and Theme Support",
              included: true,
              description:
                "Help with common plugin/theme questions (non-custom code).",
            },
          ],
        },
        {
          title: "Security Features",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description:
                "Malware detection, web application firewall, and proactive defense.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description:
                "Blocks repeated login attempts to keep accounts safe.",
            },
            {
              name: "Advanced Antivirus Scanner",
              included: true,
              description: "Scans files to detect and quarantine threats.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description:
                "Prevents others from embedding your assets and stealing bandwidth.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description:
                "Filters malicious traffic before it reaches your app.",
            },
            {
              name: "Spam Protection for Emails",
              included: false,
              description: "Email spam filtering is not included on Starter.",
            },
            {
              name: "File Permission Protection",
              included: true,
              description:
                "Hardened defaults to minimize risky file permissions.",
            },
          ],
        },
        {
          title: "Support & Assistance",
          features: [
            {
              name: "24/7 Live Chat, Email & WhatsApp Call Support",
              included: true,
              description: "Real humans available anytime you need help.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "Ticket replies guaranteed within 30 minutes.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description: "Step-by-step guides for common tasks and fixes.",
            },
            {
              name: "Community Forum Access",
              included: true,
              description: "Learn tips and get answers from fellow users.",
            },
            {
              name: "Site Optimization Advice",
              included: true,
              description:
                "Best-practice recommendations tailored to your stack.",
            },
            {
              name: "Onboarding Guide for New Users",
              included: true,
              description: "A simple checklist to launch smoothly.",
            },
          ],
        },
        {
          title: "Performance Benchmarks",
          features: [
            {
              name: "99.99% Uptime Guarantee",
              included: true,
              description: "Enterprise-grade SLA to keep your site online.",
            },
            {
              name: "Global CDN Integration",
              included: true,
              description:
                "Faster delivery worldwide via distributed edge nodes.",
            },
            {
              name: "Real-World Speed Test Results",
              included: true,
              description: "Continuously measured performance you can verify.",
            },
            {
              name: "Optimized for High Traffic Spikes",
              included: true,
              description: "Caching and server tuning absorb sudden bursts.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description: "Secure shell for CLI workflows and deployments.",
            },
            {
              name: "Git Integration",
              included: true,
              description: "Pull from repos to streamline release management.",
            },
            {
              name: "WP-CLI Support",
              included: true,
              description: "Manage WordPress from the command line.",
            },
            {
              name: "Custom Cron Jobs",
              included: true,
              description: "Schedule background tasks and maintenance.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Pin or upgrade PHP per site as needed.",
            },
          ],
        },
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
      monthlyPrice: 2.49,
      yearlyPrice: 0.0,
      monthlyPrevPrice: 6.99,
      yearlyPrevPrice: 0.0,

      monthlyPriceBdt: 298.8,
      yearlyPriceBdt: 0.0,
      monthlyPrevPriceBdt: 838.8,
      yearlyPrevPriceBdt: 0.0,
      offer: 64,
      isPopular: true,
      ctaText: "Choose plan",
      renewalText: "36 month term • Free .COM",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "100GB NVMe SSD Storage",
              included: true,
              description: "Larger NVMe capacity for media-heavy sites.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Serve more visitors without throttling.",
            },
            {
              name: "Free SSL Certificate",
              included: true,
              description: "Lock icon and HTTPS by default.",
            },
            {
              name: "5 Websites",
              included: true,
              description: "Run up to five separate sites under one plan.",
            },
            {
              name: "10 Email Accounts",
              included: true,
              description: "Enough inboxes for owners and teammates.",
            },
            {
              name: "Daily Backups (JetBackup)",
              included: true,
              description: "Rollback points created every day.",
            },
            {
              name: "1-Click WordPress Installer",
              included: true,
              description: "Instant WP provisioning with sane defaults.",
            },
            {
              name: "DDoS Protection",
              included: true,
              description: "Keeps attacks from impacting availability.",
            },
            {
              name: "LiteSpeed Web Server",
              included: true,
              description: "High-performance HTTP/2 and HTTP/3 server.",
            },
            {
              name: "Softaculous App Installer",
              included: true,
              description: "Deploy apps like WooCommerce, Laravel, and more.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description:
                "Priority ticket turnaround for business continuity.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Refund window if it’s not a fit.",
            },
          ],
        },
        {
          title: "Technical Specifications",
          features: [
            {
              name: "2 CPU Cores",
              included: true,
              description: "Extra compute headroom for dynamic workloads.",
            },
            {
              name: "2 GB RAM",
              included: true,
              description: "Handles heavier themes and caching layers.",
            },
            {
              name: "20 MB/s I/O Speed",
              included: true,
              description: "Faster disk throughput for busy sites.",
            },
            {
              name: "200 Entry Processes",
              included: true,
              description: "Support more concurrent PHP requests.",
            },
            {
              name: "PHP Memory Limit: 768 MB",
              included: true,
              description: "Room for complex plugins and builders.",
            },
            {
              name: "500,000 Inodes Limit",
              included: true,
              description: "Accommodates larger media libraries.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Run the PHP your application requires.",
            },
          ],
        },
        {
          title: "WordPress Features",
          features: [
            {
              name: "LiteSpeed Cache for WordPress",
              included: true,
              description: "Edge caching and optimization out of the box.",
            },
            {
              name: "Automatic WordPress Updates",
              included: true,
              description: "Keep core current with zero hassle.",
            },
            {
              name: "Pre-configured WordPress Settings",
              included: true,
              description: "Performance-friendly defaults from day one.",
            },
            {
              name: "Free WordPress Migration",
              included: true,
              description: "We’ll move your site safely and quickly.",
            },
            {
              name: "Basic Plugin and Theme Support",
              included: true,
              description: "Assistance with typical configurations.",
            },
          ],
        },
        {
          title: "Security Features",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description: "Automated malware cleanup and exploit prevention.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description: "Stops credential stuffing and repeated logins.",
            },
            {
              name: "Advanced Antivirus Scanner",
              included: true,
              description: "File scans with quarantine actions.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description: "Protects your media from external embedding.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description: "Blocks common web attacks (SQLi, XSS, etc.).",
            },
            {
              name: "Spam Protection for Emails",
              included: true,
              description: "Server-side filtering to reduce junk mail.",
            },
            {
              name: "File Permission Protection",
              included: true,
              description: "Hardened file ownership and perms by default.",
            },
          ],
        },
        {
          title: "Support & Assistance",
          features: [
            {
              name: "24/7 Live Chat, Email & WhatsApp Call Support",
              included: true,
              description: "Round-the-clock expert help.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "Fast ticket SLAs for peace of mind.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description: "How-tos from basics to advanced tasks.",
            },
            {
              name: "Community Forum Access",
              included: true,
              description: "Share solutions and learn from peers.",
            },
            {
              name: "Site Optimization Advice",
              included: true,
              description: "Actionable tips to speed up your site.",
            },
            {
              name: "Onboarding Guide for New Users",
              included: true,
              description: "Get productive on day one.",
            },
          ],
        },
        {
          title: "Performance Benchmarks",
          features: [
            {
              name: "99.99% Uptime Guarantee",
              included: true,
              description: "High availability backed by SLA.",
            },
            {
              name: "Global CDN Integration",
              included: true,
              description: "Edge caching shortens distance to visitors.",
            },
            {
              name: "Real-World Speed Test Results",
              included: true,
              description: "Benchmarks published for transparency.",
            },
            {
              name: "Optimized for High Traffic Spikes",
              included: true,
              description: "Caching and autoscaling buffers bursts.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description: "CLI deploys, composer, and tooling.",
            },
            {
              name: "Git Integration",
              included: true,
              description: "Pull and deploy directly from your repo.",
            },
            {
              name: "WP-CLI Support",
              included: true,
              description: "Scriptable WordPress management.",
            },
            {
              name: "Custom Cron Jobs",
              included: true,
              description: "Automate recurring tasks and hooks.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Per-site PHP selection.",
            },
          ],
        },
      ],
    },

    // ——— PLUS ———
    // {
    //   id: "plus",
    //   name: "Plus",
    //   description: "For high-traffic websites, agencies, and e-commerce stores.",
    //   icon: "/assets/pricing/plus.svg",
    //   currency: "$",
    //   monthlyPrice: 2.99,
    //   yearlyPrice: 0.00,
    //   monthlyPrevPrice: 7.99,
    //   yearlyPrevPrice: 0.00,
    //   offer: 63,
    //   guarantee: "30-Day Money-Back Guarantee",
    //   ctaText: "Choose plan",
    //   renewalText: "36 month term • Free .COM",
    //   features: [
    //     {
    //       title: "Features",
    //       features: [
    //         { name: "200GB NVMe SSD Storage", included: true, description: "Roomy NVMe storage for large catalogs and media." },
    //         { name: "Unmetered Bandwidth", included: true, description: "Consistent performance as your traffic grows." },
    //         { name: "Free SSL Certificate", included: true, description: "Secure checkout and user data with HTTPS." },
    //         { name: "10 Websites", included: true, description: "Consolidate multiple brands or microsites." },
    //         { name: "20 Email Accounts", included: true, description: "Ample inboxes for teams and departments." },
    //         { name: "Daily Backups (JetBackup)", included: true, description: "Granular restores to a prior healthy state." },
    //         { name: "1-Click WordPress Installer", included: true, description: "Launch new projects fast and consistently." },
    //         { name: "DDoS Protection", included: true, description: "Mitigates volumetric and protocol-level attacks." },
    //         { name: "LiteSpeed Web Server", included: true, description: "Event-driven web server built for throughput." },
    //         { name: "Softaculous App Installer", included: true, description: "Hundreds of auto-installers for popular stacks." },
    //         { name: "30-Minute Guaranteed Email Response", included: true, description: "Keep operations moving with quick help." },
    //         { name: "30-Day Money-Back Guarantee", included: true, description: "Switch risk-free if needs change." }
    //       ]
    //     },
    //     {
    //       title: "Technical Specifications",
    //       features: [
    //         { name: "3 CPU Cores", included: true, description: "More parallelism for dynamic/e-commerce workloads." },
    //         { name: "4 GB RAM", included: true, description: "Memory headroom for object caches and builders." },
    //         { name: "30 MB/s I/O Speed", included: true, description: "Higher disk throughput for busy sites." },
    //         { name: "200 Entry Processes", included: true, description: "Serve more concurrent requests smoothly." },
    //         { name: "PHP Memory Limit: 1024 MB", included: true, description: "Supports heavy plugins and page builders." },
    //         { name: "500,000 Inodes Limit", included: true, description: "Large file count for product images and media." },
    //         { name: "Multiple PHP Versions", included: true, description: "Match PHP version to your app’s needs." }
    //       ]
    //     },
    //     {
    //       title: "WordPress Features",
    //       features: [
    //         { name: "LiteSpeed Cache for WordPress", included: true, description: "Server-level caching and image optimization." },
    //         { name: "Automatic WordPress Updates", included: true, description: "Stay patched without manual effort." },
    //         { name: "Pre-configured WordPress Settings", included: true, description: "Battle-tested defaults for performance." },
    //         { name: "Free WordPress Migration", included: true, description: "Zero-downtime moves handled by our team." },
    //         { name: "Basic Plugin and Theme Support", included: true, description: "Guidance on compatibility and setup." }
    //       ]
    //     },
    //     {
    //       title: "Security Features",
    //       features: [
    //         { name: "Imunify360 Security Suite", included: true, description: "Malware firewall, IDS/IPS, reputation checks." },
    //         { name: "Brute Force Protection", included: true, description: "Rate-limits abusive logins across services." },
    //         { name: "Advanced Antivirus Scanner", included: true, description: "Automated scans catch threats early." },
    //         { name: "Hotlink Protection", included: true, description: "Stop third-parties from siphoning assets." },
    //         { name: "Web Application Firewall (WAF)", included: true, description: "Blocks OWASP Top 10 style attacks." },
    //         { name: "Spam Protection for Emails", included: true, description: "Server-side spam and phishing filters." },
    //         { name: "File Permission Protection", included: true, description: "Secure defaults to reduce exploit risk." }
    //       ]
    //     },
    //     {
    //       title: "Support & Assistance",
    //       features: [
    //         { name: "24/7 Live Chat, Email & WhatsApp Call Support", included: true, description: "Engineers on-call around the clock." },
    //         { name: "30-Minute Guaranteed Email Response", included: true, description: "SLA-driven responses for quick resolutions." },
    //         { name: "Comprehensive Knowledge Base & Tutorials", included: true, description: "Documentation to self-serve fast." },
    //         { name: "Community Forum Access", included: true, description: "Best practices crowdsourced by users." },
    //         { name: "Site Optimization Advice", included: true, description: "Tailored performance recommendations." },
    //         { name: "Onboarding Guide for New Users", included: true, description: "Step-by-step launch checklist." }
    //       ]
    //     },
    //     {
    //       title: "Performance Benchmarks",
    //       features: [
    //         { name: "99.99% Uptime Guarantee", included: true, description: "Reliability you can plan business around." },
    //         { name: "Global CDN Integration", included: true, description: "Edge caching for international audiences." },
    //         { name: "Real-World Speed Test Results", included: true, description: "Transparent metrics from production tests." },
    //         { name: "Optimized for High Traffic Spikes", included: true, description: "Absorbs launch days and promo peaks." }
    //       ]
    //     },
    //     {
    //       title: "Developer-Friendly Features",
    //       features: [
    //         { name: "SSH Access", included: true, description: "Shell into environments securely." },
    //         { name: "Git Integration", included: true, description: "Deploy from Git for clean CI workflows." },
    //         { name: "WP-CLI Support", included: true, description: "Automate WordPress tasks via CLI." },
    //         { name: "Custom Cron Jobs", included: true, description: "Schedule jobs for feeds, imports, and tasks." },
    //         { name: "Multiple PHP Versions", included: true, description: "Flexibility for multi-app stacks." }
    //       ]
    //     }
    //   ]
    // },

    // ——— BUSINESS ———
    {
      id: "business",
      name: "Business",
      description:
        "For enterprises, large-scale websites, and mission-critical apps.",
      icon: "/assets/pricing/ultimate.svg",
      currency: "$",
      monthlyPrice: 4.99,
      yearlyPrice: 0.0,
      monthlyPrevPrice: 9.99,
      yearlyPrevPrice: 0.0,

      monthlyPriceBdt: 598.8,
      yearlyPriceBdt: 0.0,
      monthlyPrevPriceBdt: 1198.8,
      yearlyPrevPriceBdt: 0.0,
      offer: 50,
      ctaText: "Choose plan",
      renewalText: "36 month term • Free .COM",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "Unlimited NVMe SSD Storage",
              included: true,
              description:
                "Scale content and backups without capacity planning.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Predictable costs even as traffic surges.",
            },
            {
              name: "Free SSL Certificate",
              included: true,
              description: "Secure every site and subdomain with HTTPS.",
            },
            {
              name: "Unlimited Websites",
              included: true,
              description: "Host as many projects as your business requires.",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Create inboxes for all teams and functions.",
            },
            {
              name: "Daily Backups (JetBackup)",
              included: true,
              description: "Point-in-time recovery for compliance and safety.",
            },
            {
              name: "1-Click WordPress Installer",
              included: true,
              description: "Standardize deployments across many sites.",
            },
            {
              name: "DDoS Protection",
              included: true,
              description: "Enterprise-grade mitigation for uptime assurance.",
            },
            {
              name: "LiteSpeed Web Server",
              included: true,
              description: "High-throughput server for heavy concurrency.",
            },
            {
              name: "Softaculous App Installer",
              included: true,
              description: "Automate app provisioning for teams.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "Fast SLAs to keep teams productive.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Risk-free evaluation at scale.",
            },
          ],
        },
        {
          title: "Technical Specifications",
          features: [
            {
              name: "6 CPU Cores",
              included: true,
              description: "Strong parallelism for complex, dynamic workloads.",
            },
            {
              name: "8 GB RAM",
              included: true,
              description: "Accommodates large caches and heavyweight plugins.",
            },
            {
              name: "50 MB/s I/O Speed",
              included: true,
              description:
                "Premium disk throughput for busy databases and media.",
            },
            {
              name: "Unlimited Entry Processes",
              included: true,
              description:
                "Serve very high concurrency without hitting ceilings.",
            },
            {
              name: "PHP Memory Limit: 2048 MB",
              included: true,
              description: "Headroom for builders, search, and integrations.",
            },
            {
              name: "1,000,000 Inodes Limit",
              included: true,
              description: "Space for very large file trees and assets.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Run legacy and modern apps side by side.",
            },
          ],
        },
        {
          title: "WordPress Features",
          features: [
            {
              name: "LiteSpeed Cache for WordPress",
              included: true,
              description:
                "Advanced cache policies and image/WebP optimization.",
            },
            {
              name: "Automatic WordPress Updates",
              included: true,
              description: "Security and minor updates applied automatically.",
            },
            {
              name: "Pre-configured WordPress Settings",
              included: true,
              description: "Performance and security best practices pre-tuned.",
            },
            {
              name: "Free WordPress Migration",
              included: true,
              description: "White-glove moves of large sites and networks.",
            },
            {
              name: "Basic Plugin and Theme Support",
              included: true,
              description:
                "Assistance for common commercial themes and plugins.",
            },
          ],
        },
        {
          title: "Security Features",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description:
                "Layered protection with WAF, malware cleanup, and more.",
            },
            {
              name: "Brute Force & DDoS Protection",
              included: true,
              description: "Blocks abusive logins and network attacks.",
            },
            {
              name: "Advanced Antivirus Scanner",
              included: true,
              description: "Scheduled and on-demand malware scans.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description: "Prevents asset theft and bandwidth drain.",
            },
            {
              name: "Premium Web Application Firewall (WAF)",
              included: true,
              description: "Enhanced signature sets and virtual patching.",
            },
            {
              name: "Spam Protection for Emails",
              included: true,
              description: "Robust spam and phishing filtering for mailboxes.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Add a second factor to secure logins.",
            },
          ],
        },
        {
          title: "Support & Assistance",
          features: [
            {
              name: "24/7 Live Chat, Email & WhatsApp Call Support",
              included: true,
              description: "Multi-channel access to senior support.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "Priority SLAs for fast remediation.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description: "Self-serve docs for teams at scale.",
            },
            {
              name: "Dedicated Account Manager",
              included: true,
              description:
                "Single point of contact for planning and escalations.",
            },
            {
              name: "Advanced Site Optimization Advice",
              included: true,
              description: "Deep-dive performance and architecture guidance.",
            },
            {
              name: "VIP Onboarding & Migration Assistance",
              included: true,
              description: "Hands-on help to migrate complex estates.",
            },
          ],
        },
        {
          title: "Performance Benchmarks",
          features: [
            {
              name: "99.99% Uptime Guarantee",
              included: true,
              description:
                "Contractual reliability for mission-critical workloads.",
            },
            {
              name: "Global CDN Integration",
              included: true,
              description: "Edge presence for global performance.",
            },
            {
              name: "Real-World Speed Test Results",
              included: true,
              description: "Public benchmarks to validate performance.",
            },
            {
              name: "Optimized for Extreme Traffic Loads",
              included: true,
              description: "Built for campaigns, launches, and peak seasons.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description: "Secure remote shell across environments.",
            },
            {
              name: "Git & CI/CD Integration",
              included: true,
              description: "Hook into pipelines for seamless deploys.",
            },
            {
              name: "WP-CLI & Custom Scripts",
              included: true,
              description: "Automate admin tasks and maintenance.",
            },
            {
              name: "Custom Cron & Task Scheduling",
              included: true,
              description: "Flexible job scheduling for imports and jobs.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Per-site PHP targeting for compatibility.",
            },
          ],
        },
      ],
    },
  ],
};

export const wordpressHostingPricingData: PricingData = {
  title: "Plans Built for WordPress",
  yearlyDiscount: 0,
  plans: [
    // ——— BASIC ———
    {
      id: "basic",
      name: "Basic",
      description:
        "For bloggers, freelancers, and small businesses starting their first WordPress site.",
      icon: "/assets/pricing/basic.svg",
      currency: "$",
      monthlyPrice: 9.99,
      yearlyPrice: 1.49,
      monthlyPrevPrice: 9.99,
      yearlyPrevPrice: 2.49,
      renewalText: "$2.49/Monthly when you renew",

      monthlyPriceBdt: 1198.8,
      yearlyPriceBdt: 178.8,
      monthlyPrevPriceBdt: 1198.8,
      yearlyPrevPriceBdt: 298.8,
      renewalTextBdt: "৳298.8/Monthly when you renew",
      offer: 90,
      ctaText: "Choose plan",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "75GB NVMe SSD Storage",
              included: true,
              description: "Fast NVMe storage for snappy page loads and media.",
            },
            {
              name: "3 WordPress Websites",
              included: true,
              description: "Host up to three WordPress installs on one plan.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "No traffic caps—grow without surprise fees.",
            },
            {
              name: "Free Domain (1 Year)",
              included: true,
              description:
                "Claim a free .COM or similar domain for your first year.",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Create as many branded inboxes as you need.",
            },
            {
              name: "Daily Automated Backups (JetBackup)",
              included: true,
              description:
                "Nightly restore points to recover fast from mistakes.",
            },
            {
              name: "1-Click WordPress Installer",
              included: true,
              description: "Spin up WordPress in seconds with sane defaults.",
            },
            {
              name: "DDoS Protection & WordPress Firewall",
              included: true,
              description: "Mitigates attacks and blocks malicious requests.",
            },
            {
              name: "LiteSpeed Web Server + LSCache",
              included: true,
              description: "High-performance server with built-in caching.",
            },
            {
              name: "AI-Driven WordPress Optimizer",
              included: true,
              description: "Automatic tuning for speed, caching, and images.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "Ticket replies within 30 minutes—day or night.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Try it risk-free with a full refund window.",
            },
          ],
        },
        {
          title: "Technical Specifications",
          features: [
            {
              name: "2 CPU Cores",
              included: true,
              description: "Dedicated share of compute for responsiveness.",
            },
            {
              name: "2 GB RAM",
              included: true,
              description: "Enough memory for lightweight sites and blogs.",
            },
            {
              name: "20 MB/s I/O Speed",
              included: true,
              description: "Balanced disk throughput for everyday workloads.",
            },
            {
              name: "40 Entry Processes",
              included: true,
              description: "Supports concurrent PHP/HTTP processes.",
            },
            {
              name: "PHP Memory Limit: 768 MB",
              included: true,
              description: "Good headroom for common themes and plugins.",
            },
            {
              name: "400,000 Inodes Limit",
              included: true,
              description: "Space for roughly 400k files and assets.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Choose the PHP version your site requires.",
            },
          ],
        },
        {
          title: "Exclusive WordPress Features",
          features: [
            {
              name: "LiteSpeed Cache for WordPress",
              included: true,
              description: "Server-level page caching and optimizations.",
            },
            {
              name: "Automatic WordPress Core & Plugin Updates",
              included: true,
              description: "Stay secure and current without manual effort.",
            },
            {
              name: "1-Click Staging Environment",
              included: true,
              description: "Test updates safely before going live.",
            },
            {
              name: "AI-Powered SEO & Speed Optimizer",
              included: true,
              description: "Smart recommendations to improve Core Web Vitals.",
            },
            {
              name: "Free WordPress Migration (Completed Within Hours)",
              included: true,
              description:
                "We’ll move your site quickly with minimal downtime.",
            },
          ],
        },
        {
          title: "Advanced Security Features",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description:
                "Malware protection, IDS/IPS, and proactive defense.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description: "Blocks common web attacks before they land.",
            },
            {
              name: "Real-Time Malware Scanning",
              included: true,
              description: "Continuous scanning with automatic quarantine.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description: "Rate-limits abusive login attempts.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Adds a second step to secure logins.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 WordPress Expert Support",
              included: true,
              description: "Talk to humans who understand WP, any time.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "SLA-backed ticket response time.",
            },
            {
              name: "Step-by-Step WordPress Onboarding Guide",
              included: true,
              description: "A simple checklist to launch smoothly.",
            },
            {
              name: "Community Forum Access",
              included: false,
              description: "Not included on Basic—available on higher tiers.",
            },
            {
              name: "SEO Optimization Tips",
              included: true,
              description: "Actionable guidance to improve rankings.",
            },
          ],
        },
        {
          title: "Performance Benchmarks",
          features: [
            {
              name: "99.99% Uptime Guarantee",
              included: true,
              description: "Enterprise-grade availability SLA.",
            },
            {
              name: "Global CDN Integration",
              included: true,
              description: "Edge delivery for international audiences.",
            },
            {
              name: "Average Load Time: Under 1s",
              included: true,
              description: "Measured on optimized demo stacks.",
            },
            {
              name: "Image Optimization Tools",
              included: true,
              description: "Auto-compress and convert images (e.g., WebP).",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access with WP-CLI",
              included: true,
              description: "Manage WordPress from the command line.",
            },
            {
              name: "Git Integration",
              included: true,
              description: "Pull from repos and streamline deployments.",
            },
            {
              name: "Custom Cron Jobs",
              included: true,
              description: "Schedule recurring tasks and maintenance.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Pin or upgrade PHP per site as needed.",
            },
          ],
        },
      ],
    },

    // ——— STARTER (MOST POPULAR) ———
    {
      id: "starter",
      name: "Starter",
      description:
        "Ideal for growing blogs, startups, and freelancers managing multiple sites.",
      icon: "/assets/pricing/starter-42.svg",
      currency: "$",
      monthlyPrice: 14.99,
      yearlyPrice: 2.49,
      monthlyPrevPrice: 14.99,
      yearlyPrevPrice: 3.49,
      renewalText: "$3.49/Monthly when you renew",

      monthlyPriceBdt: 1798.8,
      yearlyPriceBdt: 298.8,
      monthlyPrevPriceBdt: 1798.8,
      yearlyPrevPriceBdt: 418.8,
      renewalTextBdt: "৳418.8/Monthly when you renew",
      offer: 90,
      isPopular: true,
      ctaText: "Choose plan",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "150 GB NVMe SSD Storage",
              included: true,
              description: "Bigger, faster storage for growing sites.",
            },
            {
              name: "10 WordPress Websites",
              included: true,
              description: "Run up to ten WordPress installs.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Serve more visitors without throttling.",
            },
            {
              name: "Free Domain (1 Year)",
              included: true,
              description:
                "Register your primary domain at no cost for year one.",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Create inboxes for founders and teams.",
            },
            {
              name: "Daily Automated Backups (JetBackup)",
              included: true,
              description: "Automatic daily backups with quick restore.",
            },
            {
              name: "1-Click WordPress Installer",
              included: true,
              description: "Launch new sites in seconds.",
            },
            {
              name: "DDoS Protection & WordPress Firewall",
              included: true,
              description: "Layered defenses to keep sites online.",
            },
            {
              name: "LiteSpeed Web Server + LSCache",
              included: true,
              description: "Event-driven web server and cache for speed.",
            },
            {
              name: "AI-Driven WordPress Optimizer",
              included: true,
              description: "Auto-tunes caching, DB, and images.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description: "Even faster ticket SLAs for busy owners.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Full refund period if it’s not a fit.",
            },
          ],
        },
        {
          title: "Technical Specifications",
          features: [
            {
              name: "4 CPU Cores",
              included: true,
              description: "More compute for dynamic workloads.",
            },
            {
              name: "4 GB RAM",
              included: true,
              description: "Memory headroom for object caches and builders.",
            },
            {
              name: "30 MB/s I/O Speed",
              included: true,
              description: "Higher storage throughput for busy sites.",
            },
            {
              name: "80 Entry Processes",
              included: true,
              description: "Support more concurrent PHP requests.",
            },
            {
              name: "PHP Memory Limit: 1024 MB",
              included: true,
              description: "Room for complex plugins and themes.",
            },
            {
              name: "600,000 Inodes Limit",
              included: true,
              description: "Accommodates larger media libraries.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Match PHP versions per project.",
            },
          ],
        },
        {
          title: "Exclusive WordPress Features",
          features: [
            {
              name: "LiteSpeed Cache for WordPress",
              included: true,
              description: "Page cache, image/WebP, and CSS/JS tuning.",
            },
            {
              name: "Automatic WordPress Core & Plugin Updates",
              included: true,
              description: "Security updates applied automatically.",
            },
            {
              name: "1-Click Staging Environment",
              included: true,
              description: "Test changes safely before live deploys.",
            },
            {
              name: "AI-Powered SEO & Speed Optimizer",
              included: true,
              description: "Guided improvements for Core Web Vitals.",
            },
            {
              name: "Free WordPress Migration (Completed Within Hours)",
              included: true,
              description: "White-glove moves with minimal downtime.",
            },
          ],
        },
        {
          title: "Advanced Security Features",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description: "Malware cleanup and exploit prevention.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description: "Blocks SQLi, XSS, and other web attacks.",
            },
            {
              name: "Real-Time Malware Scanning",
              included: true,
              description: "Continuous monitoring for new threats.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description: "Throttles abusive logins across services.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Adds a second factor to secure accounts.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 WordPress Expert Support",
              included: true,
              description: "Get help from WP specialists anytime.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description: "Rapid ticket response for time-sensitive issues.",
            },
            {
              name: "Step-by-Step WordPress Onboarding Guide",
              included: true,
              description: "Launch checklist tailored to WordPress.",
            },
            {
              name: "Community Forum Access",
              included: true,
              description: "Learn from peers and share solutions.",
            },
            {
              name: "Advanced SEO Optimization Tips",
              included: true,
              description: "Deeper guidance to rank and convert better.",
            },
          ],
        },
        {
          title: "Performance Enhancements",
          features: [
            {
              name: "99.99% Uptime Guarantee",
              included: true,
              description: "High availability backed by SLA.",
            },
            {
              name: "Global CDN Integration",
              included: true,
              description: "Edge caching shortens distance to visitors.",
            },
            {
              name: "Average Load Time: Under 900ms",
              included: true,
              description: "Measured on tuned demo sites.",
            },
            {
              name: "Image Optimization Tools",
              included: true,
              description: "Auto-compress/resize for faster pages.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access with WP-CLI",
              included: true,
              description: "CLI workflows and scripted operations.",
            },
            {
              name: "Git Integration",
              included: true,
              description: "Pull from repos and deploy safely.",
            },
            {
              name: "Custom Cron Jobs",
              included: true,
              description: "Automate imports, cleanups, and tasks.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Per-site PHP targeting for compatibility.",
            },
          ],
        },
      ],
    },

    // ——— PRO ———
    // {
    //   id: "pro",
    //   name: "Pro",
    //   description:
    //     "Built for high-traffic blogs, WooCommerce stores, and expanding businesses.",
    //   icon: "/assets/pricing/pro.svg",
    //   currency: "$",
    //   monthlyPrice: 3.99,
    //   yearlyPrice: 3.99,
    //   monthlyPrevPrice: 5.99,
    //   yearlyPrevPrice: 5.99,
    //   offer: 90,
    //   ctaText: "Choose plan",
    //   renewalText: "$5.99/Monthly when you renew",
    //   guarantee: "30-Day Money-Back Guarantee",
    //   features: [
    //     {
    //       title: "Features",
    //       features: [
    //         { name: "250GB NVMe SSD Storage", included: true, description: "Generous NVMe capacity for large media and backups." },
    //         { name: "25 WordPress Websites", included: true, description: "Scale across projects and brands with one plan." },
    //         { name: "Unmetered Bandwidth", included: true, description: "Predictable costs as traffic grows." },
    //         { name: "Free Domain (1 Year)", included: true, description: "Register your main domain at no extra cost." },
    //         { name: "Unlimited Email Accounts", included: true, description: "Create inboxes for teams and departments." },
    //         { name: "Hourly Automated Backups (JetBackup)", included: true, description: "Frequent restore points for e-commerce changes." },
    //         { name: "1-Click WordPress Installer", included: true, description: "Standardized, fast deployments." },
    //         { name: "DDoS Protection & WordPress Firewall", included: true, description: "Enterprise-grade mitigation and filtering." },
    //         { name: "LiteSpeed Web Server + LSCache", included: true, description: "HTTP/2/3 server tuned for throughput." },
    //         { name: "AI-Driven WordPress Optimizer", included: true, description: "Auto-tunes DB, cache, and images for speed." },
    //         { name: "15-Minute Guaranteed Email Response", included: true, description: "Tight SLAs to keep the store running." },
    //         { name: "30-Day Money-Back Guarantee", included: true, description: "Risk-free evaluation period." }
    //       ]
    //     },
    //     {
    //       title: "Technical Specifications",
    //       features: [
    //         { name: "6 CPU Cores", included: true, description: "Parallel processing for heavy, dynamic sites." },
    //         { name: "8 GB RAM", included: true, description: "Room for object caches and heavy plugins." },
    //         { name: "40 MB/s I/O Speed", included: true, description: "Premium storage throughput for busy DBs." },
    //         { name: "120 Entry Processes", included: true, description: "Serve many concurrent requests smoothly." },
    //         { name: "PHP Memory Limit: 2048 MB", included: true, description: "Headroom for builders and integrations." },
    //         { name: "1,000,000 Inodes Limit", included: true, description: "Space for extensive media libraries." },
    //         { name: "Multiple PHP Versions", included: true, description: "Choose PHP per site for compatibility." }
    //       ]
    //     },
    //     {
    //       title: "Exclusive WordPress Features",
    //       features: [
    //         { name: "LiteSpeed Cache for WordPress", included: true, description: "Advanced cache rules and image/WebP tweaks." },
    //         { name: "Automatic WordPress Core & Plugin Updates", included: true, description: "Security updates applied on schedule." },
    //         { name: "1-Click Staging Environment", included: true, description: "Safely test code, themes, and plugins." },
    //         { name: "AI-Powered SEO & Speed Optimizer", included: true, description: "Guided improvements for pagespeed and SEO." },
    //         { name: "Free WordPress Migration (Completed Within Hours)", included: true, description: "Specialists move your site with care." }
    //       ]
    //     },
    //     {
    //       title: "Advanced Security Features",
    //       features: [
    //         { name: "Imunify360 Security Suite", included: true, description: "Layered defense with proactive protection." },
    //         { name: "Web Application Firewall (WAF)", included: true, description: "Filters malicious traffic before WordPress." },
    //         { name: "Real-Time Malware Scanning", included: true, description: "Continuous scanning and quarantine." },
    //         { name: "Brute Force Protection", included: true, description: "Throttles repeated login attempts." },
    //         { name: "Two-Factor Authentication (2FA)", included: true, description: "Second factor to secure admin access." }
    //       ]
    //     },
    //     {
    //       title: "Premium Support & Assistance",
    //       features: [
    //         { name: "24/7 WordPress Expert Support", included: true, description: "Senior agents ready around the clock." },
    //         { name: "15-Minute Guaranteed Email Response", included: true, description: "Fast escalations for incidents." },
    //         { name: "Advanced WordPress Onboarding Guide", included: true, description: "Deep-dive setup for performance and security." },
    //         { name: "Community Forum Access", included: true, description: "Collaborate and learn from power users." },
    //         { name: "Advanced SEO Optimization Tips", included: true, description: "Playbooks for content and technical SEO." }
    //       ]
    //     },
    //     {
    //       title: "Performance Benchmarks",
    //       features: [
    //         { name: "99.99% Uptime Guarantee", included: true, description: "SLA you can plan business around." },
    //         { name: "Global CDN Integration", included: true, description: "Edge caching for international reach." },
    //         { name: "Average Load Time: Under 800ms", included: true, description: "Measured on tuned demo stores." },
    //         { name: "Image Optimization Tools", included: true, description: "Auto-optimize images for speed and quality." }
    //       ]
    //     },
    //     {
    //       title: "Developer-Friendly Features",
    //       features: [
    //         { name: "SSH Access with WP-CLI", included: true, description: "CLI workflows for deploys and maintenance." },
    //         { name: "Git Integration", included: true, description: "Connect repos to streamline releases." },
    //         { name: "Custom Cron Jobs", included: true, description: "Schedule jobs for feeds, imports, and tasks." },
    //         { name: "Multiple PHP Versions", included: true, description: "Per-site PHP selection for compatibility." }
    //       ]
    //     }
    //   ]
    // },

    // ——— ULTIMATE ———
    {
      id: "ultimate",
      name: "Ultimate",
      description:
        "Best for enterprises, large stores, agencies, and heavy-traffic WordPress sites.",
      icon: "/assets/pricing/ultimate.svg",
      currency: "$",
      monthlyPrice: 39.99,
      yearlyPrice: 4.99,
      monthlyPrevPrice: 39.99,
      yearlyPrevPrice: 7.99,
      renewalText: "$7.99/Monthly when you renew",
      monthlyPriceBdt: 4798.8,
      yearlyPriceBdt: 598.8,
      monthlyPrevPriceBdt: 4798.8,
      yearlyPrevPriceBdt: 958.8,
      renewalTextBdt: "৳958.8/Monthly when you renew",
      offer: 90,
      ctaText: "Choose plan",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "Unlimited NVMe SSD Storage",
              included: true,
              description:
                "Scale content and backups without capacity planning.",
            },
            {
              name: "Unlimited WordPress Websites",
              included: true,
              description: "Host as many sites, brands, or networks as needed.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Predictable costs even at extreme traffic levels.",
            },
            {
              name: "Free Domain (1 Year)",
              included: true,
              description: "Register your primary domain at no cost.",
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Create inboxes for every team and function.",
            },
            {
              name: "Hourly Automated Backups (JetBackup)",
              included: true,
              description:
                "Frequent recovery points for mission-critical sites.",
            },
            {
              name: "1-Click WordPress Installer",
              included: true,
              description: "Standardized, fast site provisioning.",
            },
            {
              name: "DDoS Protection & WordPress Firewall",
              included: true,
              description: "Enterprise-grade security to stay online.",
            },
            {
              name: "LiteSpeed Web Server + LSCache",
              included: true,
              description: "High-throughput server for heavy concurrency.",
            },
            {
              name: "AI-Driven WordPress Optimizer",
              included: true,
              description: "Automated tuning for speed at scale.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description: "Fastest ticket SLAs in our lineup.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Evaluate at scale without risk.",
            },
          ],
        },
        {
          title: "Technical Specifications",
          features: [
            {
              name: "8 CPU Cores",
              included: true,
              description: "Strong parallelism for complex workloads.",
            },
            {
              name: "16 GB RAM",
              included: true,
              description: "Large memory pool for caches and heavy plugins.",
            },
            {
              name: "50 MB/s I/O Speed",
              included: true,
              description: "Premium disk throughput for databases and media.",
            },
            {
              name: "200 Entry Processes",
              included: true,
              description: "Serve very high concurrency comfortably.",
            },
            {
              name: "PHP Memory Limit: 4096 MB",
              included: true,
              description: "Headroom for builders, search, and integrations.",
            },
            {
              name: "Unlimited Inodes",
              included: true,
              description: "Handle extremely large file trees and assets.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Run legacy and modern apps side by side.",
            },
          ],
        },
        {
          title: "Exclusive WordPress Features",
          features: [
            {
              name: "LiteSpeed Cache for WordPress",
              included: true,
              description:
                "Advanced cache policies and image/WebP optimization.",
            },
            {
              name: "Automatic WordPress Core & Plugin Updates",
              included: true,
              description: "Security and minor updates applied automatically.",
            },
            {
              name: "1-Click Staging Environment",
              included: true,
              description: "Safely test major changes and releases.",
            },
            {
              name: "AI-Powered SEO & Speed Optimizer",
              included: true,
              description: "Data-driven improvements for fastest page loads.",
            },
            {
              name: "Free WordPress Migration (Completed Within Hours)",
              included: true,
              description: "White-glove migrations for complex estates.",
            },
          ],
        },
        {
          title: "Advanced Security Features",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description: "Layered protection with WAF and malware cleanup.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description: "Virtual patching blocks emerging threats.",
            },
            {
              name: "Real-Time Malware Scanning",
              included: true,
              description: "Continuous monitoring and auto-quarantine.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Add a second factor across accounts.",
            },
            {
              name: "Daily Security Reports",
              included: true,
              description: "Visibility into threats, patches, and status.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 WP WordPress Expert Support",
              included: true,
              description: "Senior engineers available around the clock.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description: "SLA for rapid triage and resolution.",
            },
            {
              name: "Dedicated Account Manager",
              included: true,
              description:
                "Single point of contact for planning and escalations.",
            },
            {
              name: "Advanced WordPress Onboarding Guide",
              included: true,
              description: "Deep configuration for speed and security.",
            },
            {
              name: "Community Forum Access",
              included: true,
              description: "Share learnings and best practices.",
            },
            {
              name: "Advanced SEO Optimization Tips",
              included: true,
              description: "Expert playbooks for technical and content SEO.",
            },
          ],
        },
        {
          title: "Performance Benchmarks",
          features: [
            {
              name: "99.99% Uptime Guarantee",
              included: true,
              description:
                "Contractual reliability for mission-critical sites.",
            },
            {
              name: "Global CDN Integration",
              included: true,
              description: "Edge presence for fast, global delivery.",
            },
            {
              name: "Average Load Time: Under 600ms",
              included: true,
              description: "Our fastest target under realistic conditions.",
            },
            {
              name: "Image Optimization Tools",
              included: true,
              description: "Compress, resize, and convert for best LCP.",
            },
            {
              name: "WooCommerce Optimization",
              included: true,
              description:
                "Server and cache tuning for large catalogs and carts.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access with WP-CLI",
              included: true,
              description: "Manage WordPress via CLI and scripts.",
            },
            {
              name: "Git Integration",
              included: true,
              description: "Version-controlled deployments from repos.",
            },
            {
              name: "Custom Cron Jobs",
              included: true,
              description: "Automate feeds, imports, and scheduled tasks.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Per-site PHP selection for compatibility.",
            },
            {
              name: "Database Optimization Tools",
              included: true,
              description: "Tune MySQL for lower latency at scale.",
            },
          ],
        },
      ],
    },
  ],
};

export const manageHostingPricingData: PricingData = {
  title: "Choose Your Perfect Plan",
  yearlyDiscount: 76,
  plans: [
    {
      id: "basic",
      name: "Basic",
      icon: "/assets/pricing/basic.svg",
      monthlyPrice: 49.99,
      yearlyPrice: 27.99,
      monthlyPrevPrice: 114.99,
      yearlyPrevPrice: 335.88,
      renewalText: "$49.99/Monthly when you renew",
      monthlyPriceBdt: 5998.8,
      yearlyPriceBdt: 3358.8,
      monthlyPrevPriceBdt: 13798.8,
      yearlyPrevPriceBdt: 40305.6,
      renewalTextBdt: "৳5998.8/Monthly when you renew",
      offer: 44,
      currency: "$",
      ctaText: "Choose Plan",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "150GB NVMe SSD Storage",
              included: true,
              description:
                "High-speed NVMe SSD storage for faster website performance.",
            },
            {
              name: "15 Websites",
              included: true,
              description:
                "Host up to 15 websites under one plan without extra cost.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Unlimited traffic with no bandwidth restrictions.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description:
                "Keep all websites secure with lifetime SSL encryption.",
            },
            {
              name: "5 vCPU Cores",
              included: true,
              description: "Powerful virtual CPU cores for smooth performance.",
            },
            {
              name: "10 GB RAM",
              included: true,
              description:
                "High memory allocation for resource-intensive applications.",
            },
            {
              name: "Daily Automated Backups (14 Days Retention)",
              included: true,
              description: "Automatic daily backups stored for up to 14 days.",
            },
            {
              name: "1-Click App Installer",
              included: true,
              description:
                "Easily install WordPress and 400+ apps in a single click.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description:
                "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "100% Uptime SLA",
              included: true,
              description:
                "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description:
                "Quick support with responses guaranteed within 30 minutes.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description:
                "Risk-free hosting with a full refund if cancelled within 30 days.",
            },
          ],
        },
        {
          title: "Upgraded Technical Specifications",
          features: [
            {
              name: "5 vCPU Cores",
              included: true,
              description:
                "Advanced CPU power for handling high traffic and workloads.",
            },
            {
              name: "10 GB RAM",
              included: true,
              description:
                "Enhanced memory capacity for faster and stable operations.",
            },
            {
              name: "50 MB/s I/O Speed",
              included: true,
              description:
                "Fast input/output speeds for quicker file and database access.",
            },
            {
              name: "60 Entry Processes",
              included: true,
              description:
                "Supports up to 60 concurrent PHP processes at once.",
            },
            {
              name: "PHP Memory Limit: 2048 MB",
              included: true,
              description:
                "Increased PHP memory allocation for demanding applications.",
            },
            {
              name: "750,000 Inodes Limit",
              included: true,
              description:
                "Manage up to 750,000 files and directories efficiently.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description:
                "Switch between PHP versions for better compatibility.",
            },
          ],
        },
        {
          title: "Advanced Security Features (Enhanced)",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description:
                "AI-powered malware protection and proactive defense system.",
            },
            {
              name: "DDoS Protection",
              included: true,
              description:
                "Safeguards your website from large-scale cyber attacks.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description:
                "Blocks malicious requests and protects web applications.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description:
                "Prevents unauthorized login attempts and password attacks.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Adds an extra layer of security to your accounts.",
            },
            {
              name: "Real-Time Malware Scanning",
              included: true,
              description:
                "Scans and removes malware instantly before it spreads.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description:
                "Stops other sites from stealing your images and resources.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description: "Protect data with free SSL encryption for life.",
            },
          ],
        },
        {
          title: "Performance Enhancements",
          features: [
            {
              name: "100% Network Uptime SLA",
              included: true,
              description:
                "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "Cloud Load Balancing",
              included: true,
              description:
                "Distributes traffic across multiple servers for maximum availability.",
            },
            {
              name: "AI-Powered Auto-Scaling",
              included: true,
              description:
                "Automatically adjusts server resources based on traffic and usage patterns.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description:
                "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "Optimized for Google Core Web Vitals",
              included: true,
              description:
                "Ensures top performance scores for SEO and user experience.",
            },
            {
              name: "Real-Time Resource Monitoring",
              included: true,
              description:
                "Monitor CPU, memory, and bandwidth usage with live analytics.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 Cloud Hosting Expert Support",
              included: true,
              description:
                "Round-the-clock technical support from certified experts.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description:
                "Get email replies from our team within 30 minutes or less.",
            },
            {
              name: "Step-by-Step Onboarding Guide",
              included: true,
              description:
                "Guided assistance to help you migrate and launch quickly.",
            },
            {
              name: "Live Chat & WhatsApp Support",
              included: true,
              description:
                "Instant responses through chat and WhatsApp messaging.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description:
                "Access detailed guides, FAQs, and video tutorials anytime.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description:
                "Secure shell access for advanced server management.",
            },
            {
              name: "Git Integration",
              included: true,
              description: "Deploy and manage code with built-in Git support.",
            },
            {
              name: "WP-CLI Support",
              included: true,
              description: "Manage WordPress sites with command-line tools.",
            },
            {
              name: "Custom Cron Jobs",
              included: true,
              description: "Automate repetitive tasks with custom scheduling.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description:
                "Switch between PHP versions for compatibility and performance.",
            },
            {
              name: "Staging Environments",
              included: true,
              description:
                "Test changes safely before deploying to production.",
            },
            {
              name: "Database Optimization Tools",
              included: true,
              description: "Optimize and maintain MySQL databases with ease.",
            },
          ],
        },
      ],
    },
    {
      id: "starter",
      name: "Starter",
      icon: "/assets/pricing/starter-42.svg",
      monthlyPrice: 69.99,
      yearlyPrice: 39.99,
      monthlyPrevPrice: 166.99,
      yearlyPrevPrice: 479.88,
      renewalText: "$49.99/Monthly when you renew",

      monthlyPriceBdt: 8398.8,
      yearlyPriceBdt: 4798.8,
      monthlyPrevPriceBdt: 20038.8,
      yearlyPrevPriceBdt: 57585.6,
      renewalTextBdt: "৳5998.8/Monthly when you renew",
      offer: 42,
      currency: "$",
      isPopular: true,
      ctaText: "Choose Plan",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "200GB NVMe SSD Storage",
              included: true,
              description:
                "High-speed NVMe SSD storage for faster website performance.",
            },
            {
              name: "25 Websites",
              included: true,
              description:
                "Host up to 25 websites under one plan without extra cost.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Unlimited traffic with no bandwidth restrictions.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description:
                "Keep all websites secure with lifetime SSL encryption.",
            },
            {
              name: "6 vCPU Cores",
              included: true,
              description: "Powerful virtual CPU cores for smooth performance.",
            },
            {
              name: "14 GB RAM",
              included: true,
              description:
                "High memory allocation for resource-intensive applications.",
            },
            {
              name: "Daily Automated Backups (21 Days Retention)",
              included: true,
              description: "Automatic daily backups stored for up to 21 days.",
            },
            {
              name: "1-Click App Installer",
              included: true,
              description:
                "Easily install WordPress and 400+ apps in a single click.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description:
                "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "100% Uptime SLA",
              included: true,
              description:
                "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description:
                "Quick support with responses guaranteed within 30 minutes.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description:
                "Risk-free hosting with a full refund if cancelled within 30 days.",
            },
          ],
        },
        {
          title: "Upgraded Technical Specifications",
          features: [
            {
              name: "6 vCPU Cores",
              included: true,
              description:
                "Advanced CPU power for handling high traffic and workloads.",
            },
            {
              name: "14 GB RAM",
              included: true,
              description:
                "Enhanced memory capacity for faster and stable operations.",
            },
            {
              name: "70 MB/s I/O Speed",
              included: true,
              description:
                "Fast input/output speeds for quicker file and database access.",
            },
            {
              name: "80 Entry Processes",
              included: true,
              description:
                "Supports up to 80 concurrent PHP processes at once.",
            },
            {
              name: "PHP Memory Limit: 3072 MB",
              included: true,
              description:
                "Increased PHP memory allocation for demanding applications.",
            },
            {
              name: "1,000,000 Inodes Limit",
              included: true,
              description:
                "Manage up to 1,000,000 files and directories efficiently.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description:
                "Switch between PHP versions for better compatibility.",
            },
          ],
        },
        {
          title: "Advanced Security Features (Enhanced)",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description:
                "AI-powered malware protection and proactive defense system.",
            },
            {
              name: "DDoS Protection (Advanced)",
              included: true,
              description:
                "Safeguards your website from large-scale cyber attacks.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description:
                "Blocks malicious requests and protects web applications.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description:
                "Prevents unauthorized login attempts and password attacks.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Adds an extra layer of security to your accounts.",
            },
            {
              name: "Real-Time Malware Scanning",
              included: true,
              description:
                "Scans and removes malware instantly before it spreads.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description:
                "Stops other sites from stealing your images and resources.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description: "Protect data with free SSL encryption for life.",
            },
          ],
        },
        {
          title: "Performance Enhancements",
          features: [
            {
              name: "100% Network Uptime SLA",
              included: true,
              description:
                "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "Cloud Load Balancing",
              included: true,
              description:
                "Distributes traffic across multiple servers for maximum availability.",
            },
            {
              name: "AI-Powered Auto-Scaling",
              included: true,
              description:
                "Automatically adjusts server resources based on traffic and usage patterns.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description:
                "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "Optimized for Google Core Web Vitals",
              included: true,
              description:
                "Ensures top performance scores for SEO and user experience.",
            },
            {
              name: "Real-Time Resource Monitoring",
              included: true,
              description:
                "Monitor CPU, memory, and bandwidth usage with live analytics.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 Cloud Hosting Expert Support",
              included: true,
              description:
                "Round-the-clock technical support from certified experts.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description:
                "Get email replies from our team within 30 minutes or less.",
            },
            {
              name: "Step-by-Step Onboarding Guide",
              included: true,
              description:
                "Guided assistance to help you migrate and launch quickly.",
            },
            {
              name: "Live Chat & WhatsApp Support",
              included: true,
              description:
                "Instant responses through chat and WhatsApp messaging.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description:
                "Access detailed guides, FAQs, and video tutorials anytime.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description:
                "Secure shell access for advanced server management.",
            },
            {
              name: "Git Integration",
              included: true,
              description: "Deploy and manage code with built-in Git support.",
            },
            {
              name: "WP-CLI Support",
              included: true,
              description: "Manage WordPress sites with command-line tools.",
            },
            {
              name: "Custom Cron Jobs",
              included: true,
              description: "Automate repetitive tasks with custom scheduling.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description:
                "Switch between PHP versions for compatibility and performance.",
            },
            {
              name: "Staging Environments",
              included: true,
              description:
                "Test changes safely before deploying to production.",
            },
            {
              name: "Database Optimization Tools",
              included: true,
              description: "Optimize and maintain MySQL databases with ease.",
            },
          ],
        },
      ],
    },
    // {
    //   id: "pro",
    //   name: "Pro",
    //   icon: "/assets/pricing/pro.svg",
    //   monthlyPrice: 99.99,
    //   yearlyPrice: 54.99,
    //   monthlyPrevPrice: ,
    //   yearlyPrevPrice: ,
    //   offer: ,
    //   currency: "$",
    //   ctaText: "Choose Plan",
    //   renewalText: "$49.99/Monthly when you renew",
    //   features: [
    //     {
    //       title: "Features",
    //       features: [
    //         {
    //           name: "300GB NVMe SSD Storage",
    //           included: true,
    //           description: "High-speed NVMe SSD storage for ultra-fast website performance.",
    //         },
    //         {
    //           name: "50 Websites",
    //           included: true,
    //           description: "Host up to 50 websites under one plan without extra cost.",
    //         },
    //         {
    //           name: "Unmetered Bandwidth",
    //           included: true,
    //           description: "Unlimited traffic with no bandwidth restrictions.",
    //         },
    //         {
    //           name: "Free SSL Certificate (Lifetime)",
    //           included: true,
    //           description: "Keep all websites secure with lifetime SSL encryption.",
    //         },
    //         {
    //           name: "8 vCPU Cores",
    //           included: true,
    //           description: "Powerful virtual CPU cores for high-traffic websites and applications.",
    //         },
    //         {
    //           name: "20 GB RAM",
    //           included: true,
    //           description: "High memory allocation for resource-intensive applications.",
    //         },
    //         {
    //           name: "Daily Automated Backups (30 Days Retention)",
    //           included: true,
    //           description: "Automatic daily backups stored for up to 30 days for data safety.",
    //         },
    //         {
    //           name: "1-Click App Installer",
    //           included: true,
    //           description: "Easily install WordPress and 400+ apps in a single click.",
    //         },
    //         {
    //           name: "Global CDN Integration (Cloudflare Enterprise)",
    //           included: true,
    //           description: "Delivers content faster worldwide with enterprise-level CDN integration.",
    //         },
    //         {
    //           name: "100% Uptime SLA",
    //           included: true,
    //           description: "Guaranteed network uptime backed by a Service Level Agreement.",
    //         },
    //         {
    //           name: "15-Minute Guaranteed Email Response",
    //           included: true,
    //           description: "Priority support with responses guaranteed within 15 minutes.",
    //         },
    //         {
    //           name: "30-Day Money-Back Guarantee",
    //           included: true,
    //           description: "Risk-free hosting with a full refund if cancelled within 30 days.",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Upgraded Technical Specifications",
    //       features: [
    //         {
    //           name: "8 vCPU Cores",
    //           included: true,
    //           description: "Advanced CPU power for handling high traffic and workloads.",
    //         },
    //         {
    //           name: "20 GB RAM",
    //           included: true,
    //           description: "Enhanced memory capacity for faster and stable operations.",
    //         },
    //         {
    //           name: "100 MB/s I/O Speed",
    //           included: true,
    //           description: "Fast input/output speeds for quicker file and database access.",
    //         },
    //         {
    //           name: "100 Entry Processes",
    //           included: true,
    //           description: "Supports up to 100 concurrent PHP processes at once.",
    //         },
    //         {
    //           name: "PHP Memory Limit: 4096 MB",
    //           included: true,
    //           description: "Increased PHP memory allocation for demanding applications.",
    //         },
    //         {
    //           name: "1,500,000 Inodes Limit",
    //           included: true,
    //           description: "Manage up to 1,500,000 files and directories efficiently.",
    //         },
    //         {
    //           name: "Multiple PHP Versions",
    //           included: true,
    //           description: "Switch between PHP versions for better compatibility.",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Advanced Security Features (Premium)",
    //       features: [
    //         {
    //           name: "Imunify360 Security Suite (Advanced)",
    //           included: true,
    //           description: "AI-powered malware protection with proactive threat detection.",
    //         },
    //         {
    //           name: "DDoS Protection (Enterprise-Level)",
    //           included: true,
    //           description: "Enterprise-level protection against large-scale DDoS attacks.",
    //         },
    //         {
    //           name: "Web Application Firewall (WAF)",
    //           included: true,
    //           description: "Blocks malicious requests and protects web applications.",
    //         },
    //         {
    //           name: "Brute Force Protection",
    //           included: true,
    //           description: "Prevents unauthorized login attempts and password attacks.",
    //         },
    //         {
    //           name: "Two-Factor Authentication (2FA)",
    //           included: true,
    //           description: "Adds an extra layer of security to your accounts.",
    //         },
    //         {
    //           name: "Real-Time Malware Scanning & Auto-Healing",
    //           included: true,
    //           description: "Scans for malware and automatically fixes issues in real-time.",
    //         },
    //         {
    //           name: "Hotlink Protection",
    //           included: true,
    //           description: "Prevents other sites from using your images and resources.",
    //         },
    //         {
    //           name: "Free SSL Certificate (Lifetime)",
    //           included: true,
    //           description: "Protect data with free SSL encryption for life.",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Performance Enhancements",
    //       features: [
    //         {
    //           name: "100% Network Uptime SLA",
    //           included: true,
    //           description: "Guaranteed network uptime backed by a Service Level Agreement.",
    //         },
    //         {
    //           name: "Cloud Load Balancing",
    //           included: true,
    //           description: "Distributes traffic across multiple servers for maximum availability.",
    //         },
    //         {
    //           name: "AI-Powered Auto-Scaling",
    //           included: true,
    //           description: "Automatically adjusts server resources based on traffic and usage patterns.",
    //         },
    //         {
    //           name: "Global CDN Integration (Cloudflare Enterprise)",
    //           included: true,
    //           description: "Delivers content faster worldwide with enterprise-level CDN integration.",
    //         },
    //         {
    //           name: "Optimized for Google Core Web Vitals",
    //           included: true,
    //           description: "Ensures top performance scores for SEO and user experience.",
    //         },
    //         {
    //           name: "Real-Time Resource Monitoring",
    //           included: true,
    //           description: "Monitor CPU, memory, and bandwidth usage with live analytics.",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Premium Support & Assistance",
    //       features: [
    //         {
    //           name: "24/7 Priority Cloud Hosting Expert Support",
    //           included: true,
    //           description: "Priority support from certified cloud hosting experts around the clock.",
    //         },
    //         {
    //           name: "15-Minute Guaranteed Email Response",
    //           included: true,
    //           description: "Priority support with email responses within 15 minutes.",
    //         },
    //         {
    //           name: "Step-by-Step Advanced Onboarding",
    //           included: true,
    //           description: "Guided onboarding for faster migration and setup.",
    //         },
    //         {
    //           name: "Live Chat & WhatsApp Support",
    //           included: true,
    //           description: "Instant support via chat and WhatsApp messaging.",
    //         },
    //         {
    //           name: "Comprehensive Knowledge Base & Tutorials",
    //           included: true,
    //           description: "Access detailed guides, FAQs, and tutorials anytime.",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Developer-Friendly Features",
    //       features: [
    //         {
    //           name: "SSH Access",
    //           included: true,
    //           description: "Secure shell access for advanced server management.",
    //         },
    //         {
    //           name: "Git Integration",
    //           included: true,
    //           description: "Deploy and manage code with built-in Git support.",
    //         },
    //         {
    //           name: "WP-CLI Support",
    //           included: true,
    //           description: "Manage WordPress sites with command-line tools.",
    //         },
    //         {
    //           name: "Custom Cron Jobs",
    //           included: true,
    //           description: "Automate repetitive tasks with custom scheduling.",
    //         },
    //         {
    //           name: "Multiple PHP Versions",
    //           included: true,
    //           description: "Switch between PHP versions for compatibility and performance.",
    //         },
    //         {
    //           name: "Staging Environments",
    //           included: true,
    //           description: "Test changes safely before deploying to production.",
    //         },
    //         {
    //           name: "Database Optimization Tools",
    //           included: true,
    //           description: "Optimize and maintain MySQL databases with ease.",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      id: "ultimate",
      name: "Ultimate",
      icon: "/assets/pricing/ultimate.svg",
      monthlyPrice: 149.99,
      yearlyPrice: 79.99,
      monthlyPrevPrice: 326.99,
      yearlyPrevPrice: 359.88,
      renewalText: "$49.99/Monthly when you renew",
      monthlyPriceBdt: 17998.8,
      yearlyPriceBdt: 9598.8,
      monthlyPrevPriceBdt: 39238.8,
      yearlyPrevPriceBdt: 43185.6,
      renewalTextBdt: "৳5998.8/Monthly when you renew",
      offer: 46,
      currency: "$",
      ctaText: "Choose Plan",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "Unlimited NVMe SSD Storage",
              included: true,
              description:
                "High-speed NVMe SSD storage with no limits for ultra-fast performance.",
            },
            {
              name: "Unlimited Websites",
              included: true,
              description:
                "Host an unlimited number of websites under one plan.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Unlimited traffic with no bandwidth restrictions.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description:
                "Keep all websites secure with lifetime SSL encryption.",
            },
            {
              name: "12 vCPU Cores",
              included: true,
              description:
                "Powerful virtual CPU cores for high-traffic websites and applications.",
            },
            {
              name: "32 GB RAM",
              included: true,
              description:
                "High memory allocation for resource-intensive applications.",
            },
            {
              name: "Daily Automated Backups (45 Days Retention)",
              included: true,
              description:
                "Automatic daily backups stored for up to 45 days for maximum data safety.",
            },
            {
              name: "1-Click App Installer",
              included: true,
              description:
                "Easily install WordPress and 400+ apps in a single click.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description:
                "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "100% Uptime SLA",
              included: true,
              description:
                "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description:
                "Priority support with responses guaranteed within 15 minutes.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description:
                "Risk-free hosting with a full refund if cancelled within 30 days.",
            },
          ],
        },
        {
          title: "Upgraded Technical Specifications",
          features: [
            {
              name: "12 vCPU Cores",
              included: true,
              description:
                "Advanced CPU power for handling enterprise-level traffic and workloads.",
            },
            {
              name: "32 GB RAM",
              included: true,
              description:
                "Enhanced memory capacity for faster and stable operations.",
            },
            {
              name: "150 MB/s I/O Speed",
              included: true,
              description:
                "Ultra-fast input/output speeds for quicker file and database access.",
            },
            {
              name: "150 Entry Processes",
              included: true,
              description:
                "Supports up to 150 concurrent PHP processes at once.",
            },
            {
              name: "PHP Memory Limit: 6144 MB",
              included: true,
              description:
                "Increased PHP memory allocation for demanding enterprise applications.",
            },
            {
              name: "2,000,000 Inodes Limit",
              included: true,
              description:
                "Manage up to 2,000,000 files and directories efficiently.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description:
                "Switch between PHP versions for better compatibility.",
            },
          ],
        },
        {
          title: "Advanced Security Features (Enterprise)",
          features: [
            {
              name: "Imunify360 Security Suite (Enterprise)",
              included: true,
              description:
                "Enterprise-grade AI-powered malware protection with proactive threat detection.",
            },
            {
              name: "DDoS Protection (Enterprise-Level)",
              included: true,
              description:
                "Enterprise-level protection against large-scale DDoS attacks.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description:
                "Blocks malicious requests and protects web applications.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description:
                "Prevents unauthorized login attempts and password attacks.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Adds an extra layer of security to your accounts.",
            },
            {
              name: "Real-Time Malware Scanning & Auto-Healing",
              included: true,
              description:
                "Scans for malware and automatically fixes issues in real-time.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description:
                "Prevents other sites from using your images and resources.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description: "Protect data with free SSL encryption for life.",
            },
          ],
        },
        {
          title: "Performance Enhancements",
          features: [
            {
              name: "100% Network Uptime SLA",
              included: true,
              description:
                "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "Cloud Load Balancing",
              included: true,
              description:
                "Distributes traffic across multiple servers for maximum availability.",
            },
            {
              name: "AI-Powered Auto-Scaling",
              included: true,
              description:
                "Automatically adjusts server resources based on traffic and usage patterns.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description:
                "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "Optimized for Google Core Web Vitals",
              included: true,
              description:
                "Ensures top performance scores for SEO and user experience.",
            },
            {
              name: "Real-Time Resource Monitoring",
              included: true,
              description:
                "Monitor CPU, memory, and bandwidth usage with live analytics.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 Enterprise Cloud Hosting Expert Support",
              included: true,
              description:
                "Priority enterprise-level support from certified cloud hosting experts around the clock.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description:
                "Priority support with email responses within 15 minutes.",
            },
            {
              name: "Dedicated Account Manager",
              included: true,
              description:
                "A dedicated account manager to help with all hosting needs.",
            },
            {
              name: "Live Chat & WhatsApp Support",
              included: true,
              description: "Instant support via chat and WhatsApp messaging.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description:
                "Access detailed guides, FAQs, and tutorials anytime.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description:
                "Secure shell access for advanced server management.",
            },
            {
              name: "Git Integration",
              included: true,
              description: "Deploy and manage code with built-in Git support.",
            },
            {
              name: "WP-CLI Support",
              included: true,
              description: "Manage WordPress sites with command-line tools.",
            },
            {
              name: "Custom Cron Jobs",
              included: true,
              description: "Automate repetitive tasks with custom scheduling.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description:
                "Switch between PHP versions for compatibility and performance.",
            },
            {
              name: "Staging Environments",
              included: true,
              description:
                "Test changes safely before deploying to production.",
            },
            {
              name: "Database Optimization Tools",
              included: true,
              description: "Optimize and maintain MySQL databases with ease.",
            },
          ],
        },
      ],
    },
  ],
};
