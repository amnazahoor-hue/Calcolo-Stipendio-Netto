"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./PublicSectorSalaries.module.css";

const TOPICS = [
  {
    title: "Insegnanti e Personale Scolastico",
    description:
      "Gli insegnanti delle scuole pubbliche sono retribuiti secondo le tabelle salariali governative per l'istruzione. I loro guadagni generalmente aumentano con gli anni di servizio e con l'avanzamento di carriera.",
  },
  {
    title: "Dipendenti Del Settore Sanitario Pubblico",
    description:
      "Medici, infermieri e personale sanitario che lavorano negli ospedali pubblici possono percepire stipendi diversi a seconda delle qualifiche, delle specializzazioni, dell'esperienza e delle responsabilità lavorative.",
  },
  {
    title: "Stipendi Nel Settore Pubblico",
    description:
      "Gli stipendi della pubblica amministrazione vengono aggiornati regolarmente tramite contratti collettivi e riforme governative. Di conseguenza, sia gli stipendi lordi che quelli netti possono variare nel tempo a causa di variazioni salariali e modifiche fiscali.",
  },
] as const;

export function PublicSectorSalaries() {
  return (
    <section id="public-sector" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="section-label">Settore pubblico</span>
          <h2>Stipendio Dell&apos;Amministrazione Pubblica (PA)</h2>
          <p>
            I dipendenti che lavorano nel settore della Pubblica Amministrazione (PA) in
            Italia: le retribuzioni sono generalmente calcolate in base a contratti
            collettivi nazionali e tabelle salariali pubbliche. Tali retribuzioni possono
            variare a seconda dell&apos;istituzione, della categoria professionale,
            dell&apos;anzianità e della posizione lavorativa.
          </p>
        </FadeIn>

        <div className={styles.grid}>
          {TOPICS.map((topic, index) => (
            <FadeIn key={topic.title} delay={index * 0.06} className={styles.gridItem}>
              <article className={styles.card}>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
