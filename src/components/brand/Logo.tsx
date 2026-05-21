interface LogoProps {
  variant?: "light" | "dark";
  size?: "header" | "headerMobile" | "footer" | "icon";
  className?: string;
}

const sizes = {
  header: { width: 140, height: 40 },
  headerMobile: { width: 120, height: 36 },
  footer: { width: 160, height: 50 },
  icon: { width: 32, height: 32 },
};

export function Logo({
  variant = "light",
  size = "header",
  className,
}: LogoProps) {
  const { width, height } = sizes[size];
  const wordmark = variant === "dark" ? "var(--text-on-dark)" : "var(--teal-800)";
  const showWordmark = size !== "icon";

  return (
    <svg
      width={width}
      height={height}
      viewBox={showWordmark ? "0 0 140 40" : "0 0 32 32"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="6" width="28" height="28" rx="8" fill="var(--teal-500)" />
      <path
        d="M8 22L14 14L18 18L24 10"
        stroke="var(--teal-300)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="10" r="2" fill="var(--teal-100)" />
      {showWordmark && (
        <>
          <text
            x="38"
            y="18"
            fill={wordmark}
            fontFamily="var(--font-primary)"
            fontSize="13"
            fontWeight="700"
          >
            NetPay
          </text>
          <text
            x="38"
            y="32"
            fill="var(--teal-300)"
            fontFamily="var(--font-primary)"
            fontSize="11"
            fontWeight="600"
          >
            ITALIA
          </text>
        </>
      )}
    </svg>
  );
}
