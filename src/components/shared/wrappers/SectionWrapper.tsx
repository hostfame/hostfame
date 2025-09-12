import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  hideBottomPadding?: boolean;
}

const SectionWrapper = ({
  className,
  children,
}: SectionWrapperProps) => {
  return (
    <section
      className={`max-w-7xl mx-auto px-[2%] ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
