"use client";

import React from "react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

type WhiteButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  showIcon?: boolean;
  href?: string;
  target?: string;
  rel?: string;
};

const WhiteButton: React.FC<WhiteButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  showIcon = true,
  href,
  target,
  rel,
}) => {
  const base =
    "flex items-center justify-center gap-x-1 w-fit px-7 py-3.5 rounded-full font-semibold " +
    "bg-white text-gray-800 transition duration-500 hover:scale-105 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";
  const cls = `${base} ${className}`.trim();

  const content = (
    <>
      {children}
      {showIcon && <BsArrowRightShort className="text-2xl" />}
    </>
  );

  if (disabled) return <button type={type} disabled className={cls}>{content}</button>;

  // ✅ SAME-PAGE HASH: render a plain <a> and smooth-scroll
  if (href && href.startsWith("#")) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // update the URL hash without routing
        history.pushState(null, "", href);
      }
      onClick?.(e);
    };
    return (
      <a href={href} className={cls} onClick={handleClick}>
        {content}
      </a>
    );
  }

  // Internal/external navigation use Next Link
  if (href) {
    return (
      <Link href={href} className={cls} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
};

export default WhiteButton;
