import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaBolt } from "react-icons/fa";

export type CtaButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  icon?: IconType;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
};

export const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  onClick,
  href,
  icon: Icon = FaBolt,
  fullWidth = false,
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 max-sm:text-sm relative px-10 lg:px-12 py-2.5 sm:py-4 rounded-lg font-semibold text-white shadow-lg bg-gradient-to-r from-teal-500 via-teal-600 to-teal-600 hover:from-teal-600 hover:via-teal-600 hover:to-teal-600 duration-300 hover:scale-105 w-fit ";

  const content = (
    <>
      <Icon aria-hidden className="shrink-0" />
      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${base}  ${fullWidth ? "w-full" : ""} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base}  ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {content}
      <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-teal-300/20 to-teal-300/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
    </button>
  );
};
