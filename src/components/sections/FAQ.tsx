"use client";

import { useEffect, useRef, useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQ_ITEMS } from "@/lib/faq-data";
import styles from "./FAQ.module.css";

function FaqIllustration() {
  return (
    <svg
      className={styles.faqImage}
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Persona che consulta documenti salariali e moduli fiscali"
    >
      <rect width="480" height="320" fill="#F3F1EB" />
      <rect x="40" y="48" width="200" height="224" rx="16" fill="#FFFFFF" stroke="#E6E3DB" strokeWidth="2" />
      <rect x="64" y="80" width="120" height="10" rx="5" fill="#0E9F6E" opacity="0.35" />
      <rect x="64" y="104" width="152" height="8" rx="4" fill="#D8D4CB" />
      <rect x="64" y="124" width="136" height="8" rx="4" fill="#D8D4CB" />
      <rect x="64" y="144" width="144" height="8" rx="4" fill="#D8D4CB" />
      <rect x="64" y="176" width="88" height="28" rx="8" fill="#0E9F6E" opacity="0.15" />
      <rect x="72" y="184" width="72" height="12" rx="4" fill="#0E9F6E" opacity="0.55" />
      <circle cx="332" cy="118" r="42" fill="#0E9F6E" opacity="0.12" />
      <path
        d="M296 248C296 214.863 322.863 188 356 188C389.137 188 416 214.863 416 248V256H296V248Z"
        fill="#0F1E1A"
        opacity="0.85"
      />
      <circle cx="356" cy="156" r="28" fill="#0F1E1A" opacity="0.85" />
      <rect x="248" y="196" width="88" height="112" rx="12" fill="#FFFFFF" stroke="#E6E3DB" strokeWidth="2" />
      <path d="M268 224H316M268 244H304M268 264H296" stroke="#0E9F6E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="388" cy="92" r="28" fill="#FFFFFF" stroke="#0E9F6E" strokeWidth="2" />
      <path d="M378 92L386 100L400 84" stroke="#0E9F6E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FAQSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<number>();

  useEffect(() => {
    const intro = introRef.current;
    if (!intro) return;

    const syncHeight = () => {
      const isDesktop = window.matchMedia("(min-width: 961px)").matches;
      setPanelHeight(isDesktop ? intro.offsetHeight : undefined);
    };

    syncHeight();

    const observer = new ResizeObserver(syncHeight);
    observer.observe(intro);
    window.addEventListener("resize", syncHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro} ref={introRef}>
            <FadeIn direction="none">
              <span className="section-label">Common Questions</span>
              <h2>
                Frequently Asked
                <br />
                Questions
              </h2>
              <p>
                Everything you need to know about Italian salary calculations,
                updated for the 2026 tax year and Legge di Bilancio rules.
              </p>
              <div className={styles.trustLine}>
                <span className={styles.trustDot} aria-hidden />
                Trusted by workers across all 21 Italian regions
              </div>
              <div className={styles.illustration}>
                <FaqIllustration />
              </div>
            </FadeIn>
          </div>

          <div
            className={styles.panel}
            style={panelHeight ? { height: panelHeight } : undefined}
          >
            <FadeIn delay={0.1} direction="none" className={styles.panelInner}>
              <Accordion
                items={[...FAQ_ITEMS]}
                variant="faq"
                fillHeight={Boolean(panelHeight)}
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
