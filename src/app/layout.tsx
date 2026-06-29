import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  HOME_SLUG,
  SITE_FOCUS_KEYWORD,
  SITE_META_DESCRIPTION,
  SITE_META_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_META_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_META_DESCRIPTION,
  keywords: [
    SITE_FOCUS_KEYWORD,
    "stipendio netto 2026",
    "calcolatore stipendio lordo netto",
    "RAL netto",
    "contributi INPS",
    "IRPEF",
    "cuneo fiscale 2026",
  ],
  alternates: {
    canonical: `${SITE_URL}${HOME_SLUG}`,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: `${SITE_URL}${HOME_SLUG}`,
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
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.webp", type: "image/webp", sizes: "64x64" },
    ],
    apple: [{ url: "/apple-icon.webp", sizes: "180x180", type: "image/webp" }],
    shortcut: "/favicon.webp",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.webp`,
  description: SITE_META_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@netpayitalia.it",
    availableLanguage: ["Italian", "English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}${HOME_SLUG}`,
  description: SITE_META_DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}${HOME_SLUG}#calculator`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.variable}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
