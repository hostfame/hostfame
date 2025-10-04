import { Section } from "./terms-and-services.data";

/* =========================
 * Privacy Policy Types
 * (reuses Section type defined above)
 * ========================= */
export type PrivacyPolicyData = {
  brand: string;
  company: string;
  jurisdiction: string;
  effectiveDateISO: string; // "YYYY-MM-DD"
  updatedDateISO: string;   // "YYYY-MM-DD"
  intro: string;
  contactEmail: string;
  sections: Section[];
};

/* =========================
 * Privacy Policy (privacyPolicy)
 * ========================= */
export const privacyPolicy: PrivacyPolicyData = {
  brand: "Hostfame",
  company: "S Creative LLC (Wyoming, USA)",
  jurisdiction: "State of Wyoming, USA",
  effectiveDateISO: "2025-05-02",
  updatedDateISO: "2025-05-02",
  intro:
    "Hostfame (a brand of S Creative LLC, Wyoming, USA) is committed to protecting the privacy and security of your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights as a user of our services in compliance with applicable U.S. privacy laws, including the California Consumer Privacy Act (CCPA) where relevant.",
  contactEmail: "privacy@hostfame.com",
  sections: [
    {
      id: "1-who-we-are",
      title: "1. Who We Are",
      paragraphs: [
        "Hostfame is a U.S.-registered web hosting company offering shared hosting, domain services, and digital infrastructure. Our servers and operations are supported globally, with business headquarters in Wyoming and operational activities managed remotely."
      ]
    },
    {
      id: "2-information-we-collect",
      title: "2. Information We Collect",
      paragraphs: [
        "We may collect the following categories of information:"
      ]
    },
    {
      id: "2a-personal-information",
      title: "2(a). Personal Information",
      bullets: [
        { text: "Full name" },
        { text: "Email address" },
        { text: "Phone number" },
        { text: "Billing address and postal code" },
        { text: "Payment details (processed via third-party processors)" }
      ]
    },
    {
      id: "2b-account-and-service-information",
      title: "2(b). Account & Service Information",
      bullets: [
        { text: "Hosting account details (e.g., domain names, server usage)" },
        { text: "Support interactions via email, live chat, or WhatsApp" },
        { text: "Login history, IP address, and browser/device type" }
      ]
    },
    {
      id: "2c-website-usage-data",
      title: "2(c). Website Usage Data",
      bullets: [
        { text: "Cookies and session identifiers" },
        { text: "Google Analytics and Facebook Pixel tracking data" },
        { text: "Referral sources and on-site behavior" }
      ]
    },
    {
      id: "2d-optional-data",
      title: "2(d). Optional Data (if provided by user)",
      bullets: [
        { text: "Newsletter preferences" },
        { text: "Affiliate account info" }
      ]
    },
    {
      id: "3-how-we-use-your-information",
      title: "3. How We Use Your Information",
      bullets: [
        { text: "Deliver, manage, and support our hosting and domain services" },
        { text: "Process payments and prevent fraud" },
        { text: "Communicate with you about your account, invoices, or technical issues" },
        { text: "Send occasional marketing or service-related emails (if opted-in)" },
        { text: "Improve our website, tools, and support experience" },
        { text: "Comply with legal obligations" }
      ],
      note: "We do not sell your personal information to third parties."
    },
    {
      id: "4-legal-bases-for-processing",
      title: "4. Legal Bases for Data Processing",
      bullets: [
        { text: "Contract performance (e.g., account management)" },
        { text: "Legitimate interests (e.g., improving security and services)" },
        { text: "Legal compliance (e.g., tax or law enforcement obligations)" },
        { text: "Consent (for marketing emails or optional services)" }
      ]
    },
    {
      id: "5-sharing-your-information",
      title: "5. Sharing Your Information",
      bullets: [
        { text: "Payment gateways (e.g., Stripe) to process transactions securely" },
        { text: "Domain registrars and DNS providers for registration and management" },
        { text: "Analytics and ad platforms like Google and Facebook for performance insights" },
        { text: "Email marketing platforms if you opt-in to receive communications" },
        { text: "Legal authorities if required by law or subpoena" }
      ],
      note: "We require all third-party vendors to adhere to strict data protection practices."
    },
    {
      id: "6-cookies-and-tracking-technologies",
      title: "6. Cookies & Tracking Technologies",
      bullets: [
        { text: "Maintain user sessions" },
        { text: "Track visitor behavior (Google Analytics, Facebook Pixel)" },
        { text: "Customize site experience" }
      ],
      note:
        "You can control cookies via your browser settings. Blocking cookies may affect functionality."
    },
    {
      id: "7-data-security",
      title: "7. Data Security",
      bullets: [
        { text: "SSL encryption" },
        { text: "Two-factor authentication (2FA) where applicable" },
        { text: "Regular malware scans with Imunify360" },
        { text: "Firewalls and account isolation on servers" }
      ],
      note:
        "However, no system is 100% secure. We encourage strong passwords and secure practices."
    },
    {
      id: "8-data-retention",
      title: "8. Data Retention",
      bullets: [
        { text: "Account and billing data: Retained for legal and tax compliance (up to 7 years)" },
        { text: "Inactive accounts: Removed after 18 months of inactivity (excluding legal obligations)" },
        { text: "Backup logs: Rotated and purged regularly" }
      ],
      note:
        "You can request data deletion at any time, subject to legal limitations."
    },
    {
      id: "9-your-rights",
      title: "9. Your Rights",
      bullets: [
        { text: "Access a copy of your personal data" },
        { text: "Correct or update inaccurate data" },
        { text: "Delete your account and associated data" },
        { text: "Object to processing for marketing purposes" },
        { text: "Request a copy of your data in a portable format" }
      ],
      paragraphs: [
        "To exercise these rights, contact privacy@hostfame.com. We respond to all verified requests within 30 days."
      ]
    },
    {
      id: "10-childrens-privacy",
      title: "10. Children’s Privacy",
      paragraphs: [
        "Our services are not intended for individuals under the age of 18. We do not knowingly collect or store data from minors. If we learn that data from a minor was submitted, we will delete it immediately."
      ]
    },
    {
      id: "11-international-users",
      title: "11. International Users",
      paragraphs: [
        "If you are accessing our services from outside the U.S., please be aware that your data may be stored or processed in the United States or other jurisdictions where we or our service providers operate.",
        "By using our services, you consent to such transfer and processing."
      ]
    },
    {
      id: "12-changes-to-this-privacy-policy",
      title: "12. Changes to This Privacy Policy",
      paragraphs: [
        "Hostfame may update this Privacy Policy from time to time. All changes will be posted on this page with a new \"Last Updated\" date. Continued use of our services after changes constitutes your acceptance of the updated policy."
      ]
    },
    {
      id: "13-contact-us",
      title: "13. Contact Us",
      keyValues: [
        { key: "Email", value: "privacy@hostfame.com" },
        { key: "Mailing Address", value: "S Creative LLC, 75 E 3rd St, Sheridan, WY 82801, United States" }
      ],
      paragraphs: [
        "If you have questions about this Privacy Policy or how we handle your data, contact us using the details above.",
        "Thank you for trusting Hostfame with your data. We take that responsibility seriously and are committed to protecting your privacy."
      ]
    }
  ]
};
