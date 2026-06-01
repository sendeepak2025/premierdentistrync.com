import Image from "next/image";

type LogoProps = {
  variant?: "full" | "compact";
  className?: string;
  priority?: boolean;
};

const ASPECT = 505 / 76;

export function Logo({
  variant = "full",
  className = "",
  priority = false,
}: LogoProps) {
  const height = variant === "compact" ? 28 : 36;
  const width = Math.round(height * ASPECT);

  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ height }}
    >
      <Image
        src="/logo.png"
        alt="Premier Dentistry"
        width={width}
        height={height}
        priority={priority}
        sizes={`${width}px`}
        className="block w-auto select-none"
        style={{ height }}
      />
    </span>
  );
}
