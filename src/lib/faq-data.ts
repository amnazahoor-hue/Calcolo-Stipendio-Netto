export const FAQ_ITEMS = [
  {
    question: "How is net salary calculated in Italy?",
    answer:
      "Net salary starts from your RAL (Retribuzione Annua Lorda). INPS contributions (9.19%) are subtracted first to get the taxable income (imponibile). Progressive IRPEF is applied at 23%, 33%, and 43% brackets. Work deductions and the 2026 cuneo fiscale reduce IRPEF owed. Regional and municipal surcharges are added. The result divided by your mensilità gives monthly net pay.",
  },
  {
    question: "What is IRPEF?",
    answer:
      "IRPEF (Imposta sul Reddito delle Persone Fisiche) is Italy's personal income tax. For 2026, three progressive brackets apply to taxable income: 23% up to €28,000, 33% from €28,001 to €50,000 (reduced from 35% in 2025), and 43% above €50,000. Detrazioni per lavoro dipendente significantly reduce the effective rate for lower and middle incomes.",
  },
  {
    question: "Does region affect my net salary?",
    answer:
      "Yes. Each region charges an addizionale regionale (typically 1.23%–2.03% of taxable income) plus a municipal surcharge (~0.8% average). A worker in Campania or Calabria pays more local tax than one in Piemonte or Veneto. Over a career, regional differences can total thousands of euros.",
  },
  {
    question: "Is INPS mandatory for all employees?",
    answer:
      "Yes. INPS (Istituto Nazionale della Previdenza Sociale) contributions are mandatory for all dependent workers in Italy. The employee share is 9.19% of gross salary for private-sector workers (5.84% for apprentices, 8.80% for public sector). These fund pension, healthcare, maternity, and unemployment benefits.",
  },
  {
    question: "Is this calculator accurate?",
    answer:
      "Our calculator follows 2026 Legge di Bilancio rules: IRPEF brackets, art. 13 TUIR work deductions, structural cuneo fiscale, and average regional/municipal rates. Results are reliable estimates for standard private-sector contracts. Actual payslips may differ due to CCNL-specific contributions, conguagli, fringe benefits, or additional deductions declared in your tax return.",
  },
  {
    question: "What is the cuneo fiscale 2026?",
    answer:
      "The 2026 structural cuneo fiscale reduces the tax wedge on employment income. For imponibile up to €20,000, an exempt amount (7.1%–4.8%) is added to net pay. For €20,000–€32,000, a €1,000 IRPEF deduction applies. Between €32,000 and €40,000 it phases out gradually. Above €40,000, no cuneo benefit applies.",
  },
  {
    question: "How many mensilità should I select?",
    answer:
      "Most CCNL contracts use 13 or 14 monthly payments. Commerce and tertiary sectors typically pay 14 mensilità (13th in December, 14th in June/July). Metalworkers and banking use 13. Select the number matching your contract , it affects monthly net but not annual net.",
  },
  {
    question: "What's the difference between RAL and net?",
    answer:
      "RAL is your total gross annual compensation before any deduction. Net is what lands in your bank account after INPS, IRPEF, regional/municipal taxes, minus benefits like cuneo fiscale and bonus €100. As a rule of thumb, net is roughly 65–75% of RAL for typical middle incomes.",
  },
] as const;

export type FAQItem = (typeof FAQ_ITEMS)[number];
