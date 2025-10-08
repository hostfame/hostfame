import { IconType } from "react-icons";

export interface FounderCardProps {
  name: string;
  role: string;
  image: string;
}

export interface FeatureBullet {
  id: string;
  text: string;
}

export interface AdvancedFeatureTab {
  slug: "latest-control-panel" | "premium-resources" | "backup";
  label: string;
  heading: string;
  image: string;
  blurb?: string;
  bullets: FeatureBullet[];
  imageAlt: string;
}

export interface AboutUsFeatureItem {
  id: number;
  icon: IconType;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
}


export interface InfoCard {
  id: number;
  icon: IconType;
  iconColor: string;
  title: string;
  description: string;
}

export interface Strength {
  id: number;
  title: string;
  description: string;
}