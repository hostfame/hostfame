export type FormatPriceOpts = {
  /** Use South-Asian grouping (12,34,567) instead of 1,234,567 */
  southAsianGrouping?: boolean;
  /** Control decimals; by default we keep 0 for integers, 2 for decimals */
  minFractionDigits?: number;
  maxFractionDigits?: number;
};

/**
 * Format a number/string with comma separators.
 * - Uses en-IN for South-Asian grouping (BD, IN, etc.)
 * - Uses en-US for standard 3-digit grouping
 * - Keeps decimals sensible by default
 */
export function formatPrice(
  value: number | string,
  opts: FormatPriceOpts = {}
): string {
  const num =
    typeof value === "string" ? Number(value.toString().replace(/,/g, "")) : value;

  if (!Number.isFinite(num)) {
    // Fall back to the original value if it's not a finite number
    return String(value ?? "");
  }

  const isInt = Number.isInteger(num);
  const {
    southAsianGrouping = false,
    minFractionDigits = isInt ? 0 : 2,
    maxFractionDigits = isInt ? 0 : 2,
  } = opts;

  const locale = southAsianGrouping ? "en-IN" : "en-US";

  return new Intl.NumberFormat(locale, {
    useGrouping: true,
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  }).format(num);
}
