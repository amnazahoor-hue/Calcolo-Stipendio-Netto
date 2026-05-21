import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { ContactForm } from "@/components/contact/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact NetPay Italia for calculator support, feedback, partnerships, and privacy requests.",
};

export default function ContactPage() {
  return (
    <LegalLayout>
      <h1>Contact Us</h1>
      <p>
        We welcome questions about our Italian net salary calculator, feedback on
        accuracy, partnership inquiries, and privacy-related requests. NetPay Italia
        is built to help workers, recruiters, and HR teams understand take-home pay
        from RAL using transparent 2026 tax rules.
      </p>

      <h2>How We Can Help</h2>
      <p>
        Our team monitors messages related to calculator results, regional tax rates,
        municipal addizionali, INPS contribution logic, IRPEF brackets, cuneo fiscale
        benefits, and export features such as PDF and email reports. If your payslip
        differs from our estimate, include your region, contract type, mensilità, and
        a anonymized breakdown so we can investigate whether rates or assumptions need
        updating.
      </p>
      <p>
        We also respond to media requests, educational collaborations, and suggestions
        for new calculator fields such as part-time schedules, CCNL presets, or
        additional welfare benefits. While we cannot provide personalized tax or legal
        advice, we can explain how our formulas work and point you toward qualified
        professionals when appropriate.
      </p>

      <div className={styles.grid}>
        <ContactForm />

        <div className={styles.info}>
          <h2>Get in Touch</h2>
          <div className={styles.infoItem}>
            <strong>General Inquiries</strong>
            <a href="mailto:info@netpayitalia.it">info@netpayitalia.it</a>
          </div>
          <div className={styles.infoItem}>
            <strong>Privacy & Data</strong>
            <a href="mailto:privacy@netpayitalia.it">privacy@netpayitalia.it</a>
          </div>
          <div className={styles.infoItem}>
            <strong>Legal</strong>
            <a href="mailto:legal@netpayitalia.it">legal@netpayitalia.it</a>
          </div>
          <div className={styles.infoItem}>
            <strong>Response Time</strong>
            <span>We typically respond within 2 business days.</span>
          </div>

          <h3>Frequently Contacted About</h3>
          <ul>
            <li>Calculator accuracy vs. payslip differences</li>
            <li>Regional and municipal tax rate updates</li>
            <li>Feature requests (part-time days, CCNL presets)</li>
            <li>Partnership and media inquiries</li>
            <li>Bug reports and technical issues</li>
            <li>GDPR data access or deletion requests</li>
          </ul>

          <h3>Before You Write</h3>
          <p>
            The calculator runs entirely in your browser for standard calculations.
            We do not store your salary inputs on our servers unless you explicitly
            submit them through the contact form. For faster support, describe the
            scenario you tested, the expected result, and what you observed. Screenshots
            of exported PDF reports are helpful when reporting formatting issues.
          </p>

          <h3>Professional Advice</h3>
          <p>
            NetPay Italia provides estimates for informational purposes only. Tax law,
            collective agreements, and payroll practices can vary. For binding guidance
            on your employment contract, deductions, or filing obligations, consult a
            qualified commercialista or consulente del lavoro.
          </p>

          <h3>Office Hours & Language</h3>
          <p>
            We read messages Monday through Friday during Central European Time
            business hours. Support is provided in English and Italian. Automated
            replies may confirm receipt when volume is high; a team member will
            follow up on substantive inquiries as soon as possible.
          </p>

          <h3>Reporting Technical Issues</h3>
          <p>
            If a page fails to load, a chart does not render, or PDF export produces
            unexpected output, include your browser name, device type, and steps to
            reproduce the issue. Clearing cache or trying a private window often
            resolves local display problems, but we still appreciate reports so we
            can improve compatibility across Chrome, Firefox, Safari, and Edge on
            desktop and mobile.
          </p>

          <h3>Partnerships & Press</h3>
          <p>
            HR platforms, payroll providers, and media outlets may contact us for
            collaboration, data licensing discussions, or expert commentary on
            Italian payroll reform. Provide a brief overview of your organization,
            audience, and proposed timeline so we can route your message to the
            appropriate contact.
          </p>

          <p className={styles.note}>
            By submitting the contact form, you agree that we may use your message to
            improve the Service. See our{" "}
            <a href="/privacy-policy">Privacy Policy</a> for details on data handling.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
