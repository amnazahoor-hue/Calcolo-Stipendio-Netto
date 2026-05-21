"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { LogoLink } from "@/components/brand/LogoLink";
import {
  FOOTER_NAV,
  LEGAL_LINKS,
  SITE_DESCRIPTION,
  SOCIAL_LINKS,
} from "@/lib/constants";
import styles from "./Footer.module.css";

function SocialIcon({ platform }: { platform: (typeof SOCIAL_LINKS)[number]["platform"] }) {
  switch (platform) {
    case "linkedin":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#0A66C2" />
          <path
            d="M7.5 9.5H10V18H7.5V9.5ZM8.75 5.5C9.44 5.5 10 6.06 10 6.75C10 7.44 9.44 8 8.75 8C8.06 8 7.5 7.44 7.5 6.75C7.5 6.06 8.06 5.5 8.75 5.5ZM11.5 9.5H13.8V10.45C14.15 9.85 14.95 9.3 16.1 9.3C18.45 9.3 18.75 10.85 18.75 12.85V18H16.25V13.35C16.25 12.35 16.23 11.05 14.85 11.05C13.45 11.05 13.25 12.15 13.25 13.25V18H11.5V9.5Z"
            fill="white"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#1877F2" />
          <path
            d="M14.5 8.5H16.5V6H14.5C12.57 6 11 7.57 11 9.5V11H9V13.5H11V18H13.5V13.5H15.8L16.2 11H13.5V9.75C13.5 9.06 13.81 8.5 14.5 8.5Z"
            fill="white"
          />
        </svg>
      );
    case "x":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#000000" />
          <path
            d="M13.2 11.1L17.8 5.5H16.7L12.6 10.3L9.4 5.5H5.5L10.4 12.5L5.5 18.5H6.6L11 13.3L14.4 18.5H18.3L13.2 11.1ZM11.8 12.6L11.4 12L6.9 6.3H8.6L12.2 11L12.6 11.6L17.3 17.7H15.6L11.8 12.6Z"
            fill="white"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <defs>
            <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEDA75" />
              <stop offset="35%" stopColor="#FA7E1E" />
              <stop offset="65%" stopColor="#D62976" />
              <stop offset="100%" stopColor="#962FBF" />
            </linearGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#ig)" />
          <rect x="6.5" y="6.5" width="11" height="11" rx="3.5" stroke="white" strokeWidth="1.5" />
          <circle cx="17" cy="7" r="1" fill="white" />
          <circle cx="12" cy="12" r="2.5" stroke="white" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <LogoLink className={styles.brandLink}>
              <Logo size="footer" />
            </LogoLink>
            <p>{SITE_DESCRIPTION}</p>
          </div>

          <div className={styles.column}>
            <h4>Navigation</h4>
            <ul>
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Legal</h4>
            <ul>
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Follow Us</h4>
            <p className={styles.socialText}>
              Stay updated with salary tips and 2026 tax news.
            </p>
            <div className={styles.social}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon platform={s.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.disclaimer}>
            Results are estimates for informational purposes only. Consult a tax
            professional for official advice.
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} NetPay Italia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
