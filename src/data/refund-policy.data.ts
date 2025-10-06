import { Section } from "./terms-and-services.data";

/* =========================
 * Refund Policy Types
 * ========================= */
export type RefundPolicyData = {
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
 * Refund Policy (refundPolicy)
 * ========================= */
export const refundPolicy: RefundPolicyData = {
  brand: "Hostfame",
  company: "S Creative LLC (Wyoming, USA)",
  jurisdiction: "State of Wyoming, USA",
  effectiveDateISO: "2025-05-02",
  updatedDateISO: "2025-05-02",
  intro:
    "At Hostfame, we are committed to ensuring complete customer satisfaction with every hosting experience. If for any reason you are not satisfied with our services, we provide a transparent and straightforward refund policy. Please review the following terms carefully to understand how refunds are handled.",
  contactEmail: "support@hostfame.com",
  sections: [
    {
      id: "1-refund-eligibility",
      title: "1. Refund Eligibility",
      paragraphs: [
        "All eligible hosting services offered by Hostfame are covered by our 30-day money-back guarantee. The 30-day period starts from the date your hosting service was first activated.",
        "All refunds must comply with our Terms of Service and Acceptable Use Policy."
      ],
      bullets: [
        { text: "Domain Name Services: Non-refundable once registered or renewed." },
        { text: "Add-on Services: SSL certificates, privacy protection, and third-party software are non-refundable once activated." },
        { text: "Web Builder & SEO Services: Non-refundable due to upfront costs and external licensing." },
        { text: "Custom or Specialized Services: Non-refundable unless otherwise specified in writing." },
        { text: "Service Issues: Refunds may be issued as Hostfame account credit at our discretion." },
        { text: "Customer Misconduct: Aggressive, abusive, or unlawful behavior may lead to refund denial and permanent account suspension." },
        { text: "No Refunds: For VPS, Dedicated, or Reseller Hosting services." }
      ]
    },
    {
      id: "2-refund-process-and-timelines",
      title: "2. Refund Process and Timelines",
      bullets: [
        { text: "Payment via SSLCommerz, bKash, Stripe, or other gateways: Refunds are typically processed within 3–7 business days." },
        { text: "Processing time may vary depending on the payment provider’s internal procedures." },
        { text: "Credit/Debit Card Payments: Refunds can take up to 7 working days depending on your issuing bank and payment gateway." },
        { text: "Bank Transfers or International Payments: Typically processed within 3–10 business days, depending on the bank’s processing timeline." },
        { text: "Hostfame is not responsible for delays caused by third-party processors or external factors." },
        { text: "Refund Method: All refunds will be returned to the original payment method used during purchase, unless otherwise agreed upon. Refunds may also be issued as Hostfame account credit upon request." }
      ]
    },
    {
      id: "3-requesting-a-refund",
      title: "3. Requesting a Refund",
      paragraphs: [
        "To request a refund, please log in to your Hostfame Client Area and open a support ticket under the Billing Department. Include your order number, payment reference, and a short explanation of the issue. Once verified, refunds will be processed within the timelines mentioned above."
      ]
    },
    {
      id: "4-special-cases-and-considerations",
      title: "4. Special Cases and Considerations",
      bullets: [
        { text: "Service Upgrades/Downgrades: Refunds are calculated based on your original plan price minus usage fees." },
        { text: "Promotional Purchases: Refunds will be adjusted based on the offer terms of the campaign." },
        { text: "Partial Refunds: May be granted in exceptional cases depending on service usage or specific circumstances." },
        { text: "Chargebacks: Filing a chargeback may result in account termination and denial of future refunds." }
      ]
    },
    {
      id: "5-service-availability",
      title: "5. Service Availability",
      paragraphs: [
        "Hostfame maintains a 99.9% monthly uptime target for shared hosting services. This percentage excludes scheduled maintenance, emergency maintenance, force majeure events, third-party network failures, or user-side configuration issues. No financial compensation or refund will be provided beyond what is covered under this Refund Policy."
      ]
    },
    {
      id: "6-force-majeure",
      title: "6. Force Majeure",
      paragraphs: [
        "Hostfame shall not be held liable for delays or service failures caused by circumstances beyond our reasonable control, including but not limited to natural disasters, data center power outages, network disruptions, DDoS attacks, government regulations, or third-party provider failures."
      ]
    },
    {
      id: "7-backups-and-data-responsibility",
      title: "7. Backups & Data Responsibility",
      paragraphs: [
        "Hostfame performs regular backups as a best-effort service using advanced backup systems. However, we do not guarantee the availability or completeness of backups. Customers are responsible for maintaining their own copies of data. Hostfame is not liable for data loss, corruption, or restoration issues."
      ]
    },
    {
      id: "8-limitation-of-liability",
      title: "8. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, Hostfame’s total liability for any claim will not exceed the amount paid by the customer for the affected service within the last 3 months. Hostfame shall not be liable for indirect, incidental, or consequential losses including lost profits, advertising spend, or development costs."
      ]
    },
    {
      id: "9-upgrades-and-addons",
      title: "9. Upgrades & Add-Ons",
      paragraphs: [
        "Payments for upgrades, add-ons, or resource increases are non-refundable once activated or provisioned, regardless of any later cancellation or downgrade."
      ]
    },
    {
      id: "10-governing-law-and-jurisdiction",
      title: "10. Governing Law & Jurisdiction",
      paragraphs: [
        "This Refund Policy shall be governed by the laws of the State of Wyoming, USA, where Hostfame LLC is registered. Any disputes arising from this policy shall be resolved under the exclusive jurisdiction of the courts in Wyoming, United States."
      ]
    },
    {
      id: "11-refund-request-deadline",
      title: "11. Refund Request Deadline",
      paragraphs: [
        "Refund requests must be submitted within 30 calendar days of the service activation date. Requests made after this period will not be accepted. Refunds are processed only once per customer account and exclude domains, dedicated IPs, third-party licenses, and any transaction fees charged by payment processors."
      ]
    },
    {
      id: "12-contact-us",
      title: "12. Contact Us",
      keyValues: [
        { key: "Email", value: "support@hostfame.com" },
        { key: "Address", value: "75 E 3rd St, Sheridan, WY 82801, USA" },
        { key: "Website", value: "www.hostfame.com" }
      ],
      paragraphs: [
        "For any refund or billing-related concerns, please contact our support team 24/7 using the details above.",
        "Hostfame Support Team appreciates your understanding and cooperation regarding our refund procedures."
      ]
    }
  ]
};
