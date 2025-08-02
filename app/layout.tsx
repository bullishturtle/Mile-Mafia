import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Mile Mafia",
  description: "Orlando's Elite Running Crew - Born on asphalt, forged through sweat, blood, and zero excuses.",
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
        <link rel="icon" href="/favicon.png" type="image/png" /> {/* Updated type to image/png */}
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
