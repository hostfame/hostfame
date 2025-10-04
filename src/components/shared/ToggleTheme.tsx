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
    const current = theme === "system" ? systemTheme ?? resolvedTheme : theme;
    if (current) localStorage.setItem("app-theme-mirror", current);
  }, [theme, systemTheme, resolvedTheme, mounted]);

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

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      aria-label="Toggle theme"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`p-2 rounded-full border transition 
        border-border-dark-gray/70 
        text-text ${className}`}
    >
      {isDark ? (
        <FiSun className={`w-4 lg:w-5 h-4 lg:h-5 text-text ${classNameForSunIcon}`} />
      ) : (
        <FiMoon className={`w-4 lg:w-5 h-4 lg:h-5 text-text ${classNameForMoonIcon}`} />
      )}
    </button>
  );
}
