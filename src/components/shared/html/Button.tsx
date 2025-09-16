import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

export type ButtonProps = {
  children: string;
  onClick?: () => void;
  href?: string;
  icon?: IconType;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "dark" | "light" | "bordered";
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
    "inline-flex items-center justify-center gap-2 relative font-semibold rounded-xl cursor-pointer duration-500 transition shadow-lg border-2";

  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  }[size];

  const variantClasses =
    variant === "dark"
      ? "text-white bg-gradient-to-r from-teal-600 via-teal-700 to-teal-700 hover:from-teal-800 hover:via-teal-700 hover:to-teal-700 border-teal-500 hover:border-teal-600"
      : variant === "light"
      ? "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-500 hover:from-teal-500 hover:via-teal-500 hover:to-teal-500 border-teal-300 hover:border-teal-400"
      : "bg-transparent text-teal-600 border-teal-600 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:via-primary hover:to-primary-dark hover:border-teal-400";

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
