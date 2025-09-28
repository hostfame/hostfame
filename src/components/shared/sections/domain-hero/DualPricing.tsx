"use client"

import { useIpProviderContextValue } from '@/providers/IpProvider';
import React from 'react';

const DualPricing = ({ price, pricebdt, className }: { price: string, pricebdt: string, className?: string }) => {
  const countryCode = useIpProviderContextValue();
  return (
    <span className={`text-white text-nowrap ${className} `}>{countryCode === "BD" ? pricebdt : price}</span>
  );
};

export default DualPricing;