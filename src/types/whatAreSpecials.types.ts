export type Special = {
  title: string;
  description: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type WhatAreSpecialsProps = {
  title: string | React.ReactNode;
  description?: string;
  items: Special[];
};