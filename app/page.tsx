"use client"

import HeroSection from "../hero-section"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import "./globals.css"
import { motion } from "framer-motion"
import ApplicationForm from "@/components/application-form"
import Footer from "@/components/footer"
import DripRevealOverlay from "@/components/drip-reveal-overlay"

export default function Page() {
  const rulesArray = [
    "Rule #1: You do not show up soft.",
    "Rule #2: You do not walk.",
    "Rule #3: If you puke, you keep running.",
    "Rule #4: If someone falls behind, we loop back and drag them forward.",
    "Rule #5: Runs go on as long as they need to.",
    "Rule #6: One crew. One route. One mission.",
    "Rule #7: You leave your ego at the start line.",
    "Rule #8: If this is your first run... you run hard.",
  ]

  const explanationText =
    "This isn’t a running club. It’s a movement. Born on Orlando’s blistering asphalt, forged through sweat, blood, and zero excuses —The Mile Mafia isn’t for casuals. We’re not here for coffee and conversations. We’re a crew. A code. A commitment to every mile earned, never given. Free to join, but not for everyone. No medals. No cheers. No mercy. Just you, the road, and us — every Sunday."

  return (
    <div className="min-h-screen bg-background">
      <DripRevealOverlay />
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <section id="about-us" className="relative min-h-screen flex items-center justify-center py-20 bg-background">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-foreground">ABOUT US</h2>
            <div className="space-y-12">
              {/* Rules List */}
              <ul className="list-none p-0 m-0 text-left inline-block">
                {rulesArray.map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground mb-4 last:mb-0"
                  >
                    {rule}
                  </motion.li>
                ))}
              </ul>

              {/* Explanation Paragraphs */}
              <TextGradientScroll
                text={explanationText}
                className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground mt-12"
                type="word"
                textOpacity="soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="relative py-20 bg-card">
        <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-foreground mb-6">APPLY NOW</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              This is your chance. Prove you're one of us.
            </p>
          </motion.div>
          <ApplicationForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
