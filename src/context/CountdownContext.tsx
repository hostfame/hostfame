"use client";
import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

// Central countdown configuration - all timers use this
const COUNTDOWN_CYCLE_HOURS = 13; // 13 hours rolling cycle

// Calculate next cycle end from a fixed epoch
function nextCycleEnd(cycleMs: number, nowMs = Date.now()) {
  const rem = nowMs % cycleMs;
  return nowMs + (cycleMs - rem);
}

type CountdownContextType = {
  targetMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
  cycleHours: number;
};

const CountdownContext = createContext<CountdownContextType | null>(null);

export function CountdownProvider({ children }: { children: React.ReactNode }) {
  const cycleMs = useMemo(() => COUNTDOWN_CYCLE_HOURS * 60 * 60 * 1000, []);
  
  const [targetMs, setTargetMs] = useState<number>(() => nextCycleEnd(cycleMs));
  const [now, setNow] = useState<number>(() => Date.now());

  // Update the timer every second
  useEffect(() => {
    const tick = () => setNow(Date.now());
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Auto-restart when timer ends
  useEffect(() => {
    const diff = targetMs - now;
    if (diff <= 0) {
      setTargetMs(nextCycleEnd(cycleMs));
    }
  }, [now, targetMs, cycleMs]);

  const diff = Math.max(0, targetMs - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const isOver = diff <= 0;

  const value = useMemo(
    () => ({
      targetMs,
      days,
      hours,
      minutes,
      seconds,
      isOver,
      cycleHours: COUNTDOWN_CYCLE_HOURS,
    }),
    [targetMs, days, hours, minutes, seconds, isOver]
  );

  return (
    <CountdownContext.Provider value={value}>
      {children}
    </CountdownContext.Provider>
  );
}

export function useCentralCountdown() {
  const context = useContext(CountdownContext);
  if (!context) {
    throw new Error("useCentralCountdown must be used within a CountdownProvider");
  }
  return context;
}
