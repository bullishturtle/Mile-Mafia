import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://milemafia.vercel.app"), // Set your base URL here
  title: {
    default: "The Mile Mafia - Orlando's Elite Running Crew",
    template: "%s | The Mile Mafia",
  },
  description:
    "Join The Mile Mafia, Orlando's elite running crew. We're a movement forged through sweat, blood, and zero excuses. Free to join, but not for everyone. No medals. No cheers. No mercy. Just you, the road, and us — every Sunday.",
  keywords: [
    "Mile Mafia",
    "Orlando running club",
    "elite running",
    "hardcore running",
    "running crew",
    "fitness Orlando",
    "track club",
    "endurance training",
    "group runs",
    "no excuses running",
  ],
  openGraph: {
    title: "The Mile Mafia - Orlando's Elite Running Crew",
    description:
      "Join The Mile Mafia, Orlando's elite running crew. We're a movement forged through sweat, blood, and zero excuses. Free to join, but not for everyone. No medals. No cheers. No mercy. Just you, the road, and us — every Sunday.",
    url: "https://milemafia.vercel.app", // Your deployment URL
    siteName: "The Mile Mafia",
    images: [
      {
        url: "https://milemafia.vercel.app/images/mafia-mile.png", // OG image
        width: 1200,
        height: 630,
        alt: "The Mile Mafia - Orlando's Elite Running Crew",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mile Mafia - Orlando's Elite Running Crew",
    description:
      "Join The Mile Mafia, Orlando's elite running crew. We're a movement forged through sweat, blood, and zero excuses. Free to join, but not for everyone. No medals. No cheers. No mercy. Just you, the road, and us — every Sunday.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle if applicable
    images: ["https://milemafia.vercel.app/images/mafia-mile.png"], // Twitter card image
  },
  icons: {
    icon: "/favicon.png", // Path to your favicon
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
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
