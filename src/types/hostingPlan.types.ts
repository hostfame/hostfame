export type FeatureKey =
  | "storage"
  | "email"
  | "liveChat"
  | "callSupport"
  | "moneyBack"
  | "cdn"
  | "migration"
  | "accountMgr"
  | "backups";

export type FeatureRow = {
  key: FeatureKey;
  label: string;
};

export type HostingPlanProps = {
  id: string;
  name: string;
  startingAtLabel: string;
  price: string;
  priceSuffix: string;
  cta: string;
  storage: string;
  email: string;
  features: Record<Exclude<FeatureKey, "storage" | "email">, boolean>;
};