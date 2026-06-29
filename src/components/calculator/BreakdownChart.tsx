"use client";

import { SalaryBreakdown as BreakdownType } from "@/lib/salary-calculator";
import { breakdownColors } from "@/lib/design-tokens";
import { formatCurrency } from "@/lib/format";
import styles from "./BreakdownChart.module.css";

interface BreakdownChartProps {
  breakdown: BreakdownType;
}

const COLORS = {
  net: breakdownColors.net,
  inps: breakdownColors.inps,
  irpef: breakdownColors.irpef,
  local: breakdownColors.local,
};

export function BreakdownChart({ breakdown }: BreakdownChartProps) {
  const localTax = breakdown.regionalTax + breakdown.municipalTax;

  const data = [
    { name: "Net Income", value: Math.max(0, breakdown.netAnnual), color: COLORS.net },
    { name: "INPS", value: breakdown.inps, color: COLORS.inps },
    { name: "IRPEF", value: breakdown.irpefNetta, color: COLORS.irpef },
    { name: "Local Taxes", value: localTax, color: COLORS.local },
  ].filter((d) => d.value > 0);

  const total = data.reduce((sum, d) => sum + d.value, 0);

  const gradientParts: string[] = [];
  let cursor = 0;
  data.forEach((item) => {
    const pct = (item.value / total) * 100;
    const next = cursor + pct;
    gradientParts.push(`${item.color} ${cursor}% ${next}%`);
    cursor = next;
  });

  const gradient = `conic-gradient(${gradientParts.join(", ")})`;

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartWrapper}>
        <div className={styles.donut} style={{ background: gradient }} />
        <div className={styles.hole} />
        <div className={styles.center}>
          <span className={styles.centerLabel}>Total</span>
          <span className={styles.centerValue}>{formatCurrency(total)}</span>
        </div>
      </div>
      <div className={styles.legend}>
        {data.map((item) => (
          <div key={item.name} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: item.color }} />
            <span>{item.name}</span>
            <span className={styles.legendValue}>{formatCurrency(item.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
