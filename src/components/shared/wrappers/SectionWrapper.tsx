import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  hideBottomPadding?: boolean;
  id?: string;
}

const SectionWrapper = ({
  className,
  children,
  id
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto px-[2%] ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
