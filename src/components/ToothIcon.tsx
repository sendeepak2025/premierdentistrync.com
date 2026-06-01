type ToothIconName =
  | "cleanings"
  | "dental-crowns"
  | "root-canal"
  | "emergency"
  | "veneers"
  | "fillings"
  | "extractions"
  | "invisalign"
  | "dentures"
  | "nitrous"
  | "whitening"
  | "sedation"
  | "sleep-apnea"
  | "implants";

type Props = {
  name: ToothIconName;
  className?: string;
};

// Duotone palette
const A = "#2dd4bf"; // cyan accent
const B = "#2f5dc4"; // brand blue
const C = "#ffffff"; // tooth fill

const baseTooth = (
  <path
    d="M50 14c8 0 12 5 19 5 7 0 11 4 11 12 0 13-6 41-15 41-4 0-6-7-9-13-1-3-2-4-6-4s-5 1-6 4c-3 6-5 13-9 13-9 0-15-28-15-41 0-8 4-12 11-12 7 0 11-5 19-5z"
    fill={C}
    stroke={B}
    strokeWidth="3.5"
    strokeLinejoin="round"
  />
);

const accentStroke = {
  fill: "none",
  stroke: A,
  strokeWidth: "3.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const blueStroke = {
  fill: "none",
  stroke: B,
  strokeWidth: "3.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ToothIcon({ name, className = "h-20 w-20" }: Props) {
  const common = {
    viewBox: "0 0 100 100",
    className,
    "aria-hidden": true as const,
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (name) {
    case "cleanings":
      // Tooth + magnifying glass
      return (
        <svg {...common}>
          {baseTooth}
          <circle cx="68" cy="62" r="13" fill="none" stroke={A} strokeWidth="4" />
          <line x1="78" y1="72" x2="88" y2="84" stroke={A} strokeWidth="5" strokeLinecap="round" />
          <path d="M62 56l4 4 8-9" {...blueStroke} strokeWidth="3" />
        </svg>
      );
    case "dental-crowns":
      // Tooth wearing a crown
      return (
        <svg {...common}>
          <path
            d="M30 28l5-12 8 8 7-12 7 12 8-8 5 12z"
            fill={A}
            stroke={B}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <circle cx="38" cy="14" r="2.5" fill={B} />
          <circle cx="50" cy="6" r="2.5" fill={B} />
          <circle cx="62" cy="14" r="2.5" fill={B} />
          <path
            d="M50 32c8 0 12 5 19 5 7 0 11 4 11 12 0 13-6 41-15 41-4 0-6-7-9-13-1-3-2-4-6-4s-5 1-6 4c-3 6-5 13-9 13-9 0-15-28-15-41 0-8 4-12 11-12 7 0 11-5 19-5z"
            fill={C}
            stroke={B}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "root-canal":
      // Tooth with roots and tool
      return (
        <svg {...common}>
          {baseTooth}
          <path d="M44 52v22M50 52v25M56 52v22" {...accentStroke} />
          <path d="M70 22l-10 12M70 22l4 4" {...blueStroke} strokeWidth="4" />
          <circle cx="72" cy="20" r="3.5" fill={A} stroke={B} strokeWidth="2.5" />
        </svg>
      );
    case "emergency":
      // Tooth with lightning bolt
      return (
        <svg {...common}>
          {baseTooth}
          <path
            d="M52 30l-10 18h8l-4 18 12-20h-8l5-16z"
            fill={A}
            stroke={B}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "veneers":
      // Tooth with sparkles
      return (
        <svg {...common}>
          {baseTooth}
          <path d="M50 38v8M46 42h8" {...accentStroke} strokeWidth="4" />
          <path d="M68 28v6M65 31h6" {...blueStroke} strokeWidth="3" />
          <path d="M30 50v6M27 53h6" {...accentStroke} strokeWidth="3" />
          <path d="M62 60v6M59 63h6" {...accentStroke} strokeWidth="3" />
        </svg>
      );
    case "fillings":
      // Tooth with drop / filling
      return (
        <svg {...common}>
          {baseTooth}
          <path
            d="M50 38c-6 8-10 14-10 20a10 10 0 0020 0c0-6-4-12-10-20z"
            fill={A}
            stroke={B}
            strokeWidth="3"
          />
        </svg>
      );
    case "extractions":
      // Tooth being lifted (with arrow up)
      return (
        <svg {...common}>
          <path
            d="M50 28c8 0 12 5 19 5 7 0 11 4 11 12 0 13-6 41-15 41-4 0-6-7-9-13-1-3-2-4-6-4s-5 1-6 4c-3 6-5 13-9 13-9 0-15-28-15-41 0-8 4-12 11-12 7 0 11-5 19-5z"
            fill={C}
            stroke={B}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path d="M50 18v-12M44 12l6-6 6 6" {...accentStroke} strokeWidth="4" />
        </svg>
      );
    case "invisalign":
      // Tooth with aligner curve around it
      return (
        <svg {...common}>
          {baseTooth}
          <path
            d="M22 56c2 16 10 28 18 28 4 0 6-3 8-7 1-3 2-4 2-4s1 1 2 4c2 4 4 7 8 7 8 0 16-12 18-28"
            fill="none"
            stroke={A}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "dentures":
      // Multiple teeth (denture)
      return (
        <svg {...common}>
          <path
            d="M16 50c0-6 4-10 10-10s8 4 10 8c2-4 4-8 10-8s8 4 10 8c2-4 4-8 10-8s8 4 10 8c2-4 4-8 10-8s10 4 10 10c0 12-8 30-18 30-3 0-5-3-7-7-2-4-4-7-7-7s-5 3-7 7c-2 4-4 7-7 7s-5-3-7-7c-2-4-4-7-7-7s-5 3-7 7c-2 4-4 7-7 7-10 0-18-18-18-30z"
            fill={C}
            stroke={B}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path d="M14 50h72" {...accentStroke} strokeWidth="4" />
        </svg>
      );
    case "nitrous":
      // Tooth + breath/cloud
      return (
        <svg {...common}>
          {baseTooth}
          <path d="M22 36c-4 0-6-3-6-6s2-5 5-5" {...accentStroke} strokeWidth="3" />
          <path d="M18 50c-3 0-5-2-5-4" {...accentStroke} strokeWidth="3" />
          <path d="M84 40c4 0 6-2 6-5" {...accentStroke} strokeWidth="3" />
        </svg>
      );
    case "whitening":
      // Tooth with shine rays
      return (
        <svg {...common}>
          {baseTooth}
          <path d="M50 8v6M28 18l4 4M72 18l-4 4M14 36l5 1M86 36l-5 1" {...accentStroke} strokeWidth="4" />
          <path d="M42 50l4 6 12-12" {...blueStroke} strokeWidth="4" />
        </svg>
      );
    case "sedation":
      // Tooth + moon
      return (
        <svg {...common}>
          {baseTooth}
          <path
            d="M68 32a8 8 0 1010 10 6 6 0 01-10-10z"
            fill={A}
            stroke={B}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M44 56l4-2M42 60l3-1" {...accentStroke} strokeWidth="2.5" />
        </svg>
      );
    case "sleep-apnea":
      // Tooth + Z's (sleeping)
      return (
        <svg {...common}>
          {baseTooth}
          <path d="M68 18h10l-10 12h10" {...accentStroke} strokeWidth="3.5" />
          <path d="M80 38h6l-6 8h6" {...blueStroke} strokeWidth="3" />
        </svg>
      );
    case "implants":
      // Implant post + tooth/crown
      return (
        <svg {...common}>
          <path
            d="M40 14c0-4 4-6 10-6s10 2 10 6v22h-20z"
            fill={C}
            stroke={B}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <rect x="42" y="38" width="16" height="6" rx="2" fill={A} stroke={B} strokeWidth="3" />
          <path d="M44 50h12M44 58h12M44 66h12M44 74h12M44 82h12" {...accentStroke} strokeWidth="4" />
          <path d="M44 50v36M56 50v36" {...blueStroke} strokeWidth="3" />
        </svg>
      );
    default:
      return null;
  }
}
