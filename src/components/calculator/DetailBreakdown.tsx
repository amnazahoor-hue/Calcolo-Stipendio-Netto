"use client";

import { SalaryBreakdown } from "@/lib/salary-calculator";
import { formatCurrency, formatPercent } from "@/lib/format";
import styles from "./DetailBreakdown.module.css";

interface DetailBreakdownProps {
  breakdown: SalaryBreakdown;
}

type RowType = "base" | "deduction" | "benefit" | "total";

interface DetailRow {
  label: string;
  value: number;
  type: RowType;
  sublabel?: string;
}

function buildRows(b: SalaryBreakdown): DetailRow[] {
  const addizionali = b.regionalTax + b.municipalTax;

  return [
    { label: "RAL (Gross Annual)", value: b.ral, type: "base" },
    {
      label: "INPS Employee Contributions",
      sublabel: formatPercent(b.inpsRate),
      value: -b.inps,
      type: "deduction",
    },
    { label: "IRPEF Taxable Base", value: b.imponibile, type: "base" },
    {
      label: "Gross IRPEF (23% · 33% · 43%)",
      value: b.irpefLorda,
      type: "base",
    },
    {
      label: "Regional + Municipal Surcharges",
      value: -addizionali,
      type: "deduction",
    },
    {
      label: "Work Deduction (Art. 13 TUIR)",
      value: -b.detrazioneLavoro,
      type: "benefit",
    },
    {
      label: "Cuneo Fiscale Deduction",
      value: -b.cuneoDeduction,
      type: "benefit",
    },
    {
      label: "Family Deductions",
      value: -b.detrazioniFamiliari,
      type: "benefit",
    },
    { label: "Net IRPEF", value: -b.irpefNetta, type: "deduction" },
    {
      label: "Cuneo Exempt Sum (≤ €20k)",
      value: b.cuneoExempt,
      type: "benefit",
    },
    { label: "IRPEF Bonus €100", value: b.bonus100, type: "benefit" },
    {
      label: "Welfare / Fringe Benefit",
      value: b.welfareBenefit,
      type: "benefit",
    },
    { label: "Net Annual Salary", value: b.netAnnual, type: "total" },
  ];
}

function formatSignedValue(value: number, type: RowType): string {
  const formatted = formatCurrency(Math.abs(value));
  if (type === "base" || type === "total") return formatted;
  if (value === 0) return formatted;
  return value < 0 ? `− ${formatted}` : `+ ${formatted}`;
}

export function DetailBreakdown({ breakdown }: DetailBreakdownProps) {
  const rows = buildRows(breakdown);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4>Calculation Breakdown</h4>
        <p>Line by line , same sequence as an Italian payslip</p>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span>Item</span>
          <span>Annual Amount</span>
        </div>

        {rows.map((row) => (
          <div
            key={row.label}
            className={`${styles.tableRow} ${styles[row.type]}`}
          >
            <span className={styles.label}>
              {row.label}
              {row.sublabel && (
                <span className={styles.sublabel}>{row.sublabel}</span>
              )}
            </span>
            <span className={styles.value}>
              {formatSignedValue(row.value, row.type)}
            </span>
          </div>
        ))}
      </div>

      <p className={styles.note}>
        Monthly net:{" "}
        <strong>{formatCurrency(breakdown.netMonthly)}</strong> ÷{" "}
        {breakdown.monthlyPayments} mensilità · Region:{" "}
        <strong>{breakdown.regionName}</strong>
      </p>
    </div>
  );
}
