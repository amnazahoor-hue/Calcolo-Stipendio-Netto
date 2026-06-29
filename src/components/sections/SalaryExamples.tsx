"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./SalaryExamples.module.css";

const EXAMPLES = [
  {
    amount: "€1.500",
    title: "€1.500 lordo netto",
    description:
      "Uno stipendio mensile lordo di 1.500 euro si traduce in genere in un importo netto inferiore dopo la detrazione dei contributi previdenziali e delle imposte. Questa fascia salariale è comune per le posizioni di livello base e a tempo parziale.",
  },
  {
    amount: "€1.700",
    title: "€1.700 Lordo Netto",
    description:
      "Per i dipendenti con uno stipendio lordo mensile di 1.700 €, la retribuzione netta finale dipende dalle detrazioni e dai crediti d'imposta applicabili. Il calcolatore può fornire una stima personalizzata in base alla tua situazione specifica.",
  },
  {
    amount: "€1.800",
    title: "€1.800 Lordo Netto",
    description:
      "Uno stipendio mensile lordo di 1.800 € generalmente si traduce in uno stipendio netto inferiore dopo la detrazione dei contributi previdenziali INPS e delle imposte sul reddito. L'importo finale dipende da fattori quali le detrazioni fiscali, il luogo di residenza e la situazione lavorativa.",
  },
  {
    amount: "€1.900",
    title: "€1.900 Lordo Netto",
    description:
      "Per i dipendenti che guadagnano 1.900 € lordi al mese, lo stipendio netto varia in base a crediti d'imposta, contributi previdenziali e imposte regionali. Anche le imposte regionali variano a seconda del luogo di residenza e, utilizzando lo strumento di conversione, è possibile ottenere una stima dello stipendio netto finale.",
  },
  {
    amount: "€2.000",
    title: "€2.000 Lordo Netto",
    description:
      "Prima del calcolo dell'importo netto finale, uno stipendio lordo di 2.000 € è soggetto a imposte sul reddito e contributi previdenziali. L'importo netto effettivo dipende dalle condizioni individuali e dal sistema di gestione delle paghe.",
  },
] as const;

export function SalaryExamples() {
  return (
    <section id="salary-examples" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="section-label">Esempi pratici</span>
          <h2>Esempi Di Calcolo Dello Stipendio Lordo-Netto</h2>
          <p>
            Gli esempi aiutano a comprendere il concetto di calcolo dello stipendio
            lordo-netto. Sebbene i risultati finali possano variare leggermente a seconda
            della regione, dei contratti di lavoro e delle detrazioni fiscali, ecco alcuni
            esempi:
          </p>
        </FadeIn>

        <div className={styles.grid}>
          {EXAMPLES.map((example, index) => (
            <FadeIn key={example.title} delay={index * 0.06} className={styles.gridItem}>
              <article className={styles.card}>
                <span className={styles.amount}>{example.amount}</span>
                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
