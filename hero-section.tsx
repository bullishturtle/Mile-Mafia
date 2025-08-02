"use client"

import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "About Us", href: "#about-us" },
    { name: "Apply Now", href: "#apply" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-luxury-darkest">
      {/* Background Image - Now static and prominent */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/mafia-mile.png')`, // Using the new static image
          backgroundSize: "cover", // Ensure it covers the area
          backgroundPosition: "center", // Center the image
        }}
      >
        {/* Removed dark overlay as the image itself is dark and textured */}
      </div>
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        {/* Logo/Brand - Now primarily conveyed by the background image */}
        <div className="text-primary-foreground font-bold text-xl tracking-wider sr-only">THE MILE MAFIA</div>{" "}
        {/* Screen reader only */}
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-primary-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide pb-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-foreground hover:text-accent transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </nav>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-luxury-darkest/90 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-primary-foreground text-2xl font-bold tracking-wider hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Hero Content - Only the CTA button remains */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-primary-foreground max-w-4xl">
          {/* Removed h1 and p as the image serves as the main title */}
          {/* CTA Button */}
          <LiquidButton
            size="xxl"
            // Removed explicit background and text color classes to allow LiquidButton's internal styling
            onClick={() => scrollToSection("#apply")}
          >
            Apply Now
          </LiquidButton>
        </div>
      </div>
      {/* Removed Slider Navigation and Side Navigation Indicators */}
    </div>
  )
}
