import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NetPay Italia , our mission to make Italian salary calculations transparent and accessible.",
};

export default function AboutUsPage() {
  return (
    <LegalLayout>
      <h1>About NetPay Italia</h1>
      <p>
        NetPay Italia was founded with a simple belief: every worker in Italy
        deserves to understand exactly how much of their gross salary becomes
        take-home pay , without needing a degree in tax law or hours with a
        spreadsheet.
      </p>

      <h2>Our Mission</h2>
      <p>
        The Italian payroll system is among the most complex in Europe. Between
        progressive IRPEF brackets, INPS contributions, regional addizionali,
        municipal surcharges, work deductions, the cuneo fiscale, and the ever-changing
        bonus €100 rules, even experienced professionals struggle to estimate net
        salary from a job offer RAL. Our mission is to demystify this process by
        providing a fast, accurate, and beautifully designed calculator that anyone
        can use , for free, without registration, with complete privacy.
      </p>

      <h2>What We Do</h2>
      <p>
        NetPay Italia operates calcolostipendionetto.it, an advanced gross-to-net
        salary calculator updated for the 2026 tax year. Our tool accepts your RAL,
        contract type, region of residence, and monthly payment schedule, then
        applies the full chain of Italian payroll logic: INPS deduction, imponibile
        calculation, progressive IRPEF at 23%/33%/43%, Article 13 TUIR work
        deductions, the structural cuneo fiscale, regional and municipal
        addizionali, and the IRPEF bonus where applicable. Results are presented
        with animated breakdowns , donut charts, progress bars, and line-by-line
        detail , so you see not just the number, but how it was computed.
      </p>

      <h2>Our Methodology</h2>
      <p>
        Accuracy is our top priority. Our calculation engine is built directly from
        primary sources: the Legge di Bilancio 2026, the Testo Unico delle Imposte
        sui Redditi (TUIR), INPS circulars on employee contribution rates, and MEF
        tables for regional IRPEF surcharges. We verify results against real payslips
        across multiple RAL levels, regions, and contract types. When legislation
        changes , as it did with the IRPEF second bracket reduction from 35% to 33%
        in 2026 , we update our engine promptly and document the changes transparently.
      </p>

      <h3>What Makes Us Different</h3>
      <p>
        Unlike simplified calculators that apply a flat percentage to RAL, we follow
        the exact sequence of a real Italian payslip. We correctly compute imponibile
        (RAL minus INPS) before applying IRPEF brackets , a common error in inferior
        tools. We include the 2026 structural cuneo fiscale with its dual mechanism:
        exempt amounts for lower incomes and fixed deductions for middle incomes. We
        apply region-specific addizionali rather than a national average. And we do
        all of this client-side , your salary data never leaves your browser.
      </p>

      <h2>Who We Serve</h2>
      <p>
        Our users include job seekers evaluating offers, employees negotiating raises,
        HR professionals benchmarking compensation, expats relocating to Italy, students
        entering the workforce, and journalists covering labor market trends. Whether
        you are comparing a €28,000 offer in Milano with a €32,000 offer in Roma, or
        simply wondering why your net seems lower in December (hint: the tredicesima
        is taxed at marginal rates), NetPay Italia gives you the clarity you need.
      </p>

      <h2>Transparency and Limitations</h2>
      <p>
        We are honest about what our calculator can and cannot do. It provides
        reliable estimates for standard private-sector employment but cannot account
        for every CCNL-specific contribution, fringe benefit arrangement, or tax
        return deduction. We are not a substitute for a commercialista or consulente
        del lavoro. We publish a detailed{" "}
        <Link href="/disclaimer">Disclaimer</Link> and encourage users to verify
        results against their official payslip. When discrepancies are reported, we
        investigate and improve our models.
      </p>

      <h2>Privacy by Design</h2>
      <p>
        Financial data is sensitive. Our calculator runs entirely in your browser, 
        no RAL, region, or personal information is sent to our servers during
        calculation. We use privacy-respecting analytics (Google Analytics with IP
        anonymization, Microsoft Clarity) only to understand aggregate usage patterns
        and improve the user experience. Read our full{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for details.
      </p>

      <h2>The Team</h2>
      <p>
        NetPay Italia is built by a small team of developers and fiscal policy
        enthusiasts based in Italy. We combine software engineering expertise with
        deep research into Italian tax law to create tools that are both technically
        precise and genuinely easy to use. We are independent , not affiliated with
        any employer, union, accounting firm, or government agency.
      </p>

      <h2>Looking Ahead</h2>
      <p>
        We are continuously improving NetPay Italia. Planned enhancements include
        CCNL-specific presets (Commercio, Metalmeccanici, Edilizia), municipal-level
        addizionale lookup, part-time day-based pro-rata, reverse calculation (net
        to gross), public sector INPS rates, and an Italian-language interface. If
        you have suggestions, we want to hear them , visit our{" "}
        <Link href="/contact">Contact page</Link>.
      </p>

      <h2>Get Started</h2>
      <p>
        Ready to discover your net salary? Head to our{" "}
        <Link href="/#calculator">Calculator</Link> and enter your RAL. It takes less
        than a minute, costs nothing, and requires no signup. Welcome to transparent
        Italian salary calculation.
      </p>
    </LegalLayout>
  );
}
