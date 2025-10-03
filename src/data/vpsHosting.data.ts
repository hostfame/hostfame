import { VPSPlan } from "@/types/vps-hosting/vps-hosting.types";

export const VPSHostingData = {
  title: "We Have the Perfect VPS Package",
  description: "Compare our plans according to your needs",
  orderNow: "Order Now"
};

export const VPSPlans: VPSPlan[] = [
  {
    name: "Starter",
    price: "৳999",
    vcpu: "2 vCPU Cores",
    ram: "4 GB RAM",
    storage: "40 GB SSD",
    provisioning: "30 minute",
    bandwidth: "20 TB Traffic",
    inode: "No Limit",
    dedicatedIP: true,
    root: true,
    antiDDoS: true,
    windowsSupport: true,
    support24: true
  },
  {
    name: "Starter Plus",
    price: "৳1499",
    vcpu: "4 vCPU Cores",
    ram: "8 GB RAM",
    storage: "80 GB SSD",
    provisioning: "30 minute",
    bandwidth: "20 TB Traffic",
    inode: "No Limit",
    dedicatedIP: true,
    root: true,
    antiDDoS: true,
    windowsSupport: true,
    support24: true
  },
  {
    name: "Pro",
    price: "৳2499",
    vcpu: "4 vCPU Cores",
    ram: "8 GB RAM",
    storage: "160 GB SSD",
    provisioning: "30 minute",
    bandwidth: "20 TB Traffic",
    inode: "No Limit",
    dedicatedIP: true,
    root: true,
    antiDDoS: true,
    windowsSupport: true,
    support24: true
  },
  {
    name: "Pro Plus",
    price: "৳2999",
    vcpu: "8 vCPU Cores",
    ram: "16 GB RAM",
    storage: "160 GB SSD",
    provisioning: "30 minute",
    bandwidth: "20 TB Traffic",
    inode: "No Limit",
    dedicatedIP: true,
    root: true,
    antiDDoS: true,
    windowsSupport: true,
    support24: true
  },
  {
    name: "Pro Extra",
    price: "৳3999",
    vcpu: "8 vCPU Cores",
    ram: "16 GB RAM",
    storage: "240 GB SSD",
    provisioning: "30 minute",
    bandwidth: "20 TB Traffic",
    inode: "No Limit",
    dedicatedIP: true,
    root: true,
    antiDDoS: true,
    windowsSupport: true,
    support24: true
  },
  {
    name: "Ultimate",
    price: "৳7999",
    vcpu: "16 vCPU Cores",
    ram: "32 GB RAM",
    storage: "360 GB SSD",
    provisioning: "30 minute",
    bandwidth: "20 TB Traffic",
    inode: "No Limit",
    dedicatedIP: true,
    root: true,
    antiDDoS: true,
    windowsSupport: true,
    support24: true
  }
];
