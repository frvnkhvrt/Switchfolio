import type { Metadata } from "next"
import { Geist_Mono, Rubik } from "next/font/google"
import "../styles/globals.css"
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"
import SkipLink from "@/components/SkipLink"
import ScrollProgress from "@/components/ScrollProgress"
import { getPersona } from "@/services/personaService"
import { STORAGE_KEYS } from "@/utils/storage"
import { SITE_URL, DEFAULT_PERSONA_ID } from "@/config/site"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
})

// Default persona for metadata (Francisco)
const defaultPersona = getPersona(DEFAULT_PERSONA_ID)

// JSON-LD structured data for Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: defaultPersona.name,
  url: SITE_URL,
  jobTitle: defaultPersona.bio,
  image: `${SITE_URL}${defaultPersona.image}`,
  sameAs: defaultPersona.links.map((link) => link.link),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
}

export const metadata: Metadata = {
  title: {
    default: "Frankhurt /// Digital Strategist",
    template: "%s | Frankhurt"
  },
  description: `${defaultPersona.name} — Engineer, Marketer & Digital Strategist based in Bogotá. Building scalable tech solutions, growth strategies, and creative digital experiences.`,
  keywords: [defaultPersona.name, "Portfolio", "Engineer", "Marketer", "Tech Growth Lead", "Product Strategist", "Developer", "Bogotá"],
  authors: [{ name: defaultPersona.name }],
  creator: defaultPersona.name,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/assets/Images/favicon/favicon.ico",
    apple: "/assets/Images/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: `${defaultPersona.name} — ${defaultPersona.bio}`,
    description: `${defaultPersona.name} — Engineer, Marketer & Digital Strategist. Building scalable tech solutions and growth strategies.`,
    url: SITE_URL,
    siteName: defaultPersona.name,
    images: [
      {
        url: defaultPersona.image,
        width: 1200,
        height: 630,
        alt: `${defaultPersona.name}'s portfolio`
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${defaultPersona.name} — ${defaultPersona.bio}`,
    description: `Engineer, Marketer & Digital Strategist. Building scalable tech solutions and growth strategies.`,
    images: [defaultPersona.image],
    creator: "@frvnkhvrt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var k='${STORAGE_KEYS.SWITCH_STATE}';try{var v=localStorage.getItem(k);if(v!==null){var b=JSON.parse(v);if(b===true)document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3e43f0" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/x-icon" href="/assets/Images/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/Images/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/Images/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/Images/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/Images/favicon/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${rubik.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        <ErrorBoundary>
          <SkipLink />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
