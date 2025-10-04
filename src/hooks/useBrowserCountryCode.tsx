/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";

type UseIpCountryOptions = {
  /** Transform the ISO-2 country code before returning (e.g., BD -> BDT) */
  transform?: (alpha2: string) => string;
  /** Cache the raw ISO-2 code in localStorage to avoid refetching */
  cache?: boolean;
  /** Primary endpoint (defaults to ipinfo) */
  endpoint?: string;
  /** How long to keep cache (ms). Default: 6h */
  ttlMs?: number;
};

type IpInfoResponse = { country?: string };

const LS_KEY = "ip_country_alpha2";
const LS_AT  = "ip_country_alpha2_at";

// Safe localStorage helpers (avoid SSR/Private Mode errors)
const safeLS = {
  getItem(key: string): string | null {
    try {
      if (typeof window === "undefined") return null;
      return window.localStorage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string) {
    try {
      if (typeof window === "undefined") return;
      window.localStorage?.setItem(key, value);
    } catch {
      /* ignore quota/blocked storage errors */
    }
  },
  removeItem(key: string) {
    try {
      if (typeof window === "undefined") return;
      window.localStorage?.removeItem(key);
    } catch { /* ignore */ }
  },
};

async function fetchIpInfo(endpoint = "https://ipinfo.io/json") {
  const res = await fetch(endpoint, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`ipinfo failed: ${res.status}`);
  const j = (await res.json()) as IpInfoResponse;
  return j?.country ?? null; // ISO-2
}

async function fetchCountryFallback(): Promise<string | null> {
  // country.is
  try {
    const r = await fetch("https://api.country.is", { headers: { Accept: "application/json" } });
    if (r.ok) {
      const j = await r.json();
      if (j?.country) return j.country as string;
    }
  } catch {}
  // ipapi.co
  try {
    const r = await fetch("https://ipapi.co/json/", { headers: { Accept: "application/json" } });
    if (r.ok) {
      const j = await r.json();
      if (j?.country_code) return j.country_code as string;
    }
  } catch {}
  // ipwho.is
  try {
    const r = await fetch("https://ipwho.is/", { headers: { Accept: "application/json" } });
    if (r.ok) {
      const j = await r.json();
      if (j?.country_code) return j.country_code as string;
    }
  } catch {}
  return null;
}

export function useIpCountryCode(options: UseIpCountryOptions = {}) {
  const {
    transform,
    cache = true,
    endpoint = "https://ipinfo.io/json",
    ttlMs = 6 * 60 * 60 * 1000, // 6 hours
  } = options;

  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        // Serve from localStorage if fresh
        if (cache) {
          const at = Number(safeLS.getItem(LS_AT) || 0);
          const cached = safeLS.getItem(LS_KEY);
          if (cached && Date.now() - at < ttlMs) {
            const alpha2 = JSON.parse(cached) as string;
            const finalCode = transform ? transform(alpha2) : alpha2;
            if (active) {
              setCountryCode(finalCode);
              setLoading(false);
            }
            return;
          }
        }

        // Try ipinfo, then fallbacks (no token required)
        let alpha2: string | null = null;
        try {
          alpha2 = await fetchIpInfo(endpoint);
        } catch {
          alpha2 = await fetchCountryFallback();
          if (!alpha2) throw new Error("All providers failed");
        }

        const finalCode = alpha2 ? (transform ? transform(alpha2) : alpha2) : null;

      if (cache && alpha2) {
          safeLS.setItem(LS_KEY, JSON.stringify(alpha2));
          safeLS.setItem(LS_AT, String(Date.now()));
        }

        if (active) setCountryCode(finalCode);
      } catch (err) {
        if (active) setError(err);
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => { active = false; };
  }, [cache, endpoint, transform, ttlMs]);

  return { countryCode, loading, error };
}

export default useIpCountryCode;
