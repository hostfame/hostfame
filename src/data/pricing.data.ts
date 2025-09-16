import { PricingData } from "@/types/pricing.types";

export const webHostingPricingData: PricingData = {
  title: "Choose Your Perfect Plan",
  yearlyDiscount: 76,
  plans: [
    {
      id: "starter",
      name: "Starter",
      description:
        "Ideal for multiple sites with storage, WordPress & Laravel features",
      icon: "/assets/pricing/starter-42.svg",
      monthlyPrice: 1099,
      yearlyPrice: 3595,
      currency: "৳",
      guarantee: "30 Days Money back Guarantee",
      specialOffer: {
        title: "Special Gift",
        description: "Landing page design and Facebook ads mastery course",
        badgeColor: "gray",
      },
      ctaText: "Choose Plan",
      renewalText: "Renew at Same Price, Every year",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "10 GB NVMe Storage",
              included: true,
              description: "High-speed NVMe storage to host your website files efficiently.",
            },
            {
              name: "Increased Website Speed",
              included: true,
              description: "Optimized server configuration to load your site faster.",
            },
            {
              name: "5 Domain Hosted",
              included: true,
              description: "Host up to 5 websites under this plan.",
            },
            {
              name: "Free .COM Domain",
              included: true,
              description: "Get a free .COM domain for one year when you sign up.",
            },
            {
              name: "Lifetime Free SSL",
              included: true,
              description: "Secure your websites with SSL encryption for free, forever.",
            },
            {
              name: "One Click WordPress Install",
              included: true,
              description: "Install WordPress instantly with a single click.",
            },
            {
              name: "Advanced Malware Scanner",
              included: true,
              description: "Automatically scan your website for malware and threats.",
            },
            {
              name: "Unlimited Bandwidth",
              included: true,
              description: "No limits on data transfer, ensuring smooth traffic handling.",
            },
          ],
        },
        {
          title: "Primary",
          features: [
            {
              name: "Unlimited Subdomains",
              included: true,
              description: "Create unlimited subdomains to organize your websites efficiently.",
            },
            {
              name: "Unlimited Emails",
              included: true,
              description: "Set up as many professional email accounts as you need.",
            },
            {
              name: "Unlimited Databases",
              included: true,
              description: "Host unlimited MySQL databases for your applications.",
            },
            {
              name: "Genuine Latest Control Panel",
              included: true,
              description: "Manage your hosting easily using the latest control panel interface.",
            },
            {
              name: "CloudLinux Operating System",
              included: true,
              description: "Secure and stable OS designed for shared hosting performance.",
            },
            {
              name: "LiteSpeed Super Cache",
              included: true,
              description: "Boost website speed with LiteSpeed caching technology.",
            },
            {
              name: "Softaculous App Installer",
              included: true,
              description: "Install popular apps and CMS like WordPress in one click.",
            },
            {
              name: "Free WordPress Toolkit",
              included: true,
              description: "Advanced tools to manage and optimize WordPress websites.",
            },
            {
              name: "AI Website Builder",
              included: true,
              description: "Create websites quickly using AI-powered templates and automation.",
            },
            {
              name: "Node Js and Python",
              included: false,
              description: "Support for Node.js and Python apps (not included in this plan).",
            },
            {
              name: "Fastest WordPress Site (AccelerateWP)",
              included: false,
              description: "AccelerateWP plugin to make WordPress faster (not included in this plan).",
            },
            {
              name: "Premium Website Optimization",
              included: false,
              description: "Advanced tools for optimizing website speed and SEO (not included in this plan).",
            },
            {
              name: "Content Optimization (CDN)",
              included: false,
              description: "Content Delivery Network for faster global delivery (not included in this plan).",
            },
          ],
        },
        {
          title: "Server",
          features: [
            {
              name: "99.99% Uptime Guarantee",
              included: true,
              description: "Ensures your website is online almost all the time, minimizing downtime.",
            },
            {
              name: "2 Core Hosting CPU",
              included: true,
              description: "Two CPU cores allocated for handling your website processes efficiently.",
            },
            {
              name: "2 GB Hosting RAM",
              included: true,
              description: "Memory available for smooth website and application performance.",
            },
            {
              name: "15 MBPS I/O Speed",
              included: true,
              description: "Input/output speed for fast file access and database operations.",
            },
            {
              name: "20 EP (Entry Process)",
              included: true,
              description: "Maximum concurrent processes allowed on your hosting account.",
            },
            {
              name: "PhpMyAdmin Tool",
              included: true,
              description: "Web-based tool for managing your MySQL databases easily.",
            },
            {
              name: "MySQL Database",
              included: true,
              description: "Reliable relational database support for storing website data.",
            },
            {
              name: "Imunify 360 Security",
              included: true,
              description: "Comprehensive security system protecting your server from malware and attacks.",
            },
            {
              name: "Daily Cloud Backup",
              included: true,
              description: "Automatic backup of your website and databases every day.",
            },
            {
              name: "Multiple Hosting Locations",
              included: true,
              description: "Choose from various global server locations for better performance.",
            },
            {
              name: "Host PHP & Laravel Script",
              included: true,
              description: "Full support for hosting PHP and Laravel applications.",
            },
            {
              name: "E-Commerce Optimised Server",
              included: false,
              description: "Special optimizations for eCommerce platforms (not included in this plan).",
            },
            {
              name: "SSH/Terminal Access",
              included: false,
              description: "Secure Shell access to run server commands remotely (not included in this plan).",
            },
            {
              name: "Shell Access (Jailed)",
              included: false,
              description: "Limited command-line access in a restricted environment (not included in this plan).",
            },
          ],
        },
        {
          title: "Security",
          features: [
            {
              name: "24/7 Monitoring By Experts",
              included: true,
              description: "Continuous monitoring by security experts to detect and prevent issues.",
            },
            {
              name: "Daily Virus & Malware Scan",
              included: true,
              description: "Automatic daily scanning for viruses and malware on your server.",
            },
            {
              name: "Integrated Server Firewall",
              included: true,
              description: "Built-in firewall to block unauthorized access and protect your server.",
            },
            {
              name: "Two Factor Authentication",
              included: true,
              description: "Extra layer of security requiring a second verification step for logins.",
            },
            {
              name: "CXS, CSM, MSFE Addon",
              included: true,
              description: "Advanced security addons to strengthen your server against attacks.",
            },
            {
              name: "Included Premium KernelCare",
              included: true,
              description: "Automatic kernel patching without server downtime for improved security.",
            },
            {
              name: "Realtime Malware Detection",
              included: true,
              description: "Instantly detects malware in real time to prevent damage.",
            },
          ],
        },
        {
          title: "Support",
          features: [
            {
              name: "24/7 Instant Chat Support",
              included: true,
              description: "Get immediate assistance anytime via live chat with our support team.",
            },
            {
              name: "30 Minute or Less Ticket Reply",
              included: true,
              description: "Support tickets are answered within 30 minutes to keep your site running smoothly.",
            },
            {
              name: "24/7 Live Call Support",
              included: true,
              description: "Call our experts any time for live assistance with your hosting issues.",
            },
            {
              name: "24/7 WhatsApp Support",
              included: true,
              description: "Reach support via WhatsApp at any time for quick help.",
            },
            {
              name: "Priority Website Support",
              included: false,
              description: "Get faster response and priority assistance for website issues (not included in this plan).",
            },
          ],
        },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description:
        "Best solution for eCommerce & product landing page websites",
      icon: "/assets/pricing/pro.svg",
      monthlyPrice: 1499,
      yearlyPrice: 5495,
      currency: "৳",
      isPopular: true,
      guarantee: "30 Days Money back Guarantee",
      specialOffer: {
        title: "Special Gift",
        description: "Landing page design and Facebook ads mastery course",
        badgeColor: "green",
      },
      ctaText: "Choose Plan",
      renewalText: "Renew at Same Price, Every year",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "10 GB NVMe Storage",
              included: true,
              description: "High-speed NVMe storage to host your website files efficiently.",
            },
            {
              name: "Increased Website Speed",
              included: true,
              description: "Optimized server configuration to load your site faster.",
            },
            {
              name: "5 Domain Hosted",
              included: true,
              description: "Host up to 5 websites under this plan.",
            },
            {
              name: "Free .COM Domain",
              included: true,
              description:
                "Get a free .COM domain for one year when you sign up.",
            },
            {
              name: "Lifetime Free SSL",
              included: true,
              description:
                "Secure your websites with SSL encryption for free, forever.",
            },
            {
              name: "One Click WordPress Install",
              included: true,
              description: "Install WordPress instantly with a single click.",
            },
            {
              name: "Advanced Malware Scanner",
              included: true,
              description:
                "Automatically scan your website for malware and threats.",
            },
            {
              name: "Unlimited Bandwidth",
              included: true,
              description:
                "No limits on data transfer, ensuring smooth traffic handling.",
            },
          ],
        },
        {
          title: "Primary",
          features: [
            {
              name: "Unlimited Subdomains",
              included: true,
              description:
                "Create unlimited subdomains to organize your websites efficiently.",
            },
            {
              name: "Unlimited Emails",
              included: true,
              description:
                "Set up as many professional email accounts as you need.",
            },
            {
              name: "Unlimited Databases",
              included: true,
              description:
                "Host unlimited MySQL databases for your applications.",
            },
            {
              name: "Genuine Latest Control Panel",
              included: true,
              description:
                "Manage your hosting easily using the latest control panel interface.",
            },
            {
              name: "CloudLinux Operating System",
              included: true,
              description:
                "Secure and stable OS designed for shared hosting performance.",
            },
            {
              name: "LiteSpeed Super Cache",
              included: true,
              description:
                "Boost website speed with LiteSpeed caching technology.",
            },
            {
              name: "Softaculous App Installer",
              included: true,
              description:
                "Install popular apps and CMS like WordPress in one click.",
            },
            {
              name: "Free WordPress Toolkit",
              included: true,
              description:
                "Advanced tools to manage and optimize WordPress websites.",
            },
            {
              name: "AI Website Builder",
              included: true,
              description:
                "Create websites quickly using AI-powered templates and automation.",
            },
            {
              name: "Node Js and Python",
              included: true,
              description:
                "Support for Node.js and Python apps (not included in this plan).",
            },
            {
              name: "Fastest WordPress Site (AccelerateWP)",
              included: true,
              description:
                "AccelerateWP plugin to make WordPress faster (not included in this plan).",
            },
            {
              name: "Premium Website Optimization",
              included: true,
              description:
                "Advanced tools for optimizing website speed and SEO (not included in this plan).",
            },
            {
              name: "Content Optimization (CDN)",
              included: true,
              description:
                "Content Delivery Network for faster global delivery (not included in this plan).",
            },
          ],
        },
        {
          title: "Server",
          features: [
            {
              name: "99.99% Uptime Guarantee",
              included: true,
              description:
                "Ensures your website is online almost all the time, minimizing downtime.",
            },
            {
              name: "2 Core Hosting CPU",
              included: true,
              description:
                "Two CPU cores allocated for handling your website processes efficiently.",
            },
            {
              name: "2 GB Hosting RAM",
              included: true,
              description:
                "Memory available for smooth website and application performance.",
            },
            {
              name: "15 MBPS I/O Speed",
              included: true,
              description:
                "Input/output speed for fast file access and database operations.",
            },
            {
              name: "20 EP (Entry Process)",
              included: true,
              description:
                "Maximum concurrent processes allowed on your hosting account.",
            },
            {
              name: "PhpMyAdmin Tool",
              included: true,
              description:
                "Web-based tool for managing your MySQL databases easily.",
            },
            {
              name: "MySQL Database",
              included: true,
              description:
                "Reliable relational database support for storing website data.",
            },
            {
              name: "Imunify 360 Security",
              included: true,
              description:
                "Comprehensive security system protecting your server from malware and attacks.",
            },
            {
              name: "Daily Cloud Backup",
              included: true,
              description:
                "Automatic backup of your website and databases every day.",
            },
            {
              name: "Multiple Hosting Locations",
              included: true,
              description:
                "Choose from various global server locations for better performance.",
            },
            {
              name: "Host PHP & Laravel Script",
              included: true,
              description:
                "Full support for hosting PHP and Laravel applications.",
            },
            {
              name: "E-Commerce Optimised Server",
              included: true,
              description:
                "Special optimizations for eCommerce platforms (not included in this plan).",
            },
            {
              name: "SSH/Terminal Access",
              included: true,
              description:
                "Secure Shell access to run server commands remotely (not included in this plan).",
            },
            {
              name: "Shell Access (Jailed)",
              included: true,
              description:
                "Limited command-line access in a restricted environment (not included in this plan).",
            },
          ],
        },
        {
          title: "Security",
          features: [
            {
              name: "24/7 Monitoring By Experts",
              included: true,
              description:
                "Continuous monitoring by security experts to detect and prevent issues.",
            },
            {
              name: "Daily Virus & Malware Scan",
              included: true,
              description:
                "Automatic daily scanning for viruses and malware on your server.",
            },
            {
              name: "Integrated Server Firewall",
              included: true,
              description:
                "Built-in firewall to block unauthorized access and protect your server.",
            },
            {
              name: "Two Factor Authentication",
              included: true,
              description:
                "Extra layer of security requiring a second verification step for logins.",
            },
            {
              name: "CXS, CSM, MSFE Addon",
              included: true,
              description:
                "Advanced security addons to strengthen your server against attacks.",
            },
            {
              name: "Included Premium KernelCare",
              included: true,
              description:
                "Automatic kernel patching without server downtime for improved security.",
            },
            {
              name: "Realtime Malware Detection",
              included: true,
              description:
                "Instantly detects malware in real time to prevent damage.",
            },
          ],
        },
        {
          title: "Support",
          features: [
            {
              name: "24/7 Instant Chat Support",
              included: true,
              description:
                "Get immediate assistance anytime via live chat with our support team.",
            },
            {
              name: "30 Minute or Less Ticket Reply",
              included: true,
              description:
                "Support tickets are answered within 30 minutes to keep your site running smoothly.",
            },
            {
              name: "24/7 Live Call Support",
              included: true,
              description:
                "Call our experts any time for live assistance with your hosting issues.",
            },
            {
              name: "24/7 WhatsApp Support",
              included: true,
              description:
                "Reach support via WhatsApp at any time for quick help.",
            },
            {
              name: "Priority Website Support",
              included: false,
              description:
                "Get faster response and priority assistance for website issues (not included in this plan).",
            },
          ],
        },
      ],
    },
    {
      id: "ultimate",
      name: "Ultimate",
      description:
        "Great for businesses with high traffic and focused on advertising",
      icon: "/assets/pricing/ultimate.svg",
      monthlyPrice: 2499,
      yearlyPrice: 7995,
      currency: "৳",
      guarantee: "30 Days Money back Guarantee",
      specialOffer: {
        title: "Special Gift",
        description: "Landing page design and Facebook ads mastery course",
        badgeColor: "teal",
      },
      ctaText: "Choose Plan",
      renewalText: "Renew at Same Price, Every year",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "10 GB NVMe Storage",
              included: true,
              description:
                "High-speed NVMe storage to host your website files efficiently.",
            },
            {
              name: "Increased Website Speed",
              included: true,
              description:
                "Optimized server configuration to load your site faster.",
            },
            {
              name: "5 Domain Hosted",
              included: true,
              description: "Host up to 5 websites under this plan.",
            },
            {
              name: "Free .COM Domain",
              included: true,
              description:
                "Get a free .COM domain for one year when you sign up.",
            },
            {
              name: "Lifetime Free SSL",
              included: true,
              description:
                "Secure your websites with SSL encryption for free, forever.",
            },
            {
              name: "One Click WordPress Install",
              included: true,
              description: "Install WordPress instantly with a single click.",
            },
            {
              name: "Advanced Malware Scanner",
              included: true,
              description:
                "Automatically scan your website for malware and threats.",
            },
            {
              name: "Unlimited Bandwidth",
              included: true,
              description:
                "No limits on data transfer, ensuring smooth traffic handling.",
            },
          ],
        },
        {
          title: "Primary",
          features: [
            {
              name: "Unlimited Subdomains",
              included: true,
              description:
                "Create unlimited subdomains to organize your websites efficiently.",
            },
            {
              name: "Unlimited Emails",
              included: true,
              description:
                "Set up as many professional email accounts as you need.",
            },
            {
              name: "Unlimited Databases",
              included: true,
              description:
                "Host unlimited MySQL databases for your applications.",
            },
            {
              name: "Genuine Latest Control Panel",
              included: true,
              description:
                "Manage your hosting easily using the latest control panel interface.",
            },
            {
              name: "CloudLinux Operating System",
              included: true,
              description:
                "Secure and stable OS designed for shared hosting performance.",
            },
            {
              name: "LiteSpeed Super Cache",
              included: true,
              description:
                "Boost website speed with LiteSpeed caching technology.",
            },
            {
              name: "Softaculous App Installer",
              included: true,
              description:
                "Install popular apps and CMS like WordPress in one click.",
            },
            {
              name: "Free WordPress Toolkit",
              included: true,
              description:
                "Advanced tools to manage and optimize WordPress websites.",
            },
            {
              name: "AI Website Builder",
              included: true,
              description:
                "Create websites quickly using AI-powered templates and automation.",
            },
            {
              name: "Node Js and Python",
              included: true,
              description:
                "Support for Node.js and Python apps (not included in this plan).",
            },
            {
              name: "Fastest WordPress Site (AccelerateWP)",
              included: true,
              description:
                "AccelerateWP plugin to make WordPress faster (not included in this plan).",
            },
            {
              name: "Premium Website Optimization",
              included: true,
              description:
                "Advanced tools for optimizing website speed and SEO (not included in this plan).",
            },
            {
              name: "Content Optimization (CDN)",
              included: true,
              description:
                "Content Delivery Network for faster global delivery (not included in this plan).",
            },
          ],
        },
        {
          title: "Server",
          features: [
            {
              name: "99.99% Uptime Guarantee",
              included: true,
              description:
                "Ensures your website is online almost all the time, minimizing downtime.",
            },
            {
              name: "2 Core Hosting CPU",
              included: true,
              description:
                "Two CPU cores allocated for handling your website processes efficiently.",
            },
            {
              name: "2 GB Hosting RAM",
              included: true,
              description:
                "Memory available for smooth website and application performance.",
            },
            {
              name: "15 MBPS I/O Speed",
              included: true,
              description:
                "Input/output speed for fast file access and database operations.",
            },
            {
              name: "20 EP (Entry Process)",
              included: true,
              description:
                "Maximum concurrent processes allowed on your hosting account.",
            },
            {
              name: "PhpMyAdmin Tool",
              included: true,
              description:
                "Web-based tool for managing your MySQL databases easily.",
            },
            {
              name: "MySQL Database",
              included: true,
              description:
                "Reliable relational database support for storing website data.",
            },
            {
              name: "Imunify 360 Security",
              included: true,
              description:
                "Comprehensive security system protecting your server from malware and attacks.",
            },
            {
              name: "Daily Cloud Backup",
              included: true,
              description:
                "Automatic backup of your website and databases every day.",
            },
            {
              name: "Multiple Hosting Locations",
              included: true,
              description:
                "Choose from various global server locations for better performance.",
            },
            {
              name: "Host PHP & Laravel Script",
              included: true,
              description:
                "Full support for hosting PHP and Laravel applications.",
            },
            {
              name: "E-Commerce Optimised Server",
              included: true,
              description:
                "Special optimizations for eCommerce platforms (not included in this plan).",
            },
            {
              name: "SSH/Terminal Access",
              included: true,
              description:
                "Secure Shell access to run server commands remotely (not included in this plan).",
            },
            {
              name: "Shell Access (Jailed)",
              included: true,
              description:
                "Limited command-line access in a restricted environment (not included in this plan).",
            },
          ],
        },
        {
          title: "Security",
          features: [
            {
              name: "24/7 Monitoring By Experts",
              included: true,
              description:
                "Continuous monitoring by security experts to detect and prevent issues.",
            },
            {
              name: "Daily Virus & Malware Scan",
              included: true,
              description:
                "Automatic daily scanning for viruses and malware on your server.",
            },
            {
              name: "Integrated Server Firewall",
              included: true,
              description:
                "Built-in firewall to block unauthorized access and protect your server.",
            },
            {
              name: "Two Factor Authentication",
              included: true,
              description:
                "Extra layer of security requiring a second verification step for logins.",
            },
            {
              name: "CXS, CSM, MSFE Addon",
              included: true,
              description:
                "Advanced security addons to strengthen your server against attacks.",
            },
            {
              name: "Included Premium KernelCare",
              included: true,
              description:
                "Automatic kernel patching without server downtime for improved security.",
            },
            {
              name: "Realtime Malware Detection",
              included: true,
              description:
                "Instantly detects malware in real time to prevent damage.",
            },
          ],
        },
        {
          title: "Support",
          features: [
            {
              name: "24/7 Instant Chat Support",
              included: true,
              description:
                "Get immediate assistance anytime via live chat with our support team.",
            },
            {
              name: "30 Minute or Less Ticket Reply",
              included: true,
              description:
                "Support tickets are answered within 30 minutes to keep your site running smoothly.",
            },
            {
              name: "24/7 Live Call Support",
              included: true,
              description:
                "Call our experts any time for live assistance with your hosting issues.",
            },
            {
              name: "24/7 WhatsApp Support",
              included: true,
              description:
                "Reach support via WhatsApp at any time for quick help.",
            },
            {
              name: "Priority Website Support",
              included: true,
              description:
                "Get faster response and priority assistance for website issues (not included in this plan).",
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
      currency: "$",
      ctaText: "Choose Plan",
      renewalText: "$49.99/Monthly when you renew",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "150GB NVMe SSD Storage",
              included: true,
              description: "High-speed NVMe SSD storage for faster website performance.",
            },
            {
              name: "15 Websites",
              included: true,
              description: "Host up to 15 websites under one plan without extra cost.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Unlimited traffic with no bandwidth restrictions.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description: "Keep all websites secure with lifetime SSL encryption.",
            },
            {
              name: "5 vCPU Cores",
              included: true,
              description: "Powerful virtual CPU cores for smooth performance.",
            },
            {
              name: "10 GB RAM",
              included: true,
              description: "High memory allocation for resource-intensive applications.",
            },
            {
              name: "Daily Automated Backups (14 Days Retention)",
              included: true,
              description: "Automatic daily backups stored for up to 14 days.",
            },
            {
              name: "1-Click App Installer",
              included: true,
              description: "Easily install WordPress and 400+ apps in a single click.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description: "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "100% Uptime SLA",
              included: true,
              description: "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "Quick support with responses guaranteed within 30 minutes.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Risk-free hosting with a full refund if cancelled within 30 days.",
            },
          ],
        },
        {
          title: "Upgraded Technical Specifications",
          features: [
            {
              name: "5 vCPU Cores",
              included: true,
              description: "Advanced CPU power for handling high traffic and workloads.",
            },
            {
              name: "10 GB RAM",
              included: true,
              description: "Enhanced memory capacity for faster and stable operations.",
            },
            {
              name: "50 MB/s I/O Speed",
              included: true,
              description: "Fast input/output speeds for quicker file and database access.",
            },
            {
              name: "60 Entry Processes",
              included: true,
              description: "Supports up to 60 concurrent PHP processes at once.",
            },
            {
              name: "PHP Memory Limit: 2048 MB",
              included: true,
              description: "Increased PHP memory allocation for demanding applications.",
            },
            {
              name: "750,000 Inodes Limit",
              included: true,
              description: "Manage up to 750,000 files and directories efficiently.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Switch between PHP versions for better compatibility.",
            },
          ],
        },
        {
          title: "Advanced Security Features (Enhanced)",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description: "AI-powered malware protection and proactive defense system.",
            },
            {
              name: "DDoS Protection",
              included: true,
              description: "Safeguards your website from large-scale cyber attacks.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description: "Blocks malicious requests and protects web applications.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description: "Prevents unauthorized login attempts and password attacks.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Adds an extra layer of security to your accounts.",
            },
            {
              name: "Real-Time Malware Scanning",
              included: true,
              description: "Scans and removes malware instantly before it spreads.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description: "Stops other sites from stealing your images and resources.",
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
              description: "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "Cloud Load Balancing",
              included: true,
              description: "Distributes traffic across multiple servers for maximum availability.",
            },
            {
              name: "AI-Powered Auto-Scaling",
              included: true,
              description: "Automatically adjusts server resources based on traffic and usage patterns.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description: "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "Optimized for Google Core Web Vitals",
              included: true,
              description: "Ensures top performance scores for SEO and user experience.",
            },
            {
              name: "Real-Time Resource Monitoring",
              included: true,
              description: "Monitor CPU, memory, and bandwidth usage with live analytics.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 Cloud Hosting Expert Support",
              included: true,
              description: "Round-the-clock technical support from certified experts.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "Get email replies from our team within 30 minutes or less.",
            },
            {
              name: "Step-by-Step Onboarding Guide",
              included: true,
              description: "Guided assistance to help you migrate and launch quickly.",
            },
            {
              name: "Live Chat & WhatsApp Support",
              included: true,
              description: "Instant responses through chat and WhatsApp messaging.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description: "Access detailed guides, FAQs, and video tutorials anytime.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description: "Secure shell access for advanced server management.",
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
              description: "Switch between PHP versions for compatibility and performance.",
            },
            {
              name: "Staging Environments",
              included: true,
              description: "Test changes safely before deploying to production.",
            },
            {
              name: "Database Optimization Tools",
              included: true,
              description: "Optimize and maintain MySQL databases with ease.",
            },
          ],
        },
      ]
    },
    {
      id: "starter",
      name: "Starter",
      icon: "/assets/pricing/starter-42.svg",
      monthlyPrice: 69.99,
      yearlyPrice: 39.99,
      currency: "$",
      isPopular: true,
      ctaText: "Choose Plan",
      renewalText: "$49.99/Monthly when you renew",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "200GB NVMe SSD Storage",
              included: true,
              description: "High-speed NVMe SSD storage for faster website performance.",
            },
            {
              name: "25 Websites",
              included: true,
              description: "Host up to 25 websites under one plan without extra cost.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Unlimited traffic with no bandwidth restrictions.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description: "Keep all websites secure with lifetime SSL encryption.",
            },
            {
              name: "6 vCPU Cores",
              included: true,
              description: "Powerful virtual CPU cores for smooth performance.",
            },
            {
              name: "14 GB RAM",
              included: true,
              description: "High memory allocation for resource-intensive applications.",
            },
            {
              name: "Daily Automated Backups (21 Days Retention)",
              included: true,
              description: "Automatic daily backups stored for up to 21 days.",
            },
            {
              name: "1-Click App Installer",
              included: true,
              description: "Easily install WordPress and 400+ apps in a single click.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description: "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "100% Uptime SLA",
              included: true,
              description: "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "Quick support with responses guaranteed within 30 minutes.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Risk-free hosting with a full refund if cancelled within 30 days.",
            },
          ],
        },
        {
          title: "Upgraded Technical Specifications",
          features: [
            {
              name: "6 vCPU Cores",
              included: true,
              description: "Advanced CPU power for handling high traffic and workloads.",
            },
            {
              name: "14 GB RAM",
              included: true,
              description: "Enhanced memory capacity for faster and stable operations.",
            },
            {
              name: "70 MB/s I/O Speed",
              included: true,
              description: "Fast input/output speeds for quicker file and database access.",
            },
            {
              name: "80 Entry Processes",
              included: true,
              description: "Supports up to 80 concurrent PHP processes at once.",
            },
            {
              name: "PHP Memory Limit: 3072 MB",
              included: true,
              description: "Increased PHP memory allocation for demanding applications.",
            },
            {
              name: "1,000,000 Inodes Limit",
              included: true,
              description: "Manage up to 1,000,000 files and directories efficiently.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Switch between PHP versions for better compatibility.",
            },
          ],
        },
        {
          title: "Advanced Security Features (Enhanced)",
          features: [
            {
              name: "Imunify360 Security Suite",
              included: true,
              description: "AI-powered malware protection and proactive defense system.",
            },
            {
              name: "DDoS Protection (Advanced)",
              included: true,
              description: "Safeguards your website from large-scale cyber attacks.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description: "Blocks malicious requests and protects web applications.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description: "Prevents unauthorized login attempts and password attacks.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Adds an extra layer of security to your accounts.",
            },
            {
              name: "Real-Time Malware Scanning",
              included: true,
              description: "Scans and removes malware instantly before it spreads.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description: "Stops other sites from stealing your images and resources.",
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
              description: "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "Cloud Load Balancing",
              included: true,
              description: "Distributes traffic across multiple servers for maximum availability.",
            },
            {
              name: "AI-Powered Auto-Scaling",
              included: true,
              description: "Automatically adjusts server resources based on traffic and usage patterns.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description: "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "Optimized for Google Core Web Vitals",
              included: true,
              description: "Ensures top performance scores for SEO and user experience.",
            },
            {
              name: "Real-Time Resource Monitoring",
              included: true,
              description: "Monitor CPU, memory, and bandwidth usage with live analytics.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 Cloud Hosting Expert Support",
              included: true,
              description: "Round-the-clock technical support from certified experts.",
            },
            {
              name: "30-Minute Guaranteed Email Response",
              included: true,
              description: "Get email replies from our team within 30 minutes or less.",
            },
            {
              name: "Step-by-Step Onboarding Guide",
              included: true,
              description: "Guided assistance to help you migrate and launch quickly.",
            },
            {
              name: "Live Chat & WhatsApp Support",
              included: true,
              description: "Instant responses through chat and WhatsApp messaging.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description: "Access detailed guides, FAQs, and video tutorials anytime.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description: "Secure shell access for advanced server management.",
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
              description: "Switch between PHP versions for compatibility and performance.",
            },
            {
              name: "Staging Environments",
              included: true,
              description: "Test changes safely before deploying to production.",
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
      id: "pro",
      name: "Pro",
      icon: "/assets/pricing/pro.svg",
      monthlyPrice: 99.99,
      yearlyPrice: 54.99,
      currency: "$",
      ctaText: "Choose Plan",
      renewalText: "$49.99/Monthly when you renew",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "300GB NVMe SSD Storage",
              included: true,
              description: "High-speed NVMe SSD storage for ultra-fast website performance.",
            },
            {
              name: "50 Websites",
              included: true,
              description: "Host up to 50 websites under one plan without extra cost.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Unlimited traffic with no bandwidth restrictions.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description: "Keep all websites secure with lifetime SSL encryption.",
            },
            {
              name: "8 vCPU Cores",
              included: true,
              description: "Powerful virtual CPU cores for high-traffic websites and applications.",
            },
            {
              name: "20 GB RAM",
              included: true,
              description: "High memory allocation for resource-intensive applications.",
            },
            {
              name: "Daily Automated Backups (30 Days Retention)",
              included: true,
              description: "Automatic daily backups stored for up to 30 days for data safety.",
            },
            {
              name: "1-Click App Installer",
              included: true,
              description: "Easily install WordPress and 400+ apps in a single click.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description: "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "100% Uptime SLA",
              included: true,
              description: "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description: "Priority support with responses guaranteed within 15 minutes.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Risk-free hosting with a full refund if cancelled within 30 days.",
            },
          ],
        },
        {
          title: "Upgraded Technical Specifications",
          features: [
            {
              name: "8 vCPU Cores",
              included: true,
              description: "Advanced CPU power for handling high traffic and workloads.",
            },
            {
              name: "20 GB RAM",
              included: true,
              description: "Enhanced memory capacity for faster and stable operations.",
            },
            {
              name: "100 MB/s I/O Speed",
              included: true,
              description: "Fast input/output speeds for quicker file and database access.",
            },
            {
              name: "100 Entry Processes",
              included: true,
              description: "Supports up to 100 concurrent PHP processes at once.",
            },
            {
              name: "PHP Memory Limit: 4096 MB",
              included: true,
              description: "Increased PHP memory allocation for demanding applications.",
            },
            {
              name: "1,500,000 Inodes Limit",
              included: true,
              description: "Manage up to 1,500,000 files and directories efficiently.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Switch between PHP versions for better compatibility.",
            },
          ],
        },
        {
          title: "Advanced Security Features (Premium)",
          features: [
            {
              name: "Imunify360 Security Suite (Advanced)",
              included: true,
              description: "AI-powered malware protection with proactive threat detection.",
            },
            {
              name: "DDoS Protection (Enterprise-Level)",
              included: true,
              description: "Enterprise-level protection against large-scale DDoS attacks.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description: "Blocks malicious requests and protects web applications.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description: "Prevents unauthorized login attempts and password attacks.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Adds an extra layer of security to your accounts.",
            },
            {
              name: "Real-Time Malware Scanning & Auto-Healing",
              included: true,
              description: "Scans for malware and automatically fixes issues in real-time.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description: "Prevents other sites from using your images and resources.",
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
              description: "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "Cloud Load Balancing",
              included: true,
              description: "Distributes traffic across multiple servers for maximum availability.",
            },
            {
              name: "AI-Powered Auto-Scaling",
              included: true,
              description: "Automatically adjusts server resources based on traffic and usage patterns.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description: "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "Optimized for Google Core Web Vitals",
              included: true,
              description: "Ensures top performance scores for SEO and user experience.",
            },
            {
              name: "Real-Time Resource Monitoring",
              included: true,
              description: "Monitor CPU, memory, and bandwidth usage with live analytics.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 Priority Cloud Hosting Expert Support",
              included: true,
              description: "Priority support from certified cloud hosting experts around the clock.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description: "Priority support with email responses within 15 minutes.",
            },
            {
              name: "Step-by-Step Advanced Onboarding",
              included: true,
              description: "Guided onboarding for faster migration and setup.",
            },
            {
              name: "Live Chat & WhatsApp Support",
              included: true,
              description: "Instant support via chat and WhatsApp messaging.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description: "Access detailed guides, FAQs, and tutorials anytime.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description: "Secure shell access for advanced server management.",
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
              description: "Switch between PHP versions for compatibility and performance.",
            },
            {
              name: "Staging Environments",
              included: true,
              description: "Test changes safely before deploying to production.",
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
      id: "ultimate",
      name: "Ultimate",
      icon: "/assets/pricing/ultimate.svg",
      monthlyPrice: 149.99,
      yearlyPrice: 79.99,
      currency: "$",
      ctaText: "Choose Plan",
      renewalText: "$49.99/Monthly when you renew",
      features: [
        {
          title: "Features",
          features: [
            {
              name: "Unlimited NVMe SSD Storage",
              included: true,
              description: "High-speed NVMe SSD storage with no limits for ultra-fast performance.",
            },
            {
              name: "Unlimited Websites",
              included: true,
              description: "Host an unlimited number of websites under one plan.",
            },
            {
              name: "Unmetered Bandwidth",
              included: true,
              description: "Unlimited traffic with no bandwidth restrictions.",
            },
            {
              name: "Free SSL Certificate (Lifetime)",
              included: true,
              description: "Keep all websites secure with lifetime SSL encryption.",
            },
            {
              name: "12 vCPU Cores",
              included: true,
              description: "Powerful virtual CPU cores for high-traffic websites and applications.",
            },
            {
              name: "32 GB RAM",
              included: true,
              description: "High memory allocation for resource-intensive applications.",
            },
            {
              name: "Daily Automated Backups (45 Days Retention)",
              included: true,
              description: "Automatic daily backups stored for up to 45 days for maximum data safety.",
            },
            {
              name: "1-Click App Installer",
              included: true,
              description: "Easily install WordPress and 400+ apps in a single click.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description: "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "100% Uptime SLA",
              included: true,
              description: "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description: "Priority support with responses guaranteed within 15 minutes.",
            },
            {
              name: "30-Day Money-Back Guarantee",
              included: true,
              description: "Risk-free hosting with a full refund if cancelled within 30 days.",
            },
          ],
        },
        {
          title: "Upgraded Technical Specifications",
          features: [
            {
              name: "12 vCPU Cores",
              included: true,
              description: "Advanced CPU power for handling enterprise-level traffic and workloads.",
            },
            {
              name: "32 GB RAM",
              included: true,
              description: "Enhanced memory capacity for faster and stable operations.",
            },
            {
              name: "150 MB/s I/O Speed",
              included: true,
              description: "Ultra-fast input/output speeds for quicker file and database access.",
            },
            {
              name: "150 Entry Processes",
              included: true,
              description: "Supports up to 150 concurrent PHP processes at once.",
            },
            {
              name: "PHP Memory Limit: 6144 MB",
              included: true,
              description: "Increased PHP memory allocation for demanding enterprise applications.",
            },
            {
              name: "2,000,000 Inodes Limit",
              included: true,
              description: "Manage up to 2,000,000 files and directories efficiently.",
            },
            {
              name: "Multiple PHP Versions",
              included: true,
              description: "Switch between PHP versions for better compatibility.",
            },
          ],
        },
        {
          title: "Advanced Security Features (Enterprise)",
          features: [
            {
              name: "Imunify360 Security Suite (Enterprise)",
              included: true,
              description: "Enterprise-grade AI-powered malware protection with proactive threat detection.",
            },
            {
              name: "DDoS Protection (Enterprise-Level)",
              included: true,
              description: "Enterprise-level protection against large-scale DDoS attacks.",
            },
            {
              name: "Web Application Firewall (WAF)",
              included: true,
              description: "Blocks malicious requests and protects web applications.",
            },
            {
              name: "Brute Force Protection",
              included: true,
              description: "Prevents unauthorized login attempts and password attacks.",
            },
            {
              name: "Two-Factor Authentication (2FA)",
              included: true,
              description: "Adds an extra layer of security to your accounts.",
            },
            {
              name: "Real-Time Malware Scanning & Auto-Healing",
              included: true,
              description: "Scans for malware and automatically fixes issues in real-time.",
            },
            {
              name: "Hotlink Protection",
              included: true,
              description: "Prevents other sites from using your images and resources.",
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
              description: "Guaranteed network uptime backed by a Service Level Agreement.",
            },
            {
              name: "Cloud Load Balancing",
              included: true,
              description: "Distributes traffic across multiple servers for maximum availability.",
            },
            {
              name: "AI-Powered Auto-Scaling",
              included: true,
              description: "Automatically adjusts server resources based on traffic and usage patterns.",
            },
            {
              name: "Global CDN Integration (Cloudflare Enterprise)",
              included: true,
              description: "Delivers content faster worldwide with enterprise-level CDN integration.",
            },
            {
              name: "Optimized for Google Core Web Vitals",
              included: true,
              description: "Ensures top performance scores for SEO and user experience.",
            },
            {
              name: "Real-Time Resource Monitoring",
              included: true,
              description: "Monitor CPU, memory, and bandwidth usage with live analytics.",
            },
          ],
        },
        {
          title: "Premium Support & Assistance",
          features: [
            {
              name: "24/7 Enterprise Cloud Hosting Expert Support",
              included: true,
              description: "Priority enterprise-level support from certified cloud hosting experts around the clock.",
            },
            {
              name: "15-Minute Guaranteed Email Response",
              included: true,
              description: "Priority support with email responses within 15 minutes.",
            },
            {
              name: "Dedicated Account Manager",
              included: true,
              description: "A dedicated account manager to help with all hosting needs.",
            },
            {
              name: "Live Chat & WhatsApp Support",
              included: true,
              description: "Instant support via chat and WhatsApp messaging.",
            },
            {
              name: "Comprehensive Knowledge Base & Tutorials",
              included: true,
              description: "Access detailed guides, FAQs, and tutorials anytime.",
            },
          ],
        },
        {
          title: "Developer-Friendly Features",
          features: [
            {
              name: "SSH Access",
              included: true,
              description: "Secure shell access for advanced server management.",
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
              description: "Switch between PHP versions for compatibility and performance.",
            },
            {
              name: "Staging Environments",
              included: true,
              description: "Test changes safely before deploying to production.",
            },
            {
              name: "Database Optimization Tools",
              included: true,
              description: "Optimize and maintain MySQL databases with ease.",
            },
          ],
        },
      ],
    }

  ],
};
