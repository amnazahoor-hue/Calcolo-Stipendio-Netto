"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { LogoLink } from "@/components/brand/LogoLink";
import { ScrollSpy } from "@/components/ui/ScrollSpy";
import { NAV_LINKS } from "@/lib/constants";
import styles from "./Header.module.css";

const HOME_SECTIONS = ["calculator", "how-it-works", "salary-breakdown", "faq"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleActiveChange = useCallback((id: string) => {
    setActiveSection(id);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeSection === href.slice(1);
    }
    return false;
  };

  return (
    <>
      <ScrollSpy sectionIds={HOME_SECTIONS} onActiveChange={handleActiveChange} />
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.floatingBar}>
          <LogoLink className={styles.logoLink} onNavigate={closeMenu}>
            <Logo size="header" className={styles.logoDesktop} />
            <Logo size="headerMobile" className={styles.logoMobile} />
          </LogoLink>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Main">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="#calculator" className={styles.mobileCta} onClick={closeMenu}>
              Calculate Net
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </nav>

          <div className={styles.rightActions}>
            <Link href="/contact" className={styles.secondaryLink} onClick={closeMenu}>
              Contact
            </Link>
            <Link href="#calculator" className={styles.headerCta} onClick={closeMenu}>
              Calculate Net
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              type="button"
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <button
          type="button"
          className={styles.backdrop}
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}
    </>
  );
}
