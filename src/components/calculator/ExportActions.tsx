"use client";

import { SalaryBreakdown } from "@/lib/salary-calculator";
import {
  downloadSalaryPdf,
  shareViaEmail,
  shareViaWhatsApp,
} from "@/lib/salary-report";
import styles from "./ExportActions.module.css";

interface ExportActionsProps {
  breakdown: SalaryBreakdown;
}

export function ExportActions({ breakdown }: ExportActionsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4>Export Your Results</h4>
        <p>Share or save your calculation as a branded NetPay Italia document.</p>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.btn} ${styles.whatsapp}`}
          onClick={() => shareViaWhatsApp(breakdown)}
        >
          <span className={styles.icon} aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                fill="#25D366"
              />
            </svg>
          </span>
          WhatsApp
        </button>

        <button
          type="button"
          className={`${styles.btn} ${styles.pdf}`}
          onClick={() => downloadSalaryPdf(breakdown)}
        >
          <span className={styles.icon} aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                fill="#E53935"
              />
              <path d="M14 2v6h6" fill="#FFCDD2" />
              <path
                d="M8 12h8M8 16h5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <text
                x="7.5"
                y="10.5"
                fill="white"
                fontSize="4.5"
                fontWeight="700"
                fontFamily="Arial, sans-serif"
              >
                PDF
              </text>
            </svg>
          </span>
          Download PDF
        </button>

        <button
          type="button"
          className={`${styles.btn} ${styles.email}`}
          onClick={() => shareViaEmail(breakdown)}
        >
          <span className={styles.icon} aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
                fill="#EA4335"
              />
              <path d="M4 6l8 5 8-5" stroke="white" strokeWidth="1.2" />
              <path d="M4 18l6-4.5M20 18l-6-4.5" stroke="#FBBC04" strokeWidth="1" />
              <path d="M12 11v7" stroke="#34A853" strokeWidth="1" />
            </svg>
          </span>
          Email
        </button>
      </div>
    </div>
  );
}
