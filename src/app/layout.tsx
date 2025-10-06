import type { Metadata } from "next"
import { Geist_Mono, Rubik } from "next/font/google"
import "../styles/globals.css"
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Francisco Hurtado",
    template: "%s | Francisco Hurtado"
  },
  description: "Francisco Hurtado - Engineer + Marketer + Manager.",
  keywords: ["Francisco Hurtado", "Portfolio", "Engineer", "Marketer", "Manager", "Coder"],
  authors: [{ name: "Francisco Hurtado" }],
  creator: "Francisco Hurtado",
  metadataBase: new URL("https://www.frankhurt.dev"),
  icons: {
    icon: "/assets/Images/favicon/favicon.png",
  },
  openGraph: {
    title: "Francisco Hurtado",
    description: "Frankhurt - Engineer, Marketer, Program Manager",
    url: "https://frankhurt.dev",
    siteName: "Frankfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Francisco Hurtado"
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Hurtado",
    description: "Frankhurt - Engineer, Marketer, Program Manager",
    images: [""],
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
      </head>
      <body
        className={`${rubik.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
