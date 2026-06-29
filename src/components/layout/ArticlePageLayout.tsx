import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import styles from "./ArticlePageLayout.module.css";

interface ArticlePageLayoutProps {
  children: React.ReactNode;
}

export function ArticlePageLayout({ children }: ArticlePageLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function ArticlePageBody({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <div className="container legal-content">{children}</div>
    </main>
  );
}
