export interface PricingFeature {
  name: string;
  included: boolean;
  description?: string;
}

export interface PricingFeatureSection {
  title: string;
  features: PricingFeature[];
}

export interface PricingPlan {
  id: string;
  name: string;
  description?: string;
  href?: string;
  hrefBdt?: string;
  icon: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  monthlyPrevPrice?: number;
  yearlyPrevPrice?: number;
  monthlyPriceBdt?: number;
  yearlyPriceBdt?: number;
  monthlyPrevPriceBdt?: number;
  yearlyPrevPriceBdt?: number;
  offer?: number;
  offerBdt?: number;
  currency: string;
  isPopular?: boolean;
  guarantee?: string;
  specialOffer?: {
    title: string;
    description: string;
    badgeColor: "gray" | "green" | "teal";
  };
  features: PricingFeatureSection[];
  ctaText?: string;
  renewalTextMonthly?: string;
  renewalTextYearly?: string;
  renewalTextMonthlyBdt?: string;
  renewalTextYearlyBdt?: string;
}

export interface PricingData {
  title: string;
  subtitle?: string;
  yearlyDiscount: number;
  yearlyDiscountBdt?: number;
  plans: PricingPlan[];
}

export type BillingPeriod = "monthly" | "yearly";

export interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: BillingPeriod;
  isExpanded: boolean;
  onToggleExpand: () => void;
  className?: string;
}

export interface PricingToggleProps {
  billingPeriod: BillingPeriod;
  onToggle: (period: BillingPeriod) => void;
  yearlyDiscount: number;
}
