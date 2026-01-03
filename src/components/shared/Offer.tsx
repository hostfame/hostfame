"use client";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import React from "react";
import Link from "next/link";
import { useCentralCountdown } from "@/context/CountdownContext";

const Offer = () => {
  const countryCode = useIpProviderContextValue();
  const { hours, minutes, seconds } = useCentralCountdown();

  const pad = (n: number) => n.toString().padStart(2, "0");
  const domainPrice = countryCode === "BD" ? "৳888" : "$8.88";
  const shopPrice = countryCode === "BD" ? "৳333" : "$3.33";

  return (
    <section className="relative z-40 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-2 sm:py-2.5 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="relative flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 px-4">
        {/* CYBER WEEK SALE Badge - Brand Matched */}
        <div className="hidden md:flex items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl blur opacity-40" />
            <div className="relative bg-gradient-to-r from-primary to-primary-dark px-4 lg:px-5 py-1.5 rounded-xl shadow-lg">
              <p className="text-white font-black text-sm lg:text-base uppercase tracking-wide">
                ⚡ New Year Sale!
              </p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-10 lg:h-12 bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
        
        {/* Hosting Discount */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500/30 to-orange-500/30 border border-amber-400/50 rounded-md px-2 py-0.5 mb-1 shadow-sm shadow-amber-500/20">
            <p className="text-amber-300 text-[9px] sm:text-[11px] uppercase tracking-wider font-black">Hosting</p>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">72%</p>
          <p className="text-slate-500 text-[10px] sm:text-sm">OFF</p>
        </div>
        
        <div className="w-px h-8 sm:h-10 lg:h-12 bg-slate-700" />
        
        {/* .COM Domain Price */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border border-emerald-400/50 rounded-md px-2 py-0.5 mb-1 shadow-sm shadow-emerald-500/20">
            <p className="text-emerald-300 text-[9px] sm:text-[11px] uppercase tracking-wider font-black">.COM</p>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white">{domainPrice}</p>
          <p className="text-slate-500 text-[10px] sm:text-sm">/year</p>
        </div>
        
        <div className="w-px h-8 sm:h-10 lg:h-12 bg-slate-700" />
        
        {/* .SHOP Domain Price */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500/30 to-blue-500/30 border border-sky-400/50 rounded-md px-2 py-0.5 mb-1 shadow-sm shadow-sky-500/20">
            <p className="text-sky-300 text-[9px] sm:text-[11px] uppercase tracking-wider font-black">.SHOP</p>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white">{shopPrice}</p>
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
                <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-lg px-2 lg:px-3 py-1.5 lg:py-2 min-w-[40px] lg:min-w-[50px] text-center shadow-lg">
                  <p className="text-lg lg:text-xl font-mono font-black text-white">{pad(t.v)}</p>
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
          className="bg-gradient-to-r from-primary to-primary-light text-white font-bold text-[10px] sm:text-xs px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all hover:scale-105 whitespace-nowrap"
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
