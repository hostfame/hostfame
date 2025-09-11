import { useEffect, useMemo, useRef, useState } from "react";

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
};

export function useCountdown(target: Date | number | string): Countdown {
  const targetMs = useMemo(() => new Date(target).getTime(), [target]);

  const [now, setNow] = useState<number>(() => Date.now());
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // tick at 1s cadence with rAF alignment
    // let id: ReturnType<typeof setInterval>;
    const tick = () => setNow(Date.now());
    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, targetMs - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isOver: diff <= 0 };
}
