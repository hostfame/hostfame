export type DomainItem = {
  tld: string;
  blurb: string;
  price: string;
  oldPrice?: string;
  registerUrl?: string;
  transferUrl?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type DomainPricingProps = {
  title: string | React.ReactNode;
  description?: string;
  items: DomainItem[];
};