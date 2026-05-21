"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./Hero.module.css";

const STATS = [
  {
    value: "10 sec",
    label: "Average calculation time",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M12 7V12L15 14" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#2563EB",
    tint: "#EFF6FF",
  },
  {
    value: "21",
    label: "Italian regions supported",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21C16.4183 21 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 21 12 21Z"
          fill="#FFF7ED"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <path
          d="M8.5 10.5C9.5 9 10.5 8.5 12 8.5C13.5 8.5 14.5 9 15.5 10.5C14.5 12.5 13.5 13 12 13C10.5 13 9.5 12.5 8.5 10.5Z"
          fill="#F59E0B"
        />
        <circle cx="12" cy="10.5" r="1.25" fill="#FFF7ED" />
      </svg>
    ),
    accent: "#F59E0B",
    tint: "#FFF7ED",
  },
  {
    value: "2026",
    label: "Tax rules updated",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="5" width="16" height="15" rx="2" fill="#E6F5F3" stroke="#2E8B82" strokeWidth="1.5" />
        <path d="M8 3V7M16 3V7M4 10H20" stroke="#2E8B82" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 14L11 16L15 12" stroke="#52B5AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#2E8B82",
    tint: "#E6F5F3",
  },
] as const;

const CHIPS = ["IRPEF 23·33·43%", "INPS 9.19%", "Cuneo Fiscale", "Bonus €100"];

const BREAKDOWN = [
  { label: "Net Income", pct: 72, amount: "€1,996", color: "#10B981", tint: "#ECFDF5" },
  { label: "IRPEF", pct: 15, amount: "€520", color: "#2563EB", tint: "#EFF6FF" },
  { label: "INPS", pct: 9, amount: "€312", color: "#6366F1", tint: "#EEF2FF" },
  { label: "Local Tax", pct: 4, amount: "€139", color: "#F59E0B", tint: "#FFF7ED" },
] as const;

const DONUT_R = 50;
const DONUT_C = 2 * Math.PI * DONUT_R;

function getDonutSegments(items: typeof BREAKDOWN) {
  let offset = 0;
  return items.map((item) => {
    const length = (item.pct / 100) * DONUT_C;
    const segment = { ...item, length, offset: -offset };
    offset += length;
    return segment;
  });
}

const DONUT_SEGMENTS = getDonutSegments(BREAKDOWN);

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgMesh} aria-hidden />
      <div className={styles.gridPattern} aria-hidden />

      <div className="container">
        <div className={styles.grid}>
        <FadeIn direction="none" className={styles.content}>
          <div className={styles.badgeRow}>
            <span className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Legge di Bilancio 2026
            </span>
            <span className={styles.heroBadgeOutline}>Free · No signup</span>
          </div>

          <h1>
            Calculate Your Exact
            <span className={styles.highlight}> Net Salary</span>
            <br />
            From RAL In Seconds
          </h1>

          <p className={styles.subheadline}>
            Enter your RAL and discover your take-home pay , IRPEF, INPS, regional
            surcharges, cuneo fiscale, and bonus €100. Updated for Legge di Bilancio 2026.
          </p>

          <div className={styles.chips}>
            {CHIPS.map((chip) => (
              <span key={chip} className={styles.chip}>
                {chip}
              </span>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <Button href="#calculator" size="lg" className={styles.heroBtn}>
              Calculate My Net Salary
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} direction="none" className={styles.visual}>
          <div className={styles.visualGlow} aria-hidden />
          <div className={styles.mockCard}>
            <div className={styles.mockCardAccent} aria-hidden />
            <div className={styles.mockHeader}>
              <div>
                <span className={styles.mockTitle}>Salary Breakdown</span>
                <span className={styles.mockSub}>RAL €30,000 · Lombardia</span>
              </div>
              <span className={styles.mockBadge}>
                <span className={styles.liveDot} />
                Live
              </span>
            </div>

            <div className={styles.donutWrapper}>
              <div className={styles.donutRing} aria-hidden />
              <svg viewBox="0 0 120 120" className={styles.donut}>
                <circle
                  cx="60"
                  cy="60"
                  r={DONUT_R}
                  fill="none"
                  stroke="#E8F0EE"
                  strokeWidth="14"
                />
                {DONUT_SEGMENTS.map((seg) => (
                  <circle
                    key={seg.label}
                    cx="60"
                    cy="60"
                    r={DONUT_R}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={`${seg.length} ${DONUT_C}`}
                    strokeDashoffset={seg.offset}
                    transform="rotate(-90 60 60)"
                    className={styles.donutSegment}
                  />
                ))}
              </svg>
              <div className={styles.donutCenter}>
                <span className={styles.donutLabel}>Monthly Net</span>
                <span className={styles.donutValue}>€1,996</span>
              </div>
            </div>

            <div className={styles.mockBars}>
              {BREAKDOWN.map((bar, i) => (
                <div key={bar.label} className={styles.barRow}>
                  <span className={styles.barLabel}>
                    <span
                      className={styles.barDot}
                      style={{ background: bar.color }}
                    />
                    {bar.label}
                  </span>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      style={{
                        background: bar.color,
                        width: `${bar.pct}%`,
                      }}
                    />
                  </div>
                  <span className={styles.barAmount}>{bar.amount}</span>
                </div>
              ))}
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingNet}`}>
              <span className={styles.floatingIconGreen}>€</span>
              <div>
                <strong>Net Annual</strong>
                <span>€23,956 / year</span>
              </div>
            </div>

            <div className={`${styles.floatingCard2} ${styles.floatingTax}`}>
              <span className={styles.saveIcon}>↓ 28%</span>
              <div>
                <strong>Tax & Contributions</strong>
                <span>€6,044 deducted</span>
              </div>
            </div>
          </div>
        </FadeIn>
        </div>

        <FadeIn delay={0.15} className={styles.statsBar}>
          <div className={styles.statsInner}>
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={styles.statItem}
                style={{ "--stat-accent": stat.accent } as React.CSSProperties}
              >
                <div
                  className={styles.statIcon}
                  style={
                    {
                      background: stat.tint,
                      borderColor: `${stat.accent}25`,
                      color: stat.accent,
                    } as React.CSSProperties
                  }
                >
                  {stat.icon}
                </div>
                <div className={styles.statContent}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
