"use client";
import { useCountdown } from "@/hooks/useCountdown";
import React from "react";

export type BannerTimerProps = {
  target: Date | number | string;
  className?: string;
  boxClassName?: string;
  labels?: { days: string; hours: string; minutes: string; seconds: string };
  hideIfOver?: boolean;
};

const pad = (n: number) => n.toString().padStart(2, "0");

export const BannerTimer: React.FC<BannerTimerProps> = ({
  target,
  className = "",
  boxClassName = "",
  labels = { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Second" },
  hideIfOver = false,
}) => {
  const { days, hours, minutes, seconds, isOver } = useCountdown(target);

  if (isOver && hideIfOver) return null;

  const boxes = [
    { label: labels.days, value: days },
    { label: labels.hours, value: hours },
    { label: labels.minutes, value: minutes },
    { label: labels.seconds, value: seconds },
  ];

  return (
    <div
      className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 ${className}`}
      aria-live="polite"
      aria-label="Countdown timer"
    >
      {boxes.map(({ label, value }) => (
        <div
          key={label}
          className={`bg-white/95 text-blue-900 rounded-lg
                      w-14 h-14
                      sm:w-20 sm:h-20
                      md:w-20 md:h-20
                      lg:w-22 lg:h-22
                      flex flex-col items-center gap-1 justify-center shadow ${boxClassName}`}
        >
          <span className="font-bold tabular-nums leading-none
                           text-base
                           sm:text-lg
                           md:text-2xl
                           lg:text-3xl">
            {pad(Math.max(0, value))}
          </span>
          <span className=" tracking-wide
                           text-[10px]
                           sm:text-[11px]
                           md:text-xs font-semibold">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
