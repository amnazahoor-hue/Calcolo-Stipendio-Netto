import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for NetPay Italia , how we collect, use, and protect your data when using our Italian salary calculator.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> May 21, 2026
      </p>

      <p>
        NetPay Italia (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
        calcolostipendionetto.it and provides an online Italian gross-to-net salary
        calculator (the &quot;Service&quot;). This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our website
        and use our calculator tools. Please read this policy carefully. By
        accessing or using the Service, you agree to the collection and use of
        information in accordance with this policy.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide</h3>
      <p>
        Our salary calculator is designed to process data entirely within your
        browser. When you enter your RAL (Retribuzione Annua Lorda), contract
        type, region, and other calculation parameters, this information is used
        locally to compute your estimated net salary. We do not transmit your
        salary data to our servers unless you explicitly submit a contact form or
        request support. The calculator inputs remain on your device and are not
        stored in our databases by default.
      </p>

      <h3>1.2 Automatically Collected Information</h3>
      <p>
        Like most websites, we automatically collect certain information when you
        visit our site. This may include your IP address (anonymized where
        possible), browser type and version, operating system, referring URL,
        pages viewed, time and date of visit, time spent on pages, and other
        diagnostic data. We collect this information through cookies, log files,
        and similar tracking technologies to analyze trends, administer the
        site, and improve user experience.
      </p>

      <h3>1.3 Analytics and Performance Data</h3>
      <p>
        We use Google Analytics and Microsoft Clarity to understand how visitors
        interact with our website. These services may collect information such as
        how often users visit, which pages they view, scroll depth, click patterns,
        and general geographic location (country/region level). Google Analytics
        and Microsoft Clarity have their own privacy policies governing their use
        of such data. You can opt out of Google Analytics by installing the Google
        Analytics Opt-out Browser Add-on.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To provide, operate, and maintain our salary calculator Service</li>
        <li>To improve, personalize, and expand our website and tools</li>
        <li>To understand and analyze how you use our website</li>
        <li>To develop new products, services, features, and functionality</li>
        <li>
          To communicate with you, including responding to contact form submissions
        </li>
        <li>To detect, prevent, and address technical issues and security threats</li>
        <li>To comply with legal obligations under applicable law</li>
      </ul>

      <h2>3. Legal Basis for Processing (GDPR)</h2>
      <p>
        If you are located in the European Economic Area (EEA), including Italy,
        our legal basis for collecting and using personal information depends on
        the context. We process data based on: (a) your consent, where you have
        given it (e.g., contact form submission); (b) legitimate interests in
        operating and improving our Service, provided those interests are not
        overridden by your rights; and (c) compliance with legal obligations. You
        have the right to withdraw consent at any time where processing is based
        on consent.
      </p>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies to track activity on our
        Service and store certain information. Cookies are files with a small
        amount of data that may include an anonymous unique identifier. You can
        instruct your browser to refuse all cookies or to indicate when a cookie is
        being sent. However, if you do not accept cookies, you may not be able to
        use some portions of our Service. Types of cookies we use include essential
        cookies (required for site functionality), analytics cookies (Google
        Analytics, Microsoft Clarity), and preference cookies (remembering your
        settings).
      </p>

      <h2>5. Data Sharing and Disclosure</h2>
      <p>
        We do not sell, trade, or rent your personal identification information to
        third parties. We may share information with: service providers who assist
        us in operating our website (hosting, analytics); legal authorities when
        required by law or to protect our rights; and business partners only with
        your explicit consent. All third-party service providers are contractually
        obligated to keep your information confidential and use it only for the
        purposes for which we disclose it to them.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain automatically collected data for as long as necessary to fulfill
        the purposes outlined in this Privacy Policy, unless a longer retention
        period is required by law. Analytics data is typically retained for 26
        months in Google Analytics. Contact form submissions are retained for up to
        24 months unless you request deletion sooner.
      </p>

      <h2>7. Your Data Protection Rights</h2>
      <p>
        Under the General Data Protection Regulation (GDPR) and Italian privacy law
        (D.Lgs. 196/2003 as amended), you have the following rights: the right to
        access your personal data; the right to rectification of inaccurate data;
        the right to erasure (&quot;right to be forgotten&quot;); the right to restrict
        processing; the right to data portability; the right to object to
        processing; and the right to lodge a complaint with the Garante per la
        protezione dei dati personali (Italian Data Protection Authority). To
        exercise any of these rights, contact us at privacy@netpayitalia.it.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We implement appropriate technical and organizational security measures to
        protect your personal information against unauthorized access, alteration,
        disclosure, or destruction. These measures include HTTPS encryption, secure
        hosting infrastructure, access controls, and regular security assessments.
        However, no method of transmission over the Internet or electronic storage
        is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>9. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other than
        Italy, including the United States, where our analytics providers operate.
        When we transfer data outside the EEA, we ensure appropriate safeguards are
        in place, such as Standard Contractual Clauses approved by the European
        Commission.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our Service is not directed to individuals under the age of 16. We do not
        knowingly collect personal information from children. If you become aware
        that a child has provided us with personal data, please contact us and we
        will take steps to delete such information.
      </p>

      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of
        any changes by posting the new Privacy Policy on this page and updating the
        &quot;Last updated&quot; date. You are advised to review this Privacy Policy
        periodically for any changes. Changes are effective when posted on this
        page.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data practices,
        please contact us at privacy@netpayitalia.it or through our{" "}
        <a href="/contact">Contact page</a>. Data Controller: NetPay Italia, Italy.
      </p>
    </LegalLayout>
  );
}
