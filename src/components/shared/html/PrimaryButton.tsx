import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

export type PrimaryButtonProps = {
  children: string;
  onClick?: () => void;
  href?: string;
  icon?: IconType;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "dark" | "light" | "bordered";
  className?: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
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
    "inline-flex items-center justify-center gap-2 relative font-semibold rounded-xl cursor-pointer duration-300 shadow-lg border-2";

  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  }[size];

  const variantClasses =
    variant === "dark"
      ? "text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-800 hover:via-indigo-700 hover:to-purple-700 border-blue-500 hover:border-indigo-600"
      : variant === "light"
      ? "text-white bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 border-blue-300 hover:border-indigo-400"
      : "bg-transparent text-blue-600 border-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:border-indigo-400";

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
        <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      )}
    </button>
  );
};
