"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "./LegalLayout.module.css";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container legal-content">{children}</div>
      </main>
      <Footer />
    </>
  );
}
