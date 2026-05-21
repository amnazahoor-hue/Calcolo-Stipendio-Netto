"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./SalaryBreakdownInfo.module.css";

const TOPICS = ["IRPEF", "INPS", "Regional Tax", "Net Pay"];

const CARDS = [
  {
    step: "01",
    tag: "Income Tax",
    accent: "var(--icon-blue)",
    tint: "var(--icon-blue-bg)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="3" width="16" height="18" rx="3" fill="var(--icon-blue-bg)" stroke="var(--icon-blue)" strokeWidth="1.5" />
        <path d="M8 8H16M8 12H14M8 16H12" stroke="var(--icon-blue)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "IRPEF Tax Explained",
    content:
      "IRPEF is Italy's personal income tax, applied progressively in 2026 at 23% (up to €28,000 imponibile), 33% (€28,001 to €50,000), and 43% above €50,000. The taxable base is your RAL minus INPS contributions, not the gross salary itself.",
  },
  {
    step: "02",
    tag: "Social Security",
    accent: "var(--icon-green)",
    tint: "var(--icon-green-bg)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3L4 7V11C4 16.5 7.5 20.5 12 21C16.5 20.5 20 16.5 20 11V7L12 3Z" fill="var(--icon-green-bg)" stroke="var(--icon-green)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="var(--icon-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "INPS Contributions",
    content:
      "INPS social security is mandatory for all employees. Standard private-sector workers pay 9.19% of gross salary; apprentices pay a reduced 5.84%. These contributions fund pensions, healthcare, and unemployment benefits.",
  },
  {
    step: "03",
    tag: "Local Tax",
    accent: "var(--icon-amber)",
    tint: "var(--icon-amber-bg)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="10" r="3" fill="var(--icon-amber-bg)" stroke="var(--icon-amber)" strokeWidth="1.5" />
        <path d="M12 13C9 13 5 14.5 5 17V19H19V17C19 14.5 15 13 12 13Z" fill="var(--icon-amber-bg)" stroke="var(--icon-amber)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 6L8 4M18 6L16 4" stroke="var(--icon-amber)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Regional Tax Differences",
    content:
      "Each Italian region applies its own IRPEF surcharge (addizionale regionale), ranging from about 1.23% to 2.03% of taxable income. Municipal surcharges add another ~0.8% on average. The difference between regions can exceed €500/year.",
  },
  {
    step: "04",
    tag: "Formula",
    accent: "var(--icon-indigo)",
    tint: "var(--icon-indigo-bg)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" fill="var(--icon-indigo-bg)" stroke="var(--icon-indigo)" strokeWidth="1.5" />
        <path d="M12 7V12H16" stroke="var(--icon-indigo)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 16H16" stroke="var(--icon-indigo)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "How Net Salary Is Calculated",
    content:
      "Net = RAL - INPS - IRPEF (net of deductions) - regional tax - municipal tax + cuneo fiscale benefits + bonus €100. Work deductions (detrazioni) and the 2026 structural cuneo fiscale can reduce IRPEF by up to 65% for incomes under €25,000.",
  },
] as const;

export function SalaryBreakdownInfo() {
  return (
    <section id="salary-breakdown" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="section-label">Understanding Deductions</span>
          <h2>Salary Breakdown Guide</h2>
          <p>
            Every line on your Italian payslip explained, from progressive IRPEF
            to regional addizionali and the 2026 cuneo fiscale reform.
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
            <FadeIn key={card.title} delay={index * 0.08}>
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
