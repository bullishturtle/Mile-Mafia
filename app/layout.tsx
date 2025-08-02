import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Mile Mafia",
  description: "Hardcore, competitive running club with attitude.",
  openGraph: {
    title: "The Mile Mafia",
    description: "Hardcore, competitive running club with attitude.",
    url: "https://themilemafia.com",
    siteName: "The Mile Mafia",
    images: [
      {
        url: "https://themilemafia.com/placeholder.svg?height=630&width=1200&query=The%20Mile%20Mafia%20social%20share%20image",
        width: 1200,
        height: 630,
        alt: "The Mile Mafia Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mile Mafia",
    description: "Hardcore, competitive running club with attitude.",
    images: [
      "https://themilemafia.com/placeholder.svg?height=630&width=1200&query=The%20Mile%20Mafia%20social%20share%20image",
    ],
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
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
