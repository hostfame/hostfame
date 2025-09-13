export type Feature = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

export type CloudVpsProps = {
  headline: string;
  planLabel: string;
  priceMonthly: string;
  ctaText: string;
  features: Feature[];
};