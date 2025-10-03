export type VPSPlan = {
  name: string;
  price: string;
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
};