export interface DifferenceFeatureProps {
  icon: string;
  title: string;
  content: string;
}

export interface DifferenceDataProps {
  title: string;
  description: string;
  features: DifferenceFeatureProps[];
}