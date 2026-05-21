import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

const CalculatorSection = dynamic(
  () =>
    import("@/components/sections/Calculator").then((mod) => mod.CalculatorSection),
  { loading: () => <div className="section-skeleton" aria-hidden /> }
);

const HowItWorks = dynamic(
  () => import("@/components/sections/HowItWorks").then((mod) => mod.HowItWorks),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

const SalaryBreakdownInfo = dynamic(
  () =>
    import("@/components/sections/SalaryBreakdownInfo").then(
      (mod) => mod.SalaryBreakdownInfo
    ),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

const FAQSection = dynamic(
  () => import("@/components/sections/FAQ").then((mod) => mod.FAQSection),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CalculatorSection />
        <HowItWorks />
        <SalaryBreakdownInfo />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
