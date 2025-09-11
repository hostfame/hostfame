import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  hideBottomPadding?: boolean;
}

const SectionWrapper = ({
  className,
  children,
  hideBottomPadding,
}: SectionWrapperProps) => {
  return (
    <section
      className={`max-w-7xl mx-auto ${
        hideBottomPadding ? "" : " pb-8 md:pb-16"
      }  ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
