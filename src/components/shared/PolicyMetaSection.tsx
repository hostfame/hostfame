import * as React from "react";

export interface PolicyMetaSectionProps {
  effectiveDateISO?: string; // e.g. "2025-05-02"
  updatedDateISO?: string;   // e.g. "2025-10-06"
  description?: React.ReactNode;
  className?: string;
  id?: string;
  labels?: {
    effective?: string;
    updated?: string;
  };
}

function formatISODate(iso?: string) {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

/**
 * PolicyMetaSection (Responsive)
 * - Mobile: stacked
 * - ≥sm: two columns
 * - ≥md: compact inline feel with extra horizontal space
 * Typography: labels/values -> `text-text`, description -> `text-description-text`
 */
export function PolicyMetaSection({
  effectiveDateISO,
  updatedDateISO,
  description,
  className = "",
  id,
  labels = {
    effective: "Effective Date:",
    updated: "Last Updated:",
  },
}: PolicyMetaSectionProps) {
  const effective = formatISODate(effectiveDateISO);
  const updated = formatISODate(updatedDateISO);

  return (
    <section id={id} className={` w-full mx-auto 4 py-10 md:py-8 ${className}`}>
      {/* Meta row - responsive grid */}
      <div className="flex gap-4 flex-wrap ">
        {effective && (
          <div className="flex items-baseline gap-2 min-w-0">
            <span className="font-semibold text-text whitespace-nowrap">
              {labels.effective}
            </span>
            <time
              dateTime={effectiveDateISO}
              className="text-text break-words"
            >
              {effective}
            </time>
          </div>
        )}

        {updated && (
          <div className="flex items-baseline gap-2 min-w-0">
            <span className="font-semibold text-text whitespace-nowrap">
              {labels.updated}
            </span>
            <time dateTime={updatedDateISO} className="text-text break-words">
              {updated}
            </time>
          </div>
        )}
      </div>

      {/* Description - scales slightly up on larger screens */}
      {description && (
        <div className="mt-2">
          <p className="text-description-text text-sm leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </section>
  );
}
