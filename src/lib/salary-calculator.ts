import {
  Bonus100Mode,
  ContractType,
  DEFAULT_MUNICIPAL_RATE,
  INPS_RATE_APPRENTICESHIP,
  INPS_RATE_STANDARD,
  IRPEF_BRACKETS,
} from "./constants";
import { getRegionById } from "./regions";

export interface SalaryInput {
  ral: number;
  contractType: ContractType;
  regionId: string;
  monthlyPayments?: number;
  municipalRate?: number;
  inpsRate?: number;
  bonus100Mode?: Bonus100Mode;
  hasSpouse?: boolean;
  dependentChildren?: number;
  welfareBenefit?: number;
}

export interface SalaryBreakdown {
  ral: number;
  inps: number;
  inpsRate: number;
  imponibile: number;
  irpefLorda: number;
  detrazioneLavoro: number;
  detrazioniFamiliari: number;
  cuneoDeduction: number;
  cuneoExempt: number;
  irpefNetta: number;
  regionalTax: number;
  municipalTax: number;
  bonus100: number;
  welfareBenefit: number;
  totalDeductions: number;
  netAnnual: number;
  netMonthly: number;
  monthlyPayments: number;
  regionName: string;
}

function getDefaultInpsRate(contractType: ContractType): number {
  return contractType === "apprenticeship"
    ? INPS_RATE_APPRENTICESHIP
    : INPS_RATE_STANDARD;
}

function calculateIrpefLorda(imponibile: number): number {
  let remaining = imponibile;
  let tax = 0;
  let prevLimit = 0;

  for (const bracket of IRPEF_BRACKETS) {
    const taxable = Math.min(remaining, bracket.limit - prevLimit);
    if (taxable <= 0) break;
    tax += taxable * bracket.rate;
    remaining -= taxable;
    prevLimit = bracket.limit;
  }

  return Math.max(0, tax);
}

function calculateDetrazioneLavoro(imponibile: number): number {
  if (imponibile <= 15000) return 1955;
  if (imponibile <= 28000) {
    return 1910 + (1190 * (28000 - imponibile)) / 13000;
  }
  if (imponibile <= 50000) {
    return (1910 * (50000 - imponibile)) / 22000;
  }
  return 0;
}

function calculateDetrazioniFamiliari(
  hasSpouse: boolean,
  dependentChildren: number
): number {
  let total = 0;
  if (hasSpouse) total += 690;
  if (dependentChildren > 0) total += dependentChildren * 950;
  return total;
}

function calculateCuneoFiscale(imponibile: number): {
  deduction: number;
  exempt: number;
} {
  if (imponibile <= 8500) {
    return { deduction: 0, exempt: imponibile * 0.071 };
  }
  if (imponibile <= 15000) {
    return { deduction: 0, exempt: imponibile * 0.053 };
  }
  if (imponibile <= 20000) {
    return { deduction: 0, exempt: imponibile * 0.048 };
  }
  if (imponibile <= 32000) {
    return { deduction: 1000, exempt: 0 };
  }
  if (imponibile <= 40000) {
    return { deduction: (1000 * (40000 - imponibile)) / 8000, exempt: 0 };
  }
  return { deduction: 0, exempt: 0 };
}

function calculateBonus100(
  imponibile: number,
  irpefLorda: number,
  detrazione: number,
  mode: Bonus100Mode
): number {
  if (mode === "no") return 0;

  if (mode === "yes") {
    if (imponibile <= 28000) return 1200;
    return 0;
  }

  if (imponibile <= 15000) return 1200;
  if (imponibile <= 28000) {
    const surplus = detrazione - irpefLorda;
    return Math.max(0, Math.min(1200, surplus));
  }
  return 0;
}

export function calculateNetSalary(input: SalaryInput): SalaryBreakdown {
  const {
    ral,
    contractType,
    regionId,
    monthlyPayments = 12,
    municipalRate = DEFAULT_MUNICIPAL_RATE,
    inpsRate = getDefaultInpsRate(contractType),
    bonus100Mode = "auto",
    hasSpouse = false,
    dependentChildren = 0,
    welfareBenefit = 0,
  } = input;

  const region = getRegionById(regionId);
  const regionalRate = region?.regionalRate ?? 0.0173;
  const regionName = region?.name ?? "Italy (average)";

  const safeInpsRate = Math.min(Math.max(inpsRate, 0), 0.15);
  const inps = ral * safeInpsRate;
  const imponibile = ral - inps;
  const irpefLorda = calculateIrpefLorda(imponibile);
  const detrazioneLavoro = calculateDetrazioneLavoro(imponibile);
  const detrazioniFamiliari = calculateDetrazioniFamiliari(
    hasSpouse,
    dependentChildren
  );
  const { deduction: cuneoDeduction, exempt: cuneoExempt } =
    calculateCuneoFiscale(imponibile);

  const irpefNetta = Math.max(
    0,
    irpefLorda - detrazioneLavoro - cuneoDeduction - detrazioniFamiliari
  );

  const regionalTax = imponibile * regionalRate;
  const municipalTax = imponibile * municipalRate;
  const bonus100 = calculateBonus100(
    imponibile,
    irpefLorda,
    detrazioneLavoro,
    bonus100Mode
  );

  const totalTaxes = inps + irpefNetta + regionalTax + municipalTax;
  const totalBenefits = cuneoExempt + bonus100 + welfareBenefit;
  const netAnnual = ral - totalTaxes + totalBenefits;
  const netMonthly = netAnnual / monthlyPayments;

  return {
    ral,
    inps,
    inpsRate: safeInpsRate,
    imponibile,
    irpefLorda,
    detrazioneLavoro,
    detrazioniFamiliari,
    cuneoDeduction,
    cuneoExempt,
    irpefNetta,
    regionalTax,
    municipalTax,
    bonus100,
    welfareBenefit,
    totalDeductions: totalTaxes - totalBenefits,
    netAnnual,
    netMonthly,
    monthlyPayments,
    regionName,
  };
}

export function validateSalaryInput(input: Partial<SalaryInput>): string | null {
  if (!input.ral || input.ral <= 0) {
    return "Please enter a valid annual gross salary (RAL).";
  }
  if (input.ral > 500000) {
    return "RAL exceeds maximum supported amount (€500,000).";
  }
  if (!input.regionId) {
    return "Please select your region of residence.";
  }
  if (!input.contractType) {
    return "Please select a contract type.";
  }
  if (input.inpsRate !== undefined && (input.inpsRate < 0 || input.inpsRate > 0.15)) {
    return "INPS rate must be between 0% and 15%.";
  }
  if (
    input.municipalRate !== undefined &&
    (input.municipalRate < 0 || input.municipalRate > 0.05)
  ) {
    return "Municipal surcharge must be between 0% and 5%.";
  }
  return null;
}

export { getDefaultInpsRate };
