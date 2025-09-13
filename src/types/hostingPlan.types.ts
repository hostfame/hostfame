export type HostingFeature = {
  label: string;
  available: boolean;
};

export type HostingPlanProps = {
  id: string;
  name: string;
  price: string;
  storage: string;
  emailAccounts: string;
  features: HostingFeature[];
  buttonLabel: string;
};
