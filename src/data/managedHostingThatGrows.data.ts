export type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type ManagedHostingThatGrowsProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  benefits: Benefit[];
};