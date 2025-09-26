import type { Metadata } from "next"
import { Geist, Geist_Mono, Rubik } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "react-hot-toast"

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Francisco Hurtado",
    template: "%s | Francisco Hurtado"
  },
  description: "Francisco Hurtado - Engineer + Marketer + Manager specializing in innovative solutions.",
  keywords: ["Francisco Hurtado", "Portfolio", "Engineer", "Marketer", "Manager", "Coder"],
  authors: [{ name: "Francisco Hurtado" }],
  creator: "Francisco Hurtado",
  metadataBase: new URL("https://www.frankhurt.dev"),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Francisco Hurtado - Portfolio",
    description: "Portfolio of Francisco Hurtado - Engineer + Marketer + Manager specializing in innovative solutions.",
    url: "https://www.franciscohurtado.com",
    siteName: "Switchfolio",
    images: [
      {
        url: "https://res.cloudinary.com/yourcloud/image/upload/placeholder.png",
        width: 1200,
        height: 630,
        alt: "Francisco Hurtado - Portfolio"
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Hurtado - Portfolio",
    description: "Portfolio of Francisco Hurtado - Engineer + Marketer + Manager specializing in innovative solutions.",
    images: ["https://res.cloudinary.com/yourcloud/image/upload/placeholder.png"],
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
    <html lang="en">
      <body
        className={`${rubik.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
