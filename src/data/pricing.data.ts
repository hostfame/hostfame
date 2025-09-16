import { PricingData } from "@/types/pricing.types";

export const pricingData: PricingData = {
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
              included: false,
              description:
                "Support for Node.js and Python apps (not included in this plan).",
            },
            {
              name: "Fastest WordPress Site (AccelerateWP)",
              included: false,
              description:
                "AccelerateWP plugin to make WordPress faster (not included in this plan).",
            },
            {
              name: "Premium Website Optimization",
              included: false,
              description:
                "Advanced tools for optimizing website speed and SEO (not included in this plan).",
            },
            {
              name: "Content Optimization (CDN)",
              included: false,
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
              included: false,
              description:
                "Special optimizations for eCommerce platforms (not included in this plan).",
            },
            {
              name: "SSH/Terminal Access",
              included: false,
              description:
                "Secure Shell access to run server commands remotely (not included in this plan).",
            },
            {
              name: "Shell Access (Jailed)",
              included: false,
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
      ctaText: "Add to Cart",
      renewalText: "Renew at Same Price, Every year",
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
              included: false,
              description:
                "Get faster response and priority assistance for website issues (not included in this plan).",
            },
          ],
        },
      ],
      ctaText: "Add to Cart",
      renewalText: "Renew at Same Price, Every year",
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
      ctaText: "Add to Cart",
      renewalText: "Renew at Same Price, Every year",
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
              included: false,
              description:
                "Support for Node.js and Python apps (not included in this plan).",
            },
            {
              name: "Fastest WordPress Site (AccelerateWP)",
              included: false,
              description:
                "AccelerateWP plugin to make WordPress faster (not included in this plan).",
            },
            {
              name: "Premium Website Optimization",
              included: false,
              description:
                "Advanced tools for optimizing website speed and SEO (not included in this plan).",
            },
            {
              name: "Content Optimization (CDN)",
              included: false,
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
              included: false,
              description:
                "Special optimizations for eCommerce platforms (not included in this plan).",
            },
            {
              name: "SSH/Terminal Access",
              included: false,
              description:
                "Secure Shell access to run server commands remotely (not included in this plan).",
            },
            {
              name: "Shell Access (Jailed)",
              included: false,
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
      ctaText: "Add to Cart",
      renewalText: "Renew at Same Price, Every year",
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
              included: false,
              description:
                "Get faster response and priority assistance for website issues (not included in this plan).",
            },
          ],
        },
      ],
      ctaText: "Add to Cart",
      renewalText: "Renew at Same Price, Every year",
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
      ctaText: "Add to Cart",
      renewalText: "Renew at Same Price, Every year",
    },
  ],
};
