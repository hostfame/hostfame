import React from "react";

interface CenteredSectionHeaderProps {
  title: string | React.ReactNode;
  description?: string;
  className?: string;
  classNameForTitle?: string;
  classNameForDescription?: string;
}

const CenteredSectionHeader = ({
  title,
  description,
  className = "",
  classNameForTitle = "",
  classNameForDescription = "",
}: CenteredSectionHeaderProps) => {
  return (
    <div
      className={`mx-auto space-y-3 max-w-7xl px-6 text-center ${className}`}
    >
      <h2
        className={`text-4xl md:text-5xl font-bold tracking-tight text-slate-900 ${classNameForTitle}`}
      >
        {title}
      </h2>
      <p
        className={`text-sm sm:text-base text-gray-500 max-w-2xl mx-auto ${classNameForDescription}`}
      >
        {description}
      </p>
    </div>
  );
};

export default CenteredSectionHeader;
