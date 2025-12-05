"use client";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Countdown hook
function useCountdown(targetMs: number) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetMs - now);
  const hours = Math.floor(diff / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { hours, minutes, seconds, isOver: diff <= 0 };
}

function getNextCycleEnd(cycleHours: number) {
  const cycleMs = cycleHours * 60 * 60 * 1000;
  const rem = Date.now() % cycleMs;
  return Date.now() + (cycleMs - rem);
}

const Offer = () => {
  const countryCode = useIpProviderContextValue();
  const [targetMs, setTargetMs] = useState(() => getNextCycleEnd(12));
  const { hours, minutes, seconds, isOver } = useCountdown(targetMs);
  
  useEffect(() => {
    if (isOver) setTargetMs(getNextCycleEnd(12));
  }, [isOver]);

  const pad = (n: number) => n.toString().padStart(2, "0");
  const domainPrice = countryCode === "BD" ? "৳888" : "$8.88";
  const shopPrice = countryCode === "BD" ? "৳111" : "$1.11";

  return (
    <section className="relative z-40 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-3 sm:py-4 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="relative flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 px-4">
        {/* CYBER WEEK SALE Badge - Brand Matched */}
        <div className="hidden md:flex items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl blur opacity-40" />
            <div className="relative bg-gradient-to-r from-primary to-primary-dark px-5 lg:px-6 py-2.5 rounded-2xl shadow-lg">
              <p className="text-white font-black text-sm lg:text-base uppercase tracking-wide">
                ⚡ Cyber Week Sale!
              </p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-14 lg:h-16 bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
        
        {/* Hosting Discount */}
        <div className="text-center">
          <p className="text-slate-400 text-[9px] sm:text-xs uppercase tracking-wider mb-0.5">Hosting</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">72%</p>
          <p className="text-slate-500 text-[10px] sm:text-sm">OFF</p>
        </div>
        
        <div className="w-px h-10 sm:h-12 lg:h-14 bg-slate-700" />
        
        {/* .COM Domain Price */}
        <div className="text-center">
          <p className="text-slate-400 text-[9px] sm:text-xs uppercase tracking-wider mb-0.5">.COM</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">{domainPrice}</p>
          <p className="text-slate-500 text-[10px] sm:text-sm">/year</p>
        </div>
        
        <div className="w-px h-10 sm:h-12 lg:h-14 bg-slate-700" />
        
        {/* .SHOP Domain Price */}
        <div className="text-center">
          <p className="text-slate-400 text-[9px] sm:text-xs uppercase tracking-wider mb-0.5">.SHOP</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary-light">{shopPrice}</p>
          <p className="text-slate-500 text-[10px] sm:text-sm">/year</p>
        </div>
        
        <div className="hidden sm:block w-px h-10 sm:h-12 lg:h-14 bg-slate-700" />
        
        {/* Countdown Timer - Premium */}
        <div className="hidden sm:flex items-center gap-1 lg:gap-1.5">
          {[
            {v: hours, l: 'HRS'},
            {v: minutes, l: 'MIN'},
            {v: seconds, l: 'SEC'}
          ].map((t, i) => (
            <div key={i} className="flex items-center">
              <div className="relative">
                {i === 2 && <div className="absolute inset-0 bg-primary/30 blur-md rounded-lg" />}
                <div className={`relative bg-gradient-to-b from-slate-800 to-slate-900 border ${i === 2 ? 'border-primary/50' : 'border-slate-700'} rounded-lg px-2.5 lg:px-3.5 py-2 lg:py-2.5 min-w-[44px] lg:min-w-[56px] text-center shadow-lg`}>
                  <p className={`text-xl lg:text-2xl font-mono font-black ${i === 2 ? 'text-primary-light' : 'text-white'}`}>{pad(t.v)}</p>
                  <p className="text-slate-500 text-[7px] lg:text-[9px] font-semibold uppercase tracking-wider mt-0.5">{t.l}</p>
                </div>
              </div>
              {i < 2 && <span className="text-slate-500 text-xl lg:text-2xl font-bold mx-0.5 lg:mx-1">:</span>}
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <Link 
          href="/web-hosting" 
          className="bg-gradient-to-r from-primary to-primary-light text-white font-bold text-[11px] sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:shadow-lg hover:shadow-primary/40 transition-all hover:scale-105 whitespace-nowrap"
        >
          Shop Now →
        </Link>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default Offer;
