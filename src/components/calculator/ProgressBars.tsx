"use client";

import { SalaryBreakdown } from "@/lib/salary-calculator";
import { formatCurrency } from "@/lib/format";
import styles from "./ProgressBars.module.css";

interface ProgressBarsProps {
  breakdown: SalaryBreakdown;
}

export function ProgressBars({ breakdown }: ProgressBarsProps) {
  const localTax = breakdown.regionalTax + breakdown.municipalTax;
  const items = [
    { label: "INPS Contributions", value: breakdown.inps, color: "#6366F1" },
    { label: "IRPEF (Income Tax)", value: breakdown.irpefNetta, color: "#2563EB" },
    { label: "Regional & Municipal", value: localTax, color: "#F59E0B" },
    {
      label: "Net Take-Home",
      value: breakdown.netAnnual,
      color: "#10B981",
      highlight: true,
    },
  ];

  const maxValue = breakdown.ral;

  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        const pct = (item.value / maxValue) * 100;
        return (
          <div key={item.label} className={styles.row}>
            <div className={styles.labelRow}>
              <span className={item.highlight ? styles.highlight : ""}>
                {item.label}
              </span>
              <span className={styles.amount}>{formatCurrency(item.value)}</span>
            </div>
            <div className={styles.track}>
              <div
                className={styles.fill}
                style={{
                  background: item.color,
                  ["--bar-target" as string]: `${pct}%`,
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
