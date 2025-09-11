export type FeatureTab = {
  slug: string;        // used in ?feature={slug}
  label: string;       // tab label
  description: string; // small paragraph under tabs
  bullets: string[];   // list items
  cta?: { label: string; href: string }; // optional Explore More
};
