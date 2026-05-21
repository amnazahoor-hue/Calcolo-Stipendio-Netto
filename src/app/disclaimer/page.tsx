import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimer regarding the accuracy and limitations of the NetPay Italia salary calculator.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout>
      <h1>Disclaimer</h1>
      <p>
        <strong>Last updated:</strong> May 21, 2026
      </p>

      <p>
        Please read this Disclaimer carefully before using the NetPay Italia website
        (calcolostipendionetto.it) and our Italian gross-to-net salary calculator.
        By accessing and using this Service, you acknowledge that you have read,
        understood, and agree to be bound by the terms of this Disclaimer.
      </p>

      <h2>1. General Information Only</h2>
      <p>
        The content provided on NetPay Italia, including all salary calculations,
        tax breakdowns, educational articles, and informational sections, is
        intended for general informational and educational purposes only. Nothing on
        this website constitutes professional tax advice, legal advice, financial
        advice, or employment law guidance. The Service is designed to help users
        understand the approximate relationship between gross salary (RAL) and net
        take-home pay in Italy, but it should never be treated as an official
        payroll document or tax determination.
      </p>

      <h2>2. Estimates, Not Guarantees</h2>
      <p>
        All calculation results displayed by our calculator are estimates based on
        simplified models of the Italian tax and social security system. While we
        apply current 2026 legislation including IRPEF progressive brackets (23%,
        33%, 43%), INPS employee contribution rates (9.19% standard, 5.84%
        apprenticeship), work deductions under Article 13 of the TUIR, the structural
        cuneo fiscale, regional IRPEF surcharges, average municipal addizionali, and
        the €100 IRPEF bonus, the actual amount on your payslip may differ
        significantly. We expressly disclaim any guarantee that our calculations
        will match your official cedolino (payslip) or your annual CU (Certificazione
        Unica).
      </p>

      <h2>3. Factors That May Cause Discrepancies</h2>
      <p>
        Italian payroll is complex and highly individualized. The following factors
        can cause our estimates to differ from your actual net salary:
      </p>
      <ul>
        <li>
          <strong>CCNL variations:</strong> Different collective bargaining agreements
          (Commercio, Metalmeccanici, Edilizia, etc.) may include additional
          contributions to sector funds, different INPS aliquote, or supplementary
          pension schemes.
        </li>
        <li>
          <strong>Company size:</strong> Companies with more than 15 employees may
          apply a 9.49% INPS rate instead of 9.19%.
        </li>
        <li>
          <strong>Public sector:</strong> Public employees typically pay 8.80% INPS
          rather than 9.19%.
        </li>
        <li>
          <strong>Part-time and pro-rata:</strong> Part-time workers may have
          deductions calculated on actual days worked, affecting monthly variations.
        </li>
        <li>
          <strong>13th and 14th mensilità:</strong> Extra monthly payments are taxed
          at marginal rates with limited deductions, producing different net amounts
          than ordinary months.
        </li>
        <li>
          <strong>Fringe benefits and welfare:</strong> Non-taxable benefits up to
          €1,000–€2,000/year affect the overall compensation picture.
        </li>
        <li>
          <strong>Other income:</strong> Additional employment, rental income, or
          investments affect your overall tax position and are not captured by our
          calculator.
        </li>
        <li>
          <strong>Tax return deductions:</strong> Medical expenses, mortgage interest,
          donations, and other deductions applied in the 730 or Modello Redditi are
          not included in monthly payroll calculations.
        </li>
        <li>
          <strong>Municipal tax rates:</strong> We use average municipal surcharge
          rates; your specific comune may charge more or less.
        </li>
        <li>
          <strong>Legislative changes:</strong> Tax rules may change during the year
          through decrees, circulari, or budget amendments before we update our engine.
        </li>
      </ul>

      <h2>4. No Professional Relationship</h2>
      <p>
        Use of NetPay Italia does not create any professional relationship between you
        and NetPay Italia, including but not limited to accountant-client,
        advisor-client, or fiduciary relationships. We are not licensed as
        commercialisti, consulenti del lavoro, or financial advisors. For official
        tax planning, payroll verification, or dispute resolution with your employer
        or the Agenzia delle Entrate, consult a qualified professional.
      </p>

      <h2>5. External Links</h2>
      <p>
        Our website may link to external resources such as INPS, MEF, and Agenzia
        delle Entrate official publications. These links are provided for convenience
        and reference. We do not endorse, control, or assume responsibility for the
        content, accuracy, or availability of external websites. Official tax
        guidance should always be verified directly with the relevant authority.
      </p>

      <h2>6. No Liability for Decisions</h2>
      <p>
        NetPay Italia shall not be held liable for any decisions you make based on
        information or calculations from this Service, including but not limited to:
        job offer negotiations, salary comparisons, relocation decisions, loan
        applications, rental agreements, or tax planning strategies. Any financial
        or career decisions made in reliance on our estimates are solely at your own
        risk.
      </p>

      <h2>7. Service Availability</h2>
      <p>
        We strive to keep the Service available and accurate, but we do not
        guarantee uninterrupted access. The website may be temporarily unavailable
        due to maintenance, technical issues, or circumstances beyond our control. We
        reserve the right to modify, suspend, or discontinue any part of the Service
        without prior notice.
      </p>

      <h2>8. Regulatory Compliance</h2>
      <p>
        Tax and social security regulations in Italy are subject to frequent updates.
        While we monitor legislative changes including the Legge di Bilancio and
        relevant Agenzia delle Entrate circulari, there may be delays between legal
        enactment and calculator updates. Users are responsible for verifying current
        rules with official sources.
      </p>

      <h2>9. Acknowledgment</h2>
      <p>
        By using NetPay Italia, you acknowledge that: (a) calculation results are
        estimates only; (b) you will not rely on them as the sole basis for financial
        or tax decisions; (c) you will consult qualified professionals for official
        advice; and (d) NetPay Italia bears no liability for discrepancies between
        estimated and actual net salary.
      </p>

      <h2>10. Contact</h2>
      <p>
        If you have questions about this Disclaimer or believe you have found an
        error in our calculations, please contact us at info@netpayitalia.it or
        through our <a href="/contact">Contact page</a>. We welcome feedback to
        improve our Service.
      </p>
    </LegalLayout>
  );
}
