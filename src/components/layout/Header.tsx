"use client";



import { useCallback, useEffect, useState } from "react";

import Link from "next/link";

import { Logo } from "@/components/brand/Logo";
import { LogoLink } from "@/components/brand/LogoLink";

import { ScrollSpy } from "@/components/ui/ScrollSpy";

import { NAV_LINKS } from "@/lib/constants";

import styles from "./Header.module.css";



const HOME_SECTIONS = ["calculator", "how-it-works", "salary-breakdown", "faq"];



function NavIcon({ label }: { label: string }) {

  switch (label) {

    case "Calculator":

      return (

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>

          <rect x="4" y="3" width="16" height="18" rx="3" fill="var(--icon-blue-bg)" stroke="var(--icon-blue)" strokeWidth="1.5" />

          <path d="M8 8H16M8 12H16M8 16H12" stroke="var(--icon-blue)" strokeWidth="1.5" strokeLinecap="round" />

        </svg>

      );

    case "How It Works":

      return (

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>

          <circle cx="12" cy="12" r="9" fill="var(--icon-green-bg)" stroke="var(--icon-green)" strokeWidth="1.5" />

          <path d="M12 8V12L15 14" stroke="var(--icon-green)" strokeWidth="1.5" strokeLinecap="round" />

        </svg>

      );

    case "Salary Breakdown":

      return (

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>

          <rect x="3" y="5" width="18" height="14" rx="3" fill="var(--icon-amber-bg)" stroke="var(--icon-amber)" strokeWidth="1.5" />

          <path d="M7 14L10 11L13 13L17 9" stroke="var(--icon-amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        </svg>

      );

    case "FAQ":

      return (

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>

          <circle cx="12" cy="12" r="9" fill="var(--icon-indigo-bg)" stroke="var(--icon-indigo)" strokeWidth="1.5" />

          <path d="M9.5 9.5C9.5 8.12 10.62 7 12 7C13.38 7 14.5 8.12 14.5 9.5C14.5 10.5 13.8 11.2 12.9 11.6C12.4 11.8 12 12.3 12 12.9V13" stroke="var(--icon-indigo)" strokeWidth="1.5" strokeLinecap="round" />

          <circle cx="12" cy="16" r="0.75" fill="var(--icon-indigo)" />

        </svg>

      );

    case "Contact":

      return (

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>

          <rect x="3" y="5" width="18" height="14" rx="3" fill="var(--icon-blue-bg)" stroke="var(--icon-navy)" strokeWidth="1.5" />

          <path d="M3 8L12 13L21 8" stroke="var(--icon-navy)" strokeWidth="1.5" strokeLinecap="round" />

        </svg>

      );

    default:

      return null;

  }

}



export function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("");



  useEffect(() => {

    const onScroll = () => setScrolled(window.scrollY > 16);

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

        <div className={styles.headerGlow} aria-hidden />

        <div className={`container ${styles.inner}`}>

          <LogoLink className={styles.logoLink} onNavigate={closeMenu}>
            <Logo size="header" className={styles.logoDesktop} />
            <Logo size="headerMobile" className={styles.logoMobile} />
          </LogoLink>



          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <div className={styles.navPill}>
              <ul className={styles.navList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
                      onClick={closeMenu}
                    >
                      <span className={styles.navIcon}>
                        <NavIcon label={link.label} />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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


