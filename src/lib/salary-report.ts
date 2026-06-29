import { verdeTrust } from "@/lib/design-tokens";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { formatCurrency, formatPercent } from "@/lib/format";
import { SalaryBreakdown } from "@/lib/salary-calculator";

interface ReportRow {
  label: string;
  value: string;
  type: "base" | "deduction" | "benefit" | "total";
}

function formatPdfAmount(value: number): string {
  return `${Math.round(Math.abs(value)).toLocaleString("en-US")} EUR`;
}

function formatSigned(value: number, type: ReportRow["type"], forPdf = false): string {
  if (forPdf) {
    const amount = formatPdfAmount(value);
    if (type === "base" || type === "total") return amount;
    if (value === 0) return amount;
    return value < 0 ? `- ${amount}` : `+ ${amount}`;
  }

  const formatted = formatCurrency(Math.abs(value));
  if (type === "base" || type === "total") return formatted;
  if (value === 0) return formatted;
  return value < 0 ? `- ${formatted}` : `+ ${formatted}`;
}

function buildReportRows(b: SalaryBreakdown, forPdf = false): ReportRow[] {
  const addizionali = b.regionalTax + b.municipalTax;
  const pct = forPdf
    ? `${(b.inpsRate * 100).toFixed(1)}%`
    : formatPercent(b.inpsRate);

  return [
    { label: "RAL (Gross Annual)", value: formatSigned(b.ral, "base", forPdf), type: "base" },
    {
      label: `INPS Employee Contributions (${pct})`,
      value: formatSigned(-b.inps, "deduction", forPdf),
      type: "deduction",
    },
    { label: "IRPEF Taxable Base", value: formatSigned(b.imponibile, "base", forPdf), type: "base" },
    {
      label: forPdf
        ? "Gross IRPEF (23% / 33% / 43%)"
        : "Gross IRPEF (23% · 33% · 43%)",
      value: formatSigned(b.irpefLorda, "base", forPdf),
      type: "base",
    },
    {
      label: "Regional + Municipal Surcharges",
      value: formatSigned(-addizionali, "deduction", forPdf),
      type: "deduction",
    },
    {
      label: "Work Deduction (Art. 13 TUIR)",
      value: formatSigned(-b.detrazioneLavoro, "benefit", forPdf),
      type: "benefit",
    },
    {
      label: "Cuneo Fiscale Deduction",
      value: formatSigned(-b.cuneoDeduction, "benefit", forPdf),
      type: "benefit",
    },
    {
      label: "Family Deductions",
      value: formatSigned(-b.detrazioniFamiliari, "benefit", forPdf),
      type: "benefit",
    },
    { label: "Net IRPEF", value: formatSigned(-b.irpefNetta, "deduction", forPdf), type: "deduction" },
    {
      label: forPdf ? "Cuneo Exempt Sum (up to EUR 20k)" : "Cuneo Exempt Sum (≤ €20k)",
      value: formatSigned(b.cuneoExempt, "benefit", forPdf),
      type: "benefit",
    },
    { label: "IRPEF Bonus EUR 100", value: formatSigned(b.bonus100, "benefit", forPdf), type: "benefit" },
    {
      label: "Welfare / Fringe Benefit",
      value: formatSigned(b.welfareBenefit, "benefit", forPdf),
      type: "benefit",
    },
    { label: "Net Annual Salary", value: formatSigned(b.netAnnual, "total", forPdf), type: "total" },
  ];
}

export function buildReportSummary(b: SalaryBreakdown): string {
  const takeHome = formatPercent(b.netAnnual / b.ral, 1);
  const deductions = formatPercent(b.totalDeductions / b.ral, 1);

  return [
    `${SITE_NAME} , Salary Calculation Report`,
    `Generated: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`,
    "",
    `RAL (Gross): ${formatCurrency(b.ral)}`,
    `Monthly Net: ${formatCurrency(b.netMonthly)}`,
    `Annual Net: ${formatCurrency(b.netAnnual)}`,
    `Total Deductions: ${formatCurrency(b.totalDeductions)} (${deductions})`,
    `Take-home: ${takeHome}`,
    `Region: ${b.regionName}`,
    `Monthly payments: ${b.monthlyPayments}`,
    "",
    `Full calculator: ${SITE_URL}`,
    "",
    "Estimate for informational purposes only. Consult a tax professional for official advice.",
  ].join("\n");
}

