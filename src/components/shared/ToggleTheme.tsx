"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ToggleTheme({
  classNameForSunIcon,
  classNameForMoonIcon,
  className
}: {
  classNameForSunIcon?: string;
  classNameForMoonIcon?: string;
  className?: string;
}) {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    // Force light mode - always set to light
    localStorage.setItem("app-theme", "light");
    localStorage.setItem("app-theme-mirror", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }, [mounted]);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        type="button"
        className="p-1 lg:p-2 rounded-full border border-gray-400/50 dark:border-gray-600/60 text-gray-800 dark:text-gray-200"
        disabled
      >
        <FiMoon className="w-5 h-5" />
      </button>
    );
  }

  // Always show light mode icon since we're forcing light mode
  const isDark = false;

  return (
    <button
      aria-label="Toggle theme"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        // Prevent theme toggle - force light mode
        setTheme("light");
        localStorage.setItem("app-theme", "light");
        localStorage.setItem("app-theme-mirror", "light");
        document.documentElement.setAttribute("data-theme", "light");
      }}
      title="Light mode (always enabled)"
      className={`p-2 rounded-full border transition 
        border-border-dark-gray/70 
        text-text ${className}`}
    >
      <FiSun className={`w-4 lg:w-5 h-4 lg:h-5 text-text ${classNameForSunIcon}`} />
    </button>
  );
}
