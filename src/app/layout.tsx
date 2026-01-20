import type { Metadata } from "next"
import { Geist_Mono, Rubik } from "next/font/google"
import "../styles/globals.css"
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"
import SkipLink from "@/components/SkipLink"
import ScrollProgress from "@/components/ScrollProgress"
import { getCurrentPersona } from "@/services/personaService"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
})

// Default persona for metadata (Francisco)
const defaultPersona = getCurrentPersona(false)

export const metadata: Metadata = {
  title: {
    default: defaultPersona.name,
    template: `%s | ${defaultPersona.name}`
  },
  description: `${defaultPersona.name} - ${defaultPersona.bio}`,
  keywords: [defaultPersona.name, "Portfolio", "Engineer", "Marketer", "Manager", "Coder"],
  authors: [{ name: defaultPersona.name }],
  creator: defaultPersona.name,
  metadataBase: new URL("https://www.frankhurt.dev"),
  icons: {
    icon: "/assets/Images/favicon/favicon.ico",
    apple: "/assets/Images/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: defaultPersona.name,
    description: `${defaultPersona.name} - ${defaultPersona.bio}`,
    url: "https://frankhurt.dev",
    siteName: "Switchfolio",
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
    title: defaultPersona.name,
    description: `${defaultPersona.name} - ${defaultPersona.bio}`,
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3e43f0" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/x-icon" href="/assets/Images/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/Images/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/Images/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/Images/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/Images/favicon/site.webmanifest" />
      </head>
      <body
        className={`${rubik.variable} ${geistMono.variable} antialiased gradient-mesh-bg theme-transition`}
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
