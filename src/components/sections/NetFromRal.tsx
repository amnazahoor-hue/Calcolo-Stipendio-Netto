"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./NetFromRal.module.css";

export function NetFromRal() {
  return (
    <section id="net-from-ral" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.inner}>
          <span className="section-label">Conversione RAL</span>
          <h2>Calcola Lo Stipendio Netto Da RAL</h2>
          <div className={styles.copy}>
            <p>
              Molti lavori in Italia sono presentati come annuali RAL, il che rende
              importante comprendere la relazione tra il reddito annuo lordo e la
              retribuzione netta mensile.
            </p>
            <p>
              Per calcolare lo stipendio netto da RAL, il reddito lordo annuo viene
              innanzitutto convertito in reddito imponibile. Successivamente, vengono
              applicate le imposte, i contributi previdenziali e le ritenute a carico del
              dipendente per calcolare l&apos;importo netto stimato.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
