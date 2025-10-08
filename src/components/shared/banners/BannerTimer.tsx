// BannerTimer.tsx
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";

export type BannerTimerProps = {
  /** Use EITHER rollingCycleHours OR target */
  rollingCycleHours?: number; // <- NEW: e.g. 13
  target?: Date | number | string;

  className?: string;
  boxClassName?: string;
  labels?: { days: string; hours: string; minutes: string; seconds: string };
  hideIfOver?: boolean;
  timerClassName?: string;
  unitClassName?: string;
  hideDays?: boolean;
};

const pad = (n: number) => n.toString().padStart(2, "0");

const shortLabel = (label: string) => {
  const L = label.toLowerCase();
  if (L.startsWith("day")) return "Day";
  if (L.startsWith("hour")) return "Hour";
  if (L.startsWith("min")) return "Min";
  if (L.startsWith("sec")) return "Sec";
  return label.length > 3 ? label.slice(0, 3) : label;
};

// Next boundary from a fixed epoch in cycleMs steps.
// This makes the target deterministic and immune to reloads.
function nextCycleEnd(cycleMs: number, nowMs = Date.now()) {
  const rem = nowMs % cycleMs;
  return nowMs + (cycleMs - rem);
}

export const BannerTimer: React.FC<BannerTimerProps> = ({
  rollingCycleHours, // <- if provided, we ignore the external `target`
  target,
  className = "",
  boxClassName = "",
  timerClassName = "",
  unitClassName = "",
  labels = { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
  hideIfOver = false,
  hideDays,
}) => {
  const cycleMs = useMemo(
    () => (rollingCycleHours ? rollingCycleHours * 60 * 60 * 1000 : undefined),
    [rollingCycleHours]
  );

  // Internal target that we pass to the countdown hook.
  const [internalTarget, setInternalTarget] = useState<number>(() => {
    if (cycleMs) return nextCycleEnd(cycleMs);
    return typeof target === "string" || target instanceof Date ? new Date(target).getTime() : Number(target ?? Date.now());
  });

  // If rolling mode is on, keep the target pinned to the current cycle boundary.
  useEffect(() => {
    if (!cycleMs) return;
    setInternalTarget(nextCycleEnd(cycleMs));
  }, [cycleMs]);

  const { days, hours, minutes, seconds, isOver } = useCountdown(internalTarget);

  // Auto-advance to the next cycle when we hit zero.
  useEffect(() => {
    if (!cycleMs) return;
    if (isOver) setInternalTarget(nextCycleEnd(cycleMs));
  }, [isOver, cycleMs]);

  if (isOver && hideIfOver && !cycleMs) return null;

  const boxes = [
    { label: labels.days, value: days, hide: hideDays },
    { label: labels.hours, value: hours },
    { label: labels.minutes, value: minutes },
    { label: labels.seconds, value: seconds },
  ].filter((b) => !b.hide);

  return (
    <div
      className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 ${className}`}
      aria-live="polite"
      aria-label="Countdown timer"
    >
      {boxes.map(({ label, value }) => (
        <div
          key={label}
          className={`bg-white/95 text-teal-900 rounded-lg
                      w-14 h-14
                      sm:w-20 sm:h-20
                      md:w-20 md:h-20
                      lg:w-22 lg:h-22
                      flex flex-col items-center gap-1 justify-center shadow ${boxClassName}`}
        >
          <span
            className={`font-bold tabular-nums leading-none
                        text-base sm:text-lg md:text-2xl lg:text-3xl ${timerClassName}`}
          >
            {pad(Math.max(0, value))}
          </span>
          <span className={`tracking-wide text-[10px] sm:text-[11px] md:text-xs font-semibold max-[500px]:hidden ${unitClassName}`}>
            {label}
          </span>
          <span className={`tracking-wide text-[10px] sm:text-[11px] md:text-xs font-semibold hidden max-[500px]:inline ${unitClassName}`}>
            {shortLabel(label)}
          </span>
        </div>
      ))}
    </div>
  );
};
