/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";

type UseIpCountryOptions = {
  /** Transform the ISO-2 country code before returning (e.g., BD -> BDT) */
  transform?: (alpha2: string) => string;
  /** Cache the raw ISO-2 code in sessionStorage to avoid refetching */
  cache?: boolean;
  /** Optional ipinfo token if you have one */
  token?: string;
  /** Override endpoint if needed */
  endpoint?: string;
};

type IpInfoResponse = {
  ip?: string;
  city?: string;
  region?: string;
  country?: string; // ISO-2, e.g. "BD"
  loc?: string;
  org?: string;
  postal?: string;
  timezone?: string;
  readme?: string;
};

export function useIpCountryCode(options: UseIpCountryOptions = {}) {
  const {
    transform,
    cache = true,
    token,
    endpoint = "https://ipinfo.io/json",
  } = options;

  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    async function fetchCountry() {
      try {
        // Serve from cache if available
        if (cache && typeof sessionStorage !== "undefined") {
          const cached = sessionStorage.getItem("ipinfo_country_alpha2");
          if (cached) {
            const alpha2 = JSON.parse(cached) as string;
            const finalCode = transform ? transform(alpha2) : alpha2;
            if (active) {
              setCountryCode(finalCode);
              setLoading(false);
            }
            return;
          }
        }

        const url = token
          ? `${endpoint}?token=${encodeURIComponent(token)}`
          : endpoint;

        const res = await fetch(url, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });

        if (!res.ok) throw new Error(`ipinfo request failed: ${res.status}`);

        const data = (await res.json()) as IpInfoResponse;
        const alpha2 = data.country ?? null;
        const finalCode = alpha2
          ? transform
            ? transform(alpha2)
            : alpha2
          : null;

        if (cache && alpha2 && typeof sessionStorage !== "undefined") {
          sessionStorage.setItem(
            "ipinfo_country_alpha2",
            JSON.stringify(alpha2)
          );
        }

        if (active) setCountryCode(finalCode);
      } catch (err) {
        if (active) setError(err);
      } finally {
        if (active) setLoading(false);
      }
    }

    !countryCode && fetchCountry();

    return () => {
      active = false;
      controller.abort();
    };
  }, [cache, endpoint, token, transform]);

  return { countryCode, loading, error };
}

export default useIpCountryCode;
