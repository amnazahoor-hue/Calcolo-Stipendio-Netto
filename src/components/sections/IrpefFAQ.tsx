"use client";

import { Accordion } from "@/components/ui/Accordion";
import { IRPEF_FAQ_ITEMS } from "@/lib/irpef-faq-data";
import styles from "./IrpefFAQ.module.css";

export function IrpefFAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: IRPEF_FAQ_ITEMS.map((item) => ({
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
        <div className={styles.header}>
          <span className="section-label">Domande frequenti</span>
          <h2>FAQ sugli Scaglioni IRPEF</h2>
          <p>
            Risposte alle domande più comuni su aliquote, scaglioni, detrazioni e riforme
            fiscali IRPEF in Italia per il 2026.
          </p>
        </div>
        <Accordion items={[...IRPEF_FAQ_ITEMS]} variant="faq" />
      </div>
    </section>
  );
}
