"use client";

import { useCallback, useEffect, useState } from "react";
import { ExportActions } from "@/components/calculator/ExportActions";
import { BreakdownChart } from "@/components/calculator/BreakdownChart";
import { DetailBreakdown } from "@/components/calculator/DetailBreakdown";
import { ProgressBars } from "@/components/calculator/ProgressBars";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  BONUS100_MODES,
  Bonus100Mode,
  CONTRACT_TYPES,
  ContractType,
  MONTHLY_PAYMENTS,
} from "@/lib/constants";
import { formatCurrency, formatPercent } from "@/lib/format";
import { REGIONS } from "@/lib/regions";
import {
  calculateNetSalary,
  getDefaultInpsRate,
  SalaryBreakdown,
  validateSalaryInput,
} from "@/lib/salary-calculator";
import styles from "./Calculator.module.css";

function InfoTip({ text }: { text: string }) {
  return (
    <span className={styles.infoTip} title={text} aria-label={text}>
      i
    </span>
  );
}

function FormSection({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.formSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>{step}</span>
        <h3>{title}</h3>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </div>
  );
}

export function CalculatorSection() {
  const [ralInput, setRalInput] = useState("30000");
  const [ral, setRal] = useState(30000);
  const [monthlyPayments, setMonthlyPayments] = useState(13);
  const [contractType, setContractType] =
    useState<ContractType>("full-time-permanent");
  const [regionId, setRegionId] = useState("");
  const [municipalRateInput, setMunicipalRateInput] = useState("0.8");
  const [inpsRateInput, setInpsRateInput] = useState("9.19");
  const [bonus100Mode, setBonus100Mode] = useState<Bonus100Mode>("auto");
  const [hasSpouse, setHasSpouse] = useState(false);
  const [dependentChildren, setDependentChildren] = useState(0);
  const [welfareOpen, setWelfareOpen] = useState(false);
  const [welfareInput, setWelfareInput] = useState("0");

  const [result, setResult] = useState<SalaryBreakdown | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
  const [hasCalculated, setHasCalculated] = useState(false);

  const parsePercent = (value: string): number => {
    const num = parseFloat(value.replace(",", "."));
    return isNaN(num) ? 0 : num / 100;
  };

  const handleContractChange = (value: ContractType) => {
    setContractType(value);
    const defaultRate = getDefaultInpsRate(value);
    setInpsRateInput((defaultRate * 100).toFixed(2));
  };

  const handleRalInput = (value: string) => {
    setRalInput(value);
    const num = parseInt(value.replace(/\D/g, ""), 10);
    if (!isNaN(num)) {
      setRal(Math.min(500000, Math.max(0, num)));
    }
  };

  const buildInput = useCallback(
    () => ({
      ral,
      contractType,
      regionId,
      monthlyPayments,
      municipalRate: parsePercent(municipalRateInput),
      inpsRate: parsePercent(inpsRateInput),
      bonus100Mode,
      hasSpouse,
      dependentChildren,
      welfareBenefit: parseFloat(welfareInput.replace(",", ".")) || 0,
    }),
    [
      ral,
      contractType,
      regionId,
      monthlyPayments,
      municipalRateInput,
      inpsRateInput,
      bonus100Mode,
      hasSpouse,
      dependentChildren,
      welfareInput,
    ]
  );

  const runCalculation = useCallback(
    (showLoading = true) => {
      const input = buildInput();
      const validationError = validateSalaryInput(input);

      if (validationError) {
        if (!showLoading) return;
        setError(validationError);
        setFieldErrors({
          ral: ral <= 0,
          region: !regionId,
          contract: !contractType,
        });
        setResult(null);
        return;
      }

      setFieldErrors({});
      setError(null);
      setResult(calculateNetSalary(input));
    },
    [buildInput, ral, regionId, contractType]
  );

  useEffect(() => {
    if (!hasCalculated) return;
    runCalculation(false);
  }, [hasCalculated, runCalculation]);

  const handleCalculate = async () => {
    setLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 500));
    runCalculation(true);
    setHasCalculated(true);
    setLoading(false);
  };

  return (
    <section id="calculator" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="section-label">Salary Calculator</span>
          <h2>Calculate Your Net Salary</h2>
          <p>
            Enter your RAL and tax details in four steps , same structure as a
            professional Italian payslip calculator, with full 2026 rules applied.
          </p>
        </FadeIn>

        <div className={styles.wrapper}>
          <FadeIn delay={0.05} className={styles.formArea}>
            <div className={styles.formGrid}>
              <div className={styles.formColumn}>
                <FormSection step={1} title="Compensation">
              <div className={styles.field}>
                <label htmlFor="ral">
                  RAL (Annual Gross Salary)
                  <InfoTip text="Your total annual gross salary before any deductions." />
                </label>
                <div className={styles.inputWithPrefix}>
                  <span>€</span>
                  <input
                    id="ral"
                    type="text"
                    inputMode="numeric"
                    className={fieldErrors.ral ? styles.inputError : ""}
                    value={ralInput}
                    onChange={(e) => handleRalInput(e.target.value)}
                    placeholder="e.g. 30000"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label>
                  Monthly Payments
                  <InfoTip text="Number of monthly payments in your employment contract (12, 13, or 14)." />
                </label>
                <div className={styles.segmented} role="group" aria-label="Monthly payments">
                  {MONTHLY_PAYMENTS.map((m) => (
                    <button
                      key={m}
                      type="button"
                      className={
                        monthlyPayments === m ? styles.segmentActive : ""
                      }
                      onClick={() => setMonthlyPayments(m)}
                      aria-pressed={monthlyPayments === m}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contract">
                  Contract Type
                  <InfoTip text="Contract type affects INPS contribution rate." />
                </label>
                <select
                  id="contract"
                  className={fieldErrors.contract ? styles.inputError : ""}
                  value={contractType}
                  onChange={(e) =>
                    handleContractChange(e.target.value as ContractType)
                  }
                >
                  {CONTRACT_TYPES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </FormSection>

            <FormSection step={2} title="Taxes & Contributions">
              <div className={styles.field}>
                <label htmlFor="region">
                  Region of Residence
                  <InfoTip text="Regional IRPEF surcharge varies by region." />
                </label>
                <select
                  id="region"
                  className={fieldErrors.region ? styles.inputError : ""}
                  value={regionId}
                  onChange={(e) => setRegionId(e.target.value)}
                >
                  <option value="">Select region</option>
                  {REGIONS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="municipal">
                    Municipal Surcharge
                    <InfoTip text="Average municipal IRPEF surcharge (~0.8%)." />
                  </label>
                  <div className={styles.inputWithSuffix}>
                    <input
                      id="municipal"
                      type="text"
                      inputMode="decimal"
                      value={municipalRateInput}
                      onChange={(e) => setMunicipalRateInput(e.target.value)}
                    />
                    <span>%</span>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="inps">
                    INPS Rate
                    <InfoTip text="Standard employee INPS rate is 9.19%; apprenticeship is 5.84%." />
                  </label>
                  <div className={styles.inputWithSuffix}>
                    <input
                      id="inps"
                      type="text"
                      inputMode="decimal"
                      value={inpsRateInput}
                      onChange={(e) => setInpsRateInput(e.target.value)}
                    />
                    <span>%</span>
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="bonus">
                  Bonus €100
                  <InfoTip text="Automatic applies eligibility rules; force yes/no to override." />
                </label>
                <select
                  id="bonus"
                  value={bonus100Mode}
                  onChange={(e) =>
                    setBonus100Mode(e.target.value as Bonus100Mode)
                  }
                >
                  {BONUS100_MODES.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>
            </FormSection>
              </div>

              <div className={styles.formColumn}>
            <FormSection step={3} title="Family Deductions">
              <div className={styles.field}>
                <label>
                  Dependent Spouse
                  <InfoTip text="Dependent spouse deduction applied to IRPEF." />
                </label>
                <div className={styles.toggle} role="group" aria-label="Dependent spouse">
                  <button
                    type="button"
                    className={!hasSpouse ? styles.toggleActive : ""}
                    onClick={() => setHasSpouse(false)}
                    aria-pressed={!hasSpouse}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className={hasSpouse ? styles.toggleActive : ""}
                    onClick={() => setHasSpouse(true)}
                    aria-pressed={hasSpouse}
                  >
                    Yes
                  </button>
                </div>
              </div>

              <div className={styles.field}>
                <label>
                  Dependent Children (21–30)
                  <InfoTip text="Number of dependent children aged 21–30." />
                </label>
                <div className={styles.stepper}>
                  <button
                    type="button"
                    aria-label="Decrease children"
                    onClick={() =>
                      setDependentChildren((n) => Math.max(0, n - 1))
                    }
                  >
                    −
                  </button>
                  <span>{dependentChildren}</span>
                  <button
                    type="button"
                    aria-label="Increase children"
                    onClick={() =>
                      setDependentChildren((n) => Math.min(10, n + 1))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </FormSection>

            <div className={styles.formSection}>
              <button
                type="button"
                className={styles.accordionHeader}
                onClick={() => setWelfareOpen(!welfareOpen)}
                aria-expanded={welfareOpen}
              >
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>4</span>
                  <h3>Benefits & Company Welfare</h3>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={welfareOpen ? styles.chevronOpen : ""}
                  aria-hidden
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {welfareOpen && (
                <div className={styles.sectionBody}>
                  <div className={styles.field}>
                    <label htmlFor="welfare">
                      Welfare / Annual Fringe Benefit
                      <InfoTip text="Annual company welfare or fringe benefits added to net pay." />
                    </label>
                    <div className={styles.inputWithPrefix}>
                      <span>€</span>
                      <input
                        id="welfare"
                        type="text"
                        inputMode="decimal"
                        value={welfareInput}
                        onChange={(e) => setWelfareInput(e.target.value)}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
              </div>
            </div>

            <div className={styles.formActions}>
            {error && <p className={styles.formError}>{error}</p>}

            <button
              type="button"
              className={styles.calcBtn}
              onClick={handleCalculate}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className={styles.spinner} />
                  Calculating…
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 7H16M8 11H14M8 15H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Calculate Net Salary
                </>
              )}
            </button>
            </div>
          </FadeIn>

          <div className={styles.resultsArea}>
          {loading && (
            <div className={styles.outputPanel}>
              <div className={styles.loadingState}>
                <div className={`skeleton ${styles.skeletonHero}`} />
                <div className={styles.loadingGrid}>
                  <div className={`skeleton ${styles.skeletonCard}`} />
                  <div className={`skeleton ${styles.skeletonCard}`} />
                  <div className={`skeleton ${styles.skeletonCard}`} />
                  <div className={`skeleton ${styles.skeletonCard}`} />
                </div>
                <div className={`skeleton ${styles.skeletonBar}`} />
                <div className={`skeleton ${styles.skeletonBar}`} />
              </div>
            </div>
          )}

          {!loading && result && (
            <FadeIn delay={0.1} className={styles.outputPanel}>
              <div className={styles.resultsHero}>
                <div className={styles.resultsHeroTop}>
                  <span className={styles.resultsBadge}>Calculation Result</span>
                  <span className={styles.resultsRegion}>
                    {result.regionName} · {result.monthlyPayments} monthly payments
                  </span>
                </div>

                <div className={styles.resultsHeroMain}>
                  <div className={styles.resultsPrimary}>
                    <span>Monthly Net Salary</span>
                    <AnimatedCounter
                      value={result.netMonthly}
                      prefix="€"
                      decimals={0}
                      className={styles.resultsMonthly}
                    />
                  </div>
                  <div className={styles.resultsDivider} aria-hidden />
                  <div className={styles.resultsSecondary}>
                    <span>Annual Net Salary</span>
                    <AnimatedCounter
                      value={result.netAnnual}
                      prefix="€"
                      decimals={0}
                      className={styles.resultsAnnual}
                    />
                  </div>
                </div>

                <div className={styles.resultsProgress}>
                  <div className={styles.progressLabels}>
                    <span>Deductions {formatPercent(result.totalDeductions / result.ral)}</span>
                    <span>Take-home {formatPercent(result.netAnnual / result.ral)}</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressNet}
                      style={{ width: `${(result.netAnnual / result.ral) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.summaryGrid}>
                <div className={`${styles.summaryCard} ${styles.summaryGross}`}>
                  <span className={styles.summaryLabel}>Gross RAL</span>
                  <strong>{formatCurrency(result.ral)}</strong>
                  <span className={styles.summaryHint}>Annual gross</span>
                </div>
                <div className={`${styles.summaryCard} ${styles.summaryDeduction}`}>
                  <span className={styles.summaryLabel}>Total Deductions</span>
                  <strong>{formatCurrency(result.totalDeductions)}</strong>
                  <span className={styles.summaryHint}>Taxes + INPS</span>
                </div>
                <div className={`${styles.summaryCard} ${styles.summaryNet}`}>
                  <span className={styles.summaryLabel}>Net % of RAL</span>
                  <strong>{formatPercent(result.netAnnual / result.ral, 1)}</strong>
                  <span className={styles.summaryHint}>Take-home ratio</span>
                </div>
                <div className={`${styles.summaryCard} ${styles.summaryTax}`}>
                  <span className={styles.summaryLabel}>IRPEF Taxable Base</span>
                  <strong>{formatCurrency(result.imponibile)}</strong>
                  <span className={styles.summaryHint}>
                    {result.imponibile <= 28000 ? "1st bracket · 23%" : "Multi-bracket"}
                  </span>
                </div>
              </div>

              <DetailBreakdown breakdown={result} />

              <div className={styles.chartsRow}>
                <div className={styles.chartBox}>
                  <h4>Salary Composition</h4>
                  <BreakdownChart breakdown={result} />
                </div>
                <div className={styles.chartBox}>
                  <h4>Share of RAL</h4>
                  <ProgressBars breakdown={result} />
                </div>
              </div>

              <div className={styles.quickExample}>
                <strong>Quick example:</strong> With a RAL of{" "}
                {formatCurrency(result.ral)}, your net salary is approximately{" "}
                <strong>{formatCurrency(result.netMonthly)} per month</strong> across{" "}
                {result.monthlyPayments} monthly payments
                {result.imponibile <= 28000
                  ? " , taxable income stays in the first IRPEF bracket at 23%."
                  : "."}
              </div>

              <ExportActions breakdown={result} />
            </FadeIn>
          )}

          {!loading && !result && hasCalculated === false && (
            <div className={styles.resultsPlaceholder}>
              <div className={styles.placeholderIcon} aria-hidden>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 8H16M8 12H14M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Your Results Appear Here</h3>
              <p>
                Fill in the form above and click <strong>Calculate Net Salary</strong> to
                see your full payslip breakdown, charts, and net salary.
              </p>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
