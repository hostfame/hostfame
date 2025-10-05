export type VPSPlan = {
  name: string;
  priceBDT: string;
  priceUSD: string;
  vcpu: string;
  ram: string;
  storage: string;
  provisioning: string;
  bandwidth: string;
  inode: string;
  dedicatedIP: boolean;
  root: boolean;
  antiDDoS: boolean;
  windowsSupport: boolean;
  support24: boolean;
  href: string
};