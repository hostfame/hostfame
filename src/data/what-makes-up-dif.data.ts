import { Card } from "@/types/what-make-us-dif.types";
import { TbArrowBackUp, TbLock, TbServer, TbStack2 } from "react-icons/tb";

export const whatMakesUpDifferentCards: Card[] = [
  {
    icon: TbServer,
    title: "Fastest NVMe SSD Server",
    body:
      "We use enterprise-grade servers located across multiple locations around the globe. Tune your website with us and take it to the next level.",
  },
  {
    icon: TbArrowBackUp,
    title: "Daily Multistep Backup",
    body:
      "We use a 3-layer backup system to keep your data secure. By generating hundreds of snapshots each month, we ensure that no element is missed.",
  },
  {
    icon: TbStack2,
    title: "LightSpeed Web Server",
    body:
      "Website performance is enhanced by combining the LiteSpeed web server with the latest PHP version, making your website faster and more efficient.",
  },
  {
    icon: TbLock,
    title: "Lifetime FREE SSL",
    body:
      "Your website will be more secure with an easy-to-install, auto-renewing Let’s Encrypt SSL certificate. This ensures that your site remains protected.",
  },
];