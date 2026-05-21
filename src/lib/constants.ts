export const SITE_NAME = "NetPay Italia";
export const SITE_URL = "https://calcolostipendionetto.it";
export const SITE_DESCRIPTION =
  "Calculate your exact Italian take-home salary from RAL. IRPEF, INPS, regional taxes , updated for 2026.";

export const IRPEF_BRACKETS = [
  { limit: 28000, rate: 0.23 },
  { limit: 50000, rate: 0.33 },
  { limit: Infinity, rate: 0.43 },
] as const;

export const INPS_RATE_STANDARD = 0.0919;
export const INPS_RATE_APPRENTICESHIP = 0.0584;
export const DEFAULT_MUNICIPAL_RATE = 0.008;

export const CONTRACT_TYPES = [
  { value: "full-time-permanent", label: "Permanent , Full-time" },
  { value: "full-time-fixed", label: "Fixed-term , Full-time" },
  { value: "apprenticeship", label: "Apprenticeship" },
  { value: "part-time-permanent", label: "Part-time , Permanent" },
  { value: "part-time-fixed", label: "Part-time , Fixed-term" },
] as const;

export const MONTHLY_PAYMENTS = [12, 13, 14] as const;

export const BONUS100_MODES = [
  { value: "auto", label: "Automatic" },
  { value: "yes", label: "Force Yes" },
  { value: "no", label: "Force No" },
] as const;

export type Bonus100Mode = (typeof BONUS100_MODES)[number]["value"];

export type ContractType = (typeof CONTRACT_TYPES)[number]["value"];

export const NAV_LINKS = [
  { href: "#calculator", label: "Calculator" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#salary-breakdown", label: "Salary Breakdown" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_NAV = [
  { href: "#calculator", label: "Calculator" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#salary-breakdown", label: "Salary Breakdown" },
  { href: "#faq", label: "FAQ" },
  { href: "/about-us", label: "About Us" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://linkedin.com", label: "LinkedIn", platform: "linkedin" as const },
  { href: "https://facebook.com", label: "Facebook", platform: "facebook" as const },
  { href: "https://x.com", label: "X", platform: "x" as const },
  { href: "https://instagram.com", label: "Instagram", platform: "instagram" as const },
] as const;
