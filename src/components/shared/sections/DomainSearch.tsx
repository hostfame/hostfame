"use client";
import { getDomainUrl } from "@/utils/domain.utils";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const DomainSearch = ({
  placeholder,
  cta,
}: {
  placeholder: string;
  cta: string;
}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getDomainUrl(value);
    setValue("");
    // open the url in a new tab
    window.open(url, "_blank");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-full bg-white/90 p-2 shadow-xl ring-1 ring-white/25 backdrop-blur-sm"
    >
      <label htmlFor="domain-search" className="sr-only">
        {placeholder}
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        id="domain-search"
        type="text"
        placeholder={placeholder}
        className="w-full rounded-full border-0 bg-transparent px-4 py-2 pr-28 text-base text-gray-900 placeholder-gray-500 outline-none focus:ring-0"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 rounded-full bg-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 focus-visible:outline-none"
      >
        <FiSearch aria-hidden className="text-base" />
        <span>{cta}</span>
      </button>
    </form>
  );
};

export default DomainSearch;
