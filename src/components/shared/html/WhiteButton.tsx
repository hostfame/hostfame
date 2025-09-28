import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

type WhiteButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string; // allow user to extend styles
  showIcon?: boolean; // make the arrow optional
};

const WhiteButton: React.FC<WhiteButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  showIcon = true,
}) => {
  // Merge base styles + user provided ones
  const baseStyles =
    "flex justify-center text-black text-gray-800  items-center px-7 bg-white py-3.5 rounded-full transition  disabled:opacity-50 disabled:cursor-not-allowed  gap-x-1 hover:bg-transparent border duration-500 border-white hover:text-white w-fit font-semibold";

  const combinedClassName = `${baseStyles} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
      {showIcon && <BsArrowRightShort className=" text-2xl" />}
    </button>
  );
};

export default WhiteButton;
