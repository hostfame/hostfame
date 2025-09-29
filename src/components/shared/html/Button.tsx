import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: IconType;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "dark" | "light" | "bordered" | "whiteBordered";
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
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
    "inline-flex items-center justify-center gap-2 relative font-semibold rounded-lg duration-500 transition hover:scale-105 shadow-lg";

  const sizeClasses = {
    sm: `${variant === "bordered" ? "px-6 py-2" : "px-6.5 py-2.5"} text-sm`,
    md: `${variant === "bordered" ? "px-8 py-3" : "px-8.5 py-3.5"} text-base`,
    lg: `${variant === "bordered" ? "px-10 py-4" : "px-10.5 py-4.5"} text-lg`,
  }[size];

  const variantClasses =
    variant === "dark"
      ? "text-white bg-gradient-to-r from-teal-600 via-teal-700 to-teal-700 hover:from-teal-800 hover:via-teal-700 hover:to-teal-700"
      : variant === "light"
      ? "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-500 hover:from-teal-500 hover:via-teal-500 hover:to-teal-500"
      : variant === "bordered"
      ? "bg-transparent text-teal-600 border-2 border-primary hover:text-white hover:bg-primary "
      : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary";

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
        className={`${base}  ${sizeClasses} ${variantClasses} ${
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
