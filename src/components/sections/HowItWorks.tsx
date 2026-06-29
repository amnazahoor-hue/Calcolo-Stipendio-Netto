"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { breakdownColors, verdeTrust } from "@/lib/design-tokens";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    iconBg: verdeTrust.chartTints.inps,
    title: "Passaggio 1: Inserisci il tuo stipendio lordo",
    description:
      'Inserisci l\'importo dello stipendio lordo nel campo "Stipendio". Puoi inserire i tuoi guadagni prima che vengano detratte le tasse e i contributi previdenziali.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
          stroke={breakdownColors.inps}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    iconBg: verdeTrust.chartTints.irpef,
    title: "Passaggio 2: Seleziona il tuo piano di pagamento",
    description:
      "Apri il menu a tendina e seleziona la frequenza di pagamento: all'anno (stipendio annuo o RAL), al mese, bisettimanale, quindicinale, alla settimana, al giorno, all'ora o trimestrale. Puoi calcolare stipendio netto mensile, reddito annuo e salari giornalieri e orari.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="5" width="16" height="15" rx="2" stroke={breakdownColors.irpef} strokeWidth="2" />
        <path d="M8 3V7M16 3V7M4 10H20" stroke={breakdownColors.irpef} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    iconBg: verdeTrust.chartTints.local,
    title: "Passaggio 3: Seleziona il paese",
    description:
      "Nella parte superiore dello strumento sono disponibili diverse opzioni relative ai paesi. Seleziona la valuta appropriata dal menu a tendina. La calcolatrice supporta l'euro e altre valute principali, il che la rende versatile e adattabile a diverse esigenze.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke={breakdownColors.local} strokeWidth="2" />
        <path d="M3 12H21M12 3C14.5 6 14.5 18 12 21M12 3C9.5 6 9.5 18 12 21" stroke={breakdownColors.local} strokeWidth="2" />
      </svg>
    ),
  },
  {
    iconBg: verdeTrust.netTint,
    title: "Passaggio 4: Regolare le impostazioni aggiuntive",
    description:
      "Fai clic su 'Altre opzioni' per personalizzare il tuo calcolo. Potresti essere in grado di aggiungere ulteriori dettagli sullo stipendio che influenzano il risultato finale del calcolo stipendio netto Italia. È inoltre possibile regolare queste impostazioni aggiuntive fornendo ulteriori informazioni.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 15.5A3.5 3.5 0 1 0 12 8.5A3.5 3.5 0 0 0 12 15.5Z"
          stroke={breakdownColors.irpef}
          strokeWidth="2"
        />
        <path
          d="M19.4 15A1.7 1.7 0 0 0 19.8 13.2L21 11.9A1 1 0 0 0 21 10.3L19.7 9A1.7 1.7 0 0 1 19.3 7.2L19.6 5.4A1 1 0 0 0 18.8 4.3L17 4.6A1.7 1.7 0 0 1 15.4 3.8L14.5 2.2A1 1 0 0 0 13.3 2H10.7A1 1 0 0 0 9.5 2.2L8.6 3.8A1.7 1.7 0 0 1 7 4.6L5.2 4.3A1 1 0 0 0 4 5.4L4.3 7.2A1.7 1.7 0 0 1 3.9 9L2.6 10.3A1 1 0 0 0 2.6 11.9L3.9 13.2A1.7 1.7 0 0 1 4.3 15L4 16.8A1 1 0 0 0 4.8 17.9L6.6 17.6A1.7 1.7 0 0 1 8.2 18.4L9.1 20A1 1 0 0 0 10.3 20.2H13.7A1 1 0 0 0 14.9 20L15.8 18.4A1.7 1.7 0 0 1 17.4 17.6L19.2 17.9A1 1 0 0 0 20.4 16.8L19.4 15Z"
          stroke={breakdownColors.irpef}
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    iconBg: verdeTrust.chartTints.inps,
    title: "Passaggio 5: Utilizzare il calcolo inverso",
    description:
      "Questo passaggio è facoltativo. Puoi anche saltarlo o sceglierlo se conosci già la tua retribuzione netta desiderata. Questo attiva il calcolo inverso (da netto a lordo). Questa funzione aiuta a determinare lo stipendio lordo necessario per raggiungere un determinato reddito netto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 16L17 8M17 8H9M17 8V16" stroke={breakdownColors.inps} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    iconBg: verdeTrust.chartTints.net,
    title: "Passaggio 6: Calcola il tuo stipendio netto",
    description:
      "Fai clic sul pulsante Calcolare per visualizzare immediatamente i risultati stimati. Il calcolatore elabora le imposte applicabili, i contributi previdenziali e le detrazioni per fornire una stima dello stipendio da lordo a netto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M9 19V6L21 3V16M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM21 16C21 17.1046 19.6569 18 18 18C16.3431 18 15 17.1046 15 16C15 14.8954 16.3431 14 18 14C19.6569 14 21 14.8954 21 16ZM9 10L21 7"
          stroke={breakdownColors.net}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="section-label">Guida rapida</span>
          <h2>Come Utilizzare Il Calcolatore Dello Stipendio Netto?</h2>
          <p>
            Il tuo calcolo stipendio netto è uno strumento rapido e facile da usare. Non
            comporta alcuna difficoltà o processo complesso. Ecco alcuni semplici passaggi
            per stimare il calcolo stipendio netto da lordo base al tuo calendario di
            pagamento.
          </p>
        </FadeIn>

        <div className={styles.steps}>
          {STEPS.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.08}>
              <article className={styles.step}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.icon} style={{ background: step.iconBg }}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
