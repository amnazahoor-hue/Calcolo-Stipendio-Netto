import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const CalculatorSection = dynamic(
  () =>
    import("@/components/sections/Calculator").then((mod) => mod.CalculatorSection),
  { loading: () => <div className="section-skeleton" aria-hidden /> }
);

const SalaryExamples = dynamic(
  () =>
    import("@/components/sections/SalaryExamples").then((mod) => mod.SalaryExamples),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

const SalaryBreakdownInfo = dynamic(
  () =>
    import("@/components/sections/SalaryBreakdownInfo").then(
      (mod) => mod.SalaryBreakdownInfo
    ),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

const SalaryFactors = dynamic(
  () => import("@/components/sections/SalaryFactors").then((mod) => mod.SalaryFactors),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

const RalExplainer = dynamic(
  () => import("@/components/sections/RalExplainer").then((mod) => mod.RalExplainer),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

const NetFromRal = dynamic(
  () => import("@/components/sections/NetFromRal").then((mod) => mod.NetFromRal),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

const PublicSectorSalaries = dynamic(
  () =>
    import("@/components/sections/PublicSectorSalaries").then(
      (mod) => mod.PublicSectorSalaries
    ),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

const HowItWorks = dynamic(
  () => import("@/components/sections/HowItWorks").then((mod) => mod.HowItWorks),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

const FAQSection = dynamic(
  () => import("@/components/sections/FAQ").then((mod) => mod.FAQSection),
  { loading: () => <div className="section-skeleton section-skeleton--short" aria-hidden /> }
);

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CalculatorSection />
        <SalaryExamples />
        <SalaryBreakdownInfo />
        <SalaryFactors />
        <RalExplainer />
        <NetFromRal />
        <PublicSectorSalaries />
        <HowItWorks />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
