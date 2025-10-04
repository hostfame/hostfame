import { PricingData } from "@/types/pricing.types";

export const webHostingPricingBdtData: PricingData = {
  title: "Choose Your Perfect Plan",
  yearlyDiscountBdt: 72,
  plans: [
    {
      id: "starter",
      name: "Starter",
      description:
        "Perfect for individuals and personal blogs who want to get online quickly.",
      icon: "/assets/pricing/starter-42.svg",
      hrefBdt:
        "https://my.hostfame.com/index.php?rp=/store/web-hosting-bd/starter",
      currency: "৳",
      monthlyPriceBdt: 299,
      yearlyPriceBdt: 999,
      monthlyPrevPriceBdt: 299,
      yearlyPrevPriceBdt: 3588,
      offerBdt: 72,
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
              included: true
              // description: "Fast NVMe storage designed for personal sites or small projects. Ensures quick load times and smooth performance.",
            },
            {
              name: "1 Websites Hosted",
              included: true,
              description:
                "Host a single website with full speed and resources dedicated to it. Perfect for personal sites, blogs, or a static website."
            },
            {
              name: "1 Email Account",
              included: true,
              description:
                "You can create 1 custom email address with your domain. Email sending limits apply as per our fair use policy and terms of service."
            },
            {
              name: "100 GB Bandwidth",
              included: true,
              description:
                "Your plan includes 100 GB of monthly bandwidth for website traffic, file downloads, and data transfers. Enough for small site with steady visitors."
            },
            {
              name: "1 MySQL Databases",
              included: true
              // description: "Set up one MySQL database for WordPress, blogs, or CMS apps. Easy to configure and manage.",
            },
            {
              name: "1 Days Backup Retention",
              included: true,
              description:
                "Your website data is backed up daily and stored for 1 day. You can restore the latest version if something goes wrong."
            },
            {
              name: "Basic Antivirus Protection",
              included: true
              // description: "Baseline malware protection included to help safeguard your site against common threats.",
            },
            {
              name: "Free Migration (1 Site)",
              included: true
              // description: "We’ll transfer one existing website to our platform at no cost, making setup hassle-free.",
            }
          ]
        },
        {
          title: "Server Features",
          features: [
            {
              name: "1 CPU Core",
              included: true
              // description: "One dedicated core for consistent performance. Ideal for lightweight workloads and single sites.",
            },
            {
              name: "512 MB RAM",
              included: true
              // description: "Entry-level memory allocation that supports basic websites, blogs, or landing pages.",
            },
            {
              name: "20 IOPS",
              included: true
              // description: "Handles basic input/output operations for small-scale sites with light traffic.",
            },
            {
              name: "HTTP/3 Compression",
              included: true
              // description: "Boost website speed with modern protocol support and data compression technology.",
            },
            {
              name: "SSH Access",
              included: false
              // description: "SSH is not available on this plan. Upgrade to Pro or Business for advanced developer tools.",
            },
            {
              name: "1-Click WP Installer",
              included: true
              // description: "Install WordPress instantly and start building your site in just a few minutes.",
            },
            {
              name: "2FA Authentication",
              included: true
              // description: "Protect your account with secure two-factor authentication for safer logins.",
            },
            {
              name: "Basic DNS Zone Editor",
              included: true
              // description: "Easily update and manage common DNS records such as A, MX, and CNAME.",
            },
            {
              name: "99.9% SLA",
              included: true,
              description:
                "We guarantee 99.9% uptime backed by our Service Level Agreement. That means your website stays online and reliable almost all the time."
            },
            {
              name: "PHP Included",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Litespeed Cache ( Redis, Memcache)",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Single Location Hosting",
              included: true,
              description:
                "Your website is hosted in one data center location. Best suited if most of your visitors are from a specific region."
            }
          ]
        },
        {
          title: "Mail Features",
          features: [
            // {
            //   name: "1 Mail Account",
            //   included: true,
            //   // description: "Includes a single mailbox with webmail access. Perfect for individuals or hobby sites.",
            // },
            {
              name: "Webmail",
              included: true
              // description: "Check your emails on any device with our easy-to-use webmail service.",
            },
            {
              name: "Abuse or Spam Guarantee",
              included: false
              // description: "This plan does not include enterprise-level mail deliverability guarantees or abuse protection.",
            },
            {
              name: "SpamAssassin",
              included: false
              // description: "Advanced spam filtering is excluded. Upgrade to higher plans for stronger protections.",
            },
            {
              name: "Email Forwarding",
              included: false
              // description: "Email forwarding is not included with this plan. Available with Pro and Business plans.",
            }
          ]
        },
        {
          title: "Developer Tools",
          features: [
            {
              name: "Managed PHP version (8.2)",
              included: true
              // description: "SSH is not available on this plan. Upgrade to Pro or Business for advanced developer tools.",
            },
            {
              name: "SSH and SFTP Access",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "PostgreSQL Databases",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "FTP Accounts",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Terminal Access",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Security Tools",
          features: [
            {
              name: "Robust Power Redundancy",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Raid-10 Included to Hardware",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Unique Account Isolation",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Server Monitoring",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Anti-Hack Systems with CPGuard",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Firewall and DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "1 TBPS Server Level DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "On-Demand Backups (7 Days)",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Support System",
          features: [
            {
              name: "24/7 LiveChat Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 WhatsApp Support ",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Call Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "30-Minute Ticket Reply",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Proactive Email Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Advanced Priority Support",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        }
      ]
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
              included: true
              // description: "Plenty of high-speed storage for blogs, small stores, or portfolio sites. Handles media and backups easily.",
            },
            {
              name: "5 Websites Hosted",
              included: true,
              description:
                "Run up to 5 websites under one hosting plan. Great for freelancers, small businesses, or anyone managing multiple projects."
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description:
                "Create unlimited custom email addresses with your domain, like info@yourbusiness.com or sales@yourbusiness.com. Sending limits still apply as per our fair use policy and terms."
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description:
                "Enjoy unlimited monthly bandwidth, so your website can handle as many visitors and data transfers as needed without extra charges."
            },
            {
              name: "Unlimited MySQL Databases",
              included: true
              // description: "Create as many databases as needed for apps, blogs, and multi-site installations.",
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description:
                "Your website is backed up daily, and each backup is kept for 7 days. Restore any version from the past week with just one click."
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true
              // description: "Comprehensive security suite to protect your sites from malware and vulnerabilities.",
            },
            {
              name: "Free Migration (Up to 5 Sites)",
              included: true
              // description: "We’ll transfer up to 5 existing websites for free, with minimal downtime or hassle.",
            }
          ]
        },
        {
          title: "Server Features",
          features: [
            {
              name: "2 CPU Cores",
              included: true
              // description: "Double the compute power to handle dynamic sites, small e-commerce stores, or apps.",
            },
            {
              name: "2 GB RAM",
              included: true
              // description: "Enhanced memory allocation for heavier themes, plugins, and caching systems.",
            },
            {
              name: "100 IOPS",
              included: true
              // description: "Increased disk operations capacity for smoother performance and reliability.",
            },
            {
              name: "HTTP/3, Brotli, Compression",
              included: true
              // description: "Modern speed optimizations to ensure faster page loads and improved web experience.",
            },
            {
              name: "SSH Access",
              included: true
              // description: "Enables developers to manage files, deployments, and scripts securely from the command line.",
            },
            {
              name: "1-Click WP Installer",
              included: true
              // description: "Set up WordPress quickly and start building without technical complexity.",
            },
            {
              name: "2FA Authentication",
              included: true
              // description: "Strengthen account security with two-factor login protection.",
            },
            {
              name: "Advanced DNS Manager",
              included: true
              // description: "Gain full control over DNS configurations with an advanced management panel.",
            },
            {
              name: "99.9% SLA",
              included: true,
              description:
                "We guarantee 99.9% uptime backed by our Service Level Agreement. That means your website stays online and reliable almost all the time."
            },
            {
              name: "PHP + Laravel + Node + Python",
              included: true
              // description: "Supports multiple runtimes and frameworks for developers working with modern apps.",
            },
            {
              name: "Litespeed Cache ( Redis, Memcache)",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Multiple Hosting Locations",
              included: true,
              description:
                "Choose your preferred hosting location from 7 global data centers. This helps you keep your site closer to your main audience for faster performance."
            }
          ]
        },
        {
          title: "Mail Features",
          features: [
            // {
            //   name: "Unlimited Email Accounts",
            //   included: true,
            //   description: "No limits on inboxes, create accounts for teams, staff, or departments easily.",
            // },
            {
              name: "Webmail, Outlook Integration",
              included: true
              // description: "Check emails on webmail or link to Outlook and other desktop clients.",
            },
            {
              name: "Mail Delivery Guarantee",
              included: true
              // description: "Ensure reliable inbox delivery with provider-backed service-level guarantees.",
            },
            {
              name: "SpamAssassin",
              included: true
              // description: "Advanced spam filtering blocks junk mail and phishing attempts effectively.",
            },
            {
              name: "Email Forwarding",
              included: true
              // description: "Set up custom forwarding and aliases to manage team communication better.",
            }
          ]
        },
        {
          title: "Developer Tools",
          features: [
            {
              name: "Managed PHP version (8.2)",
              included: true
              // description: "SSH is not available on this plan. Upgrade to Pro or Business for advanced developer tools.",
            },
            {
              name: "SSH and SFTP Access",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "PostgreSQL Databases",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "FTP Accounts",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Terminal Access",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Security Tools",
          features: [
            {
              name: "Robust Power Redundancy",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Raid-10 Included to Hardware",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Unique Account Isolation",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Server Monitoring",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Anti-Hack Systems with CPGuard",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Firewall and DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "1 TBPS Server Level DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "On-Demand Backups (7 Days)",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Support System",
          features: [
            {
              name: "24/7 LiveChat Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 WhatsApp Support ",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Call Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "30-Minute Ticket Reply",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Proactive Email Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Advanced Priority Support",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        }
      ]
    },
    {
      id: "business",
      name: "Business",
      description:
        "Enterprise hosting for large-scale websites and mission-critical applications.",
      icon: "/assets/pricing/ultimate.svg",
      hrefBdt:
        "https://my.hostfame.com/index.php?rp=/store/web-hosting-bd/business",
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
              included: true
              // description:"Enterprise-grade storage for heavy sites, apps, or media content. Fast, reliable, and secure."
            },
            {
              name: "20 Website Hosted",
              included: true,
              description:
                "Host up to 20 websites on a single account with dedicated speed and storage. Perfect for agencies, developers, or growing businesses managing multiple sites."
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description:
                "Create unlimited custom email addresses with your domain, like info@yourbusiness.com or sales@yourbusiness.com. Sending limits still apply as per our fair use policy and terms."
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description:
                "Enjoy unlimited monthly bandwidth, so your website can handle as many visitors and data transfers as needed without extra charges."
            },
            {
              name: "Unlimited MySQL Databases",
              included: true
              // description: "Create unlimited databases for apps, content systems, and client projects."
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description:
                "Your website is backed up daily, and each backup is kept for 7 days. Restore any version from the past week with just one click."
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true
              // description: "Advanced malware scanning and threat protection to secure mission-critical sites."
            },
            {
              name: "Free Migration (Unlimited)",
              included: true
              // description: "Unlimited site transfers included. Move all your websites to us with expert support."
            }
          ]
        },
        {
          title: "Server Features",
          features: [
            {
              name: "4 CPU Cores",
              included: true
              // description: "Robust compute power for enterprise-level workloads, complex apps, and heavy traffic."
            },
            {
              name: "4 GB RAM",
              included: true
              // description: "Plenty of memory for demanding sites, caching, and intensive plugins or frameworks."
            },
            {
              name: "200 IOPS",
              included: true
              // description: "Handles large data loads with high disk operation speeds for smooth performance."
            },
            {
              name: "HTTP/3, Brotli + WPAccelerator",
              included: true
              // description: "High-performance stack with accelerator for maximum site speed and optimization."
            },
            {
              name: "SSH Access",
              included: true
              // description: "Full command-line access for developers to deploy and manage advanced projects."
            },
            {
              name: "1-Click WP Installer",
              included: true
              // description: "Install WordPress instantly and launch enterprise projects quickly."
            },
            {
              name: "2FA Authentication",
              included: true
              // description: "Protect business-critical accounts with secure two-factor login systems."
            },
            {
              name: "Advanced DNS Manager + DNSSEC",
              included: true
              // description: "Secure, verifiable DNS management with DNSSEC support for enterprise-level reliability."
            },
            {
              name: "99.9% SLA + SLA Credit Guarantee",
              included: true,
              description:
                "We guarantee 99.9% uptime under our Service Level Agreement. If downtime ever exceeds this, you’ll receive hosting credits as compensation under our SLA Credit Guarantee."
            },
            {
              name: "PHP + Laravel + Python + Node.js",
              included: true
              // description: "Run multiple frameworks and languages. Ideal for developers with diverse needs."
            },
            {
              name: "Litespeed Cache ( Redis, Memcache)",
              included: true
              // description: "We guarantee 99.9% uptime under our Service Level Agreement. If downtime ever exceeds this, you’ll receive hosting credits as compensation under our SLA Credit Guarantee."
            },
            {
              name: "Multiple Hosting Locations",
              included: true,
              description:
                "Choose your preferred hosting location from 7 global data centers. This helps you keep your site closer to your main audience for faster performance."
            }
          ]
        },
        {
          title: "Mail Features",
          features: [
            // {
            //   name: "Unlimited Email Accounts",
            //   included: true,
            //   description:
            //     "Unlimited accounts for staff, clients, or departments. No mailbox restrictions."
            // },
            {
              name: "Webmail, Outlook Integration",
              included: true
              // description: "Access emails via browser or sync with Outlook and other mail clients easily."
            },
            {
              name: "Mail Delivery Guarantee",
              included: true
              // description: "Ensure timely, reliable email delivery backed by provider-level SLAs."
            },
            {
              name: "SpamAssassin",
              included: true
              // description: "Advanced filtering protects against spam, phishing, and junk mail threats."
            },
            {
              name: "Email Forwarding",
              included: true
              // description: "Easily forward emails and create aliases for streamlined communication."
            }
          ]
        },
        {
          title: "Developer Tools",
          features: [
            {
              name: "Managed PHP version (8.2)",
              included: true
              // description: "SSH is not available on this plan. Upgrade to Pro or Business for advanced developer tools.",
            },
            {
              name: "SSH and SFTP Access",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "PostgreSQL Databases",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "FTP Accounts",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Terminal Access",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Security Tools",
          features: [
            {
              name: "Robust Power Redundancy",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Raid-10 Included to Hardware",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Unique Account Isolation",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Server Monitoring",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Anti-Hack Systems with CPGuard",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Firewall and DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "1 TBPS Server Level DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "On-Demand Backups (7 Days)",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Support System",
          features: [
            {
              name: "24/7 LiveChat Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 WhatsApp Support ",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Call Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "30-Minute Ticket Reply",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Proactive Email Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Advanced Priority Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        }
      ]
    }
  ]
};

export const wordpressHostingBdtPricingData: PricingData = {
  title: "Plans Built for WordPress",
  yearlyDiscountBdt: 25,
  plans: [
    {
      id: "starter",
      name: "Starter",
      description:
        "For bloggers, freelancers, and small businesses starting their first WordPress site.",
      href: "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting/starter",
      hrefBdt:
        "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting-bd/basic",
      icon: "/assets/pricing/basic.svg",
      currency: "৳",
      guarantee: "30 Days Money Back guarantee",
      monthlyPriceBdt: 299,
      yearlyPriceBdt: 2691,
      monthlyPrevPriceBdt: 299,
      yearlyPrevPriceBdt: 3588,
      renewalTextMonthlyBdt: "Renews at ৳3,588/year",
      renewalTextYearlyBdt: "Renews at ৳3,588/year",
      offer: 90,
      offerBdt: 25,
      ctaText: "Choose Plan",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "20 GB NVMe Storage",
              included: true,
              // description: "Fast NVMe storage delivers ultra-low latency and high IOPS so pages and dashboards feel snappy. 75GB comfortably fits multiple WordPress installs with media and backups. Plenty of room for staging copies and asset libraries."
            },
            {
              name: "1 Websites Hosted",
              included: true,
              description:
                "Host a single website with full speed and resources dedicated to it. Perfect for personal sites, blogs, or a static website."
            },
            {
              name: "1 Email Account",
              included: true,
              description:
                "You can create 1 custom email address with your domain. Email sending limits apply as per our fair use policy and terms of service."
            },
            {
              name: "100 GB Bandwidth",
              included: true,
              description:
                "Your plan includes 100 GB of monthly bandwidth for website traffic, file downloads, and data transfers. Enough for small site with steady visitors."
            },
            {
              name: "1 MySQL Databases",
              included: true
              // description: "Create as many branded mailboxes as your teams need, sales@, hr@, support@, and more. Access via webmail, IMAP/POP, and SMTP across all major clients. Scales cleanly as departments and headcount grow."
            },
            {
              name: "1 Days Backup Retention",
              included: true,
              description:
                "Your website data is backed up daily and stored for 1 day. You can restore the latest version if something goes wrong."
            },
            {
              name: "Basic Antivirus Protection",
              included: true
              // description: "Provision WordPress with a guided wizard, no manual databases or config. Secure defaults applied during setup. You’ll be publishing in minutes."
            },
            {
              name: "Free Migration (1 Site)",
              included: true
              // description: "Network-layer mitigation absorbs volumetric attacks while an app firewall filters malicious WP requests. Helps maintain availability and blocks common exploit patterns. Rules are updated to adapt to new threats."
            }
            // {
            //   name: "LiteSpeed Web Server + LSCache",
            //   included: true,
            //   description:
            //     "Event-driven LiteSpeed handles heavy concurrency efficiently, while LSCache delivers server-level page caching. Together they cut TTFB and improve Core Web Vitals. Automatic cache purges keep content fresh after edits."
            // },
            // {
            //   name: "AI-Driven WordPress Optimizer",
            //   included: true,
            //   description:
            //     "Analyzes your site to suggest caching, database, and image tweaks. Applies safe optimizations to improve load times with minimal effort. Generates reports so you can track gains over time."
            // },
            // {
            //   name: "30-Minute Guaranteed Email Response",
            //   included: true,
            //   description:
            //     "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            // },
            // {
            //   name: "30-Day Money-Back Guarantee",
            //   included: true,
            //   description:
            //     "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            // }
          ]
        },
        {
          title: "WordPress Features",
          features: [
            {
              name: "WordPress Auto Updates",
              included: true
              // description: "More parallel compute for PHP workers and background tasks. Helps dynamic pages, carts, and checkouts stay responsive under load. A good fit for WooCommerce and heavier plugins."
            },
            {
              name: "Pre-configured LiteSpeed Cache",
              included: true
              // description: "Extra memory for visual builders, object caching, and imports. Reduces the chance of out-of-memory errors during heavy admin work. Comfortable for medium sites and small stores."
            },
            {
              name: "WordPress Staging Environment",
              included: true
              // description: "Increased disk throughput for busy sites and larger uploads. Speeds up backups, restores, and media processing. Helps keep queues short during peak times."
            },
            {
              name: "WordPress Vulnerability Patching",
              included: true,
              description:
                "We automatically patch known WordPress vulnerabilities to keep your site safe. This ensures plugins, themes, and core files are always protected without waiting for manual updates."
            },
            {
              name: "Daily Malware Scan ",
              included: true
              // description: "More headroom for complex page builders and analytics suites. Reduces failures on big imports and image optimizations. Great for plugin-heavy WordPress stacks."
            },
            {
              name: "Pre-installed WP-CLI Access",
              included: true,
              description: "Save time with WP-CLI pre-installed. Perform bulk actions, updates, and maintenance tasks instantly, without relying on the WordPress dashboard."
            }
          ]
        },
        {
          title: "Server Features",
          features: [
            {
              name: "1 CPU Core",
              included: true
              // description: "Server-level page caching with smart purge rules for near-instant loads. Includes image optimization, CSS/JS minify, and QUIC.cloud integration. Works best with LiteSpeed Web Server."
            },
            {
              name: "512 MB RAM",
              included: true
              // description: "Applies core and plugin updates automatically to close security gaps quickly. Minor releases are seamless; major updates can be deferred. Backups allow safe rollbacks if needed."
            },
            {
              name: "20 IOPS",
              included: true
              // description: "Clone your site into a staging copy to test updates and changes safely. Push changes live when verified, no manual migrations. Great for experimenting with themes and builders."
            },
            {
              name: "HTTP/3 Compression",
              included: true
              // description: "Surfaces actionable recommendations for metadata, images, and critical CSS/JS. Prioritizes changes that move Core Web Vitals and search visibility. Reports show before/after impact."
            },
            {
              name: "SSH Access",
              included: false
              // description: "White-glove transfer of files and database with minimal downtime. Coordinated cutover windows and verification checklists. Ideal for time-sensitive launches."
            },
            {
              name: "1-Click WP Installer",
              included: true
              // description: "Surfaces actionable recommendations for metadata, images, and critical CSS/JS. Prioritizes changes that move Core Web Vitals and search visibility. Reports show before/after impact."
            },
            {
              name: "Single Location Hosting",
              included: true,
              description:
                "Your website is hosted in one data center location. Best suited if most of your visitors are from a specific region."
            }
          ]
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "Webmail",
              included: true
              // description: "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              name: "Abuse or Spam Guarantee",
              included: false
              // description: "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              name: "SpamAssassin",
              included: false
              // description: "Continuously monitors new and modified files for signs of infection. Suspect items are quarantined automatically to prevent spread. Detailed alerts help you remediate quickly."
            },
            {
              name: "Email Forwarding",
              included: false
              // description: "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            }
          ]
        },
        {
          title: "Developer Tools",
          features: [
            {
              name: "Managed PHP version (8.2)",
              included: true
              // description: "SSH is not available on this plan. Upgrade to Pro or Business for advanced developer tools.",
            },
            {
              name: "SSH and SFTP Access",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "PostgreSQL Databases",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "FTP Accounts",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Terminal Access",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Security Tools",
          features: [
            {
              name: "Robust Power Redundancy",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Raid-10 Included to Hardware",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Unique Account Isolation",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Server Monitoring",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Anti-Hack Systems with CPGuard",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Firewall and DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "1 TBPS Server Level DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "On-Demand Backups (7 Days)",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Support System",
          features: [
            {
              name: "24/7 LiveChat Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 WhatsApp Support ",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Call Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "30-Minute Ticket Reply",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Proactive Email Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Advanced Priority Support",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        }
      ]
    },
    {
      id: "pro",
      name: "Pro",
      description:
        "Ideal for growing blogs, startups, and freelancers managing multiple sites.",
      href: "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting/pro",
      hrefBdt:
        "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting-bd/starter",
      icon: "/assets/pricing/starter-42.svg",
      currency: "$",
      monthlyPrice: 24.99,
      yearlyPrice: 3.99,
      monthlyPrevPrice: 24.99,
      yearlyPrevPrice: 5.99,
      renewalTextMonthly: "$24.99/Monthly when you renew",
      renewalTextYearly: "$5.99/Monthly when you renew",
      guarantee: "30 Days Money Back guarantee",
      monthlyPriceBdt: 449,
      yearlyPriceBdt: 4041,
      monthlyPrevPriceBdt: 449,
      yearlyPrevPriceBdt: 5388,
      renewalTextMonthlyBdt: "Renews at ৳5,388/year",
      renewalTextYearlyBdt: "Renews at ৳5,388/year",
      offer: 90,
      offerBdt: 25,
      isPopular: true,
      ctaText: "Choose Plan",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "50 GB NVMe Storage",
              included: true,
              // description: "Fast NVMe storage delivers ultra-low latency and high IOPS so pages and dashboards feel snappy. 75GB comfortably fits multiple WordPress installs with media and backups. Plenty of room for staging copies and asset libraries."
            },
            {
              name: "5 Websites Hosted",
              included: true,
              description: "Run up to 5 websites under one hosting plan. Great for freelancers, small businesses, or anyone managing multiple projects."
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Create unlimited custom email addresses with your domain, like info@yourbusiness.com or sales@yourbusiness.com. Sending limits still apply as per our fair use policy and terms."
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Enjoy unlimited monthly bandwidth, so your website can handle as many visitors and data transfers as needed without extra charges."
            },
            {
              name: "Unlimited MySQL Databases",
              included: true
              // description: "Create as many branded mailboxes as your teams need, sales@, hr@, support@, and more. Access via webmail, IMAP/POP, and SMTP across all major clients. Scales cleanly as departments and headcount grow."
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description: "Your website is backed up daily, and each backup is kept for 7 days. Restore any version from the past week with just one click."
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true
              // description: "Provision WordPress with a guided wizard, no manual databases or config. Secure defaults applied during setup. You’ll be publishing in minutes."
            },
            {
              name: "Free Migration (Up to 5 Sites)",
              included: true
              // description: "Network-layer mitigation absorbs volumetric attacks while an app firewall filters malicious WP requests. Helps maintain availability and blocks common exploit patterns. Rules are updated to adapt to new threats."
            }
            // {
            //   name: "LiteSpeed Web Server + LSCache",
            //   included: true,
            //   description:
            //     "Event-driven LiteSpeed handles heavy concurrency efficiently, while LSCache delivers server-level page caching. Together they cut TTFB and improve Core Web Vitals. Automatic cache purges keep content fresh after edits."
            // },
            // {
            //   name: "AI-Driven WordPress Optimizer",
            //   included: true,
            //   description:
            //     "Analyzes your site to suggest caching, database, and image tweaks. Applies safe optimizations to improve load times with minimal effort. Generates reports so you can track gains over time."
            // },
            // {
            //   name: "30-Minute Guaranteed Email Response",
            //   included: true,
            //   description:
            //     "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            // },
            // {
            //   name: "30-Day Money-Back Guarantee",
            //   included: true,
            //   description:
            //     "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            // }
          ]
        },
        {
          title: "WordPress Features",
          features: [
            {
              name: "WordPress Auto Updates",
              included: true
              // description: "More parallel compute for PHP workers and background tasks. Helps dynamic pages, carts, and checkouts stay responsive under load. A good fit for WooCommerce and heavier plugins."
            },
            {
              name: "Pre-configured LiteSpeed Cache",
              included: true
              // description: "Extra memory for visual builders, object caching, and imports. Reduces the chance of out-of-memory errors during heavy admin work. Comfortable for medium sites and small stores."
            },
            {
              name: "WordPress Staging Environment",
              included: true
              // description: "Increased disk throughput for busy sites and larger uploads. Speeds up backups, restores, and media processing. Helps keep queues short during peak times."
            },
            {
              name: "WordPress Vulnerability Patching",
              included: true,
              description:
                "We automatically patch known WordPress vulnerabilities to keep your site safe. This ensures plugins, themes, and core files are always protected without waiting for manual updates."
            },
            {
              name: "Daily Malware Scan ",
              included: true
              // description: "More headroom for complex page builders and analytics suites. Reduces failures on big imports and image optimizations. Great for plugin-heavy WordPress stacks."
            },
            {
              name: "Pre-installed WP-CLI Access",
              included: true,
              description: "Save time with WP-CLI pre-installed. Perform bulk actions, updates, and maintenance tasks instantly, without relying on the WordPress dashboard."
            }
          ]
        },
        {
          title: "Server Features",
          features: [
            {
              name: "2 CPU Core",
              included: true
              // description: "Server-level page caching with smart purge rules for near-instant loads. Includes image optimization, CSS/JS minify, and QUIC.cloud integration. Works best with LiteSpeed Web Server."
            },
            {
              name: "2 GB RAM",
              included: true
              // description: "Applies core and plugin updates automatically to close security gaps quickly. Minor releases are seamless; major updates can be deferred. Backups allow safe rollbacks if needed."
            },
            {
              name: "100 IOPS",
              included: true
              // description: "Clone your site into a staging copy to test updates and changes safely. Push changes live when verified, no manual migrations. Great for experimenting with themes and builders."
            },
            {
              name: "HTTP/3, Brotli, Compression",
              included: true
              // description: "Surfaces actionable recommendations for metadata, images, and critical CSS/JS. Prioritizes changes that move Core Web Vitals and search visibility. Reports show before/after impact."
            },
            {
              name: "SSH Access",
              included: true
              // description: "White-glove transfer of files and database with minimal downtime. Coordinated cutover windows and verification checklists. Ideal for time-sensitive launches."
            },
            {
              name: "1-Click WP Installer",
              included: true
              // description: "Surfaces actionable recommendations for metadata, images, and critical CSS/JS. Prioritizes changes that move Core Web Vitals and search visibility. Reports show before/after impact."
            },
            {
              name: "Multiple Hosting Locations",
              included: true,
              description:
                "Choose your preferred hosting location from 7 global data centers. This helps you keep your site closer to your main audience for faster performance."
            }
          ]
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "Webmail, Outlook Integration",
              included: true
              // description: "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              name: "Mail Delivery Guarantee",
              included: true
              // description: "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              name: "SpamAssassin",
              included: true
              // description: "Continuously monitors new and modified files for signs of infection. Suspect items are quarantined automatically to prevent spread. Detailed alerts help you remediate quickly."
            },
            {
              name: "Email Forwarding",
              included: true
              // description: "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            }
          ]
        },
        {
          title: "Developer Tools",
          features: [
            {
              name: "Managed PHP version (8.2)",
              included: true
              // description: "SSH is not available on this plan. Upgrade to Pro or Business for advanced developer tools.",
            },
            {
              name: "SSH and SFTP Access",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "PostgreSQL Databases",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "FTP Accounts",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Terminal Access",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Security Tools",
          features: [
            {
              name: "Robust Power Redundancy",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Raid-10 Included to Hardware",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Unique Account Isolation",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Server Monitoring",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Anti-Hack Systems with CPGuard",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Firewall and DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "1 TBPS Server Level DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "On-Demand Backups (7 Days)",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Support System",
          features: [
            {
              name: "24/7 LiveChat Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 WhatsApp Support ",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Call Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "30-Minute Ticket Reply",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Proactive Email Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Advanced Priority Support",
              included: false
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        }
      ]
    },
    {
      id: "business",
      name: "Business",
      description:
        "Best for enterprises, large stores, agencies, and heavy-traffic WordPress sites.",
      href: "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting/ultimate",
      hrefBdt:
        "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting-bd/ultimate",
      icon: "/assets/pricing/ultimate.svg",
      currency: "$",
      monthlyPrice: 39.99,
      yearlyPrice: 4.99,
      monthlyPrevPrice: 39.99,
      yearlyPrevPrice: 7.99,
      renewalTextMonthly: "$39.99/Monthly when you renew",
      renewalTextYearly: "$7.99/Monthly when you renew",
      guarantee: "30 Days Money Back guarantee",
      monthlyPriceBdt: 699,
      yearlyPriceBdt: 6291,
      monthlyPrevPriceBdt: 699,
      yearlyPrevPriceBdt: 8388,
      renewalTextMonthlyBdt: "Renews at ৳8,388/year",
      renewalTextYearlyBdt: "Renews at ৳8,388/year",
      offer: 90,
      offerBdt: 25,
      ctaText: "Choose Plan",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "100 GB NVMe Storage",
              included: true,
              // description: "Fast NVMe storage delivers ultra-low latency and high IOPS so pages and dashboards feel snappy. 75GB comfortably fits multiple WordPress installs with media and backups. Plenty of room for staging copies and asset libraries."
            },
            {
              name: "20 Websites Hosted",
              included: true,
              description: "Host up to 20 websites on a single account with dedicated speed and storage. Perfect for agencies, developers, or growing businesses managing multiple sites."
            },
            {
              name: "Unlimited Email Accounts",
              included: true,
              description: "Create unlimited custom email addresses with your domain, like info@yourbusiness.com or sales@yourbusiness.com. Sending limits still apply as per our fair use policy and terms."
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Enjoy unlimited monthly bandwidth, so your website can handle as many visitors and data transfers as needed without extra charges."
            },
            {
              name: "Unlimited MySQL Databases",
              included: true
              // description: "Create as many branded mailboxes as your teams need, sales@, hr@, support@, and more. Access via webmail, IMAP/POP, and SMTP across all major clients. Scales cleanly as departments and headcount grow."
            },
            {
              name: "7 Days Backup Retention",
              included: true,
              description: "Your website is backed up daily, and each backup is kept for 7 days. Restore any version from the past week with just one click."
            },
            {
              name: "Full Antivirus & Security Protection",
              included: true
              // description: "Provision WordPress with a guided wizard, no manual databases or config. Secure defaults applied during setup. You’ll be publishing in minutes."
            },
            {
              name: "Free Migration (Unlimited)",
              included: true
              // description: "Network-layer mitigation absorbs volumetric attacks while an app firewall filters malicious WP requests. Helps maintain availability and blocks common exploit patterns. Rules are updated to adapt to new threats."
            }
            // {
            //   name: "LiteSpeed Web Server + LSCache",
            //   included: true,
            //   description:
            //     "Event-driven LiteSpeed handles heavy concurrency efficiently, while LSCache delivers server-level page caching. Together they cut TTFB and improve Core Web Vitals. Automatic cache purges keep content fresh after edits."
            // },
            // {
            //   name: "AI-Driven WordPress Optimizer",
            //   included: true,
            //   description:
            //     "Analyzes your site to suggest caching, database, and image tweaks. Applies safe optimizations to improve load times with minimal effort. Generates reports so you can track gains over time."
            // },
            // {
            //   name: "30-Minute Guaranteed Email Response",
            //   included: true,
            //   description:
            //     "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            // },
            // {
            //   name: "30-Day Money-Back Guarantee",
            //   included: true,
            //   description:
            //     "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            // }
          ]
        },
        {
          title: "WordPress Features",
          features: [
            {
              name: "WordPress Auto Updates",
              included: true
              // description: "More parallel compute for PHP workers and background tasks. Helps dynamic pages, carts, and checkouts stay responsive under load. A good fit for WooCommerce and heavier plugins."
            },
            {
              name: "Pre-configured LiteSpeed Cache",
              included: true
              // description: "Extra memory for visual builders, object caching, and imports. Reduces the chance of out-of-memory errors during heavy admin work. Comfortable for medium sites and small stores."
            },
            {
              name: "WordPress Staging Environment",
              included: true
              // description: "Increased disk throughput for busy sites and larger uploads. Speeds up backups, restores, and media processing. Helps keep queues short during peak times."
            },
            {
              name: "WordPress Vulnerability Patching",
              included: true,
              description:
                "We automatically patch known WordPress vulnerabilities to keep your site safe. This ensures plugins, themes, and core files are always protected without waiting for manual updates."
            },
            {
              name: "Daily Malware Scan",
              included: true
              // description: "More headroom for complex page builders and analytics suites. Reduces failures on big imports and image optimizations. Great for plugin-heavy WordPress stacks."
            },
            {
              name: "Pre-installed WP-CLI Access",
              included: true,
              description: "Save time with WP-CLI pre-installed. Perform bulk actions, updates, and maintenance tasks instantly, without relying on the WordPress dashboard."
            }
          ]
        },
        {
          title: "Server Features",
          features: [
            {
              name: "4 CPU Core",
              included: true
              // description: "Server-level page caching with smart purge rules for near-instant loads. Includes image optimization, CSS/JS minify, and QUIC.cloud integration. Works best with LiteSpeed Web Server."
            },
            {
              name: "4 GB RAM",
              included: true
              // description: "Applies core and plugin updates automatically to close security gaps quickly. Minor releases are seamless; major updates can be deferred. Backups allow safe rollbacks if needed."
            },
            {
              name: "200 IOPS",
              included: true
              // description: "Clone your site into a staging copy to test updates and changes safely. Push changes live when verified, no manual migrations. Great for experimenting with themes and builders."
            },
            {
              name: "HTTP/3, Brotli + WPAccelerator",
              included: true
              // description: "Surfaces actionable recommendations for metadata, images, and critical CSS/JS. Prioritizes changes that move Core Web Vitals and search visibility. Reports show before/after impact."
            },
            {
              name: "SSH Access",
              included: true
              // description: "White-glove transfer of files and database with minimal downtime. Coordinated cutover windows and verification checklists. Ideal for time-sensitive launches."
            },
            {
              name: "1-Click WP Installer",
              included: true
              // description: "Surfaces actionable recommendations for metadata, images, and critical CSS/JS. Prioritizes changes that move Core Web Vitals and search visibility. Reports show before/after impact."
            },
            {
              name: "Multiple Hosting Locations",
              included: true,
              description:
                "Choose your preferred hosting location from 7 global data centers. This helps you keep your site closer to your main audience for faster performance."
            }
          ]
        },
        {
          title: "Mail Features",
          features: [
            {
              name: "Webmail, Outlook Integration",
              included: true
              // description: "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              name: "Mail Delivery Guarantee",
              included: true
              // description: "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              name: "SpamAssassin",
              included: true
              // description: "Continuously monitors new and modified files for signs of infection. Suspect items are quarantined automatically to prevent spread. Detailed alerts help you remediate quickly."
            },
            {
              name: "Email Forwarding",
              included: true
              // description: "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            }
          ]
        },
        {
          title: "Developer Tools",
          features: [
            {
              name: "Managed PHP version (8.2)",
              included: true
              // description: "SSH is not available on this plan. Upgrade to Pro or Business for advanced developer tools.",
            },
            {
              name: "SSH and SFTP Access",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "PostgreSQL Databases",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "FTP Accounts",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Terminal Access",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Security Tools",
          features: [
            {
              name: "Robust Power Redundancy",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Raid-10 Included to Hardware",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Unique Account Isolation",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Server Monitoring",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Anti-Hack Systems with CPGuard",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Firewall and DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "1 TBPS Server Level DDOS",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "On-Demand Backups (7 Days)",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        },
        {
          title: "Support System",
          features: [
            {
              name: "24/7 LiveChat Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 WhatsApp Support ",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "24/7 Call Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "30-Minute Ticket Reply",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Proactive Email Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            },
            {
              name: "Advanced Priority Support",
              included: true
              // description: "Run PHP-based applications or websites on our optimized hosting environment.",
            }
          ]
        }
      ]
    }
  ]
};
