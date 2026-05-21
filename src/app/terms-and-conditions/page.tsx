import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions governing use of the NetPay Italia salary calculator and website.",
};

export default function TermsPage() {
  return (
    <LegalLayout>
      <h1>Terms and Conditions</h1>
      <p>
        <strong>Last updated:</strong> May 21, 2026
      </p>

      <p>
        Welcome to NetPay Italia. These Terms and Conditions (&quot;Terms&quot;) govern your
        access to and use of the website calcolostipendionetto.it and all related
        services, including our Italian gross-to-net salary calculator (collectively,
        the &quot;Service&quot;). By accessing or using the Service, you agree to be bound
        by these Terms. If you do not agree to all of these Terms, you must not use
        the Service.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using our website and calculator, you confirm that you are at least 18
        years of age, or the age of legal majority in your jurisdiction, and that
        you have the legal capacity to enter into these Terms. If you are using the
        Service on behalf of an organization, you represent that you have authority
        to bind that organization to these Terms.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        NetPay Italia provides an online tool that estimates Italian net salary
        (stipendio netto) based on user-provided inputs including RAL, contract
        type, region of residence, and other parameters. The Service applies
        publicly available tax rules, including IRPEF brackets, INPS contribution
        rates, regional and municipal surcharges, work deductions (detrazioni), and
        the 2026 cuneo fiscale provisions. The Service is provided free of charge
        for personal, non-commercial informational use.
      </p>

      <h2>3. No Professional Advice</h2>
      <p>
        The information and calculations provided by NetPay Italia are for general
        informational and educational purposes only. They do not constitute tax,
        legal, financial, or accounting advice. The Service is not a substitute
        for professional consultation with a qualified commercialista (accountant),
        tax advisor, or labor consultant (consulente del lavoro). You should not
        rely solely on our calculator results when making employment, financial, or
        tax decisions. Always verify calculations against your official payslip
        (cedolino/busta paga) and consult a professional for your specific
        situation.
      </p>

      <h2>4. Accuracy and Limitations</h2>
      <p>
        While we strive to maintain accurate and up-to-date calculations based on
        current Italian tax legislation (Legge di Bilancio 2026, TUIR, INPS
        regulations), we make no warranties regarding the accuracy, completeness,
        or reliability of any calculation results. Actual net salary may differ due
        to factors including but not limited to: specific CCNL (collective bargaining
        agreement) provisions, additional INPS contributions, fringe benefits,
        welfare payments, conguagli (year-end adjustments), other income sources,
        medical expense deductions, mortgage deductions, family situation changes,
        and municipal tax rate variations. We update our calculator periodically but
        cannot guarantee real-time alignment with every legislative change.
      </p>

      <h2>5. User Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate information when using the calculator and contact forms</li>
        <li>Use the Service only for lawful purposes and in compliance with applicable laws</li>
        <li>Not attempt to gain unauthorized access to our systems or networks</li>
        <li>Not use automated tools (bots, scrapers) to access the Service without permission</li>
        <li>Not reproduce, duplicate, copy, or resell any part of the Service without written consent</li>
        <li>Not use the Service to provide commercial payroll or tax advisory services without authorization</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        All content on the Service , including text, graphics, logos, icons, images,
        software, calculation algorithms, and design , is the property of NetPay
        Italia or its licensors and is protected by Italian and international
        copyright, trademark, and intellectual property laws. You may not modify,
        reproduce, distribute, or create derivative works from our content without
        prior written permission. Limited personal use for non-commercial purposes
        is permitted.
      </p>

      <h2>7. Third-Party Links and Services</h2>
      <p>
        Our Service may contain links to third-party websites or services (e.g.,
        INPS, Agenzia delle Entrate, MEF) that are not owned or controlled by NetPay
        Italia. We have no control over and assume no responsibility for the
        content, privacy policies, or practices of any third-party sites. We also
        use third-party analytics services (Google Analytics, Microsoft Clarity)
        subject to their respective terms of service.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT
        WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
        TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        NON-INFRINGEMENT, AND ACCURACY. WE DO NOT WARRANT THAT THE SERVICE WILL BE
        UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL
        COMPONENTS.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NETPAY ITALIA AND ITS
        OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
        LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE OR
        RELIANCE ON CALCULATION RESULTS. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING
        FROM THESE TERMS OR THE SERVICE SHALL NOT EXCEED €100 (ONE HUNDRED EUROS).
        Some jurisdictions do not allow limitation of liability for certain damages;
        in such cases, our liability is limited to the fullest extent permitted by law.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless NetPay Italia and its
        affiliates from any claims, damages, losses, liabilities, and expenses
        (including reasonable legal fees) arising from your use of the Service,
        violation of these Terms, or infringement of any third-party rights.
      </p>

      <h2>11. Modifications to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will provide
        notice of material changes by updating the &quot;Last updated&quot; date and, where
        appropriate, posting a notice on our website. Your continued use of the
        Service after changes constitutes acceptance of the modified Terms.
      </p>

      <h2>12. Governing Law and Jurisdiction</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws
        of the Italian Republic, without regard to conflict of law principles. Any
        disputes arising from these Terms or the Service shall be subject to the
        exclusive jurisdiction of the courts of Italy, without prejudice to mandatory
        consumer protection provisions that may apply in your country of residence
        within the European Union.
      </p>

      <h2>13. Severability</h2>
      <p>
        If any provision of these Terms is found to be unenforceable or invalid, that
        provision shall be limited or eliminated to the minimum extent necessary,
        and the remaining provisions shall remain in full force and effect.
      </p>

      <h2>14. Contact</h2>
      <p>
        For questions regarding these Terms, please contact us at legal@netpayitalia.it
        or visit our <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  );
}
