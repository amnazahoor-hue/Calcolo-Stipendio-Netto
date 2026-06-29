"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./SalaryBreakdownInfo.module.css";

const TOPICS = ["INPS", "IRPEF", "Addizionale regionale", "Addizionale comunale", "Bonus €100"];

const CARDS = [
  {
    step: "01",
    tag: "Previdenza",
    accent: "var(--icon-green)",
    tint: "var(--icon-green-bg)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3L4 7V11C4 16.5 7.5 20.5 12 21C16.5 20.5 20 16.5 20 11V7L12 3Z"
          fill="var(--icon-green-bg)"
          stroke="var(--icon-green)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="var(--icon-green)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Contributi Previdenziali INPS",
    content:
      "I dipendenti versano una parte del loro stipendio all'INPS (Istituto Nazionale di Previdenza Sociale). Questi contributi contribuiscono a finanziare pensioni, sussidi di disoccupazione e altri programmi di assistenza sociale. Questo calcolatore applica i contributi previdenziali dei dipendenti al 9,19% della retribuzione lorda.",
  },
  {
    step: "02",
    tag: "Imposta",
    accent: "var(--icon-blue)",
    tint: "var(--icon-blue-bg)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="3"
          fill="var(--icon-blue-bg)"
          stroke="var(--icon-blue)"
          strokeWidth="1.5"
        />
        <path
          d="M8 8H16M8 12H14M8 16H12"
          stroke="var(--icon-blue)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "IRPEF Income Tax",
    content:
      "L'IRPEF è la principale imposta sul reddito delle persone fisiche applicata ai redditi da lavoro dipendente. L'importo da pagare dipende dal reddito imponibile e dalle tre aliquote applicabili. Queste aliquote vanno dal 23% fino a 28.000 euro, al 35% per la fascia successiva fino a 50.000 euro e al 43% per redditi superiori. Il nostro calcolatore presuppone che gli utenti siano residenti in Italia e fornisce il risultato in base agli standard italiani.",
  },
  {
    step: "03",
    tag: "Regionale",
    accent: "var(--icon-amber)",
    tint: "var(--icon-amber-bg)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="10" r="3" fill="var(--icon-amber-bg)" stroke="var(--icon-amber)" strokeWidth="1.5" />
        <path
          d="M12 13C9 13 5 14.5 5 17V19H19V17C19 14.5 15 13 12 13Z"
          fill="var(--icon-amber-bg)"
          stroke="var(--icon-amber)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M6 6L8 4M18 6L16 4" stroke="var(--icon-amber)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Addizionale Regionale IRPEF",
    content:
      "Ai dipendenti potrebbe essere richiesto il pagamento di una sovrattassa regionale in aggiunta all'imposta sul reddito nazionale. L'aliquota fiscale applicata varia a seconda della regione di residenza del contribuente, e può arrivare fino al 3,33%.",
  },
  {
    step: "04",
    tag: "Comunale",
    accent: "var(--icon-indigo)",
    tint: "var(--icon-indigo-bg)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 20H20M6 20V10L12 6L18 10V20"
          stroke="var(--icon-indigo)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 20V14H14V20" stroke="var(--icon-indigo)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Addizionale Comunale IRPEF",
    content:
      "Molti comuni applicano una sovrattassa locale aggiuntiva sul reddito imponibile. L'importo varia da un comune all'altro e può incidere sullo stipendio netto finale. Le aliquote fiscali comunali dipendono dalla località di residenza. Sebbene le aliquote comunali possano raggiungere lo 0,9%, il nostro calcolatore applica le aliquote fiscali più elevate per fornire una stima accurata.",
  },
  {
    step: "05",
    tag: "Agevolazione",
    accent: "var(--color-net)",
    tint: "var(--color-net-tint)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" fill="var(--color-net-tint)" stroke="var(--color-net)" strokeWidth="1.5" />
        <path
          d="M8 12.5L11 15.5L16 9.5"
          stroke="var(--color-net)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Trattamento Supplementare (Bonus Di €100)",
    content:
      "I dipendenti che soddisfano i requisiti possono ricevere un'agevolazione fiscale supplementare, comunemente nota come bonus di 100 euro. L'ammissibilità dipende da determinate soglie di reddito e dalle normative fiscali vigenti.",
  },
] as const;

export function SalaryBreakdownInfo() {
  return (
    <section id="salary-breakdown" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="section-label">Detrazioni e imposte</span>
          <h2>Tasse Incluse Nel Calcolatore Di Stipendio Italiano</h2>
          <p>
            Il calcolatore stima il tuo stipendio netto tenendo conto delle principali imposte e
            contributi che gravano sui lavoratori dipendenti in Italia.
          </p>
          <div className={styles.topicPills}>
            {TOPICS.map((topic) => (
              <span key={topic} className={styles.topicPill}>
                {topic}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {CARDS.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.06} className={styles.gridItem}>
              <article
                className={styles.card}
                style={{ "--card-accent": card.accent } as React.CSSProperties}
              >
                <div className={styles.cardTop}>
                  <span
                    className={styles.iconWrap}
                    style={{
                      background: card.tint,
                      borderColor: `${card.accent}25`,
                    }}
                  >
                    {card.icon}
                  </span>
                  <span className={styles.step}>{card.step}</span>
                </div>
                <span className={styles.tag}>{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
