import { ReactElement } from "react";

export type Feature = {
  id: string;
  icon: ReactElement;
  title: string;
  description: string;
};

export type NextLevelVpsProps = {
  eyebrow: string;
  heading: string;
  description: string;
  progressLabel: string;
  progressValue: number;
  features: Feature[];
};