function buildReportHtml(b: SalaryBreakdown): string {
  const rows = buildReportRows(b);
  const takeHome = formatPercent(b.netAnnual / b.ral, 1);

  const tableRows = rows
    .map(
      (row) => `
      <tr class="${row.type}">
        <td>${row.label}</td>
        <td>${row.value}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${SITE_NAME} , Salary Report</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: Inter, Segoe UI, Arial, sans-serif;
      color: ${verdeTrust.text};
      background: ${verdeTrust.bg};
      padding: 32px;
    }
    .page {
      max-width: 760px;
      margin: 0 auto;
      background: ${verdeTrust.surface};
      border: 1px solid ${verdeTrust.border};
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 16px 48px rgba(20, 32, 27, 0.1);
    }
    .header {
      background: linear-gradient(135deg, ${verdeTrust.primary} 0%, ${verdeTrust.primaryHover} 100%);
      color: ${verdeTrust.surface};
      padding: 28px 32px;
    }
    .brand { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
    .brand-icon {
      width: 44px; height: 44px; border-radius: 12px;
      background: ${verdeTrust.primary}; display: flex; align-items: center; justify-content: center;
    }
    .brand-icon svg { width: 28px; height: 28px; }
    .brand-name { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
    .brand-name span { display: block; font-size: 12px; font-weight: 600; color: ${verdeTrust.net}; letter-spacing: 0.08em; }
    .header h1 { font-size: 26px; margin-bottom: 6px; }
    .header p { color: rgba(255,255,255,0.72); font-size: 14px; }
    .hero {
      display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
      padding: 24px 32px; background: ${verdeTrust.surfaceSubtle}; border-bottom: 1px solid ${verdeTrust.border};
    }
    .hero-box {
      background: ${verdeTrust.surface}; border: 1px solid ${verdeTrust.border}; border-radius: 12px; padding: 18px;
    }
    .hero-box span { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: ${verdeTrust.textSecondary}; margin-bottom: 6px; }
    .hero-box strong { font-size: 28px; color: ${verdeTrust.net}; }
    .hero-box.secondary strong { font-size: 22px; color: ${verdeTrust.text}; }
    .meta { padding: 16px 32px; font-size: 13px; color: ${verdeTrust.textSecondary}; border-bottom: 1px solid ${verdeTrust.border}; }
    table { width: 100%; border-collapse: collapse; }
    th {
      text-align: left; padding: 12px 32px; font-size: 11px; text-transform: uppercase;
      letter-spacing: 0.06em; color: ${verdeTrust.textSecondary}; background: ${verdeTrust.bg}; border-bottom: 1px solid ${verdeTrust.border};
    }
    th:last-child { text-align: right; }
    td { padding: 14px 32px; border-bottom: 1px solid ${verdeTrust.surfaceSubtle}; font-size: 14px; }
    td:last-child { text-align: right; font-weight: 700; font-variant-numeric: tabular-nums; }
    tr.deduction td:last-child { color: ${verdeTrust.error}; }
    tr.benefit td:last-child { color: ${verdeTrust.net}; }
    tr.total { background: ${verdeTrust.netTint}; }
    tr.total td { font-size: 15px; font-weight: 700; }
    tr.total td:last-child { color: ${verdeTrust.net}; font-size: 17px; }
    .footer {
      padding: 18px 32px; font-size: 12px; color: ${verdeTrust.textSecondary}; background: ${verdeTrust.bg};
      border-top: 1px solid ${verdeTrust.border}; line-height: 1.6;
    }
    @media print { body { padding: 0; background: ${verdeTrust.surface}; } .page { box-shadow: none; border: none; } }
  </style>
</head>
<body>
  <div class="page">
    <div class="header">
      <div class="brand">
        <div class="brand-icon">
          <svg viewBox="0 0 32 32" fill="none"><rect x="2" y="6" width="28" height="28" rx="8" fill="${verdeTrust.primary}"/><path d="M8 22L14 14L18 18L24 10" stroke="${verdeTrust.net}" stroke-width="2.5" stroke-linecap="round"/></svg>
        </div>
        <div class="brand-name">${SITE_NAME}<span>ITALIA</span></div>
      </div>
      <h1>Salary Calculation Report</h1>
      <p>2026 rules · ${b.regionName} · ${b.monthlyPayments} monthly payments · Take-home ${takeHome}</p>
    </div>
    <div class="hero">
      <div class="hero-box">
        <span>Monthly Net Salary</span>
        <strong>${formatCurrency(b.netMonthly)}</strong>
      </div>
      <div class="hero-box secondary">
        <span>Annual Net Salary</span>
        <strong>${formatCurrency(b.netAnnual)}</strong>
      </div>
    </div>
    <div class="meta">
      RAL ${formatCurrency(b.ral)} · Deductions ${formatCurrency(b.totalDeductions)} · IRPEF base ${formatCurrency(b.imponibile)}
    </div>
    <table>
      <thead><tr><th>Item</th><th>Annual Amount</th></tr></thead>
      <tbody>${tableRows}</tbody>
    </table>
    <div class="footer">
      Generated by ${SITE_NAME} (${SITE_URL}) on ${new Date().toLocaleString("en-GB")}.
      Results are estimates for informational purposes only.
    </div>
  </div>
</body>
</html>`;
}

export function downloadSalaryPdf(b: SalaryBreakdown): void {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const rows = buildReportRows(b, true);
  const takeHome = `${((b.netAnnual / b.ral) * 100).toFixed(1)}%`;

  doc.setFillColor(19, 62, 58);
  doc.rect(0, 0, 210, 32, "F");
  doc.setFillColor(46, 139, 130);
  doc.roundedRect(14, 8, 10, 10, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(SITE_NAME, 28, 16);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 234, 229);
  doc.text("Salary Calculation Report · 2026 Rules", 28, 22);

  doc.setTextColor(19, 62, 58);
  doc.setFontSize(11);
  doc.text(`Region: ${b.regionName}  ·  ${b.monthlyPayments} monthly payments  ·  Take-home ${takeHome}`, 14, 42);

  doc.setFillColor(230, 245, 243);
  doc.roundedRect(14, 48, 88, 22, 3, 3, "F");
  doc.roundedRect(108, 48, 88, 22, 3, 3, "F");
  doc.setFontSize(8);
  doc.setTextColor(61, 107, 101);
  doc.text("MONTHLY NET", 18, 55);
  doc.text("ANNUAL NET", 112, 55);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(46, 139, 130);
  doc.text(formatPdfAmount(b.netMonthly), 18, 64);
  doc.setTextColor(19, 62, 58);
  doc.text(formatPdfAmount(b.netAnnual), 112, 64);

  autoTable(doc, {
    startY: 78,
    head: [["Item", "Annual Amount"]],
    body: rows.map((r) => [r.label, r.value]),
    theme: "plain",
    headStyles: {
      fillColor: [245, 251, 250],
      textColor: [61, 107, 101],
      fontStyle: "bold",
      fontSize: 9,
    },
    bodyStyles: { fontSize: 9, textColor: [19, 62, 58] },
    columnStyles: { 1: { halign: "right", fontStyle: "bold" } },
    alternateRowStyles: { fillColor: [250, 252, 252] },
    margin: { left: 14, right: 14 },
  });

  const finalY = (doc as jsPDF & { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? 200;
  doc.setFontSize(8);
  doc.setTextColor(100, 120, 115);
  doc.text(
    `Generated by ${SITE_NAME} · ${SITE_URL} · Estimate only , consult a tax professional.`,
    14,
    Math.min(finalY + 10, 285)
  );

  doc.save(`netpay-salary-report-${Date.now()}.pdf`);
}

export function openPrintableReport(b: SalaryBreakdown): void {
  const html = buildReportHtml(b);
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  win.onload = () => win.print();
}

export function shareViaWhatsApp(b: SalaryBreakdown): void {
  const text = encodeURIComponent(buildReportSummary(b));
  window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
}

export function shareViaEmail(b: SalaryBreakdown): void {
  const subject = encodeURIComponent(`${SITE_NAME} , Salary Calculation Report`);
  const body = encodeURIComponent(buildReportSummary(b));
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}
