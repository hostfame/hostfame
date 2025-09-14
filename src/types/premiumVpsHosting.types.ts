export type Feature = {
  label: string
};

export type PremiumVpsHostingProps = {
  title: string;
  blurb: string;
  leftImage: { src: string; alt: string };
  rightImage: { src: string; alt: string };
  featuresCol: Feature[];
};