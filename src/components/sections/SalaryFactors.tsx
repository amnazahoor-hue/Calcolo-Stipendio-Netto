"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./SalaryFactors.module.css";

const FACTORS = [
  "Livello di reddito annuo e fascia di tassazione",
  "Tipo di contratto di lavoro",
  "Lavoro a tempo pieno o a tempo parziale",
  "Detrazioni e crediti d'imposta applicabili",
  "Aliquote fiscali regionali e comunali",
] as const;

export function SalaryFactors() {
  return (
    <section id="salary-factors" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="section-label">Fattori chiave</span>
          <h2>Fattori Che Influenzano Il Calcolo Dello Stipendio Netto</h2>
          <p>
            È del tutto possibile che anche i dipendenti con lo stesso stipendio lordo
            ricevano importi netti diversi a seconda della loro situazione. Nel calcolo dello
            stipendio netto, ecco alcuni fattori da tenere in considerazione.
          </p>
        </FadeIn>

        <div className={styles.list} role="list">
          {FACTORS.map((factor, index) => (
            <FadeIn key={factor} delay={index * 0.06} className={styles.listItem}>
              <div className={styles.factor} role="listitem">
                <span className={styles.number} aria-hidden>
                  {index + 1}
                </span>
                <h3>{factor}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
