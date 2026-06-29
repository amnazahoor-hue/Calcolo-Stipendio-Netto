"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./Hero.module.css";

const QUICK_RAL = ["25000", "30000", "35000", "40000"] as const;

const TRUST_ITEMS = ["IRPEF", "INPS", "21 Regioni", "Cuneo Fiscale", "Bonus €100"] as const;

export const HERO_RAL_PREFILL_KEY = "netpay-prefill-ral";

function formatRalDisplay(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  return Number(digits).toLocaleString("en-US");
}

export function Hero() {
  const [ralInput, setRalInput] = useState("30000");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const digits = ralInput.replace(/\D/g, "");
    if (digits) {
      sessionStorage.setItem(HERO_RAL_PREFILL_KEY, digits);
    }
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  const setQuickRal = (value: string) => {
    setRalInput(value);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackdrop} aria-hidden>
        <div className={styles.heroGlow} />
        <div className={styles.glowArc}>
          <svg
            className={styles.arcSvg}
            viewBox="0 0 1440 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax meet"
          >
            <defs>
              <linearGradient
                id="heroArcFill"
                x1="720"
                y1="40"
                x2="720"
                y2="560"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="rgba(14, 159, 110, 0.42)" />
                <stop offset="35%" stopColor="rgba(14, 159, 110, 0.22)" />
                <stop offset="70%" stopColor="rgba(14, 159, 110, 0.08)" />
                <stop offset="100%" stopColor="rgba(14, 159, 110, 0)" />
              </linearGradient>
              <linearGradient
                id="heroArcStroke"
                x1="0"
                y1="260"
                x2="1440"
                y2="260"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="rgba(14, 159, 110, 0)" />
                <stop offset="12%" stopColor="rgba(14, 159, 110, 0.45)" />
                <stop offset="50%" stopColor="rgba(14, 159, 110, 0.75)" />
                <stop offset="88%" stopColor="rgba(14, 159, 110, 0.45)" />
                <stop offset="100%" stopColor="rgba(14, 159, 110, 0)" />
              </linearGradient>
              <filter
                id="heroArcBlur"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="14" />
              </filter>
            </defs>
            <path d="M-100 560 C 200 20, 1240 20, 1540 560 Z" fill="url(#heroArcFill)" />
            <path
              d="M-100 560 C 200 20, 1240 20, 1540 560"
              stroke="rgba(14, 159, 110, 0.5)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              filter="url(#heroArcBlur)"
              opacity="0.85"
            />
            <path
              d="M-100 560 C 200 20, 1240 20, 1540 560"
              stroke="url(#heroArcStroke)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="container">
        <FadeIn direction="none" className={styles.inner}>
          <h1 className={styles.headline}>
            Calcolo Stipendio Netto in Italia 2026: calcola il tuo{" "}
            <span className={styles.headlineAccent}>stipendio netto</span> dopo le tasse
          </h1>

          <div className={styles.heroCopy}>
            <p>
              Il calcolo stipendio netto aiuta i dipendenti, chi cerca lavoro e i lavoratori
              del settore pubblico a valutare le offerte di lavoro e a stimare la loro
              retribuzione netta dopo le tasse. Se vuoi calcolare lo stipendio netto, lo
              stipendio da lordo a netto e altre conversioni simili, questo strumento fornisce
              risultati accurati basati sulle normative fiscali italiane vigenti.
            </p>
            <p>
              Inserendo il tuo stipendio lordo o il tuo reddito annuo, puoi calcolare il tuo
              reddito netto mensile e annuo stimato. Il calcolatore tiene conto di fattori
              chiave come la tassazione IRPEF, i contributi INPS, le detrazioni a carico del
              dipendente e altri elementi che influenzano l&apos;importo finale accreditato sul
              tuo conto bancario. Applica inoltre le aliquote fiscali scaglioni irpef del 2026,
              dal 23% al 43%, per mostrare esattamente quante tasse si pagano per ogni livello
              di reddito.
            </p>
          </div>

          <div className={styles.inputStage}>
            <div className={styles.inputZone}>
            <form className={styles.inputCard} onSubmit={handleSubmit}>
              <label htmlFor="hero-ral" className={styles.inputLabel}>
                Retribuzione annua lorda (RAL)
              </label>

              <div className={styles.inputRow}>
                <span className={styles.currency} aria-hidden>
                  €
                </span>
                <input
                  id="hero-ral"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="es. 30.000"
                  className={styles.ralInput}
                  value={formatRalDisplay(ralInput)}
                  onChange={(event) => setRalInput(event.target.value.replace(/\D/g, ""))}
                />
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.quickAmounts} role="group" aria-label="Importi RAL rapidi">
                  {QUICK_RAL.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`${styles.quickBtn} ${ralInput === amount ? styles.quickBtnActive : ""}`}
                      onClick={() => setQuickRal(amount)}
                    >
                      €{(Number(amount) / 1000).toFixed(0)}k
                    </button>
                  ))}
                </div>

                <div className={styles.footerRight}>
                  <span className={styles.rulesPill}>
                    <span className={styles.rulesDot} aria-hidden />
                    Regole 2026
                  </span>
                  <button type="submit" className={styles.submitBtn} aria-label="Calcola stipendio netto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M12 19V5M12 5L6 11M12 5L18 11"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            </div>
          </div>

          <div className={styles.trusted}>
            <p className={styles.trustedLabel}>
              Lo strumento gratuito di riferimento per
            </p>
            <ul className={styles.trustList}>
              {TRUST_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
