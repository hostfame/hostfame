export const getIcon = (iconType: string) => {
  const iconClass = "w-4 h-4 text-gray-500";
  switch (iconType) {
    case "server":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "wordpress":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="21.17" y1="8" x2="12" y2="8" />
          <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
          <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
        </svg>
      );
    case "network":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="m5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
          <path d="m12 12v4" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case "business":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="m22 21-3-3m0 0a2 2 0 0 0 0-4 2 2 0 0 0 0 4" />
        </svg>
      );
    case "turbo":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};