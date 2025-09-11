import { IconType } from "react-icons";

export type Feature = {
  title: string;
  description: string;
  icon: IconType;   // main icon (inside the small white circle)
  bgIcon?: IconType; // large faded decorative icon on the right
};
