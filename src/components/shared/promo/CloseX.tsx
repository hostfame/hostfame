"use client";

import React from "react";
import { IoClose } from "react-icons/io5";

type CloseXProps = {
  targetId: string;           // DOM id of the PromoTopBar container
  className?: string;
  label?: string;
  onClose?: () => void;
};

const CloseX: React.FC<CloseXProps> = ({
  targetId,
  className = "",
  label = "Close banner",
  onClose,
}) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el && !el.classList.contains("hidden")) el.classList.add("hidden");
    onClose?.();
  };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={handleClick}
      className={`cursor-pointer inline-flex h-7 w-7 items-center justify-center rounded-md hover:bg-white/15 focus:outline-none  ${className}`}
    >
      <IoClose className="h-5 w-5 text-white" />
    </button>
  );
};

export default CloseX;
