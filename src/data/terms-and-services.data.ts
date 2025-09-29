
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
  jurisdiction: "State of Wyoming, USA",
  effectiveDateISO: "2025-05-02",
  updatedDateISO: "2025-05-02",
  intro:
    'These Terms of Service (“Agreement”) govern your use of all services provided by Hostfame (a brand of S Creative LLC, registered in Wyoming, USA). By using our website or services, you agree to the terms outlined below.',
  contactEmail: "support@hostfame.com",
  sections: [
    {
      id: "1-eligibility-and-account-responsibility",
      title: "1. Eligibility and Account Responsibility",
      paragraphs: [
        "You must be at least 18 years old and capable of entering a legally binding agreement to use our services. By registering an account, you represent that all provided information is accurate and that you will keep your credentials secure.",
        "You are responsible for all activity under your account and agree not to share login credentials or use the service for any unauthorized purposes.",
      ],
    },
    {
      id: "2-services-provided",
      title: "2. Services Provided",
      paragraphs: ["Hostfame offers the following services:"],
      bullets: [
        { text: "Shared web hosting and Managed WordPress hosting" },
        { text: "Domain registration and transfer services" },
        { text: "Email hosting" },
        {
          text:
            "Add-on tools such as LiteSpeed, JetBackup, Imunify360, and Softaculous",
        },
      ],
      note:
        "We reserve the right to modify, suspend, or discontinue services at any time with reasonable notice.",
    },
    {
      id: "3-acceptable-use-policy",
      title: "3. Acceptable Use Policy",
      paragraphs: ["You agree not to:"],
      bullets: [
        {
          text:
            "Host or distribute content that is unlawful, harmful, threatening, defamatory, or hateful",
        },
        { text: "Engage in spam, phishing, or malware distribution" },
        {
          text:
            "Infringe on copyrights, trademarks, or other intellectual property rights",
        },
        { text: "Use excessive server resources that affect other users" },
        { text: "Run any unauthorized background processes or bots" },
      ],
      note:
        "Hostfame may suspend or terminate any account in violation of this policy, without prior notice.",
    },
    {
      id: "4-abuse-and-non-refund",
      title: "4. Abuse of Services and Non-Refund Policy for Abuse",
      paragraphs: [
        "We maintain a strict zero-tolerance policy regarding the abuse of our services. Abuse includes, but is not limited to:",
      ],
      bullets: [
        { text: "Sending unsolicited bulk email (spam)" },
        { text: "Hosting or distributing viruses, malware, or spyware" },
        { text: "Running scripts or processes that harm server performance" },
        {
          text:
            "Using hosting space for file sharing, warez, or copyrighted content",
        },
        {
          text:
            "Conducting or facilitating phishing, fraud, or other illegal activity",
        },
        {
          text:
            "Attempting to exploit server vulnerabilities or gain unauthorized access",
        },
      ],
      note:
        "Any account found engaging in abusive activities will be suspended or terminated immediately, without prior notice. No refund will be issued for services terminated due to abuse, regardless of the time remaining in the billing cycle. We reserve the right to report such violations to legal authorities or blacklisting services if applicable.",
    },
    {
      id: "5-domain-services",
      title: "5. Domain Services",
      paragraphs: [
        "All domain registration, renewal, or transfer is subject to ICANN policies and our registrars' terms. Domain purchases are final and non-refundable. You are responsible for renewing domains before expiration.",
      ],
    },
    {
      id: "6-billing-and-payments",
      title: "6. Billing and Payments",
      keyValues: [
        { key: "Currency", value: "All prices are listed in U.S. Dollars (USD)" },
        { key: "Due", value: "Payments are due at the time of purchase or renewal" },
        { key: "Auto-renew", value: "Services auto-renew unless canceled beforehand" },
        {
          key: "Methods",
          value: "We accept payments via Stripe, credit cards, or approved gateways",
        },
        { key: "Late payments", value: "May result in service suspension" },
      ],
    },
    {
      id: "7-refund-policy",
      title: "7. Refund Policy",
      bullets: [
        { text: "Hosting plans include a 30-day money-back guarantee" },
        {
          text:
            "Domain purchases, SSL certificates, and one-time services are non-refundable",
        },
        {
          text:
            "Refunds (if applicable) will be issued to the original payment method",
        },
      ],
    },
    {
      id: "8-backups-and-data-loss",
      title: "8. Backups and Data Loss",
      paragraphs: [
        "Hostfame provides daily or weekly backups via JetBackup, but you are ultimately responsible for your data. We do not guarantee backups and are not liable for any data loss.",
      ],
    },
    {
      id: "9-support-policy",
      title: "9. Support Policy",
      paragraphs: [
        "We offer 24/7 support via email, WhatsApp, and live chat embedded on our website. Support covers hosting and domain-related issues but excludes custom development, third-party software, or site management.",
      ],
    },
    {
      id: "10-intellectual-property",
      title: "10. Intellectual Property",
      paragraphs: [
        "All content, software, and platform tools provided by Hostfame are protected by copyright. You may not copy, distribute, or modify our content or tools without permission.",
      ],
    },
    {
      id: "11-third-party-services",
      title: "11. Third-Party Services",
      paragraphs: [
        "Some features rely on third-party providers (e.g., cPanel, LiteSpeed, Imunify360). Hostfame is not responsible for downtime or performance issues resulting from these services.",
      ],
    },
    {
      id: "12-dmca-and-copyright",
      title: "12. DMCA and Copyright Infringement",
      paragraphs: [
        "We comply with the U.S. Digital Millennium Copyright Act (DMCA). To file a copyright complaint, email dmca@hostfame.com with the following:",
      ],
      bullets: [
        { text: "Your contact info" },
        { text: "Description and URL of the infringing content" },
        { text: "A statement under penalty of perjury" },
      ],
      note: "We will act promptly to remove infringing material.",
    },
    {
      id: "13-privacy-and-data-collection",
      title: "13. Privacy and Data Collection",
      paragraphs: [
        "We collect personal data including name, email, IP address, payment info, and site usage analytics (Google Analytics, Facebook Pixel). For more, see our Privacy Policy.",
      ],
    },
    {
      id: "14-compliance-with-laws",
      title: "14. Compliance with Laws",
      bullets: [
        { text: "U.S. Export Control Laws" },
        { text: "OFAC sanctions" },
        { text: "GDPR (if applicable)" },
        { text: "CAN-SPAM Act" },
      ],
    },
    {
      id: "15-disclaimers-and-warranties",
      title: "15. Disclaimers and Warranties",
      paragraphs: [
        'Hostfame provides services "as is" and makes no warranties, express or implied, regarding uptime, fitness for a particular purpose, or uninterrupted service. We are not liable for damages or losses resulting from service disruptions.',
      ],
    },
    {
      id: "16-indemnification",
      title: "16. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless Hostfame, its employees, and affiliates from any claims, losses, or damages resulting from your violation of these terms.",
      ],
    },
    {
      id: "17-limitation-of-liability",
      title: "17. Limitation of Liability",
      paragraphs: [
        "Our total liability under any claim will not exceed the amount paid by you for the services in the last 6 months. We are not liable for indirect or consequential damages.",
      ],
    },
    {
      id: "18-governing-law-and-jurisdiction",
      title: "18. Governing Law and Jurisdiction",
      paragraphs: [
        "This Agreement is governed by the laws of the State of Wyoming, USA. Any disputes will be resolved in the state or federal courts located in Wyoming.",
      ],
    },
    {
      id: "19-arbitration",
      title: "19. Arbitration",
      paragraphs: [
        "You agree to resolve any disputes with Hostfame through binding arbitration in Wyoming, unless a court of law requires otherwise.",
      ],
    },
    {
      id: "20-changes-to-terms",
      title: "20. Changes to Terms",
      paragraphs: [
        "We reserve the right to update these Terms of Service at any time. The latest version will always be posted on our website. Continued use of our services means you accept any changes.",
      ],
    },
    {
      id: "21-contact-information",
      title: "21. Contact Information",
      paragraphs: [
        "If you have questions about these terms, email us at: support@hostfame.com",
      ],
    },
  ],
};