import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Mile Mafia",
  description: "Orlando's Elite Running Crew - Born on asphalt, forged through sweat, blood, and zero excuses.",
  openGraph: {
    title: "The Mile Mafia",
    description: "Orlando's Elite Running Crew - Born on asphalt, forged through sweat, blood, and zero excuses.",
    url: "https://your-domain.com", // Replace with your actual domain if you have one
    siteName: "The Mile Mafia",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Replace with a relevant image for sharing
        width: 1200,
        height: 630,
        alt: "The Mile Mafia Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
