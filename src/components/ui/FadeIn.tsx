"use client";

import { useInView } from "@/lib/useInView";
import styles from "./FadeIn.module.css";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${styles[direction]} ${isInView ? styles.visible : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
