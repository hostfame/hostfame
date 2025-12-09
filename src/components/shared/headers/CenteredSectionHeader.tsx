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
    <div className={`mx-auto space-y-4 max-w-7xl text-center ${className}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-text ${classNameForTitle}`}
      >
        {title}
      </h2>
      <p
        className={`text-base md:text-lg text-description-text max-w-2xl mx-auto leading-relaxed ${classNameForDescription}`}
      >
        {description}
      </p>
    </div>
  );
};

export default CenteredSectionHeader;
