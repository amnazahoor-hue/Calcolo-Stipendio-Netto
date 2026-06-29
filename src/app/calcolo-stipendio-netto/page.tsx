import type { Metadata } from "next";
import {
  HOME_SLUG,
  SITE_FOCUS_KEYWORD,
  SITE_META_DESCRIPTION,
  SITE_META_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import { HomePage } from "@/components/pages/HomePage";

const canonicalUrl = `${SITE_URL}${HOME_SLUG}`;

export const metadata: Metadata = {
  title: SITE_META_TITLE,
  description: SITE_META_DESCRIPTION,
  keywords: [
    SITE_FOCUS_KEYWORD,
    "stipendio netto 2026",
    "calcolatore stipendio lordo netto",
    "RAL netto",
    "contributi INPS",
    "IRPEF",
    "cuneo fiscale",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: canonicalUrl,
    siteName: SITE_NAME,
    title: SITE_META_TITLE,
    description: SITE_META_DESCRIPTION,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: SITE_META_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META_TITLE,
    description: SITE_META_DESCRIPTION,
    images: ["/og-image.svg"],
  },
};

export default function CalcoloStipendioNettoPage() {
  return <HomePage />;
}
