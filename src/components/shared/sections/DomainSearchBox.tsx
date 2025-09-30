"use client";

import { getDomainCheckerUrl } from "@/utils/domain-checker.utils";
import { FormEvent, useState } from "react";

type Props = {
  tlds: string[];
  placeholder: string;
  buttonLabel: string;
  onSearch?: (fullDomain: string) => void;
};

export default function DomainSearchBox({
  tlds,
  placeholder,
  buttonLabel,
  onSearch,
}: Props) {
  const [name, setName] = useState("");
  const [tld, setTld] = useState(tlds[0] ?? "");

  function submit(e: FormEvent) {
    e.preventDefault();
    const full = `${name.trim()}${tld}`;
    if (!name.trim()) return;

    const url = getDomainCheckerUrl(full);

    window.open(url, "_blank");
  }

  return (
    <form onSubmit={submit} className="w-full" aria-label="Domain checker form">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr,8rem,9rem] gap-3">
        {/* Name */}
        <label htmlFor="domain-name" className="sr-only">
          Domain name
        </label>
        <input
          id="domain-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="h-12 rounded-xl border border-gray-200 bg-white/95 px-4 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
        />

        {/* TLD */}
        <label htmlFor="domain-tld" className="sr-only">
          Top-level domain
        </label>
        <div className="relative">
          <select
            id="domain-tld"
            value={tld}
            onChange={(e) => setTld(e.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 pr-9 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
            aria-label="Choose TLD"
          >
            {tlds.map((ext) => (
              <option key={ext} value={ext}>
                {ext}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            aria-hidden
          >
            ▾
          </span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="h-12 rounded-xl bg-primary font-semibold text-white shadow-sm transition hover:brightness-110 active:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary/60"
          aria-label={buttonLabel}
        >
          {buttonLabel}
        </button>
      </div>

      {/* Helper line */}
      <p className="mt-2 text-sm text-gray-600">
        Tip: try short names, then mix & match with TLDs.
      </p>
    </form>
  );
}
