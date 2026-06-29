"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./RalExplainer.module.css";

export function RalExplainer() {
  return (
    <section id="what-is-ral" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.inner}>
          <span className={styles.abbr} aria-hidden>
            RAL
          </span>
          <span className="section-label">Definizione</span>
          <h2>Che Cos&apos;è RAL?</h2>
          <p>
            RAL è il termine italiano per Retribuzione annua lorda. Rappresenta la
            retribuzione lorda totale che un dipendente riceve dal proprio datore di lavoro
            prima dell&apos;applicazione di imposte, contributi previdenziali e altre
            detrazioni.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
