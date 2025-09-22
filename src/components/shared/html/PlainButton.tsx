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
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 relative font-semibold rounded-xl cursor-pointer duration-500 transition shadow-lg border-2 ";

  const sizeClasses = {
    sm: "px-6 py-2 text-base",
    md: "px-8 py-3 text-lg",
    lg: "px-10 py-4 text-xl",
  }[size];

  const variantClasses =
    variant === "dark"
      ? " border-primary text-white bg-primary hover:bg-primary/90"
      : variant === "light"
      ? ""
      : "border-primary hover:bg-primary/90 hover:text-white text-text";

  const content = (
    <>
      {Icon && <Icon className="text-lg" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${sizeClasses} ${variantClasses} ${fullWidth ? "w-full" : ""
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
      className={`${base} ${sizeClasses} ${variantClasses} ${fullWidth ? "w-full" : ""
        } ${className}`}
    >
      {content}
      {/* Glow effect only for dark variant */}
      {variant === "dark" && (
        <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-teal-300/20 to-teal-300/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      )}
    </button>
  );
};
