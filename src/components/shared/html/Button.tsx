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
  target?: React.HTMLAttributeAnchorTarget | undefined
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
  target="_self"
}) => {
  const base =
    "inline-flex items-center justify-center gap-2.5 relative font-bold rounded-xl transition-all duration-300 shadow-lg overflow-hidden group";

  const sizeClasses = {
    sm: `${variant === "bordered" ? "px-6 py-2.5" : "px-7 py-3"} text-sm`,
    md: `${variant === "bordered" ? "px-8 py-3.5" : "px-9 py-4"} text-base`,
    lg: `${variant === "bordered" ? "px-10 py-4.5" : "px-12 py-5"} text-lg`,
  }[size];

  const variantClasses =
    variant === "dark"
      ? "text-white bg-gradient-to-r from-primary via-primary-dark to-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      : variant === "light"
      ? "text-white bg-gradient-to-r from-primary-light via-primary to-primary hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      : variant === "bordered"
      ? "bg-transparent text-primary border-2 border-primary hover:text-white hover:bg-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
      : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary hover:shadow-xl hover:-translate-y-0.5";

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
        target={target}
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
