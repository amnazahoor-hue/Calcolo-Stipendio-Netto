"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./IrpefPageHero.module.css";

export function IrpefPageHero() {
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
              <linearGradient id="irpefArcFill" x1="720" y1="40" x2="720" y2="560" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(14, 159, 110, 0.38)" />
                <stop offset="35%" stopColor="rgba(14, 159, 110, 0.2)" />
                <stop offset="70%" stopColor="rgba(14, 159, 110, 0.07)" />
                <stop offset="100%" stopColor="rgba(14, 159, 110, 0)" />
              </linearGradient>
              <linearGradient id="irpefArcFadeX" x1="0" y1="280" x2="1440" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="10%" stopColor="white" stopOpacity="1" />
                <stop offset="90%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="irpefArcSideMask" maskUnits="userSpaceOnUse">
                <rect x="0" y="0" width="1440" height="560" fill="url(#irpefArcFadeX)" />
              </mask>
            </defs>
            <g mask="url(#irpefArcSideMask)">
              <path d="M-100 560 C 200 20, 1240 20, 1520 560 Z" fill="url(#irpefArcFill)" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container">
        <FadeIn direction="none" className={styles.inner}>
          <h1>
            IRPEF (imposta sul reddito in Italia) –{" "}
            <span className={styles.headlineAccent}>scaglioni e aliquote fiscali</span> in Italia
          </h1>
          <p>
            L&apos;IRPEF è l&apos;imposta nazionale sul reddito delle persone fisiche in Italia,
            che opera secondo un modello di tassazione progressiva. In base a questo sistema,
            diverse porzioni del reddito di un contribuente sono tassate con aliquote diverse a
            seconda dei suoi guadagni. Le persone fisiche residenti in Italia o che percepiscono
            un reddito in Italia sono tenute a versare gli scaglioni IRPEF nelle aliquote previste.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
