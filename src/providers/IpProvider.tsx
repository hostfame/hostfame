"use client";

import { createContext, useContext } from "react";
import useBrowserCountryCode from "@/hooks/useBrowserCountryCode";

export const IpContext = createContext("");

export const IpProvider = ({ children }: { children: React.ReactNode }) => {
  const { countryCode } = useBrowserCountryCode();
  return (
    <IpContext.Provider value={countryCode ?? ""}>{children}</IpContext.Provider>
  );
};

export const useIpProviderContextValue = () => {
  const contextValue = useContext(IpContext);

  return contextValue;
};
