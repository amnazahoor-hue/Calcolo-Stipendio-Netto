"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

interface LogoLinkProps {
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}

export function LogoLink({ className, children, onNavigate }: LogoLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      className={className}
      onClick={handleClick}
      aria-label="NetPay Italia home"
    >
      {children}
    </Link>
  );
}
