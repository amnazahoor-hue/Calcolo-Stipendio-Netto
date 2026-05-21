"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Enter Gross Salary (RAL)",
    description:
      "Input your annual gross salary , the total compensation before any deductions appear on your payslip.",
  },
  {
    iconBg: "#F0FDF4",
    iconColor: "#10B981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Select Contract Type",
    description:
      "Choose full-time, part-time, fixed-term, or apprenticeship. INPS rates differ , we apply the correct 2026 aliquota.",
  },
  {
    iconBg: "#FFF7ED",
    iconColor: "#F59E0B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21C16.4183 21 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 21 12 21Z"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <path
          d="M12 8V12L15 15"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Choose Your Region",
    description:
      "Regional and municipal IRPEF surcharges vary across Italy. Select your region for accurate local tax estimates.",
  },
  {
    iconBg: "#EEF2FF",
    iconColor: "#6366F1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M9 19V6L21 3V16M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM21 16C21 17.1046 19.6569 18 18 18C16.3431 18 15 17.1046 15 16C15 14.8954 16.3431 14 18 14C19.6569 14 21 14.8954 21 16ZM9 10L21 7"
          stroke="#6366F1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Get Net Salary Breakdown",
    description:
      "Instant results with detailed payslip breakdown: monthly net, annual net, IRPEF, INPS, and every deduction explained.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className="section-label">Simple Process</span>
          <h2>How It Works</h2>
          <p>
            Four steps from gross to net , the same sequence your employer&apos;s
            payroll follows every month.
          </p>
        </FadeIn>

        <div className={styles.steps}>
          {STEPS.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div
                  className={styles.icon}
                  style={{ background: step.iconBg }}
                >
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
