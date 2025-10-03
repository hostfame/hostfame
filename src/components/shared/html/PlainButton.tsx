import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

export type PlainButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: IconType;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "dark" | "light" | "bordered";
  className?: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
};

export const PlainButton: React.FC<PlainButtonProps> = ({
  children,
  onClick,
  href,
  icon: Icon,
  size = "md",
  fullWidth = false,
  variant = "dark",
  className = "",
  target = "_self",
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 relative font-semibold rounded-lg duration-500 transition hover:scale-105 shadow-lg";

  const sizeClasses = {
    sm: `${variant === "bordered" ? "px-6 py-2" : "px-6.5 py-2.5"} text-lg`,
    md: `${variant === "bordered" ? "px-8 py-3" : "px-8.5 py-3.5"} text-xl`,
    lg: `${variant === "bordered" ? "px-10 py-4" : "px-10.5 py-4.5"} text-2xl`,
  }[size];

  const variantClasses =
    variant === "dark"
      ? " text-white bg-primary hover:bg-primary/90"
      : variant === "light"
      ? "text-white bg-primary hover:bg-primary"
      : "border-2 border-primary hover:bg-primary/90  text-primary hover:text-white";

  const content = (
    <>
      {Icon && <Icon className="text-lg" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        target={target}
        href={href}
        className={`${base} ${sizeClasses} ${variantClasses} ${
          fullWidth ? "w-full" : ""
        } ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${sizeClasses} ${variantClasses} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {content}
      {/* Glow effect only for dark variant */}
      {variant === "dark" && (
        <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-teal-300/20 to-teal-300/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      )}
    </button>
  );
};
