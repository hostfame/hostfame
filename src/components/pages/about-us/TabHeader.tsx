"use client";

import { useEffect, useState } from "react";

type Tab = { slug: string; label: string };

export default function TabsHeader({
  tabs,
  initialSlug,
}: {
  tabs: Tab[];
  initialSlug: string;
}) {
  const [active, setActive] = useState<string>(initialSlug ?? tabs[0]?.slug);

  // Hide/show pre-rendered panels
  useEffect(() => {
    tabs.forEach((t) => {
      const el = typeof document !== "undefined" && document.getElementById(`panel-${t.slug}`);
      if (!el) return;
      if (t.slug === active) el.classList.remove("hidden");
      else el.classList.add("hidden");
    });

    // keep hash in sync (for deep links)
    if (active) history.replaceState(null, "", `#${active}`);
  }, [active, tabs]);

  useEffect(() => {
    // activate from hash on load
    const slug = typeof window !== "undefined" && window.location.hash.replace("#", "");
    if (slug) setActive(slug);
  }, []);

  return (
    <div
      role="tablist"
      aria-label="Advanced features"
      className="inline-flex items-center gap-2 rounded-full bg-muted/40 p-1 shadow-sm"
    >
      {tabs.map((t) => {
        const selected = t.slug === active;
        const buttonClass = [
          "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition",
          selected
            ? "bg-primary text-white shadow"
            : "text-text/80 hover:bg-primary/10 hover:text-primary",
        ].join(" ");

        return (
          <button
            key={t.slug}
            role="tab"
            aria-selected={selected}
            aria-controls={`panel-${t.slug}`}
            onClick={() => setActive(t.slug)}
            className={buttonClass}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
