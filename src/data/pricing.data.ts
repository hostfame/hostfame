import { PricingData } from "@/types/pricing.types";

export const DOLLAR_TO_TK_CONVERTION_RATE = 121.69;

export const webHostingPricingData: PricingData = {
  title: "Choose Your Perfect Plan",
  yearlyDiscount: 67,
  plans: [
    {
      id: "starter",
      name: "Starter",
      description: "Ideal for individuals and personal blogs getting online quickly.",
      href: "https://my.hostfame.com/index.php?rp=/store/web-hosting/wstarter&billingcycle=triennially&_gl=1*25qgji*_ga*MTAwMTc3MTk4Ni4xNzU3NjE2MDg1*_ga_V3X46VG4G8*czE3NTkzMTgxNzckbzUkZzEkdDE3NTkzMTgyMTEkajI2JGwwJGgw*_fplc*Z1lzcWxYc0U3NmNrRmVNbEFJUGlVRFFVU1JYcmI3d3kyMGx1SG05eE43OFV5bmttc1VKcXFVRFhkanRWOWZpRE5XY0IyRjFSazhoZUF0Z0hXRzlPR0ElMkZmb2Q3R0pIdkV6WHJGc2xNcEVZQ3YzQ0xJT1RGaWJ0NGYzdW9UTGclM0QlM0Q.*_ga_T6J46ZTKYW*czE3NTkzMTgxNzgkbzUkZzEkdDE3NTkzMTgyMTQkajI0JGwwJGgyMjExOTI2MzM.*_gcl_au*MTc0OTUyOTM2MC4xNzU3NjE2MDg2",
      icon: "/assets/pricing/starter-42.svg",
      currency: "$",
      monthlyPrice: 1.49,
      yearlyPrice: 1.49,
      monthlyPrevPrice: 4.49,
      yearlyPrevPrice: 4.49,
      offer: 67,
      ctaText: "Choose Plan",
      renewalTextMonthly: "36 month term + Free .COM",
      renewalTextYearly: "36 month term + Free .COM",
      guarantee: "30 Days Money Back guarantee",
      features: [
        {
          "title": "Features",
          "features": [
            {
              "name": "50GB NVMe SSD Storage",
              "included": true,
              "description": "NVMe SSDs deliver ultra-low latency and high IOPS for snappy page loads. 50GB comfortably fits a typical WordPress site with media, backups, and staging. Scales well for portfolios, blogs, and small stores."
            },
            {
              "name": "Unmetered Bandwidth",
              "included": true,
              "description": "No hard caps on monthly traffic or page views. Your site can handle viral spikes without surprise overage fees. Fair-use policies still apply to keep the network healthy."
            },
            {
              "name": "Free SSL Certificate",
              "included": true,
              "description": "Automatic HTTPS with a trusted certificate so browsers show the secure lock. Helps protect logins and forms in transit. Search engines also prefer HTTPS for ranking signals."
            },
            {
              "name": "1 Website",
              "included": true,
              "description": "Host a single production site under this plan. Ideal for a portfolio, blog, landing page, or MVP. Add-on domains and multisite are not included on Starter."
            },
            {
              "name": "5 Email Accounts",
              "included": true,
              "description": "Create up to five branded mailboxes at your domain (e.g., hello@, info@). Access via webmail, IMAP/POP, and SMTP. Perfect for small teams or role-based addresses."
            },
            {
              "name": "Daily Backups (JetBackup)",
              "included": true,
              "description": "Automatic daily restore points stored off-server for safety. Restore files, databases, or entire accounts in a few clicks. Retention varies, but typically covers recent days."
            },
            {
              "name": "1-Click WordPress Installer",
              "included": true,
              "description": "Provision WordPress with a guided wizard, no manual databases or config. Secure defaults applied during setup. You’ll be publishing in minutes."
            },
            {
              "name": "DDoS Protection",
              "included": true,
              "description": "Network-level filtering absorbs and mitigates volumetric attacks. Keeps legitimate traffic flowing during hostile events. Monitored continuously for new attack patterns."
            },
            {
              "name": "LiteSpeed Web Server",
              "included": true,
              "description": "Modern event-driven server built for high concurrency and low memory use. Pairs with LSCache for powerful page caching and optimization. Often outperforms traditional Apache stacks."
            },
            {
              "name": "Softaculous App Installer",
              "included": true,
              "description": "Install 400+ popular apps, CMSs, forums, e-commerce, in a click. Includes automatic updates and staging options for many scripts. Great for testing and quick prototypes."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            },
            {
              "name": "30-Day Money-Back Guarantee",
              "included": true,
              "description": "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            }
          ]
        },
        {
          "title": "Technical Specifications",
          "features": [
            {
              "name": "1 CPU Core",
              "included": true,
              "description": "A dedicated share of compute to keep dynamic pages responsive. Suitable for small to medium WordPress sites and simple apps. Bursting is possible but heavy workloads may need more cores."
            },
            {
              "name": "1 GB RAM",
              "included": true,
              "description": "Enough memory for lightweight themes and a modest plugin set. Handles typical blog traffic comfortably. Resource-heavy builders or caches may require upgrades."
            },
            {
              "name": "10 MB/s I/O Speed",
              "included": true,
              "description": "Balanced disk throughput for entry-level workloads. Prevents noisy neighbors from starving your site. Adequate for backups, uploads, and routine cron jobs."
            },
            {
              "name": "20 Entry Processes",
              "included": true,
              "description": "Allows up to 20 simultaneous PHP/HTTP handlers. Supports concurrent visitors without queuing under normal loads. Spikes beyond this limit may temporarily queue requests."
            },
            {
              "name": "PHP Memory Limit: 512 MB",
              "included": true,
              "description": "A sensible cap for most themes, page builders, and common plugins. Reduces out-of-memory errors during edits or imports. Advanced suites may benefit from higher limits."
            },
            {
              "name": "250,000 Inodes Limit",
              "included": true,
              "description": "Roughly 250k files/directories allowed across your account. Keeps performance stable and backups efficient. Clean up old caches and backups to stay within limits."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        },
        {
          "title": "WordPress Features",
          "features": [
            {
              "name": "LiteSpeed Cache for WordPress",
              "included": true,
              "description": "Server-level page caching with smart purge rules for near-instant loads. Includes image optimization, CSS/JS minify, and QUIC.cloud integration. Works best with LiteSpeed Web Server."
            },
            {
              "name": "Automatic WordPress Updates",
              "included": true,
              "description": "Core updates apply automatically to patch security issues quickly. Minor releases are seamless; major updates can be deferred if needed. Backups help you roll back safely."
            },
            {
              "name": "Pre-configured WordPress Settings",
              "included": true,
              "description": "Sensibly tuned defaults for permalinks, caching, and security. Avoids common misconfigurations that slow sites down. You can refine settings anytime."
            },
            {
              "name": "Free WordPress Migration",
              "included": true,
              "description": "We’ll move your existing WP site at no extra cost. Includes files, database, and basic DNS guidance. Zero-downtime cutovers are prioritized whenever possible."
            },
            {
              "name": "Basic Plugin and Theme Support",
              "included": true,
              "description": "Help diagnosing common plugin/theme issues and conflicts. We’ll point out known incompatibilities and best-practice fixes. Custom code and development are out of scope."
            }
          ]
        },
        {
          "title": "Security Features",
          "features": [
            {
              "name": "Imunify360 Security Suite",
              "included": true,
              "description": "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              "name": "Brute Force Protection",
              "included": true,
              "description": "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            },
            {
              "name": "Advanced Antivirus Scanner",
              "included": true,
              "description": "On-demand and scheduled scans detect infected files. Infections can be quarantined or cleaned based on findings. Detailed reports help you remediate quickly."
            },
            {
              "name": "Hotlink Protection",
              "included": true,
              "description": "Stops other sites from embedding your images and media. Preserves bandwidth and prevents unexpected usage bills. You can whitelist trusted referrers."
            },
            {
              "name": "Web Application Firewall (WAF)",
              "included": true,
              "description": "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              "name": "Spam Protection for Emails",
              "included": false,
              "description": "Email spam filtering is not included on the Starter plan. Mailboxes may receive unsolicited messages without extra filtering. Consider upgrading or adding a spam filter add-on."
            },
            {
              "name": "File Permission Protection",
              "included": true,
              "description": "Hardened default permissions reduce the blast radius of exploits. Blocks write access where it isn’t needed. Periodic scans flag risky ownership and mode changes."
            }
          ]
        },
        {
          "title": "Support & Assistance",
          "features": [
            {
              "name": "24/7 Live Chat, Email & WhatsApp Call Support",
              "included": true,
              "description": "Real humans are available around the clock, every day. Reach us via live chat, support tickets, or WhatsApp call. We aim for fast triage and clear next steps."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "We guarantee an initial reply to your ticket within 30 minutes. You’ll receive acknowledgment plus a plan or request for details. Complex escalations are tracked transparently."
            },
            {
              "name": "Comprehensive Knowledge Base & Tutorials",
              "included": true,
              "description": "Step-by-step articles cover setup, security, and optimization. Screenshots and copy-paste commands make tasks easy. New content is added as features evolve."
            },
            {
              "name": "Community Forum Access",
              "included": true,
              "description": "Ask questions, share solutions, and learn from other users. Community tips often surface best-practice configs. Moderators highlight verified answers."
            },
            {
              "name": "Site Optimization Advice",
              "included": true,
              "description": "Get tailored recommendations for caching, images, and queries. We focus on quick wins that move Core Web Vitals. Deep code refactors remain a developer task."
            },
            {
              "name": "Onboarding Guide for New Users",
              "included": true,
              "description": "A simple launch checklist from DNS to SSL to caching. Helps you avoid common pitfalls during go-live. You’ll be production-ready with confidence."
            }
          ]
        },
        {
          "title": "Performance Benchmarks",
          "features": [
            {
              "name": "99.99% Uptime Guarantee",
              "included": true,
              "description": "Backed by an SLA targeting less than ~4.4 minutes of monthly downtime. Redundant power, network, and monitoring minimize incidents. Credits apply if we miss the mark."
            },
            {
              "name": "Global CDN Integration",
              "included": true,
              "description": "Serve static assets from edge locations worldwide. Reduces latency for visitors far from your origin. Easy to enable with minimal DNS changes."
            },
            {
              "name": "Real-World Speed Test Results",
              "included": true,
              "description": "We continuously measure TTFB and page load across regions. Reports highlight before/after gains from caching and CDN. Results are reproducible with common testing tools."
            },
            {
              "name": "Optimized for High Traffic Spikes",
              "included": true,
              "description": "Aggressive caching and HTTP/3 keep pages fast under load. Auto-scaling network and burst capacity absorb sudden surges. Best for launches, campaigns, and seasonal peaks."
            }
          ]
        },
        {
          "title": "Developer-Friendly Features",
          "features": [
            {
              "name": "SSH Access",
              "included": true,
              "description": "Secure shell access for CLI workflows and deployments. Use rsync, composer, npm, and WP-CLI efficiently. Public-key auth keeps access tight."
            },
            {
              "name": "Git Integration",
              "included": true,
              "description": "Pull from your repositories and deploy with minimal friction. Keep releases versioned and auditable. Works well with popular CI/CD pipelines."
            },
            {
              "name": "WP-CLI Support",
              "included": true,
              "description": "Manage WordPress from the command line for speed and repeatability. Bulk-update plugins, search-replace, and manage users. Perfect for scripted maintenance."
            },
            {
              "name": "Custom Cron Jobs",
              "included": true,
              "description": "Schedule background tasks like backups, imports, or emails. Fine-tune run times to avoid peak traffic. Logs help you verify successful execution."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Pin or upgrade PHP per site to match your app’s needs. Test compatibility in staging before switching production. Toggle extensions to fit your stack."
            }
          ]
        }
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description: "For growing websites and small businesses needing extra power.",
      href: "https://my.hostfame.com/index.php?rp=/store/web-hosting/webpro",
      icon: "/assets/pricing/pro.svg",
      currency: "$",
      monthlyPrice: 2.49,
      yearlyPrice: 2.49,
      monthlyPrevPrice: 6.99,
      yearlyPrevPrice: 6.99,
      offer: 64,
      offerBdt: 64,
      isPopular: true,
      ctaText: "Choose Plan",
      renewalTextMonthly: "36 month term + Free .COM",
      renewalTextYearly: "36 month term + Free .COM",
      guarantee: "30 Days Money Back guarantee",
      "features": [
        {
          "title": "Features",
          "features": [
            {
              "name": "100GB NVMe SSD Storage",
              "included": true,
              "description": "Double the space for image-heavy blogs, portfolios, and storefronts. NVMe delivers ultra-low latency and high IOPS so pages feel instantly responsive. Plenty of room for staging copies and backups."
            },
            {
              "name": "Unmetered Bandwidth",
              "included": true,
              "description": "No hard caps on monthly traffic or page views. Your site can handle viral spikes without surprise overage fees. Fair-use policies still apply to keep the network healthy."
            },
            {
              "name": "Free SSL Certificate",
              "included": true,
              "description": "Automatic HTTPS with a trusted certificate so browsers show the secure lock. Helps protect logins and forms in transit. Search engines also prefer HTTPS for ranking signals."
            },
            {
              "name": "5 Websites",
              "included": true,
              "description": "Host up to five separate sites under one plan, each with its own domain. Keep projects isolated with separate directories and databases. Great for agencies, side projects, or multi-brand setups."
            },
            {
              "name": "10 Email Accounts",
              "included": true,
              "description": "Create up to ten branded mailboxes at your domain for owners and teammates. Access via webmail, IMAP/POP, and SMTP across devices. Ideal for role-based addresses like sales@ or support@."
            },
            {
              "name": "Daily Backups (JetBackup)",
              "included": true,
              "description": "Automatic daily restore points stored off-server for safety. Restore files, databases, or entire accounts in a few clicks. Retention varies, but typically covers recent days."
            },
            {
              "name": "1-Click WordPress Installer",
              "included": true,
              "description": "Provision WordPress with a guided wizard, no manual databases or config. Secure defaults applied during setup. You’ll be publishing in minutes."
            },
            {
              "name": "DDoS Protection",
              "included": true,
              "description": "Network-level filtering absorbs and mitigates volumetric attacks. Keeps legitimate traffic flowing during hostile events. Monitored continuously for new attack patterns."
            },
            {
              "name": "LiteSpeed Web Server",
              "included": true,
              "description": "Modern event-driven server built for high concurrency and low memory use. Pairs with LSCache for powerful page caching and optimization. Often outperforms traditional Apache stacks."
            },
            {
              "name": "Softaculous App Installer",
              "included": true,
              "description": "Install 400+ popular apps, CMSs, forums, e-commerce, in a click. Includes automatic updates and staging options for many scripts. Great for testing and quick prototypes."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            },
            {
              "name": "30-Day Money-Back Guarantee",
              "included": true,
              "description": "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            }
          ]
        },
        {
          "title": "Technical Specifications",
          "features": [
            {
              "name": "2 CPU Cores",
              "included": true,
              "description": "More parallel compute for PHP workers and background tasks. Helps dynamic pages, carts, and checkouts stay responsive under load. A good fit for WooCommerce and heavier plugins."
            },
            {
              "name": "2 GB RAM",
              "included": true,
              "description": "Extra memory for visual builders, object caching, and imports. Reduces the chance of out-of-memory errors during heavy admin work. Comfortable for medium sites and small stores."
            },
            {
              "name": "20 MB/s I/O Speed",
              "included": true,
              "description": "Increased disk throughput for busy sites and larger uploads. Speeds up backups, restores, and media processing. Helps keep queues short during peak times."
            },
            {
              "name": "200 Entry Processes",
              "included": true,
              "description": "Supports far more concurrent PHP/HTTP handlers before queuing. Improves resilience during traffic spikes and bot surges. Ideal for sites with many simultaneous visitors."
            },
            {
              "name": "PHP Memory Limit: 768 MB",
              "included": true,
              "description": "More headroom for complex page builders and analytics suites. Reduces failures on big imports and image optimizations. Great for plugin-heavy WordPress stacks."
            },
            {
              "name": "500,000 Inodes Limit",
              "included": true,
              "description": "Allows roughly half a million files/directories across your account. Suits large media libraries and cached assets. Periodic cleanup keeps backups fast and usage efficient."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        },
        {
          "title": "WordPress Features",
          "features": [
            {
              "name": "LiteSpeed Cache for WordPress",
              "included": true,
              "description": "Server-level page caching with smart purge rules for near-instant loads. Includes image optimization, CSS/JS minify, and QUIC.cloud integration. Works best with LiteSpeed Web Server."
            },
            {
              "name": "Automatic WordPress Updates",
              "included": true,
              "description": "Core updates apply automatically to patch security issues quickly. Minor releases are seamless; major updates can be deferred if needed. Backups help you roll back safely."
            },
            {
              "name": "Pre-configured WordPress Settings",
              "included": true,
              "description": "Sensibly tuned defaults for permalinks, caching, and security. Avoids common misconfigurations that slow sites down. You can refine settings anytime."
            },
            {
              "name": "Free WordPress Migration",
              "included": true,
              "description": "We’ll move your existing WP site at no extra cost. Includes files, database, and basic DNS guidance. Zero-downtime cutovers are prioritized whenever possible."
            },
            {
              "name": "Basic Plugin and Theme Support",
              "included": true,
              "description": "Help diagnosing common plugin/theme issues and conflicts. We’ll point out known incompatibilities and best-practice fixes. Custom code and development are out of scope."
            }
          ]
        },
        {
          "title": "Security Features",
          "features": [
            {
              "name": "Imunify360 Security Suite",
              "included": true,
              "description": "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              "name": "Brute Force Protection",
              "included": true,
              "description": "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            },
            {
              "name": "Advanced Antivirus Scanner",
              "included": true,
              "description": "On-demand and scheduled scans detect infected files. Infections can be quarantined or cleaned based on findings. Detailed reports help you remediate quickly."
            },
            {
              "name": "Hotlink Protection",
              "included": true,
              "description": "Stops other sites from embedding your images and media. Preserves bandwidth and prevents unexpected usage bills. You can whitelist trusted referrers."
            },
            {
              "name": "Web Application Firewall (WAF)",
              "included": true,
              "description": "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              "name": "Spam Protection for Emails",
              "included": true,
              "description": "Email spam filtering is not included on the Starter plan. Mailboxes may receive unsolicited messages without extra filtering. Consider upgrading or adding a spam filter add-on."
            },
            {
              "name": "File Permission Protection",
              "included": true,
              "description": "Hardened default permissions reduce the blast radius of exploits. Blocks write access where it isn’t needed. Periodic scans flag risky ownership and mode changes."
            }
          ]
        },
        {
          "title": "Support & Assistance",
          "features": [
            {
              "name": "24/7 Live Chat, Email & WhatsApp Call Support",
              "included": true,
              "description": "Real humans are available around the clock, every day. Reach us via live chat, support tickets, or WhatsApp call. We aim for fast triage and clear next steps."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "We guarantee an initial reply to your ticket within 30 minutes. You’ll receive acknowledgment plus a plan or request for details. Complex escalations are tracked transparently."
            },
            {
              "name": "Comprehensive Knowledge Base & Tutorials",
              "included": true,
              "description": "Step-by-step articles cover setup, security, and optimization. Screenshots and copy-paste commands make tasks easy. New content is added as features evolve."
            },
            {
              "name": "Community Forum Access",
              "included": true,
              "description": "Ask questions, share solutions, and learn from other users. Community tips often surface best-practice configs. Moderators highlight verified answers."
            },
            {
              "name": "Site Optimization Advice",
              "included": true,
              "description": "Get tailored recommendations for caching, images, and queries. We focus on quick wins that move Core Web Vitals. Deep code refactors remain a developer task."
            },
            {
              "name": "Onboarding Guide for New Users",
              "included": true,
              "description": "A simple launch checklist from DNS to SSL to caching. Helps you avoid common pitfalls during go-live. You’ll be production-ready with confidence."
            }
          ]
        },
        {
          "title": "Performance Benchmarks",
          "features": [
            {
              "name": "99.99% Uptime Guarantee",
              "included": true,
              "description": "Backed by an SLA targeting less than ~4.4 minutes of monthly downtime. Redundant power, network, and monitoring minimize incidents. Credits apply if we miss the mark."
            },
            {
              "name": "Global CDN Integration",
              "included": true,
              "description": "Serve static assets from edge locations worldwide. Reduces latency for visitors far from your origin. Easy to enable with minimal DNS changes."
            },
            {
              "name": "Real-World Speed Test Results",
              "included": true,
              "description": "We continuously measure TTFB and page load across regions. Reports highlight before/after gains from caching and CDN. Results are reproducible with common testing tools."
            },
            {
              "name": "Optimized for High Traffic Spikes",
              "included": true,
              "description": "Aggressive caching and HTTP/3 keep pages fast under load. Auto-scaling network and burst capacity absorb sudden surges. Best for launches, campaigns, and seasonal peaks."
            }
          ]
        },
        {
          "title": "Developer-Friendly Features",
          "features": [
            {
              "name": "SSH Access",
              "included": true,
              "description": "Secure shell access for CLI workflows and deployments. Use rsync, composer, npm, and WP-CLI efficiently. Public-key auth keeps access tight."
            },
            {
              "name": "Git Integration",
              "included": true,
              "description": "Pull from your repositories and deploy with minimal friction. Keep releases versioned and auditable. Works well with popular CI/CD pipelines."
            },
            {
              "name": "WP-CLI Support",
              "included": true,
              "description": "Manage WordPress from the command line for speed and repeatability. Bulk-update plugins, search-replace, and manage users. Perfect for scripted maintenance."
            },
            {
              "name": "Custom Cron Jobs",
              "included": true,
              "description": "Schedule background tasks like backups, imports, or emails. Fine-tune run times to avoid peak traffic. Logs help you verify successful execution."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Pin or upgrade PHP per site to match your app’s needs. Test compatibility in staging before switching production. Toggle extensions to fit your stack."
            }
          ]
        }
      ],
    },
    {
      id: "business",
      name: "Business",
      description: "For enterprises, large-scale websites, and mission-critical apps.",
      href: "https://my.hostfame.com/index.php?rp=/store/web-hosting/business",
      icon: "/assets/pricing/ultimate.svg",
      currency: "$",
      monthlyPrice: 4.99,
      yearlyPrice: 4.99,
      monthlyPrevPrice: 9.99,
      yearlyPrevPrice: 9.99,
      offer: 50,
      offerBdt: 50,
      ctaText: "Choose Plan",
      renewalTextMonthly: "36 month term + Free .COM",
      renewalTextYearly: "36 month term + Free .COM",
      guarantee: "30 Days Money Back guarantee",
      features: [
        {
          "title": "Features",
          "features": [
            {
              "name": "Unlimited NVMe SSD Storage",
              "included": true,
              "description": "Store as much content, media, and archives as your projects demand without manual capacity planning. NVMe delivers ultra-low latency and high IOPS so sites remain snappy as they grow. Usage remains subject to fair-use and inode limits for platform health."
            },
            {
              "name": "Unmetered Bandwidth",
              "included": true,
              "description": "No hard caps on monthly traffic or page views. Your site can handle viral spikes without surprise overage fees. Fair-use policies still apply to keep the network healthy."
            },
            {
              "name": "Free SSL Certificate",
              "included": true,
              "description": "Automatic HTTPS with a trusted certificate so browsers show the secure lock. Helps protect logins and forms in transit. Search engines also prefer HTTPS for ranking signals."
            },
            {
              "name": "Unlimited Websites",
              "included": true,
              "description": "Host an unlimited number of separate projects under one plan. Keep each site isolated with its own directories, databases, and settings. Ideal for agencies, multi-brand companies, and resellers."
            },
            {
              "name": "Unlimited Email Accounts",
              "included": true,
              "description": "Create as many branded mailboxes as your teams need, sales@, hr@, support@, and more. Access via webmail, IMAP/POP, and SMTP across all major clients. Scales cleanly as departments and headcount grow."
            },
            {
              "name": "Daily Backups (JetBackup)",
              "included": true,
              "description": "Automatic daily restore points stored off-server for safety. Restore files, databases, or entire accounts in a few clicks. Retention varies, but typically covers recent days."
            },
            {
              "name": "1-Click WordPress Installer",
              "included": true,
              "description": "Provision WordPress with a guided wizard, no manual databases or config. Secure defaults applied during setup. You’ll be publishing in minutes."
            },
            {
              "name": "DDoS Protection",
              "included": true,
              "description": "Network-level filtering absorbs and mitigates volumetric attacks. Keeps legitimate traffic flowing during hostile events. Monitored continuously for new attack patterns."
            },
            {
              "name": "LiteSpeed Web Server",
              "included": true,
              "description": "Modern event-driven server built for high concurrency and low memory use. Pairs with LSCache for powerful page caching and optimization. Often outperforms traditional Apache stacks."
            },
            {
              "name": "Softaculous App Installer",
              "included": true,
              "description": "Install 400+ popular apps, CMSs, forums, e-commerce, in a click. Includes automatic updates and staging options for many scripts. Great for testing and quick prototypes."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            },
            {
              "name": "30-Day Money-Back Guarantee",
              "included": true,
              "description": "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            }
          ]
        },
        {
          "title": "Technical Specifications",
          "features": [
            {
              "name": "6 CPU Cores",
              "included": true,
              "description": "High parallelism for PHP workers, queues, and background jobs. Keeps complex, dynamic workloads responsive during peak times. Suited for multi-site setups and heavy e-commerce."
            },
            {
              "name": "8 GB RAM",
              "included": true,
              "description": "Plenty of memory for large object caches, image processing, and big imports. Reduces OOM errors during admin tasks and batch operations. Comfortable for high-traffic stores and content hubs."
            },
            {
              "name": "50 MB/s I/O Speed",
              "included": true,
              "description": "Premium disk throughput accelerates backups, restores, and media handling. Helps database-driven pages and search stay responsive. Useful for sites with frequent uploads and cron activity."
            },
            {
              "name": "Unlimited Entry Processes",
              "included": true,
              "description": "Serve very high concurrency without hitting per-account process ceilings. Great for traffic bursts from campaigns and launches. Overall performance still depends on code efficiency and caching."
            },
            {
              "name": "PHP Memory Limit: 2048 MB",
              "included": true,
              "description": "Ample headroom for heavy builders, search, analytics, and integrations. Minimizes failures on large imports and complex page renders. Ideal for plugin-dense enterprise stacks."
            },
            {
              "name": "1,000,000 Inodes Limit",
              "included": true,
              "description": "Room for roughly one million files/directories across the account. Supports very large media libraries, caches, and logs. Periodic housekeeping keeps usage efficient and backups fast."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        },
        {
          "title": "WordPress Features",
          "features": [
            {
              "name": "LiteSpeed Cache for WordPress",
              "included": true,
              "description": "Server-level page caching with smart purge rules for near-instant loads. Includes image optimization, CSS/JS minify, and QUIC.cloud integration. Works best with LiteSpeed Web Server."
            },
            {
              "name": "Automatic WordPress Updates",
              "included": true,
              "description": "Core updates apply automatically to patch security issues quickly. Minor releases are seamless; major updates can be deferred if needed. Backups help you roll back safely."
            },
            {
              "name": "Pre-configured WordPress Settings",
              "included": true,
              "description": "Sensibly tuned defaults for permalinks, caching, and security. Avoids common misconfigurations that slow sites down. You can refine settings anytime."
            },
            {
              "name": "Free WordPress Migration",
              "included": true,
              "description": "We’ll move your existing WP site at no extra cost. Includes files, database, and basic DNS guidance. Zero-downtime cutovers are prioritized whenever possible."
            },
            {
              "name": "Basic Plugin and Theme Support",
              "included": true,
              "description": "Help diagnosing common plugin/theme issues and conflicts. We’ll point out known incompatibilities and best-practice fixes. Custom code and development are out of scope."
            }
          ]
        },
        {
          "title": "Security Features",
          "features": [
            {
              "name": "Imunify360 Security Suite",
              "included": true,
              "description": "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              "name": "Brute Force & DDoS Protection",
              "included": true,
              "description": "Combines aggressive login rate-limiting with network-layer mitigation. Blocks abusive credential stuffing and volumetric attacks. Helps maintain availability while keeping accounts safe."
            },
            {
              "name": "Advanced Antivirus Scanner",
              "included": true,
              "description": "On-demand and scheduled scans detect infected files. Infections can be quarantined or cleaned based on findings. Detailed reports help you remediate quickly."
            },
            {
              "name": "Hotlink Protection",
              "included": true,
              "description": "Stops other sites from embedding your images and media. Preserves bandwidth and prevents unexpected usage bills. You can whitelist trusted referrers."
            },
            {
              "name": "Premium Web Application Firewall (WAF)",
              "included": true,
              "description": "Enhanced signatures and virtual patching block emerging threats. Filters malicious requests before they hit WordPress/PHP. Tunable rulesets reduce false positives for production safety."
            },
            {
              "name": "Spam Protection for Emails",
              "included": true,
              "description": "Email spam filtering is not included on the Starter plan. Mailboxes may receive unsolicited messages without extra filtering. Consider upgrading or adding a spam filter add-on."
            },
            {
              "name": "Two-Factor Authentication (2FA)",
              "included": true,
              "description": "Require a second factor, like a one-time code, in addition to a password. Greatly reduces the risk of account takeover even if credentials leak. Works with popular authenticator apps."
            }
          ]
        },
        {
          "title": "Support & Assistance",
          "features": [
            {
              "name": "24/7 Live Chat, Email & WhatsApp Call Support",
              "included": true,
              "description": "Real humans are available around the clock, every day. Reach us via live chat, support tickets, or WhatsApp call. We aim for fast triage and clear next steps."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "We guarantee an initial reply to your ticket within 30 minutes. You’ll receive acknowledgment plus a plan or request for details. Complex escalations are tracked transparently."
            },
            {
              "name": "Comprehensive Knowledge Base & Tutorials",
              "included": true,
              "description": "Step-by-step articles cover setup, security, and optimization. Screenshots and copy-paste commands make tasks easy. New content is added as features evolve."
            },
            {
              "name": "Dedicated Account Manager",
              "included": true,
              "description": "A single point of contact who learns your stack and goals. Coordinates planning, roadmaps, and escalations across teams. Helps you get the most from the platform."
            },
            {
              "name": "Advanced Site Optimization Advice",
              "included": true,
              "description": "Deep-dive performance reviews covering caching layers, DB queries, and front-end assets. Actionable recommendations mapped to Core Web Vitals and business goals. Collaborative sessions with your devs for smooth rollout."
            },
            {
              "name": "VIP Onboarding & Migration Assistance",
              "included": true,
              "description": "Hands-on planning and execution for complex moves or multi-site estates. Staged cutovers with rollbacks and verification checklists. Minimizes downtime and post-migration surprises."
            }
          ]
        },
        {
          "title": "Performance Benchmarks",
          "features": [
            {
              "name": "99.99% Uptime Guarantee",
              "included": true,
              "description": "Backed by an SLA targeting less than ~4.4 minutes of monthly downtime. Redundant power, network, and monitoring minimize incidents. Credits apply if we miss the mark."
            },
            {
              "name": "Global CDN Integration",
              "included": true,
              "description": "Serve static assets from edge locations worldwide. Reduces latency for visitors far from your origin. Easy to enable with minimal DNS changes."
            },
            {
              "name": "Real-World Speed Test Results",
              "included": true,
              "description": "We continuously measure TTFB and page load across regions. Reports highlight before/after gains from caching and CDN. Results are reproducible with common testing tools."
            },
            {
              "name": "Optimized for Extreme Traffic Loads",
              "included": true,
              "description": "Built for campaigns, product launches, and peak seasons. Aggressive caching and HTTP/3 maintain fast responses under massive concurrency. Capacity planning helps align resources with demand curves."
            }
          ]
        },
        {
          "title": "Developer-Friendly Features",
          "features": [
            {
              "name": "SSH Access",
              "included": true,
              "description": "Secure shell access for CLI workflows and deployments. Use rsync, composer, npm, and WP-CLI efficiently. Public-key auth keeps access tight."
            },
            {
              "name": "Git & CI/CD Integration",
              "included": true,
              "description": "Connect repositories and pipelines for automated, repeatable releases. Support for branch-based deployments and rollbacks. Keeps deployments auditable and fast."
            },
            {
              "name": "WP-CLI & Custom Scripts",
              "included": true,
              "description": "Automate WordPress administration and maintenance at scale. Run scripted updates, search-replace, and user management safely. Ideal for fleet operations across many sites."
            },
            {
              "name": "Custom Cron & Task Scheduling",
              "included": true,
              "description": "Schedule imports, syncs, and maintenance with fine-grained timing. Coordinate jobs to avoid peak traffic windows. Logs and alerts help verify successful execution."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Pin or upgrade PHP per site to match your app’s needs. Test compatibility in staging before switching production. Toggle extensions to fit your stack."
            }
          ]
        }
      ],
    },
  ],
};

export const wordpressHostingPricingData: PricingData = {
  title: "Plans Built for WordPress",
  yearlyDiscount: 90,
  plans: [
    {
      id: "starter",
      name: "Starter",
      description: "For bloggers, freelancers, and small businesses starting their first WordPress site.",
      href: "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting/starter",
      hrefBdt: "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting-bd/basic",
      icon: "/assets/pricing/basic.svg",
      currency: "$",
      monthlyPrice: 14.99,
      yearlyPrice: 2.49,
      monthlyPrevPrice: 14.99,
      yearlyPrevPrice: 3.49,
      renewalTextMonthly: "$14.99/Monthly when you renew",
      renewalTextYearly: "$3.49/Monthly when you renew",
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
          "title": "Features",
          "features": [
            {
              "name": "75GB NVMe SSD Storage",
              "included": true,
              "description": "Fast NVMe storage delivers ultra-low latency and high IOPS so pages and dashboards feel snappy. 75GB comfortably fits multiple WordPress installs with media and backups. Plenty of room for staging copies and asset libraries."
            },
            {
              "name": "3 WordPress Websites",
              "included": true,
              "description": "Run up to three separate WordPress installs under one plan. Keep projects isolated with their own databases, users, and directories. Ideal for portfolios, client sites, or brand microsites."
            },
            {
              "name": "Unmetered Bandwidth",
              "included": true,
              "description": "No hard caps on monthly traffic or page views. Your site can handle viral spikes without surprise overage fees. Fair-use policies still apply to keep the network healthy."
            },
            {
              "name": "Free Domain (1 Year)",
              "included": true,
              "description": "Register a new domain (e.g., .COM) for your first year at no extra cost. Perfect for launching a new brand or consolidating your presence. Standard renewal fees apply from year two."
            },
            {
              "name": "Unlimited Email Accounts",
              "included": true,
              "description": "Create as many branded mailboxes as your teams need, sales@, hr@, support@, and more. Access via webmail, IMAP/POP, and SMTP across all major clients. Scales cleanly as departments and headcount grow."
            },
            {
              "name": "Daily Automated Backups (JetBackup)",
              "included": true,
              "description": "Nightly restore points captured automatically and stored off-server. Restore files, databases, or entire accounts in a few clicks. Retention covers recent days to protect against mistakes or corruption."
            },
            {
              "name": "1-Click WordPress Installer",
              "included": true,
              "description": "Provision WordPress with a guided wizard, no manual databases or config. Secure defaults applied during setup. You’ll be publishing in minutes."
            },
            {
              "name": "DDoS Protection & WordPress Firewall",
              "included": true,
              "description": "Network-layer mitigation absorbs volumetric attacks while an app firewall filters malicious WP requests. Helps maintain availability and blocks common exploit patterns. Rules are updated to adapt to new threats."
            },
            {
              "name": "LiteSpeed Web Server + LSCache",
              "included": true,
              "description": "Event-driven LiteSpeed handles heavy concurrency efficiently, while LSCache delivers server-level page caching. Together they cut TTFB and improve Core Web Vitals. Automatic cache purges keep content fresh after edits."
            },
            {
              "name": "AI-Driven WordPress Optimizer",
              "included": true,
              "description": "Analyzes your site to suggest caching, database, and image tweaks. Applies safe optimizations to improve load times with minimal effort. Generates reports so you can track gains over time."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            },
            {
              "name": "30-Day Money-Back Guarantee",
              "included": true,
              "description": "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            }
          ]
        },
        {
          "title": "Technical Specifications",
          "features": [
            {
              "name": "2 CPU Cores",
              "included": true,
              "description": "More parallel compute for PHP workers and background tasks. Helps dynamic pages, carts, and checkouts stay responsive under load. A good fit for WooCommerce and heavier plugins."
            },
            {
              "name": "2 GB RAM",
              "included": true,
              "description": "Extra memory for visual builders, object caching, and imports. Reduces the chance of out-of-memory errors during heavy admin work. Comfortable for medium sites and small stores."
            },
            {
              "name": "20 MB/s I/O Speed",
              "included": true,
              "description": "Increased disk throughput for busy sites and larger uploads. Speeds up backups, restores, and media processing. Helps keep queues short during peak times."
            },
            {
              "name": "40 Entry Processes",
              "included": true,
              "description": "Allows up to 40 simultaneous PHP/HTTP handlers before queuing. Improves capacity during moderate traffic bursts and bots. Pair with caching to maximize concurrency."
            },
            {
              "name": "PHP Memory Limit: 768 MB",
              "included": true,
              "description": "More headroom for complex page builders and analytics suites. Reduces failures on big imports and image optimizations. Great for plugin-heavy WordPress stacks."
            },
            {
              "name": "400,000 Inodes Limit",
              "included": true,
              "description": "Space for roughly 400k files and directories across your account. Suits growing media libraries, caches, and logs. Routine housekeeping keeps usage efficient and backups fast."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        },
        {
          "title": "Exclusive WordPress Features",
          "features": [
            {
              "name": "LiteSpeed Cache for WordPress",
              "included": true,
              "description": "Server-level page caching with smart purge rules for near-instant loads. Includes image optimization, CSS/JS minify, and QUIC.cloud integration. Works best with LiteSpeed Web Server."
            },
            {
              "name": "Automatic WordPress Core & Plugin Updates",
              "included": true,
              "description": "Applies core and plugin updates automatically to close security gaps quickly. Minor releases are seamless; major updates can be deferred. Backups allow safe rollbacks if needed."
            },
            {
              "name": "1-Click Staging Environment",
              "included": true,
              "description": "Clone your site into a staging copy to test updates and changes safely. Push changes live when verified, no manual migrations. Great for experimenting with themes and builders."
            },
            {
              "name": "AI-Powered SEO & Speed Optimizer",
              "included": true,
              "description": "Surfaces actionable recommendations for metadata, images, and critical CSS/JS. Prioritizes changes that move Core Web Vitals and search visibility. Reports show before/after impact."
            },
            {
              "name": "Free WordPress Migration (Completed Within Hours)",
              "included": true,
              "description": "White-glove transfer of files and database with minimal downtime. Coordinated cutover windows and verification checklists. Ideal for time-sensitive launches."
            }
          ]
        },
        {
          "title": "Advanced Security Features",
          "features": [
            {
              "name": "Imunify360 Security Suite",
              "included": true,
              "description": "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              "name": "Web Application Firewall (WAF)",
              "included": true,
              "description": "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              "name": "Real-Time Malware Scanning",
              "included": true,
              "description": "Continuously monitors new and modified files for signs of infection. Suspect items are quarantined automatically to prevent spread. Detailed alerts help you remediate quickly."
            },
            {
              "name": "Brute Force Protection",
              "included": true,
              "description": "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            },
            {
              "name": "Two-Factor Authentication (2FA)",
              "included": true,
              "description": "Require a second factor, like a one-time code, in addition to a password. Greatly reduces the risk of account takeover even if credentials leak. Works with popular authenticator apps."
            }
          ]
        },
        {
          "title": "Premium Support & Assistance",
          "features": [
            {
              "name": "24/7 WordPress Expert Support",
              "included": true,
              "description": "Talk to humans who work with WordPress daily. We’ll diagnose common plugin/theme issues and provide best-practice guidance. Complex custom-code development remains out of scope."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            },
            {
              "name": "Step-by-Step WordPress Onboarding Guide",
              "included": true,
              "description": "A simple launch checklist from DNS to SSL to caching. Helps you avoid common pitfalls during go-live. You’ll be production-ready with confidence."
            },
            {
              "name": "Community Forum Access",
              "included": false,
              "description": "Ask questions, share solutions, and learn from other users. Community tips often surface best-practice configs. Moderators highlight verified answers."
            },
            {
              "name": "SEO Optimization Tips",
              "included": true,
              "description": "Clear, prioritized recommendations for titles, meta, and site structure. Guidance on sitemaps, schema, and image alt text. Focused on practical wins you can apply quickly."
            }
          ]
        },
        {
          "title": "Performance Benchmarks",
          "features": [
            {
              "name": "99.99% Uptime Guarantee",
              "included": true,
              "description": "Backed by an SLA targeting less than ~4.4 minutes of monthly downtime. Redundant power, network, and monitoring minimize incidents. Credits apply if we miss the mark."
            },
            {
              "name": "Global CDN Integration",
              "included": true,
              "description": "Serve static assets from edge locations worldwide. Reduces latency for visitors far from your origin. Easy to enable with minimal DNS changes."
            },
            {
              "name": "Average Load Time: Under 1s",
              "included": true,
              "description": "Targets sub-second loads on optimized demo stacks with caching and CDN enabled. Real-world results vary by theme, plugins, and content. We provide guidance to help you hit the mark."
            },
            {
              "name": "Image Optimization Tools",
              "included": true,
              "description": "Automatically compress and convert images (e.g., WebP) to shrink payloads. Can generate responsive sizes and lazy-loading where supported. Improves LCP and overall page weight."
            }
          ]
        },
        {
          "title": "Developer-Friendly Features",
          "features": [
            {
              "name": "SSH Access with WP-CLI",
              "included": true,
              "description": "Secure shell with WP-CLI for fast, scriptable admin tasks. Run updates, search-replace, and user management from the terminal. Ideal for repeatable maintenance across sites."
            },
            {
              "name": "Git Integration",
              "included": true,
              "description": "Pull from your repositories and deploy with minimal friction. Keep releases versioned and auditable. Works well with popular CI/CD pipelines."
            },
            {
              "name": "Custom Cron Jobs",
              "included": true,
              "description": "Schedule background tasks like backups, imports, or emails. Fine-tune run times to avoid peak traffic. Logs help you verify successful execution."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        }
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description: "Ideal for growing blogs, startups, and freelancers managing multiple sites.",
      href: "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting/pro",
      hrefBdt: "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting-bd/starter",
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
          "title": "Features",
          "features": [
            {
              "name": "150 GB NVMe SSD Storage",
              "included": true,
              "description": "High-speed NVMe storage delivers ultra-low latency and high IOPS for snappy admin and front-end loads. 150 GB comfortably fits multiple WP sites with sizable media libraries and backups. Plenty of room for staging copies and asset archives as you grow."
            },
            {
              "name": "10 WordPress Websites",
              "included": true,
              "description": "Run up to ten separate WordPress installs under one plan. Keep each project isolated with its own database, users, and directories. Perfect for agencies, multi-brand setups, or client hosting."
            },
            {
              "name": "Unmetered Bandwidth",
              "included": true,
              "description": "No hard caps on monthly traffic or page views. Your site can handle viral spikes without surprise overage fees. Fair-use policies still apply to keep the network healthy."
            },
            {
              "name": "Free Domain (1 Year)",
              "included": true,
              "description": "Register a new domain (e.g., .COM) for your first year at no extra cost. Perfect for launching a new brand or consolidating your presence. Standard renewal fees apply from year two."
            },
            {
              "name": "Unlimited Email Accounts",
              "included": true,
              "description": "Create as many branded mailboxes as your teams need, sales@, hr@, support@, and more. Access via webmail, IMAP/POP, and SMTP across all major clients. Scales cleanly as departments and headcount grow."
            },
            {
              "name": "Daily Automated Backups (JetBackup)",
              "included": true,
              "description": "Nightly restore points captured automatically and stored off-server. Restore files, databases, or entire accounts in a few clicks. Retention covers recent days to protect against mistakes or corruption."
            },
            {
              "name": "1-Click WordPress Installer",
              "included": true,
              "description": "Provision WordPress with a guided wizard, no manual databases or config. Secure defaults applied during setup. You’ll be publishing in minutes."
            },
            {
              "name": "DDoS Protection & WordPress Firewall",
              "included": true,
              "description": "Network-layer mitigation absorbs volumetric attacks while an app firewall filters malicious WP requests. Helps maintain availability and blocks common exploit patterns. Rules are updated to adapt to new threats."
            },
            {
              "name": "LiteSpeed Web Server + LSCache",
              "included": true,
              "description": "Event-driven LiteSpeed handles heavy concurrency efficiently, while LSCache delivers server-level page caching. Together they cut TTFB and improve Core Web Vitals. Automatic cache purges keep content fresh after edits."
            },
            {
              "name": "AI-Driven WordPress Optimizer",
              "included": true,
              "description": "Analyzes your site to suggest caching, database, and image tweaks. Applies safe optimizations to improve load times with minimal effort. Generates reports so you can track gains over time."
            },
            {
              "name": "15-Minute Guaranteed Email Response",
              "included": true,
              "description": "We guarantee an initial human reply to your ticket within 15 minutes. You’ll receive acknowledgment plus triage and next steps or an ETA. Complex fixes may take longer, but you won’t be left waiting."
            },
            {
              "name": "30-Day Money-Back Guarantee",
              "included": true,
              "description": "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            }
          ]
        },
        {
          "title": "Technical Specifications",
          "features": [
            {
              "name": "4 CPU Cores",
              "included": true,
              "description": "More parallel compute for PHP workers, queues, and background tasks. Keeps dynamic pages, carts, and checkouts responsive during peak times. A solid fit for medium-to-large stores and multi-site fleets."
            },
            {
              "name": "4 GB RAM",
              "included": true,
              "description": "Ample memory for object caches, media processing, and heavy builders. Reduces out-of-memory errors during imports and admin work. Comfortable for higher traffic and plugin-rich sites."
            },
            {
              "name": "30 MB/s I/O Speed",
              "included": true,
              "description": "Higher disk throughput speeds backups, restores, and media operations. Helps keep database-driven pages and search snappy. Useful for sites with frequent uploads and cron activity."
            },
            {
              "name": "80 Entry Processes",
              "included": true,
              "description": "Allows up to 80 simultaneous PHP/HTTP handlers before queuing. Improves resilience during traffic bursts and bot activity. Pair with caching to maximize effective concurrency."
            },
            {
              "name": "PHP Memory Limit: 1024 MB",
              "included": true,
              "description": "Extra headroom for complex builders, analytics, and integrations. Reduces failures on large imports and image optimizations. Well-suited for plugin-dense WordPress stacks."
            },
            {
              "name": "600,000 Inodes Limit",
              "included": true,
              "description": "Room for roughly 600k files and directories across your account. Supports growing media libraries, caches, and logs. Routine housekeeping keeps backups fast and usage efficient."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        },
        {
          "title": "Exclusive WordPress Features",
          "features": [
            {
              "name": "LiteSpeed Cache for WordPress",
              "included": true,
              "description": "Server-level page caching with smart purge rules for near-instant loads. Includes image optimization, CSS/JS minify, and QUIC.cloud integration. Works best with LiteSpeed Web Server."
            },
            {
              "name": "Automatic WordPress Core & Plugin Updates",
              "included": true,
              "description": "Applies core and plugin updates automatically to close security gaps quickly. Minor releases are seamless; major updates can be deferred. Backups allow safe rollbacks if needed."
            },
            {
              "name": "1-Click Staging Environment",
              "included": true,
              "description": "Clone your site into a staging copy to test updates and changes safely. Push changes live when verified, no manual migrations. Great for experimenting with themes and builders."
            },
            {
              "name": "AI-Powered SEO & Speed Optimizer",
              "included": true,
              "description": "Surfaces actionable recommendations for metadata, images, and critical CSS/JS. Prioritizes changes that move Core Web Vitals and search visibility. Reports show before/after impact."
            },
            {
              "name": "Free WordPress Migration (Completed Within Hours)",
              "included": true,
              "description": "White-glove transfer of files and database with minimal downtime. Coordinated cutover windows and verification checklists. Ideal for time-sensitive launches."
            }
          ]
        },
        {
          "title": "Advanced Security Features",
          "features": [
            {
              "name": "Imunify360 Security Suite",
              "included": true,
              "description": "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              "name": "Web Application Firewall (WAF)",
              "included": true,
              "description": "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              "name": "Real-Time Malware Scanning",
              "included": true,
              "description": "Continuously monitors new and modified files for signs of infection. Suspect items are quarantined automatically to prevent spread. Detailed alerts help you remediate quickly."
            },
            {
              "name": "Brute Force Protection",
              "included": true,
              "description": "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            },
            {
              "name": "Two-Factor Authentication (2FA)",
              "included": true,
              "description": "Require a second factor, like a one-time code, in addition to a password. Greatly reduces the risk of account takeover even if credentials leak. Works with popular authenticator apps."
            }
          ]
        },
        {
          "title": "Premium Support & Assistance",
          "features": [
            {
              "name": "24/7 WordPress Expert Support",
              "included": true,
              "description": "Talk to humans who work with WordPress daily. We’ll diagnose common plugin/theme issues and provide best-practice guidance. Complex custom-code development remains out of scope."
            },
            {
              "name": "15-Minute Guaranteed Email Response",
              "included": true,
              "description": "We guarantee an initial human reply to your ticket within 15 minutes. You’ll receive acknowledgment plus triage and next steps or an ETA. Complex fixes may take longer, but you won’t be left waiting."
            },
            {
              "name": "Step-by-Step WordPress Onboarding Guide",
              "included": true,
              "description": "A simple launch checklist from DNS to SSL to caching. Helps you avoid common pitfalls during go-live. You’ll be production-ready with confidence."
            },
            {
              "name": "Community Forum Access",
              "included": true,
              "description": "Ask questions, share solutions, and learn from other users. Community tips often surface best-practice configs. Moderators highlight verified answers."
            },
            {
              "name": "Advanced SEO Optimization Tips",
              "included": true,
              "description": "Deeper, prioritized guidance on titles, metadata, schema, and internal linking. Covers sitemaps, canonicalization, and image alt/text strategies. Focused on practical wins that improve rankings and conversions."
            }
          ]
        },
        {
          "title": "Performance Enhancements",
          "features": [
            {
              "name": "99.99% Uptime Guarantee",
              "included": true,
              "description": "Backed by an SLA targeting less than ~4.4 minutes of monthly downtime. Redundant power, network, and monitoring minimize incidents. Credits apply if we miss the mark."
            },
            {
              "name": "Global CDN Integration",
              "included": true,
              "description": "Serve static assets from edge locations worldwide. Reduces latency for visitors far from your origin. Easy to enable with minimal DNS changes."
            },
            {
              "name": "Average Load Time: Under 900ms",
              "included": true,
              "description": "Targets sub-900ms loads on tuned demo stacks with caching and CDN enabled. Real-world results vary by theme, plugins, and content. We’ll share guidance to help you hit similar numbers."
            },
            {
              "name": "Image Optimization Tools",
              "included": true,
              "description": "Automatically compress and convert images (e.g., WebP) to shrink payloads. Can generate responsive sizes and enable lazy-loading where supported. Improves LCP and overall page weight."
            }
          ]
        },
        {
          "title": "Developer-Friendly Features",
          "features": [
            {
              "name": "SSH Access with WP-CLI",
              "included": true,
              "description": "Secure shell with WP-CLI for fast, scriptable admin tasks. Run updates, search-replace, and user management from the terminal. Ideal for repeatable maintenance across sites."
            },
            {
              "name": "Git Integration",
              "included": true,
              "description": "Pull from your repositories and deploy with minimal friction. Keep releases versioned and auditable. Works well with popular CI/CD pipelines."
            },
            {
              "name": "Custom Cron Jobs",
              "included": true,
              "description": "Schedule background tasks like backups, imports, or emails. Fine-tune run times to avoid peak traffic. Logs help you verify successful execution."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        }
      ],
    },
    {
      id: "business",
      name: "Business",
      description: "Best for enterprises, large stores, agencies, and heavy-traffic WordPress sites.",
      href: "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting/ultimate",
      hrefBdt: "https://my.hostfame.com/index.php?rp=/store/wordpress-hosting-bd/ultimate",
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
          "title": "Features",
          "features": [
            {
              "name": "Unlimited NVMe SSD Storage",
              "included": true,
              "description": "Store as much content, media, and archives as your projects demand without manual capacity planning. NVMe delivers ultra-low latency and high IOPS so sites remain snappy as they grow. Usage remains subject to fair-use and inode limits for platform health."
            },
            {
              "name": "Unlimited WordPress Websites",
              "included": true,
              "description": "Host an unlimited number of WordPress installs under one plan. Each site can have its own database, users, and settings to keep projects isolated. Ideal for agencies, multi-brand portfolios, and large networks."
            },
            {
              "name": "Unmetered Bandwidth",
              "included": true,
              "description": "No hard caps on monthly traffic or page views. Your site can handle viral spikes without surprise overage fees. Fair-use policies still apply to keep the network healthy."
            },
            {
              "name": "Free Domain (1 Year)",
              "included": true,
              "description": "Register a new domain (e.g., .COM) for your first year at no extra cost. Perfect for launching a new brand or consolidating your presence. Standard renewal fees apply from year two."
            },
            {
              "name": "Unlimited Email Accounts",
              "included": true,
              "description": "Create as many branded mailboxes as your teams need, sales@, hr@, support@, and more. Access via webmail, IMAP/POP, and SMTP across all major clients. Scales cleanly as departments and headcount grow."
            },
            {
              "name": "Hourly Automated Backups (JetBackup)",
              "included": true,
              "description": "Create restore points every hour for mission-critical workloads. Dramatically lowers RPO/RTO so you can roll back recent changes with minimal data loss. Retention follows a rolling schedule to balance coverage and storage."
            },
            {
              "name": "1-Click WordPress Installer",
              "included": true,
              "description": "Provision WordPress with a guided wizard, no manual databases or config. Secure defaults applied during setup. You’ll be publishing in minutes."
            },
            {
              "name": "DDoS Protection & WordPress Firewall",
              "included": true,
              "description": "Network-layer mitigation absorbs volumetric attacks while an app firewall filters malicious WP requests. Helps maintain availability and blocks common exploit patterns. Rules are updated to adapt to new threats."
            },
            {
              "name": "LiteSpeed Web Server + LSCache",
              "included": true,
              "description": "Event-driven LiteSpeed handles heavy concurrency efficiently, while LSCache delivers server-level page caching. Together they cut TTFB and improve Core Web Vitals. Automatic cache purges keep content fresh after edits."
            },
            {
              "name": "AI-Driven WordPress Optimizer",
              "included": true,
              "description": "Analyzes your site to suggest caching, database, and image tweaks. Applies safe optimizations to improve load times with minimal effort. Generates reports so you can track gains over time."
            },
            {
              "name": "15-Minute Guaranteed Email Response",
              "included": true,
              "description": "We guarantee an initial human reply to your ticket within 15 minutes. You’ll receive acknowledgment plus triage and next steps or an ETA. Complex fixes may take longer, but you won’t be left waiting."
            },
            {
              "name": "30-Day Money-Back Guarantee",
              "included": true,
              "description": "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            }
          ]
        },
        {
          "title": "Technical Specifications",
          "features": [
            {
              "name": "8 CPU Cores",
              "included": true,
              "description": "High parallelism for PHP workers, queues, and background jobs at scale. Keeps complex, dynamic workloads responsive during heavy traffic. Well-suited for multi-site fleets, WooCommerce, and search indexing."
            },
            {
              "name": "16 GB RAM",
              "included": true,
              "description": "Large memory pool for hefty object caches, media processing, and analytics. Cuts down on out-of-memory errors during imports and batch tasks. Comfortable for high-traffic stores and plugin-dense sites."
            },
            {
              "name": "50 MB/s I/O Speed",
              "included": true,
              "description": "Premium disk throughput accelerates backups, restores, and media handling. Helps database-driven pages and search stay responsive. Useful for sites with frequent uploads and cron activity."
            },
            {
              "name": "200 Entry Processes",
              "included": true,
              "description": "Supports far more concurrent PHP/HTTP handlers before queuing. Improves resilience during traffic spikes and bot surges. Ideal for sites with many simultaneous visitors."
            },
            {
              "name": "PHP Memory Limit: 4096 MB",
              "included": true,
              "description": "Massive headroom for builders, search, analytics, and integrations. Reduces failures on large imports and complex page renders. Excellent for enterprise WordPress stacks."
            },
            {
              "name": "Unlimited Inodes",
              "included": true,
              "description": "Accommodate extremely large numbers of files and directories. Ideal for giant media libraries, logs, and cache footprints. General fair-use policies still apply for platform stability."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        },
        {
          "title": "Exclusive WordPress Features",
          "features": [
            {
              "name": "LiteSpeed Cache for WordPress",
              "included": true,
              "description": "Server-level page caching with smart purge rules for near-instant loads. Includes image optimization, CSS/JS minify, and QUIC.cloud integration. Works best with LiteSpeed Web Server."
            },
            {
              "name": "Automatic WordPress Core & Plugin Updates",
              "included": true,
              "description": "Applies core and plugin updates automatically to close security gaps quickly. Minor releases are seamless; major updates can be deferred. Backups allow safe rollbacks if needed."
            },
            {
              "name": "1-Click Staging Environment",
              "included": true,
              "description": "Clone your site into a staging copy to test updates and changes safely. Push changes live when verified, no manual migrations. Great for experimenting with themes and builders."
            },
            {
              "name": "AI-Powered SEO & Speed Optimizer",
              "included": true,
              "description": "Surfaces actionable recommendations for metadata, images, and critical CSS/JS. Prioritizes changes that move Core Web Vitals and search visibility. Reports show before/after impact."
            },
            {
              "name": "Free WordPress Migration (Completed Within Hours)",
              "included": true,
              "description": "White-glove transfer of files and database with minimal downtime. Coordinated cutover windows and verification checklists. Ideal for time-sensitive launches."
            }
          ]
        },
        {
          "title": "Advanced Security Features",
          "features": [
            {
              "name": "Imunify360 Security Suite",
              "included": true,
              "description": "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              "name": "Web Application Firewall (WAF)",
              "included": true,
              "description": "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              "name": "Real-Time Malware Scanning",
              "included": true,
              "description": "Continuously monitors new and modified files for signs of infection. Suspect items are quarantined automatically to prevent spread. Detailed alerts help you remediate quickly."
            },
            {
              "name": "Two-Factor Authentication (2FA)",
              "included": true,
              "description": "Require a second factor, like a one-time code, in addition to a password. Greatly reduces the risk of account takeover even if credentials leak. Works with popular authenticator apps."
            },
            {
              "name": "Daily Security Reports",
              "included": true,
              "description": "Receive concise daily summaries of threats blocked, malware findings, and patch status. Helps teams track posture at a glance and spot trends early. Export or share reports with stakeholders as needed."
            }
          ]
        },
        {
          "title": "Premium Support & Assistance",
          "features": [
            {
              "name": "24/7 WP WordPress Expert Support",
              "included": true,
              "description": "Round-the-clock access to senior WordPress engineers. We troubleshoot plugins, themes, and performance bottlenecks with best-practice guidance. Custom development requests are out of scope but we’ll point you the right way."
            },
            {
              "name": "15-Minute Guaranteed Email Response",
              "included": true,
              "description": "We guarantee an initial human reply to your ticket within 15 minutes. You’ll receive acknowledgment plus triage and next steps or an ETA. Complex fixes may take longer, but you won’t be left waiting."
            },
            {
              "name": "Dedicated Account Manager",
              "included": true,
              "description": "A single point of contact who learns your stack and goals. Coordinates planning, roadmaps, and escalations across teams. Helps you get the most from the platform."
            },
            {
              "name": "Advanced WordPress Onboarding Guide",
              "included": true,
              "description": "A deep-dive setup playbook covering caching layers, security hardening, and CDN/DNS. Step-by-step checklists help you launch fast and safely. Tailored tips align configuration with your traffic patterns."
            },
            {
              "name": "Community Forum Access",
              "included": true,
              "description": "Ask questions, share solutions, and learn from other users. Community tips often surface best-practice configs. Moderators highlight verified answers."
            },
            {
              "name": "Advanced SEO Optimization Tips",
              "included": true,
              "description": "Deeper, prioritized guidance on titles, metadata, schema, and internal linking. Covers sitemaps, canonicalization, and image alt/text strategies. Focused on practical wins that improve rankings and conversions."
            }
          ]
        },
        {
          "title": "Performance Benchmarks",
          "features": [
            {
              "name": "99.99% Uptime Guarantee",
              "included": true,
              "description": "Backed by an SLA targeting less than ~4.4 minutes of monthly downtime. Redundant power, network, and monitoring minimize incidents. Credits apply if we miss the mark."
            },
            {
              "name": "Global CDN Integration",
              "included": true,
              "description": "Serve static assets from edge locations worldwide. Reduces latency for visitors far from your origin. Easy to enable with minimal DNS changes."
            },
            {
              "name": "Average Load Time: Under 600ms",
              "included": true,
              "description": "Targets sub-600ms loads on tuned demo stacks with caching and CDN enabled. Real-world results vary by theme, plugins, and content. We provide guidance to help you approach similar performance."
            },
            {
              "name": "Image Optimization Tools",
              "included": true,
              "description": "Automatically compress and convert images (e.g., WebP) to shrink payloads. Can generate responsive sizes and enable lazy-loading where supported. Improves LCP and overall page weight."
            },
            {
              "name": "WooCommerce Optimization",
              "included": true,
              "description": "Server and cache tuning tailored to product catalogs, carts, and checkout flows. Reduces query load and session contention during sales and promotions. Helps sustain fast response times at high concurrency."
            }
          ]
        },
        {
          "title": "Developer-Friendly Features",
          "features": [
            {
              "name": "SSH Access with WP-CLI",
              "included": true,
              "description": "Secure shell with WP-CLI for fast, scriptable admin tasks. Run updates, search-replace, and user management from the terminal. Ideal for repeatable maintenance across sites."
            },
            {
              "name": "Git Integration",
              "included": true,
              "description": "Pull from your repositories and deploy with minimal friction. Keep releases versioned and auditable. Works well with popular CI/CD pipelines."
            },
            {
              "name": "Custom Cron Jobs",
              "included": true,
              "description": "Schedule background tasks like backups, imports, or emails. Fine-tune run times to avoid peak traffic. Logs help you verify successful execution."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            },
            {
              "name": "Database Optimization Tools",
              "included": true,
              "description": "Analyze slow queries and tune MySQL parameters to lower latency. Schedule index maintenance and table cleanups safely. Dashboards surface hotspots so you can keep performance consistent at scale."
            }
          ]
        }
      ],
    },
  ],
};

export const manageHostingPricingData: PricingData = {
  title: "Choose Your Perfect Plan",
  yearlyDiscount: 76,
  plans: [
    {
      id: "starter",
      name: "Starter",
      description: "Reliable hosting with essential features, ideal for individuals and small businesses.",
      href: "https://my.hostfame.com/index.php?rp=/store/managed-hosting/starter",
      hrefBdt: "https://my.hostfame.com/index.php?rp=/store/managed-hosting-bd/starter",
      icon: "/assets/pricing/basic.svg",
      monthlyPrice: 69.99,
      yearlyPrice: 39.99,
      monthlyPrevPrice: 69.99,
      yearlyPrevPrice: 479.88,
      renewalTextMonthly: "$69.99/Monthly when you renew",
      renewalTextYearly: "$27.99/Monthly when you renew",
      guarantee: "30 Days Money Back guarantee",
      monthlyPriceBdt: 2999,
      yearlyPriceBdt: 17990,
      monthlyPrevPriceBdt: 2999,
      yearlyPrevPriceBdt: 35988,
      renewalTextMonthlyBdt: "Renews at ৳25,190/year",
      renewalTextYearlyBdt: "Renews at ৳25,190/year",
      offer: 42,
      offerBdt: 50,
      currency: "$",
      ctaText: "Choose Plan",
      features: [
        {
          "title": "Features",
          "features": [
            {
              "name": "150GB NVMe SSD Storage",
              "included": true,
              "description": "High-speed NVMe storage delivers ultra-low latency and high IOPS for snappy admin and front-end loads. 150GB comfortably fits many sites with sizable media libraries and backups. Plenty of room for staging copies and asset archives as you grow."
            },
            {
              "name": "15 Websites",
              "included": true,
              "description": "Host up to fifteen separate sites under one plan. Each project can have its own database, users, and directories for clean isolation. Great for agencies, multi-brand setups, or client work."
            },
            {
              "name": "Unmetered Bandwidth",
              "included": true,
              "description": "No hard caps on monthly traffic or page views. Your site can handle viral spikes without surprise overage fees. Fair-use policies still apply to keep the network healthy."
            },
            {
              "name": "Free SSL Certificate (Lifetime)",
              "included": true,
              "description": "Permanent HTTPS for all your domains without renewal costs. Protects logins, checkouts, and forms in transit. Improves visitor trust and can aid search visibility."
            },
            {
              "name": "5 vCPU Cores",
              "included": true,
              "description": "Five virtual CPU cores provide strong parallelism for PHP workers and background jobs. Keeps dynamic pages and carts responsive during peak periods. Well-suited for multi-site fleets and busy stores."
            },
            {
              "name": "10 GB RAM",
              "included": true,
              "description": "Generous memory for object caches, media processing, and heavyweight plugins. Reduces out-of-memory errors during imports and admin tasks. Comfortable for higher traffic and plugin-rich sites."
            },
            {
              "name": "Daily Automated Backups (14 Days Retention)",
              "included": true,
              "description": "Automatic daily restore points retained for up to 14 days. Recover files, databases, or entire accounts in a few clicks. Coverage helps undo mistakes and malware quickly."
            },
            {
              "name": "1-Click App Installer",
              "included": true,
              "description": "Install WordPress and 400+ popular apps in a single step. Handles databases and configs automatically with sensible defaults. Ideal for fast prototypes and standardized rollouts."
            },
            {
              "name": "Global CDN Integration (Cloudflare Enterprise)",
              "included": true,
              "description": "Delivers content faster worldwide with enterprise-level CDN integration."
            },
            {
              "name": "100% Uptime SLA",
              "included": true,
              "description": "A contractual target of zero network downtime for the covered scope. Credits apply per SLA terms if the target is missed. Redundant networking and continuous monitoring back the commitment."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            },
            {
              "name": "30-Day Money-Back Guarantee",
              "included": true,
              "description": "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            }
          ]
        },
        {
          "title": "Upgraded Technical Specifications",
          "features": [
            {
              "name": "5 vCPU Cores",
              "included": true,
              "description": "Five virtual CPU cores provide strong parallelism for PHP workers and background jobs. Keeps dynamic pages and carts responsive during peak periods. Well-suited for multi-site fleets and busy stores."
            },
            {
              "name": "10 GB RAM",
              "included": true,
              "description": "Generous memory for object caches, media processing, and heavyweight plugins. Reduces out-of-memory errors during imports and admin tasks. Comfortable for higher traffic and plugin-rich sites."
            },
            {
              "name": "50 MB/s I/O Speed",
              "included": true,
              "description": "Premium disk throughput accelerates backups, restores, and media handling. Helps database-driven pages and search stay responsive. Useful for sites with frequent uploads and cron activity."
            },
            {
              "name": "60 Entry Processes",
              "included": true,
              "description": "Allows up to 60 simultaneous PHP/HTTP handlers before queuing. Improves capacity during moderate traffic bursts and bots. Pair with caching to maximize concurrency."
            },
            {
              "name": "PHP Memory Limit: 2048 MB",
              "included": true,
              "description": "Ample headroom for heavy builders, search, analytics, and integrations. Minimizes failures on large imports and complex page renders. Ideal for plugin-dense enterprise stacks."
            },
            {
              "name": "750,000 Inodes Limit",
              "included": true,
              "description": "Room for roughly 750k files and directories across your account. Supports large media libraries, caches, and logs. Routine housekeeping keeps backups fast and usage efficient."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        },
        {
          "title": "Advanced Security Features (Enhanced)",
          "features": [
            {
              "name": "Imunify360 Security Suite",
              "included": true,
              "description": "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              "name": "DDoS Protection",
              "included": true,
              "description": "Network-level filtering absorbs and mitigates volumetric attacks. Keeps legitimate traffic flowing during hostile events. Monitored continuously for new attack patterns."
            },
            {
              "name": "Web Application Firewall (WAF)",
              "included": true,
              "description": "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              "name": "Brute Force Protection",
              "included": true,
              "description": "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            },
            {
              "name": "Two-Factor Authentication (2FA)",
              "included": true,
              "description": "Require a second factor, like a one-time code, in addition to a password. Greatly reduces the risk of account takeover even if credentials leak. Works with popular authenticator apps."
            },
            {
              "name": "Real-Time Malware Scanning",
              "included": true,
              "description": "Continuously monitors new and modified files for signs of infection. Suspect items are quarantined automatically to prevent spread. Detailed alerts help you remediate quickly."
            },
            {
              "name": "Hotlink Protection",
              "included": true,
              "description": "Stops other sites from embedding your images and media. Preserves bandwidth and prevents unexpected usage bills. You can whitelist trusted referrers."
            },
            {
              "name": "Free SSL Certificate (Lifetime)",
              "included": true,
              "description": "Permanent HTTPS for all your domains without renewal costs. Protects logins, checkouts, and forms in transit. Improves visitor trust and can aid search visibility."
            }
          ]
        },
        {
          "title": "Performance Enhancements",
          "features": [
            {
              "name": "100% Network Uptime SLA",
              "included": true,
              "description": "Zero-downtime network target for the covered components. SLA credits apply if availability falls short, per terms. Redundancy and active monitoring support this commitment."
            },
            {
              "name": "Cloud Load Balancing",
              "included": true,
              "description": "Distributes traffic across multiple servers or nodes to avoid hotspots. Improves fault tolerance and enables rolling updates. Helps sustain fast responses during spikes."
            },
            {
              "name": "AI-Powered Auto-Scaling",
              "included": true,
              "description": "Adjusts CPU, RAM, or container replicas in response to real-time demand. Keeps performance steady without manual intervention. Useful for campaigns, sales, and unpredictable traffic."
            },
            {
              "name": "Global CDN Integration (Cloudflare Enterprise)",
              "included": true,
              "description": "Delivers content faster worldwide with enterprise-level CDN integration."
            },
            {
              "name": "Optimized for Google Core Web Vitals",
              "included": true,
              "description": "Ensures top performance scores for SEO and user experience. Guidance and tooling help improve LCP, FID/INP, and CLS. Works best alongside caching and a tuned theme."
            },
            {
              "name": "Real-Time Resource Monitoring",
              "included": true,
              "description": "Live dashboards track CPU, memory, disk, and bandwidth usage. Alerts flag anomalies so you can act before users feel it. Historical views help with capacity planning."
            }
          ]
        },
        {
          "title": "Premium Support & Assistance",
          "features": [
            {
              "name": "24/7 Cloud Hosting Expert Support",
              "included": true,
              "description": "Round-the-clock access to certified engineers who understand scaling and performance. We troubleshoot stack issues and provide best-practice guidance. Custom development remains out of scope, but we’ll advise on options."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            },
            {
              "name": "Step-by-Step Onboarding Guide",
              "included": true,
              "description": "A clear launch checklist covering DNS, SSL, CDN, and caching. Helps you avoid common pitfalls and go live smoothly. Includes post-launch hardening tips."
            },
            {
              "name": "Live Chat & WhatsApp Support",
              "included": true,
              "description": "Get instant help through web chat or WhatsApp when tickets aren’t fast enough. Great for quick troubleshooting and guidance. Escalations move to specialists as needed."
            },
            {
              "name": "Comprehensive Knowledge Base & Tutorials",
              "included": true,
              "description": "Step-by-step articles cover setup, security, and optimization. Screenshots and copy-paste commands make tasks easy. New content is added as features evolve."
            }
          ]
        },
        {
          "title": "Developer-Friendly Features",
          "features": [
            {
              "name": "SSH Access",
              "included": true,
              "description": "Secure shell access for CLI workflows and deployments. Use rsync, composer, npm, and WP-CLI efficiently. Public-key auth keeps access tight."
            },
            {
              "name": "Git Integration",
              "included": true,
              "description": "Pull from your repositories and deploy with minimal friction. Keep releases versioned and auditable. Works well with popular CI/CD pipelines."
            },
            {
              "name": "WP-CLI Support",
              "included": true,
              "description": "Manage WordPress from the command line for speed and repeatability. Bulk-update plugins, search-replace, and manage users. Perfect for scripted maintenance."
            },
            {
              "name": "Custom Cron Jobs",
              "included": true,
              "description": "Schedule background tasks like backups, imports, or emails. Fine-tune run times to avoid peak traffic. Logs help you verify successful execution."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            },
            {
              "name": "Staging Environments",
              "included": true,
              "description": "Create safe sandboxes to test updates, plugins, and theme changes. Push to production when verified without manual migrations. Reduces risk during releases and redesigns."
            },
            {
              "name": "Database Optimization Tools",
              "included": true,
              "description": "Analyze slow queries and tune MySQL parameters to lower latency. Schedule index maintenance and table cleanups safely. Dashboards surface hotspots so you can keep performance consistent at scale."
            }
          ]
        }
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description: "Balanced resources and advanced tools, perfect for growing websites and agencies.",
      href: "https://my.hostfame.com/index.php?rp=/store/managed-hosting/pro",
      hrefBdt: "https://my.hostfame.com/index.php?rp=/store/managed-hosting-bd/pro",
      icon: "/assets/pricing/starter-42.svg",
      monthlyPrice: 99.99,
      yearlyPrice: 54.99,
      monthlyPrevPrice: 99.99,
      yearlyPrevPrice: 659.88,
      renewalTextMonthly: "$99.99/Monthly when you renew",
      renewalTextYearly: "$54.99/Monthly when you renew",
      guarantee: "30 Days Money Back guarantee",
      monthlyPriceBdt: 4999,
      yearlyPriceBdt: 29990,
      monthlyPrevPriceBdt: 4999,
      yearlyPrevPriceBdt: 59988,
      renewalTextMonthlyBdt: "Renews at ৳41,990/year",
      renewalTextYearlyBdt: "Renews at ৳41,990/year",
      offer: 45,
      offerBdt: 50,
      currency: "$",
      isPopular: true,
      ctaText: "Choose Plan",
      features: [
        {
          "title": "Features",
          "features": [
            {
              "name": "200GB NVMe SSD Storage",
              "included": true,
              "description": "High-speed NVMe storage delivers ultra-low latency and high IOPS for snappy admin and front-end loads. 200GB lets you store large media libraries, staging copies, and multiple backups comfortably. Ideal for growing sites and small multi-site portfolios."
            },
            {
              "name": "25 Websites",
              "included": true,
              "description": "Host up to twenty-five separate sites under one plan. Each project can have its own database, users, and directories for isolation. Great for agencies, multi-brand setups, or client hosting."
            },
            {
              "name": "Unmetered Bandwidth",
              "included": true,
              "description": "No hard caps on monthly traffic or page views. Your site can handle viral spikes without surprise overage fees. Fair-use policies still apply to keep the network healthy."
            },
            {
              "name": "Free SSL Certificate (Lifetime)",
              "included": true,
              "description": "Permanent HTTPS for all your domains without renewal costs. Protects logins, checkouts, and forms in transit. Improves visitor trust and can aid search visibility."
            },
            {
              "name": "6 vCPU Cores",
              "included": true,
              "description": "Six virtual CPU cores provide robust parallelism for PHP workers, queues, and background jobs. Keeps dynamic pages, carts, and dashboards responsive during heavier traffic. Well-suited for multi-site fleets and busy stores."
            },
            {
              "name": "14 GB RAM",
              "included": true,
              "description": "Ample memory for object caches, media processing, and heavyweight plugins. Reduces out-of-memory errors during imports and batch tasks. Comfortable for higher traffic and plugin-rich sites."
            },
            {
              "name": "Daily Automated Backups (21 Days Retention)",
              "included": true,
              "description": "Automatic daily restore points retained for up to 21 days. Recover files, databases, or entire accounts in a few clicks. The rolling window helps undo mistakes and malware quickly."
            },
            {
              "name": "1-Click App Installer",
              "included": true,
              "description": "Install WordPress and 400+ popular apps in a single step. Handles databases and configs automatically with sensible defaults. Ideal for fast prototypes and standardized rollouts."
            },
            {
              "name": "Global CDN Integration (Cloudflare Enterprise)",
              "included": true,
              "description": "Delivers content faster worldwide with enterprise-level CDN integration."
            },
            {
              "name": "100% Uptime SLA",
              "included": true,
              "description": "A contractual target of zero network downtime for the covered scope. Credits apply per SLA terms if the target is missed. Redundant networking and continuous monitoring back the commitment."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            },
            {
              "name": "30-Day Money-Back Guarantee",
              "included": true,
              "description": "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            }
          ]
        },
        {
          "title": "Upgraded Technical Specifications",
          "features": [
            {
              "name": "6 vCPU Cores",
              "included": true,
              "description": "Six virtual CPU cores provide robust parallelism for PHP workers, queues, and background jobs. Keeps dynamic pages, carts, and dashboards responsive during heavier traffic. Well-suited for multi-site fleets and busy stores."
            },
            {
              "name": "14 GB RAM",
              "included": true,
              "description": "Ample memory for object caches, media processing, and heavyweight plugins. Reduces out-of-memory errors during imports and batch tasks. Comfortable for higher traffic and plugin-rich sites."
            },
            {
              "name": "70 MB/s I/O Speed",
              "included": true,
              "description": "Higher disk throughput accelerates backups, restores, and media operations. Helps database-driven pages and search stay responsive. Useful for sites with frequent uploads and cron activity."
            },
            {
              "name": "80 Entry Processes",
              "included": true,
              "description": "Allows up to 80 simultaneous PHP/HTTP handlers before queuing. Improves resilience during traffic bursts and bot activity. Pair with caching to maximize effective concurrency."
            },
            {
              "name": "PHP Memory Limit: 3072 MB",
              "included": true,
              "description": "Generous headroom for complex builders, analytics, and integrations. Reduces failures on large imports and image optimizations. Well-suited for plugin-dense WordPress stacks."
            },
            {
              "name": "1,000,000 Inodes Limit",
              "included": true,
              "description": "Room for roughly one million files/directories across the account. Supports very large media libraries, caches, and logs. Periodic housekeeping keeps usage efficient and backups fast."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        },
        {
          "title": "Advanced Security Features (Enhanced)",
          "features": [
            {
              "name": "Imunify360 Security Suite",
              "included": true,
              "description": "Always-on malware scanning, WAF rules, and proactive defense. Quarantines suspicious files and blocks exploit attempts. Centralized dashboard shows threats and actions."
            },
            {
              "name": "DDoS Protection (Advanced)",
              "included": true,
              "description": "Enhanced network-layer filtering and scrubbing mitigate large volumetric attacks. Adaptive detection helps distinguish legitimate spikes from hostile traffic. Keeps availability high during campaigns and peak seasons."
            },
            {
              "name": "Web Application Firewall (WAF)",
              "included": true,
              "description": "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              "name": "Brute Force Protection",
              "included": true,
              "description": "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            },
            {
              "name": "Two-Factor Authentication (2FA)",
              "included": true,
              "description": "Require a second factor, like a one-time code, in addition to a password. Greatly reduces the risk of account takeover even if credentials leak. Works with popular authenticator apps."
            },
            {
              "name": "Real-Time Malware Scanning",
              "included": true,
              "description": "Continuously monitors new and modified files for signs of infection. Suspect items are quarantined automatically to prevent spread. Detailed alerts help you remediate quickly."
            },
            {
              "name": "Hotlink Protection",
              "included": true,
              "description": "Stops other sites from embedding your images and media. Preserves bandwidth and prevents unexpected usage bills. You can whitelist trusted referrers."
            },
            {
              "name": "Free SSL Certificate (Lifetime)",
              "included": true,
              "description": "Permanent HTTPS for all your domains without renewal costs. Protects logins, checkouts, and forms in transit. Improves visitor trust and can aid search visibility."
            }
          ]
        },
        {
          "title": "Performance Enhancements",
          "features": [
            {
              "name": "100% Network Uptime SLA",
              "included": true,
              "description": "Zero-downtime network target for the covered components. SLA credits apply if availability falls short, per terms. Redundancy and active monitoring support this commitment."
            },
            {
              "name": "Cloud Load Balancing",
              "included": true,
              "description": "Distributes traffic across multiple servers or nodes to avoid hotspots. Improves fault tolerance and enables rolling updates. Helps sustain fast responses during spikes."
            },
            {
              "name": "AI-Powered Auto-Scaling",
              "included": true,
              "description": "Adjusts CPU, RAM, or container replicas in response to real-time demand. Keeps performance steady without manual intervention. Useful for campaigns, sales, and unpredictable traffic."
            },
            {
              "name": "Global CDN Integration (Cloudflare Enterprise)",
              "included": true,
              "description": "Delivers content faster worldwide with enterprise-level CDN integration."
            },
            {
              "name": "Optimized for Google Core Web Vitals",
              "included": true,
              "description": "Ensures top performance scores for SEO and user experience. Guidance and tooling help improve LCP, FID/INP, and CLS. Works best alongside caching and a tuned theme."
            },
            {
              "name": "Real-Time Resource Monitoring",
              "included": true,
              "description": "Live dashboards track CPU, memory, disk, and bandwidth usage. Alerts flag anomalies so you can act before users feel it. Historical views help with capacity planning."
            }
          ]
        },
        {
          "title": "Premium Support & Assistance",
          "features": [
            {
              "name": "24/7 Cloud Hosting Expert Support",
              "included": true,
              "description": "Round-the-clock access to certified engineers who understand scaling and performance. We troubleshoot stack issues and provide best-practice guidance. Custom development remains out of scope, but we’ll advise on options."
            },
            {
              "name": "30-Minute Guaranteed Email Response",
              "included": true,
              "description": "Support tickets receive an initial human reply within 30 minutes. Expect triage, next steps, or ETA in that first message. Complex fixes may take longer but you won’t be left hanging."
            },
            {
              "name": "Step-by-Step Onboarding Guide",
              "included": true,
              "description": "A clear launch checklist covering DNS, SSL, CDN, and caching. Helps you avoid common pitfalls and go live smoothly. Includes post-launch hardening tips."
            },
            {
              "name": "Live Chat & WhatsApp Support",
              "included": true,
              "description": "Get instant help through web chat or WhatsApp when tickets aren’t fast enough. Great for quick troubleshooting and guidance. Escalations move to specialists as needed."
            },
            {
              "name": "Comprehensive Knowledge Base & Tutorials",
              "included": true,
              "description": "Step-by-step articles cover setup, security, and optimization. Screenshots and copy-paste commands make tasks easy. New content is added as features evolve."
            }
          ]
        },
        {
          "title": "Developer-Friendly Features",
          "features": [
            {
              "name": "SSH Access",
              "included": true,
              "description": "Secure shell access for CLI workflows and deployments. Use rsync, composer, npm, and WP-CLI efficiently. Public-key auth keeps access tight."
            },
            {
              "name": "Git Integration",
              "included": true,
              "description": "Pull from your repositories and deploy with minimal friction. Keep releases versioned and auditable. Works well with popular CI/CD pipelines."
            },
            {
              "name": "WP-CLI Support",
              "included": true,
              "description": "Manage WordPress from the command line for speed and repeatability. Bulk-update plugins, search-replace, and manage users. Perfect for scripted maintenance."
            },
            {
              "name": "Custom Cron Jobs",
              "included": true,
              "description": "Schedule background tasks like backups, imports, or emails. Fine-tune run times to avoid peak traffic. Logs help you verify successful execution."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            },
            {
              "name": "Staging Environments",
              "included": true,
              "description": "Create safe sandboxes to test updates, plugins, and theme changes. Push to production when verified without manual migrations. Reduces risk during releases and redesigns."
            },
            {
              "name": "Database Optimization Tools",
              "included": true,
              "description": "Analyze slow queries and tune MySQL parameters to lower latency. Schedule index maintenance and table cleanups safely. Dashboards surface hotspots so you can keep performance consistent at scale."
            }
          ]
        }
      ],
    },
    {
      id: "business",
      name: "Business",
      description: "Enterprise hosting with unlimited resources and priority support for critical projects.",
      href: "https://my.hostfame.com/index.php?rp=/store/managed-hosting/ultimate",
      hrefBdt: "https://my.hostfame.com/index.php?rp=/store/managed-hosting-bd/ultimate",
      icon: "/assets/pricing/ultimate.svg",
      monthlyPrice: 149.99,
      yearlyPrice: 79.99,
      monthlyPrevPrice: 149.99,
      yearlyPrevPrice: 359.88,
      renewalTextMonthly: "$149.99/Monthly when you renew",
      renewalTextYearly: "$79.99/Monthly when you renew",
      guarantee: "30 Days Money Back guarantee",
      monthlyPriceBdt: 8999,
      yearlyPriceBdt: 52990,
      monthlyPrevPriceBdt: 8999,
      yearlyPrevPriceBdt: 107988,
      renewalTextMonthlyBdt: "Renews at  ৳75,590/year",
      renewalTextYearlyBdt: "Renews at  ৳75,590/year",
      offer: 46,
      offerBdt: 50,
      currency: "$",
      ctaText: "Choose Plan",
      features: [
        {
          "title": "Features",
          "features": [
            {
              "name": "Unlimited NVMe SSD Storage",
              "included": true,
              "description": "Store as much content, media, and archives as your projects demand without manual capacity planning. NVMe delivers ultra-low latency and high IOPS so sites remain snappy as they grow. Usage remains subject to fair-use and inode limits for platform health."
            },
            {
              "name": "Unlimited Websites",
              "included": true,
              "description": "Host an unlimited number of separate projects under one plan. Keep each site isolated with its own directories, databases, and settings. Ideal for agencies, multi-brand companies, and resellers."
            },
            {
              "name": "Unmetered Bandwidth",
              "included": true,
              "description": "No hard caps on monthly traffic or page views. Your site can handle viral spikes without surprise overage fees. Fair-use policies still apply to keep the network healthy."
            },
            {
              "name": "Free SSL Certificate (Lifetime)",
              "included": true,
              "description": "Permanent HTTPS for all your domains without renewal costs. Protects logins, checkouts, and forms in transit. Improves visitor trust and can aid search visibility."
            },
            {
              "name": "12 vCPU Cores",
              "included": true,
              "description": "Twelve virtual CPU cores provide massive parallelism for PHP workers, queues, and background jobs. Keeps complex, dynamic workloads responsive during heavy traffic. Suited to large multi-site fleets, WooCommerce, and search/indexing tasks."
            },
            {
              "name": "32 GB RAM",
              "included": true,
              "description": "Large memory pool for hefty object caches, image processing, and analytics. Cuts down on out-of-memory errors during imports and batch tasks. Comfortable for high-traffic stores and plugin-dense sites."
            },
            {
              "name": "Daily Automated Backups (45 Days Retention)",
              "included": true,
              "description": "Automatic daily restore points retained for up to 45 days. Roll back files, databases, or whole accounts to a known-good state. The extended window helps with long-running projects and compliance needs."
            },
            {
              "name": "1-Click App Installer",
              "included": true,
              "description": "Install WordPress and 400+ popular apps in a single step. Handles databases and configs automatically with sensible defaults. Ideal for fast prototypes and standardized rollouts."
            },
            {
              "name": "Global CDN Integration (Cloudflare Enterprise)",
              "included": true,
              "description": "Delivers content faster worldwide with enterprise-level CDN integration."
            },
            {
              "name": "100% Uptime SLA",
              "included": true,
              "description": "A contractual target of zero network downtime for the covered scope. Credits apply per SLA terms if the target is missed. Redundant networking and continuous monitoring back the commitment."
            },
            {
              "name": "15-Minute Guaranteed Email Response",
              "included": true,
              "description": "We guarantee an initial human reply to your ticket within 15 minutes. You’ll receive acknowledgment plus triage and next steps or an ETA. Complex fixes may take longer, but you won’t be left waiting."
            },
            {
              "name": "30-Day Money-Back Guarantee",
              "included": true,
              "description": "Try the service risk-free for 30 days. If it’s not a fit, request a full refund on hosting fees. Domain registrations and third-party add-ons may be excluded."
            }
          ]
        },
        {
          "title": "Upgraded Technical Specifications",
          "features": [
            {
              "name": "12 vCPU Cores",
              "included": true,
              "description": "Twelve virtual CPU cores provide massive parallelism for PHP workers, queues, and background jobs. Keeps complex, dynamic workloads responsive during heavy traffic. Suited to large multi-site fleets, WooCommerce, and search/indexing tasks."
            },
            {
              "name": "32 GB RAM",
              "included": true,
              "description": "Large memory pool for hefty object caches, image processing, and analytics. Cuts down on out-of-memory errors during imports and batch tasks. Comfortable for high-traffic stores and plugin-dense sites."
            },
            {
              "name": "150 MB/s I/O Speed",
              "included": true,
              "description": "Ultra-high disk throughput accelerates backups, restores, and media processing. Keeps database-heavy pages and search queries responsive under load. Ideal for busy upload workflows and frequent cron activity."
            },
            {
              "name": "150 Entry Processes",
              "included": true,
              "description": "Allows up to 150 simultaneous PHP/HTTP handlers before queuing. Great for high concurrency during campaigns and peak seasons. Pair with caching to turn capacity into real-world throughput."
            },
            {
              "name": "PHP Memory Limit: 6144 MB",
              "included": true,
              "description": "Expansive headroom for enterprise builders, search, analytics, and integrations. Minimizes failures on huge imports and complex page renders. Excellent for plugin-dense WordPress stacks."
            },
            {
              "name": "2,000,000 Inodes Limit",
              "included": true,
              "description": "Space for roughly two million files and directories across the account. Supports giant media libraries, extensive logs, and cache footprints. Routine housekeeping keeps usage efficient and backups fast."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            }
          ]
        },
        {
          "title": "Advanced Security Features (Enterprise)",
          "features": [
            {
              "name": "Imunify360 Security Suite (Enterprise)",
              "included": true,
              "description": "Enterprise-grade AI-powered malware protection with proactive threat detection."
            },
            {
              "name": "DDoS Protection (Enterprise-Level)",
              "included": true,
              "description": "Enterprise-level protection against large-scale DDoS attacks."
            },
            {
              "name": "Web Application Firewall (WAF)",
              "included": true,
              "description": "Filters malicious requests before they reach WordPress/PHP. Shields against common attacks like SQLi, XSS, and RCE patterns. Rules are updated to track emerging threats."
            },
            {
              "name": "Brute Force Protection",
              "included": true,
              "description": "Rate-limits repeated login attempts across key services. Automatically blocks abusive IPs and known bad actors. Reduces account takeover risks significantly."
            },
            {
              "name": "Two-Factor Authentication (2FA)",
              "included": true,
              "description": "Require a second factor, like a one-time code, in addition to a password. Greatly reduces the risk of account takeover even if credentials leak. Works with popular authenticator apps."
            },
            {
              "name": "Real-Time Malware Scanning & Auto-Healing",
              "included": true,
              "description": "Continuously scans new and modified files for indicators of compromise. Automatically quarantines and repairs common infections to prevent spread. Alerts and reports document actions taken for your records."
            },
            {
              "name": "Hotlink Protection",
              "included": true,
              "description": "Stops other sites from embedding your images and media. Preserves bandwidth and prevents unexpected usage bills. You can whitelist trusted referrers."
            },
            {
              "name": "Free SSL Certificate (Lifetime)",
              "included": true,
              "description": "Permanent HTTPS for all your domains without renewal costs. Protects logins, checkouts, and forms in transit. Improves visitor trust and can aid search visibility."
            }
          ]
        },
        {
          "title": "Performance Enhancements",
          "features": [
            {
              "name": "100% Network Uptime SLA",
              "included": true,
              "description": "Zero-downtime network target for the covered components. SLA credits apply if availability falls short, per terms. Redundancy and active monitoring support this commitment."
            },
            {
              "name": "Cloud Load Balancing",
              "included": true,
              "description": "Distributes traffic across multiple servers or nodes to avoid hotspots. Improves fault tolerance and enables rolling updates. Helps sustain fast responses during spikes."
            },
            {
              "name": "AI-Powered Auto-Scaling",
              "included": true,
              "description": "Adjusts CPU, RAM, or container replicas in response to real-time demand. Keeps performance steady without manual intervention. Useful for campaigns, sales, and unpredictable traffic."
            },
            {
              "name": "Global CDN Integration (Cloudflare Enterprise)",
              "included": true,
              "description": "Delivers content faster worldwide with enterprise-level CDN integration."
            },
            {
              "name": "Optimized for Google Core Web Vitals",
              "included": true,
              "description": "Ensures top performance scores for SEO and user experience. Guidance and tooling help improve LCP, FID/INP, and CLS. Works best alongside caching and a tuned theme."
            },
            {
              "name": "Real-Time Resource Monitoring",
              "included": true,
              "description": "Live dashboards track CPU, memory, disk, and bandwidth usage. Alerts flag anomalies so you can act before users feel it. Historical views help with capacity planning."
            }
          ]
        },
        {
          "title": "Premium Support & Assistance",
          "features": [
            {
              "name": "24/7 Enterprise Cloud Hosting Expert Support",
              "included": true,
              "description": "Priority enterprise-level support from certified cloud hosting experts around the clock."
            },
            {
              "name": "15-Minute Guaranteed Email Response",
              "included": true,
              "description": "We guarantee an initial human reply to your ticket within 15 minutes. You’ll receive acknowledgment plus triage and next steps or an ETA. Complex fixes may take longer, but you won’t be left waiting."
            },
            {
              "name": "Dedicated Account Manager",
              "included": true,
              "description": "A single point of contact who learns your stack and goals. Coordinates planning, roadmaps, and escalations across teams. Helps you get the most from the platform."
            },
            {
              "name": "Live Chat & WhatsApp Support",
              "included": true,
              "description": "Get instant help through web chat or WhatsApp when tickets aren’t fast enough. Great for quick troubleshooting and guidance. Escalations move to specialists as needed."
            },
            {
              "name": "Comprehensive Knowledge Base & Tutorials",
              "included": true,
              "description": "Step-by-step articles cover setup, security, and optimization. Screenshots and copy-paste commands make tasks easy. New content is added as features evolve."
            }
          ]
        },
        {
          "title": "Developer-Friendly Features",
          "features": [
            {
              "name": "SSH Access",
              "included": true,
              "description": "Secure shell access for CLI workflows and deployments. Use rsync, composer, npm, and WP-CLI efficiently. Public-key auth keeps access tight."
            },
            {
              "name": "Git Integration",
              "included": true,
              "description": "Pull from your repositories and deploy with minimal friction. Keep releases versioned and auditable. Works well with popular CI/CD pipelines."
            },
            {
              "name": "WP-CLI Support",
              "included": true,
              "description": "Manage WordPress from the command line for speed and repeatability. Bulk-update plugins, search-replace, and manage users. Perfect for scripted maintenance."
            },
            {
              "name": "Custom Cron Jobs",
              "included": true,
              "description": "Schedule background tasks like backups, imports, or emails. Fine-tune run times to avoid peak traffic. Logs help you verify successful execution."
            },
            {
              "name": "Multiple PHP Versions",
              "included": true,
              "description": "Select and switch PHP versions per account for compatibility. Test new versions safely before committing. Extensions can be toggled as your stack requires."
            },
            {
              "name": "Staging Environments",
              "included": true,
              "description": "Create safe sandboxes to test updates, plugins, and theme changes. Push to production when verified without manual migrations. Reduces risk during releases and redesigns."
            },
            {
              "name": "Database Optimization Tools",
              "included": true,
              "description": "Analyze slow queries and tune MySQL parameters to lower latency. Schedule index maintenance and table cleanups safely. Dashboards surface hotspots so you can keep performance consistent at scale."
            }
          ]
        }
      ],
    },
  ],
};
