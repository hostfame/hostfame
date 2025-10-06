/* =========================
 * Types
 * ========================= */
export type Bullet = { text: string };
export type Section =
  | {
      id: string;
      title: string;
      paragraphs?: string[];
      bullets?: Bullet[];
      note?: string;
    }
  | {
      id: string;
      title: string;
      keyValues: { key: string; value: string }[];
      paragraphs?: string[];
      bullets?: Bullet[];
      note?: string;
    };

export type TermsData = {
  brand: string;
  company: string;
  jurisdiction: string;
  effectiveDateISO: string; // "2025-05-02"
  updatedDateISO: string; // "2025-05-02"
  intro: string;
  contactEmail: string;
  sections: Section[];
};

/* =========================
 * Data (your Terms)
 * ========================= */
export const termsData: TermsData = {
  brand: "Hostfame",
  company: "S Creative LLC (Wyoming, USA)",
  jurisdiction: "State of Wyoming, USA; Bangladesh (see §1)",
  effectiveDateISO: "2025-10-06",
  updatedDateISO: "2025-10-06",
  intro:
    "These Terms and Conditions (“Terms”) govern the use of all products and services provided by Hostfame, owned by S Creative LLC (“we,” “us,” “our,” or “Hostfame”) to customers (“you,” “your”). By signing up, purchasing, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. Hostfame is a U.S.-registered company operating globally, including in partnership with Hostnin (Bangladesh) for South Asian clients. These Terms are designed in compliance with U.S. laws, Bangladeshi ICT regulations, and international hosting best practices. If you do not agree with these Terms, you must immediately stop using our services.",
  contactEmail: "legal@hostfame.com",
  sections: [
    {
      id: "1-governing-law-and-jurisdiction",
      title: "1. Governing Law & Jurisdiction",
      paragraphs: [
        "For customers registered under Hostfame, these Terms are governed by the laws of the State of Wyoming, United States.",
        "For clients hosted or billed under Hostnin (Bangladesh), Bangladeshi law applies.",
        "Any disputes shall be subject to the exclusive jurisdiction of the courts located in Sheridan, Wyoming (USA) or Chattogram, Bangladesh, depending on your billing entity.",
      ],
      note: "Hostfame reserves the right to cooperate fully with law enforcement agencies in cases of fraud, abuse, or criminal activity.",
    },
    {
      id: "2-account-registration-and-responsibilities",
      title: "2. Account Registration & Responsibilities",
      bullets: [
        {
          text: "Provide accurate, complete, and verifiable information during registration",
        },
        { text: "Maintain the confidentiality of your login credentials" },
        {
          text: "Accounts with fake, misleading, or unverifiable details may be terminated without refund",
        },
        {
          text: "Creating multiple accounts to abuse discounts, promotions, or referral programs is strictly prohibited",
        },
      ],
    },
    {
      id: "3-acceptable-use-policy",
      title: "3. Acceptable Use Policy (AUP)",
      paragraphs: ["3.1 Prohibited Content"],
      bullets: [
        {
          text: "Pornography, adult content, escort or sexually explicit material",
        },
        { text: "Child exploitation, grooming, or abuse content" },
        { text: "Pirated software, cracked applications, or warez" },
        { text: "Phishing pages, fake login portals, or fraudulent websites" },
        { text: "Terrorism-related, political propaganda, or hate speech" },
        { text: "Illegal gambling, betting, or unlicensed financial trading" },
        { text: "Drugs, weapons, or restricted substances" },
        {
          text: "Defamatory, misleading, or copyrighted materials without authorization",
        },
      ],
      note: "3.2 Prohibited Activities: Spamming via email/SMS/WhatsApp; hosting malware/trojans or participating in DDoS; unauthorized cryptocurrency mining; hosting storage-only or backup archive sites; using resources for attacks or illegal scraping. 3.3 Misuse & Abusive Behavior: Harassment, threats, or verbal abuse toward staff will result in suspension or termination.",
    },
    {
      id: "4-resource-usage-and-fair-usage-policy",
      title: "4. Resource Usage & Fair Usage Policy",
      bullets: [
        { text: "Hosting resources (CPU, RAM, storage, bandwidth) are shared" },
        {
          text: "“Unlimited” hosting is subject to fair usage limits to ensure stability",
        },
        {
          text: "Excessive use (e.g., video streaming, backup hosting, bulk storage) may require suspension or an upgrade",
        },
        {
          text: "Bulk or unsolicited email sending is prohibited unless pre-approved",
        },
      ],
    },
    {
      id: "5-payments-billing-and-refunds",
      title: "5. Payments, Billing & Refunds",
      paragraphs: [
        "All services are billed in USD for international customers and BDT for Bangladeshi users (via Hostnin). Payments are due in advance. Unpaid invoices beyond 7 days may cause service suspension.",
      ],
      bullets: [
        {
          text: "Accepted methods: Credit/Debit Cards, PayPal, Stripe, SSLCommerz (BD), bKash, Nagad, Rocket, Local Bank Transfer",
        },
        {
          text: "Refunds: Hosting plans include a 30-day money-back guarantee (see Refund Policy)",
        },
        {
          text: "Refunds exclude: Domains, SSLs, VPS, Dedicated Servers, and third-party licenses (non-refundable)",
        },
        {
          text: "Abuse, violations, or fraudulent use voids refund eligibility",
        },
        {
          text: "Chargebacks filed without contacting Hostfame first are treated as abuse and may result in permanent account suspension",
        },
      ],
      keyValues: [
        {
          key: "Billing Currencies",
          value: "USD (international), BDT (Bangladesh via Hostnin)",
        },
        { key: "Invoice Grace", value: "7 days before suspension" },
      ],
    },
    {
      id: "6-suspension-and-termination",
      title: "6. Suspension & Termination",
      paragraphs: [
        "Hostfame may suspend or terminate accounts if Terms/AUP are violated, payment is overdue, illegal or harmful content is hosted, or misuse impacts server performance or other users.",
      ],
      bullets: [
        { text: "Terminated accounts lose all stored data permanently" },
        { text: "Hostfame is not liable for data recovery post-termination" },
      ],
    },
    {
      id: "7-data-security-and-backups",
      title: "7. Data Security & Backups",
      bullets: [
        { text: "Automated daily/weekly backups are performed based on plan" },
        {
          text: "Customers are responsible for maintaining independent backups",
        },
        {
          text: "Hostfame is not liable for data loss due to hacking, deletion, or corruption",
        },
      ],
    },
    {
      id: "8-support-and-communication",
      title: "8. Support & Communication",
      bullets: [
        { text: "Support via ticket, live chat, and email" },
        {
          text: "Support covers server/hosting issues only; excludes coding and third-party plugin customization",
        },
        {
          text: "Misuse of support channels for spam or abuse may result in suspension",
        },
      ],
    },
    {
      id: "9-domain-registration-and-ownership",
      title: "9. Domain Registration & Ownership",
      bullets: [
        {
          text: "Domain registration follows ICANN and respective registry policies",
        },
        { text: "Domains remain the sole property of the registered client" },
        {
          text: "Renewals are the client’s responsibility; Hostfame is not liable for expiration if invoices remain unpaid",
        },
      ],
    },
    {
      id: "10-service-availability-uptime-sla",
      title: "10. Service Availability (Uptime SLA)",
      bullets: [
        {
          text: "99.9% uptime for shared hosting; 99.99% uptime for premium plans",
        },
        {
          text: "SLA credits may be issued as account credit (not cash refunds)",
        },
        {
          text: "Scheduled or emergency maintenance is excluded from uptime calculations",
        },
      ],
    },
    {
      id: "11-legal-compliance-and-government-requests",
      title: "11. Legal Compliance & Government Requests",
      bullets: [
        {
          text: "Clients must comply with U.S. federal law, state regulations, and applicable data privacy laws (GDPR/CCPA)",
        },
        {
          text: "Hostfame will comply with lawful data requests or subpoenas from U.S. or Bangladeshi authorities",
        },
      ],
    },
    {
      id: "12-privacy-and-data-handling",
      title: "12. Privacy & Data Handling",
      bullets: [
        { text: "Hostfame follows its Privacy Policy for handling user data" },
        {
          text: "Data may be shared only with payment processors, registrars, or security vendors as required",
        },
        { text: "Personal data is never sold to third parties" },
      ],
    },
    {
      id: "13-limitation-of-liability",
      title: "13. Limitation of Liability",
      bullets: [
        { text: "Hostfame is not liable for customers’ illegal activity" },
        { text: "Not liable for financial or reputation loss due to downtime" },
        {
          text: "Not liable for third-party service interruptions (e.g., cPanel, Cloudflare)",
        },
        { text: "Not liable for software vulnerabilities or misconfiguration" },
      ],
      note: "The maximum liability of Hostfame shall not exceed the total amount paid by the customer in the previous 6 months.",
    },
    {
      id: "14-indemnification",
      title: "14. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold Hostfame LLC, its employees, and affiliates harmless from any claim, loss, or legal action resulting from:",
      ],
      bullets: [
        { text: "Your use of our services" },
        { text: "Violation of these Terms" },
        { text: "Infringement of third-party rights" },
      ],
    },
    {
      id: "15-account-closure",
      title: "15. Account Closure",
      bullets: [
        { text: "You may close your account anytime via the client dashboard" },
        {
          text: "No partial refunds for unused service periods (except within the 30-day window)",
        },
        {
          text: "After closure, all data, backups, and emails are permanently deleted",
        },
      ],
    },
    {
      id: "16-affiliate-program-terms",
      title: "16. Affiliate Program Terms",
      bullets: [
        {
          text: "Self-referrals or fraudulent signups are strictly prohibited",
        },
        { text: "Active service required to withdraw commissions" },
        { text: "Minimum withdrawal threshold: $50 USD (or equivalent)" },
        {
          text: "Fraud, chargebacks, or abuse will result in forfeiture of commissions",
        },
        {
          text: "Hostfame may audit affiliate accounts and deny payments if abuse is detected",
        },
      ],
    },
    {
      id: "17-content-liability-and-dmca-policy",
      title: "17. Content Liability & DMCA Policy",
      bullets: [
        {
          text: "Customers are solely responsible for the content hosted on their websites",
        },
        {
          text: "Hostfame complies with the DMCA and may suspend repeat infringers",
        },
        {
          text: "Hosting pirated or copyrighted material without authorization is prohibited",
        },
      ],
    },
    {
      id: "18-price-changes-and-plan-modifications",
      title: "18. Price Changes & Plan Modifications",
      bullets: [
        {
          text: "Hostfame may adjust pricing, plans, or included features with prior notice",
        },
        { text: "Existing users retain their current pricing until renewal" },
      ],
    },
    {
      id: "19-third-party-services",
      title: "19. Third-Party Services",
      bullets: [
        {
          text: "Tools like LiteSpeed, Imunify360, JetBackup, and Softaculous are integrated under third-party licenses",
        },
        {
          text: "Hostfame is not liable for changes, outages, or pricing adjustments from those providers",
        },
      ],
    },
    {
      id: "20-dispute-resolution",
      title: "20. Dispute Resolution",
      bullets: [
        {
          text: "All disputes will first attempt to be resolved through mediation",
        },
        {
          text: "If unresolved, disputes will be submitted to the courts of Wyoming, USA or Chattogram, Bangladesh, depending on jurisdiction",
        },
      ],
    },
    {
      id: "21-entire-agreement-and-severability",
      title: "21. Entire Agreement & Severability",
      bullets: [
        {
          text: "If any clause of these Terms is found invalid, the remainder shall continue in effect",
        },
        {
          text: "These Terms represent the entire agreement between Hostfame and the client, superseding prior discussions or agreements",
        },
      ],
    },
    {
      id: "22-updates-to-terms",
      title: "22. Updates to Terms",
      paragraphs: [
        "Hostfame may update these Terms periodically. All changes will be published on our website and communicated via email for major revisions. Continued use of our services constitutes acceptance of the updated Terms.",
      ],
    },
    {
      id: "23-contact-information",
      title: "23. Contact Information",
      paragraphs: [
        "Hostfame (S Creative LLC), 75 E 3rd St, Sheridan, WY 82801, USA",
        "Email (Legal): legal@hostfame.com | Website: www.hostfame.com",
        "For Bangladesh operations (via Hostnin Partnership): Hostfame, Spotlight Creative, 2nd Floor, Colonelhat, Akbarshah, Chattogram.",
        "Email (Bangladesh Legal): legal@hostnin.com | Location: Chattogram, Bangladesh",
      ],
    },
  ],
};
