"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsLightningChargeFill, BsFire, BsStars } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { FiArrowRight, FiGift, FiZap } from "react-icons/fi";
import Navbar from "@/components/navbar/Navbar";

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
  return { hours, minutes, seconds };
}

function getNextCycleEnd(cycleHours: number) {
  const cycleMs = cycleHours * 60 * 60 * 1000;
  const rem = Date.now() % cycleMs;
  return Date.now() + (cycleMs - rem);
}

const pad = (n: number) => n.toString().padStart(2, "0");

// ============ DESIGN 1: Minimal Dark ============
const Design1 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-[#0f0f0f] border-b border-white/5">
      <div className="flex items-center justify-center gap-4 px-4 py-2.5">
        <span className="text-primary-light font-mono text-xs font-bold">72% OFF</span>
        <span className="text-white/60 text-sm">Hosting + .COM Domain</span>
        <span className="text-white font-bold">৳888</span>
        <span className="text-white/40 text-xs font-mono">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</span>
        <Link href="/web-hosting" className="text-primary-light text-sm font-medium hover:underline">
          Get Deal →
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 2: Gradient Banner ============
const Design2 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-r from-primary-dark via-primary to-primary-dark">
      <div className="flex items-center justify-center gap-3 px-4 py-2">
        <div className="flex items-center gap-1.5 bg-white/20 px-2 py-0.5 rounded-full">
          <BsLightningChargeFill className="text-yellow-300 text-xs" />
          <span className="text-white text-xs font-bold">72% OFF</span>
        </div>
        <span className="text-white text-sm">Hosting + .COM Domain <strong className="text-yellow-300">৳888</strong></span>
        <div className="text-white/80 text-xs font-mono">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</div>
        <Link href="/web-hosting" className="bg-white text-primary-dark text-xs font-bold px-3 py-1 rounded-full hover:bg-yellow-300 transition-colors">
          Claim Now
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 3: Split Design ============
const Design3 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full flex">
      <div className="flex-1 bg-primary-dark flex items-center justify-end gap-3 px-4 py-2.5">
        <BsFire className="text-orange-400" />
        <span className="text-white text-sm font-medium">72% OFF Hosting + .COM</span>
      </div>
      <div className="bg-yellow-400 flex items-center gap-3 px-4">
        <span className="text-primary-dark font-black text-lg">৳888</span>
      </div>
      <div className="flex-1 bg-primary-dark flex items-center gap-3 px-4 py-2.5">
        <span className="text-white/70 text-xs font-mono">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</span>
        <Link href="/web-hosting" className="text-yellow-400 text-sm font-bold hover:underline">
          Get Deal →
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 4: Floating Card Style ============
const Design4 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-b from-slate-900 to-slate-800 py-3">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur border border-white/10 rounded-full px-5 py-2">
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded">SAVE 72%</span>
          <span className="text-white text-sm">Hosting + Domain</span>
          <span className="text-emerald-400 font-bold text-lg">৳888</span>
          <div className="w-px h-4 bg-white/20" />
          <span className="text-white/50 text-xs font-mono">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</span>
          <Link href="/web-hosting" className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 5: Neon Glow ============
const Design5 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-xl" />
      <div className="relative flex items-center justify-center gap-4 px-4 py-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-black text-sm">72% OFF</span>
        <span className="text-white text-sm">Hosting + .COM Domain</span>
        <span className="text-pink-400 font-bold text-xl">৳888</span>
        <span className="text-white/40 text-xs font-mono">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</span>
        <Link href="/web-hosting" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30">
          Grab Deal
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 6: Clean White ============
const Design6 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-center gap-4 px-4 py-2.5">
        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">72% OFF</span>
        <span className="text-gray-700 text-sm">Web Hosting + .COM Domain</span>
        <span className="text-gray-900 font-bold text-lg">৳888<span className="text-gray-400 text-xs font-normal">/yr</span></span>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <span>Ends in</span>
          <span className="font-mono font-medium text-gray-600">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</span>
        </div>
        <Link href="/web-hosting" className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-4 py-1.5 rounded transition-colors">
          Get This Deal
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 7: Urgent Red ============
const Design7 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600">
      <div className="flex items-center justify-center gap-3 px-4 py-2">
        <div className="flex items-center gap-1">
          <HiSparkles className="text-yellow-300 animate-pulse" />
          <span className="text-white font-bold text-xs uppercase tracking-wider">Flash Sale</span>
        </div>
        <div className="w-px h-4 bg-white/30" />
        <span className="text-white text-sm"><strong>72% OFF</strong> Hosting + .COM</span>
        <span className="bg-white text-red-600 font-black text-sm px-2 py-0.5 rounded">৳888</span>
        <div className="bg-black/20 px-2 py-0.5 rounded text-white text-xs font-mono">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</div>
        <Link href="/web-hosting" className="bg-yellow-400 hover:bg-yellow-300 text-red-700 text-xs font-bold px-4 py-1.5 rounded transition-colors">
          Shop Now →
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 8: Sleek Glass ============
const Design8 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-slate-900/95 backdrop-blur">
      <div className="flex items-center justify-center gap-6 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-xs font-medium uppercase tracking-wider">Live Offer</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <span className="text-2xl font-black">72%</span>
          <div className="text-left text-xs leading-tight">
            <p className="text-white/60">OFF on</p>
            <p className="font-medium">Hosting + .COM</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white/40 text-[10px] uppercase">Only</p>
          <p className="text-white font-black text-xl">৳888</p>
        </div>
        <div className="text-center border-l border-r border-white/10 px-4">
          <p className="text-white/40 text-[10px] uppercase">Ends in</p>
          <p className="text-white font-mono font-bold">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
        </div>
        <Link href="/web-hosting" className="flex items-center gap-1 bg-white text-slate-900 text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary-light hover:text-white transition-all">
          <FiGift />
          <span>Claim</span>
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 9: Animated Marquee Style ============
const Design9 = () => {
  return (
    <div className="w-full bg-primary overflow-hidden">
      <div className="flex items-center py-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <BsStars className="text-yellow-300 mr-2" />
              <span className="text-white font-bold">72% OFF</span>
              <span className="text-white/80 mx-2">•</span>
              <span className="text-white">Hosting + .COM Domain</span>
              <span className="text-yellow-300 font-bold ml-2">৳888</span>
              <Link href="/web-hosting" className="ml-4 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full">
                Get Deal
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 10: Premium Two-Line ============
const Design10 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg">
            <FiZap className="text-white text-lg" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Limited Time: 72% OFF Web Hosting</p>
            <p className="text-white/50 text-xs">+ Free .COM Domain • Ends in {pad(hours)}h {pad(minutes)}m {pad(seconds)}s</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-white/40 text-[10px]">Starting at</p>
            <p className="text-white font-black text-2xl">৳888<span className="text-sm font-normal text-white/50">/yr</span></p>
          </div>
          <Link href="/web-hosting" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20">
            Get Started <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 11: Hero Banner Dark ============
const Design11 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6">
      <div className="flex items-center justify-center gap-8 px-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-2xl opacity-50" />
            <div className="relative bg-gradient-to-br from-primary to-primary-dark text-white text-3xl font-black px-5 py-3 rounded-2xl">
              72%
              <span className="text-lg ml-1">OFF</span>
            </div>
          </div>
          <div className="text-white">
            <p className="text-2xl font-bold">Hosting + .COM Domain</p>
            <p className="text-white/50">Limited time offer • Don&apos;t miss out</p>
          </div>
        </div>
        <div className="text-center px-6 border-l border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-wider">Starting at</p>
          <p className="text-4xl font-black text-white">৳888<span className="text-lg text-white/40">/yr</span></p>
        </div>
        <div className="text-center px-6 border-l border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-wider">Ends in</p>
          <p className="text-2xl font-mono font-bold text-primary-light">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
        </div>
        <Link href="/web-hosting" className="bg-white hover:bg-primary-light hover:text-white text-slate-900 font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl">
          Claim This Deal →
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 12: Glassmorphism ============
const Design12 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 py-5">
      <div className="flex items-center justify-center gap-6 px-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-6">
          <div className="text-center">
            <p className="text-white/60 text-xs">SAVE</p>
            <p className="text-white text-4xl font-black">72%</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div>
            <p className="text-white text-xl font-bold">Web Hosting + Free .COM</p>
            <p className="text-white/60 text-sm">Premium hosting at unbeatable price</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-white/60 text-xs">ONLY</p>
            <p className="text-yellow-300 text-3xl font-black">৳888</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-white/60 text-xs">ENDS IN</p>
            <p className="text-white text-xl font-mono font-bold">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
          </div>
        </div>
        <Link href="/web-hosting" className="bg-yellow-400 hover:bg-yellow-300 text-violet-900 font-bold text-base px-6 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-yellow-400/30">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 13: Cyber Tech ============
const Design13 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-black py-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#00ffff10_50%,transparent_100%)] animate-shimmer" />
      <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(90deg, #0ff1 1px, transparent 1px)', backgroundSize: '50px 100%'}} />
      <div className="relative flex items-center justify-center gap-8 px-6">
        <div className="flex items-center gap-3">
          <div className="border-2 border-cyan-400 text-cyan-400 px-4 py-2 font-mono font-bold text-2xl">
            72% OFF
          </div>
          <div className="text-white">
            <p className="text-xl font-bold">HOSTING + .COM DOMAIN</p>
            <p className="text-cyan-400/60 text-sm font-mono">{"// LIMITED_TIME_OFFER"}</p>
          </div>
        </div>
        <div className="border border-cyan-400/30 px-6 py-3 bg-cyan-400/5">
          <p className="text-cyan-400/60 text-xs font-mono">PRICE:</p>
          <p className="text-cyan-400 text-3xl font-mono font-bold">৳888</p>
        </div>
        <div className="border border-cyan-400/30 px-6 py-3 bg-cyan-400/5">
          <p className="text-cyan-400/60 text-xs font-mono">COUNTDOWN:</p>
          <p className="text-cyan-400 text-2xl font-mono font-bold">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
        </div>
        <Link href="/web-hosting" className="bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-base px-6 py-3 transition-all hover:shadow-lg hover:shadow-cyan-400/50">
          EXECUTE_DEAL →
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 14: Warm Gradient ============
const Design14 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 py-5">
      <div className="flex items-center justify-center gap-6 px-6">
        <div className="bg-white rounded-2xl px-6 py-4 flex items-center gap-6 shadow-xl">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl px-4 py-3 text-center">
            <p className="text-3xl font-black">72%</p>
            <p className="text-xs font-bold -mt-1">OFF</p>
          </div>
          <div>
            <p className="text-gray-900 text-xl font-bold">Hosting + .COM Domain</p>
            <p className="text-gray-500 text-sm">Best deal of the season</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-xs">Starting at</p>
            <p className="text-gray-900 text-3xl font-black">৳888</p>
          </div>
          <div className="text-center bg-gray-100 rounded-xl px-4 py-2">
            <p className="text-gray-400 text-xs">Ends in</p>
            <p className="text-gray-900 text-xl font-mono font-bold">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
          </div>
          <Link href="/web-hosting" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold text-base px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg">
            Grab Deal →
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 15: Modern Card ============
const Design15 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gray-50 py-4">
      <div className="flex items-center justify-center px-6">
        <div className="bg-white border border-gray-200 rounded-3xl px-8 py-5 flex items-center gap-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl font-black">72%</span>
            </div>
            <div>
              <p className="text-gray-900 text-xl font-bold">Flash Sale Live!</p>
              <p className="text-gray-500">Hosting + .COM Domain Bundle</p>
            </div>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div>
            <p className="text-gray-400 text-sm">Deal Price</p>
            <p className="text-gray-900 text-3xl font-black">৳888<span className="text-base text-gray-400 font-normal">/yr</span></p>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div className="flex gap-2">
            {[{v: hours, l: 'Hrs'}, {v: minutes, l: 'Min'}, {v: seconds, l: 'Sec'}].map((t, i) => (
              <div key={i} className="bg-gray-100 rounded-xl px-3 py-2 text-center min-w-[50px]">
                <p className="text-gray-900 text-xl font-bold">{pad(t.v)}</p>
                <p className="text-gray-400 text-xs">{t.l}</p>
              </div>
            ))}
          </div>
          <Link href="/web-hosting" className="bg-primary hover:bg-primary-dark text-white font-bold text-base px-8 py-4 rounded-2xl transition-all hover:scale-105">
            Get This Deal
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 16: Bold Typography ============
const Design16 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-black py-6">
      <div className="flex items-center justify-center gap-4 px-6">
        <p className="text-white text-5xl font-black tracking-tight">72% OFF</p>
        <p className="text-white/30 text-4xl font-light">|</p>
        <p className="text-white text-2xl">Hosting + Domain</p>
        <p className="text-primary-light text-5xl font-black">৳888</p>
        <p className="text-white/30 text-4xl font-light">|</p>
        <div className="flex items-center gap-2 text-white font-mono text-2xl">
          <span className="bg-white/10 px-3 py-1 rounded">{pad(hours)}</span>
          <span className="text-white/30">:</span>
          <span className="bg-white/10 px-3 py-1 rounded">{pad(minutes)}</span>
          <span className="text-white/30">:</span>
          <span className="bg-white/10 px-3 py-1 rounded">{pad(seconds)}</span>
        </div>
        <Link href="/web-hosting" className="bg-white text-black font-black text-lg px-8 py-3 rounded-lg hover:bg-primary-light hover:text-white transition-all">
          GET DEAL
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 17: Elegant Dark ============
const Design17 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-b from-zinc-900 to-zinc-950 py-6 border-b border-zinc-800">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500 blur-xl opacity-30" />
            <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-2xl px-5 py-3 rounded-lg">
              72% OFF
            </div>
          </div>
          <div>
            <p className="text-white text-2xl font-semibold">Premium Web Hosting</p>
            <p className="text-zinc-500">+ Free .COM Domain Registration</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-right">
            <p className="text-zinc-500 text-sm">Limited Time Price</p>
            <p className="text-white text-4xl font-black">৳888</p>
          </div>
          <div className="bg-zinc-800/50 rounded-xl px-5 py-3 text-center">
            <p className="text-zinc-500 text-xs mb-1">OFFER ENDS IN</p>
            <p className="text-amber-400 text-2xl font-mono font-bold">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
          </div>
          <Link href="/web-hosting" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
            Claim Offer
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 18: Playful Colorful ============
const Design18 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 py-5">
      <div className="flex items-center justify-center gap-6 px-6">
        <div className="flex items-center gap-3">
          <div className="bg-white text-purple-600 font-black text-3xl px-4 py-2 rounded-xl rotate-[-2deg] shadow-lg">
            72% OFF
          </div>
          <div className="text-white">
            <p className="text-2xl font-bold">Hosting + .COM 🎉</p>
            <p className="text-white/70">Biggest sale ever!</p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur rounded-2xl px-6 py-3 text-center">
          <p className="text-white/70 text-xs">JUST</p>
          <p className="text-white text-4xl font-black">৳888</p>
        </div>
        <div className="text-white text-center">
          <p className="text-white/70 text-xs">⏰ HURRY UP!</p>
          <p className="text-2xl font-mono font-bold">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
        </div>
        <Link href="/web-hosting" className="bg-white hover:bg-yellow-300 text-purple-600 font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-110 shadow-xl">
          🚀 Get Deal
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 19: Corporate Professional ============
const Design19 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-white border-b-4 border-primary py-5">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-6">
          <div className="bg-primary text-white font-bold text-xl px-4 py-2 rounded">
            SAVE 72%
          </div>
          <div>
            <p className="text-gray-900 text-xl font-semibold">Enterprise Web Hosting Package</p>
            <p className="text-gray-500">Includes premium .COM domain registration</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <p className="text-gray-400 text-sm">Special Price</p>
            <p className="text-gray-900 text-3xl font-bold">৳888<span className="text-gray-400 text-base font-normal">/year</span></p>
          </div>
          <div className="border-l border-gray-200 pl-6">
            <p className="text-gray-400 text-sm">Offer expires in</p>
            <p className="text-primary text-xl font-mono font-bold">{pad(hours)}h {pad(minutes)}m {pad(seconds)}s</p>
          </div>
          <Link href="/web-hosting" className="bg-primary hover:bg-primary-dark text-white font-semibold text-base px-6 py-3 rounded transition-colors">
            Get Started →
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 20: Stacked Layout ============
const Design20 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-r from-slate-800 to-slate-900 py-5">
      <div className="flex items-center justify-center gap-10 px-6">
        <div className="text-center">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Discount</p>
          <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">72%</p>
          <p className="text-slate-500 text-sm">OFF</p>
        </div>
        <div className="w-px h-20 bg-slate-700" />
        <div className="text-center">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Bundle</p>
          <p className="text-white text-xl font-bold">Hosting</p>
          <p className="text-primary-light text-lg">+ .COM Domain</p>
        </div>
        <div className="w-px h-20 bg-slate-700" />
        <div className="text-center">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Price</p>
          <p className="text-4xl font-black text-white">৳888</p>
          <p className="text-slate-500 text-sm">/year</p>
        </div>
        <div className="w-px h-20 bg-slate-700" />
        <div className="text-center">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Ends In</p>
          <div className="flex gap-2">
            {[{v: hours, l: 'H'}, {v: minutes, l: 'M'}, {v: seconds, l: 'S'}].map((t, i) => (
              <div key={i} className="bg-slate-700 rounded-lg px-3 py-2">
                <p className="text-white text-xl font-mono font-bold">{pad(t.v)}</p>
                <p className="text-slate-500 text-xs">{t.l}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/web-hosting" className="bg-gradient-to-r from-primary to-primary-light text-white font-bold text-lg px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105">
          Claim Now
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 21: Minimal Elegant ============
const Design21 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-stone-100 py-6">
      <div className="flex items-center justify-center gap-12 px-6">
        <p className="text-stone-400 text-sm uppercase tracking-[0.2em]">Limited Offer</p>
        <div className="flex items-baseline gap-3">
          <span className="text-stone-900 text-5xl font-light">72%</span>
          <span className="text-stone-400 text-xl">off</span>
        </div>
        <p className="text-stone-600 text-lg">Hosting + Domain</p>
        <p className="text-stone-900 text-4xl font-light">৳888</p>
        <p className="text-stone-400 font-mono">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
        <Link href="/web-hosting" className="border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white font-medium px-8 py-3 transition-all">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 22: Bold Blocks ============
const Design22 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full flex">
      <div className="bg-yellow-400 px-8 py-5 flex items-center">
        <p className="text-black text-4xl font-black">72% OFF</p>
      </div>
      <div className="bg-black flex-1 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <p className="text-white text-xl font-semibold">Web Hosting + .COM Domain</p>
          <p className="text-yellow-400 text-3xl font-black">৳888</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-white font-mono text-xl">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</div>
          <Link href="/web-hosting" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-base px-6 py-3 transition-colors">
            Get This Deal →
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 23: Soft Gradient ============
const Design23 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 py-5 border-y border-teal-100">
      <div className="flex items-center justify-center gap-8 px-6">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-2xl px-5 py-4 text-center shadow-lg shadow-teal-500/20">
            <p className="text-3xl font-black">72%</p>
            <p className="text-xs font-bold -mt-1">OFF</p>
          </div>
          <div>
            <p className="text-teal-900 text-xl font-bold">Hosting + .COM Domain</p>
            <p className="text-teal-600/70">Premium bundle at lowest price</p>
          </div>
        </div>
        <div className="bg-white rounded-xl px-6 py-3 shadow-sm border border-teal-100">
          <p className="text-teal-600 text-xs">Deal Price</p>
          <p className="text-teal-900 text-3xl font-black">৳888</p>
        </div>
        <div className="text-center">
          <p className="text-teal-600 text-xs">Ends in</p>
          <p className="text-teal-800 text-xl font-mono font-bold">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
        </div>
        <Link href="/web-hosting" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-500/30">
          Grab This Deal
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 24: Modern Brutalist ============
const Design24 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-lime-400 py-5">
      <div className="flex items-center justify-center gap-6 px-6">
        <p className="text-black text-5xl font-black uppercase">72% Off</p>
        <div className="bg-black text-lime-400 px-4 py-2">
          <p className="text-lg font-bold">HOSTING + .COM</p>
        </div>
        <p className="text-black text-4xl font-black">৳888</p>
        <div className="bg-black text-white px-4 py-2 font-mono">
          {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </div>
        <Link href="/web-hosting" className="bg-black text-lime-400 font-black text-lg px-8 py-4 hover:bg-gray-900 transition-colors">
          GET DEAL →
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 25: Luxury Gold ============
const Design25 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 py-6 border-y border-amber-500/30">
      <div className="flex items-center justify-center gap-10 px-6">
        <div className="flex items-center gap-4">
          <div className="text-amber-400 text-5xl font-serif italic">72%</div>
          <div className="text-amber-400/60 text-xl font-light">OFF</div>
        </div>
        <div className="h-10 w-px bg-amber-500/30" />
        <div>
          <p className="text-white text-xl font-light tracking-wide">Premium Hosting Package</p>
          <p className="text-amber-400/60 text-sm">Including complimentary .COM domain</p>
        </div>
        <div className="h-10 w-px bg-amber-500/30" />
        <p className="text-amber-400 text-4xl font-light">৳888</p>
        <div className="h-10 w-px bg-amber-500/30" />
        <p className="text-amber-400/80 font-mono text-xl">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
        <Link href="/web-hosting" className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-medium text-base px-8 py-3 transition-all">
          Claim Offer
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 26: Geometric ============
const Design26 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-indigo-600 py-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500 rounded-full translate-x-1/3 translate-y-1/2" />
      <div className="relative flex items-center justify-center gap-8 px-6">
        <div className="bg-white rounded-lg px-6 py-3 flex items-center gap-4 shadow-xl">
          <div className="text-indigo-600 text-3xl font-black">72% OFF</div>
          <div className="w-px h-10 bg-indigo-100" />
          <div>
            <p className="text-gray-900 font-bold">Hosting + .COM</p>
            <p className="text-gray-500 text-sm">Limited time bundle</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-indigo-200 text-xs uppercase">Price</p>
          <p className="text-white text-4xl font-black">৳888</p>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2 text-center">
          <p className="text-indigo-200 text-xs uppercase">Ends in</p>
          <p className="text-white text-xl font-mono font-bold">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
        </div>
        <Link href="/web-hosting" className="bg-white hover:bg-indigo-100 text-indigo-600 font-bold text-base px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-xl">
          Get Started
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 27: Retro Wave ============
const Design27 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-fuchsia-800 to-purple-900 py-5 relative">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      <div className="relative flex items-center justify-center gap-6 px-6">
        <div className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-pink-500 text-5xl font-black">72% OFF</div>
        <div className="text-white">
          <p className="text-xl font-bold">Hosting + Domain</p>
          <p className="text-fuchsia-300 text-sm">Retro deals, modern hosting</p>
        </div>
        <p className="text-yellow-300 text-4xl font-black">৳888</p>
        <div className="text-fuchsia-300 font-mono text-xl">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</div>
        <Link href="/web-hosting" className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
          Grab Deal
        </Link>
      </div>
    </div>
  );
};

// ============ DESIGN 28: Clean Sections ============
const Design28 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-gray-900 py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>
          <span className="text-gray-400 text-sm">Limited Time Offer</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-primary-light text-2xl font-black">72% OFF</span>
            <span className="text-gray-500">on</span>
            <span className="text-white text-lg font-semibold">Hosting + .COM</span>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-2">
            <span className="text-white text-2xl font-bold">৳888</span>
            <span className="text-gray-500 text-sm">/yr</span>
          </div>
          <div className="text-gray-400 font-mono">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</div>
          <Link href="/web-hosting" className="bg-primary-light hover:bg-primary text-white font-bold px-6 py-3 rounded-lg transition-colors">
            Claim Offer
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 29: Attention Grabber ============
const Design29 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-black py-6">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <div className="bg-red-600 text-white px-8 py-5 skew-x-[-12deg]">
            <div className="skew-x-[12deg]">
              <p className="text-4xl font-black">72%</p>
              <p className="text-sm font-bold -mt-1">OFF</p>
            </div>
          </div>
          <div className="bg-white text-black px-8 py-5 skew-x-[-12deg] -ml-2">
            <div className="skew-x-[12deg]">
              <p className="text-xl font-bold">Hosting + .COM</p>
              <p className="text-gray-500 text-sm">Best deal ever</p>
            </div>
          </div>
          <div className="bg-gray-900 text-white px-8 py-5 skew-x-[-12deg] -ml-2">
            <div className="skew-x-[12deg]">
              <p className="text-3xl font-black text-primary-light">৳888</p>
            </div>
          </div>
          <div className="bg-gray-800 text-white px-6 py-5 skew-x-[-12deg] -ml-2">
            <div className="skew-x-[12deg] font-mono text-xl">
              {pad(hours)}:{pad(minutes)}:{pad(seconds)}
            </div>
          </div>
          <Link href="/web-hosting" className="bg-red-600 hover:bg-red-500 text-white px-8 py-5 skew-x-[-12deg] -ml-2 transition-colors">
            <span className="skew-x-[12deg] font-bold text-lg block">GET DEAL →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DESIGN 30: Simple Impact ============
const Design30 = () => {
  const { hours, minutes, seconds } = useCountdown(getNextCycleEnd(12));
  return (
    <div className="w-full bg-primary py-5">
      <div className="flex items-center justify-center gap-8 px-6">
        <div className="flex items-center gap-4">
          <div className="bg-white text-primary font-black text-3xl px-5 py-3 rounded-xl shadow-lg">
            72% OFF
          </div>
          <div className="text-white">
            <p className="text-2xl font-bold">Hosting + .COM Domain</p>
            <p className="text-white/70 text-sm">Everything you need to get started</p>
          </div>
        </div>
        <div className="text-white text-center">
          <p className="text-white/60 text-xs">ONLY</p>
          <p className="text-4xl font-black">৳888<span className="text-lg font-normal text-white/60">/yr</span></p>
        </div>
        <div className="bg-white/20 backdrop-blur rounded-xl px-5 py-3 text-center">
          <p className="text-white/60 text-xs">ENDS IN</p>
          <p className="text-white text-2xl font-mono font-bold">{pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>
        </div>
        <Link href="/web-hosting" className="bg-white hover:bg-gray-100 text-primary font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl">
          Get This Deal →
        </Link>
      </div>
    </div>
  );
};

// ============ MAIN PAGE ============
export default function PromoPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Promo Bar Designs</h1>
        <p className="text-gray-600 mb-8">Pick your favorite design for the top promo bar (30 options)</p>
        
        <div className="space-y-8">
          {[
            { name: "Design 1: Minimal Dark", component: <Design1 /> },
            { name: "Design 2: Gradient Banner (Brand Teal)", component: <Design2 /> },
            { name: "Design 3: Split Design", component: <Design3 /> },
            { name: "Design 4: Floating Card", component: <Design4 /> },
            { name: "Design 5: Neon Glow", component: <Design5 /> },
            { name: "Design 6: Clean White", component: <Design6 /> },
            { name: "Design 7: Urgent Red", component: <Design7 /> },
            { name: "Design 8: Sleek Glass", component: <Design8 /> },
            { name: "Design 9: Animated Marquee", component: <Design9 /> },
            { name: "Design 10: Premium Two-Line", component: <Design10 /> },
            { name: "Design 11: Hero Banner Dark", component: <Design11 /> },
            { name: "Design 12: Glassmorphism Purple", component: <Design12 /> },
            { name: "Design 13: Cyber Tech", component: <Design13 /> },
            { name: "Design 14: Warm Gradient Card", component: <Design14 /> },
            { name: "Design 15: Modern Card", component: <Design15 /> },
            { name: "Design 16: Bold Typography", component: <Design16 /> },
            { name: "Design 17: Elegant Dark Amber", component: <Design17 /> },
            { name: "Design 18: Playful Colorful", component: <Design18 /> },
            { name: "Design 19: Corporate Professional", component: <Design19 /> },
            { name: "Design 20: Stacked Layout", component: <Design20 /> },
            { name: "Design 21: Minimal Elegant", component: <Design21 /> },
            { name: "Design 22: Bold Blocks", component: <Design22 /> },
            { name: "Design 23: Soft Teal Gradient", component: <Design23 /> },
            { name: "Design 24: Modern Brutalist", component: <Design24 /> },
            { name: "Design 25: Luxury Gold", component: <Design25 /> },
            { name: "Design 26: Geometric Indigo", component: <Design26 /> },
            { name: "Design 27: Retro Wave", component: <Design27 /> },
            { name: "Design 28: Clean Sections", component: <Design28 /> },
            { name: "Design 29: Attention Grabber", component: <Design29 /> },
            { name: "Design 30: Simple Impact (Brand Teal)", component: <Design30 /> },
          ].map(({ name, component }, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-800">{name}</h2>
                <span className="text-xs text-gray-400">#{i + 1}</span>
              </div>
              <div className="overflow-hidden">
                {component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
