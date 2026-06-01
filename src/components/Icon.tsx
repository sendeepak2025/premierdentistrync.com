type IconName =
  | "sparkle"
  | "shield"
  | "heartbeat"
  | "siren"
  | "diamond"
  | "dot"
  | "minus-circle"
  | "smile"
  | "users"
  | "wind"
  | "sun"
  | "moon"
  | "bed"
  | "anchor"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "star"
  | "arrow-right"
  | "check"
  | "menu"
  | "close"
  | "facebook"
  | "google"
  | "calendar"
  | "quote";

type Props = { name: IconName; className?: string; strokeWidth?: number };

export function Icon({ name, className = "h-5 w-5", strokeWidth = 1.6 }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6l8-3z" />
        </svg>
      );
    case "heartbeat":
      return (
        <svg {...common}>
          <path d="M3 12h4l2-3 3 6 2-3h7" />
        </svg>
      );
    case "siren":
      return (
        <svg {...common}>
          <path d="M5 19h14M7 19v-5a5 5 0 0110 0v5M12 4v2M5 8l1.5 1.5M19 8l-1.5 1.5" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M6 3h12l4 5-10 13L2 8l4-5zM2 8h20M9 3l3 5 3-5M9 3L7 8h10L15 3" />
        </svg>
      );
    case "dot":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
    case "minus-circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8" />
        </svg>
      );
    case "smile":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8" />
        </svg>
      );
    case "wind":
      return (
        <svg {...common}>
          <path d="M3 8h12a3 3 0 100-6M3 16h17a3 3 0 110 6M3 12h8" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      );
    case "bed":
      return (
        <svg {...common}>
          <path d="M3 18V8M3 14h18v4M21 18v-4a3 3 0 00-3-3h-7v3M7 11a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "anchor":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v14M5 14a7 7 0 0014 0M3 14h4M17 14h4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 1.9.6 2.8a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.8.6a2 2 0 011.7 2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4z" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.8 5.7 21.4l1.5-7.1L1.8 9.4 9 8.6 12 2z" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M5 12l4 4L19 6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "google":
      return (
        <svg {...common}>
          <path d="M21.6 11.1H12v3.8h5.5c-.2 1.4-1.6 4-5.5 4a6 6 0 110-11.9c1.8 0 3 .7 3.8 1.4l2.6-2.5C16.7 4.2 14.5 3 12 3a9 9 0 100 18c5.2 0 8.7-3.7 8.7-8.8 0-.6-.1-1.2-.1-1.1z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M9 7H5a2 2 0 00-2 2v6h6v-6H5l4-2zM21 7h-4a2 2 0 00-2 2v6h6v-6h-4l4-2z" />
        </svg>
      );
    default:
      return null;
  }
}
