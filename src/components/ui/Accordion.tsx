"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";
import type { FAQItem } from "@/lib/faq-data";

interface AccordionProps {
  items: FAQItem[];
  variant?: "default" | "faq";
  fillHeight?: boolean;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Accordion({ items, variant = "default", fillHeight = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const isFaq = variant === "faq";

  return (
    <div
      className={`${styles.accordion} ${isFaq ? styles.faq : ""} ${fillHeight && isFaq ? styles.faqFill : ""}`}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const isHovered = hoverIndex === index;
        return (
          <div
            key={item.question}
            className={`${styles.item} ${isOpen && isFaq ? styles.itemOpen : ""} ${isHovered && isFaq && !isOpen ? styles.itemHover : ""}`}
            onMouseEnter={isFaq ? () => setHoverIndex(index) : undefined}
            onMouseLeave={isFaq ? () => setHoverIndex(null) : undefined}
          >
            <button
              type="button"
              className={`${styles.trigger} ${isOpen ? styles.active : ""}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={isFaq ? styles.question : undefined}>{item.question}</span>
              {isFaq ? (
                <span className={styles.chevronWrap}>
                  <Chevron open={isOpen} />
                </span>
              ) : (
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                  +
                </span>
              )}
            </button>
            <div
              className={`${styles.contentWrapper} ${isOpen ? styles.contentOpen : ""}`}
            >
              <div className={styles.content}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export type { FAQItem };
