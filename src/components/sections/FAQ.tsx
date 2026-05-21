"use client";

import { useEffect, useRef, useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQ_ITEMS } from "@/lib/faq-data";
import Image from "next/image";
import styles from "./FAQ.module.css";

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
                <Image
                  src="/images/faq-salary.webp"
                  alt="Person reviewing salary documents and tax paperwork"
                  width={480}
                  height={320}
                  className={styles.faqImage}
                  priority={false}
                />
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
