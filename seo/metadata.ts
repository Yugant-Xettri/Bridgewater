import type { Metadata, Viewport } from "next";
import { SEO_CONFIG } from "./config";

const { baseUrl, siteName, siteNameShort, contact, location, social } = SEO_CONFIG;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Best College in ${location.city}, ${location.countryName} | ${siteNameShort}`,
    template: `%s | ${siteName}`
  },
  description: `${siteName} (${siteNameShort}) - Premier NEB & TU affiliated college in ${location.street.split(",")[1]?.trim()}, ${location.city}, ${location.countryName}. Offering +2 Science, Management, Humanities, Law, BCA, BBS, and CA programs since ${SEO_CONFIG.foundingYear}. Apply now for admission!`,
  keywords: [
    siteName,
    siteNameShort,
    `best college in ${location.city}`,
    `college in ${location.countryName}`,
    "Sinamangal college",
    `+2 Science ${location.city}`,
    `+2 Management ${location.countryName}`,
    "+2 Humanities",
    `+2 Law ${location.countryName}`,
    `BCA college ${location.city}`,
    `BBS college ${location.countryName}`,
    `CA coaching ${location.countryName}`,
    "NEB affiliated college",
    "TU affiliated college",
    "Tribhuvan University college",
    `best science college ${location.countryName}`,
    `top college ${location.city}`,
    `college admission ${location.countryName}`,
    `scholarship ${location.countryName} college`,
    "Bridgewater Education Foundation"
  ],
  authors: [{ name: siteName, url: baseUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: siteName,
    title: `${siteName} | Best College in ${location.city}, ${location.countryName}`,
    description: `Premier NEB & TU affiliated college in ${location.street.split(",")[1]?.trim()}, ${location.city}. Offering +2 Science, Management, Humanities, Law, BCA, BBS & CA programs since ${SEO_CONFIG.foundingYear}.`,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - ${SEO_CONFIG.tagline}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Best College in ${location.city}`,
    description: `Premier NEB & TU affiliated college in ${location.street.split(",")[1]?.trim()}, ${location.city}. +2, BCA, BBS & CA programs since ${SEO_CONFIG.foundingYear}.`,
    images: [`${baseUrl}/og-image.png`],
    creator: social.twitter.handle,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "add-your-google-search-console-verification-code",
  },
  category: "education",
  classification: "Educational Institution",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "NP-03",
    "geo.placename": location.city,
    "geo.position": `${location.coordinates.latitude};${location.coordinates.longitude}`,
    "ICBM": `${location.coordinates.latitude}, ${location.coordinates.longitude}`,
    "og:locale:alternate": "ne_NP",
  },
};
