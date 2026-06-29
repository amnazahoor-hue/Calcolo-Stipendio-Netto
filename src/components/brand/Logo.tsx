import Image from "next/image";
import styles from "./Logo.module.css";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "header" | "headerMobile" | "footer" | "icon";
  className?: string;
}

const iconSizes = {
  header: 36,
  headerMobile: 32,
  footer: 42,
  icon: 32,
} as const;

export function Logo({
  variant = "light",
  size = "header",
  className,
}: LogoProps) {
  const iconPx = iconSizes[size];
  const showWordmark = size !== "icon";
  const wordmarkClass =
    variant === "dark"
      ? `${styles.wordmark} ${styles.wordmarkDark}`
      : styles.wordmark;

  if (!showWordmark) {
    return (
      <Image
        src="/images/logo.webp"
        alt=""
        width={iconPx}
        height={iconPx}
        className={`${styles.iconOnly} ${className ?? ""}`}
        priority
        aria-hidden
      />
    );
  }

  return (
    <span className={`${styles.brand} ${className ?? ""}`}>
      <Image
        src="/images/logo.webp"
        alt=""
        width={iconPx}
        height={iconPx}
        className={styles.mark}
        priority
        aria-hidden
      />
      <span className={wordmarkClass}>
        <span className={styles.title}>NetPay</span>
        <span className={styles.subtitle}>ITALIA</span>
      </span>
    </span>
  );
}
