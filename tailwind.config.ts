import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for the luxury theme
        luxury: {
          darkest: "hsl(240 10% 3.9%)", // Near black
          dark: "hsl(240 10% 5%)", // Deep charcoal
          medium: "hsl(240 10% 10%)", // Slightly lighter charcoal for cards
          light: "hsl(240 10% 90%)", // Off-white for text
          crimson: "hsl(350 80% 30%)", // Rich, dark crimson
          gold: "hsl(40 90% 60%)", // Elegant gold accent
          silver: "hsl(210 10% 70%)", // Subtle silver accent
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "inset-2xs": "var(--inset-shadow-2xs)",
        "inset-xs": "var(--inset-shadow-xs)",
        "inset-sm": "var(--inset-shadow-sm)",
        inset: "var(--inset-shadow)",
        "inset-md": "var(--inset-shadow-md)",
        "inset-lg": "var(--inset-shadow-lg)",
        "inset-xl": "var(--inset-shadow-xl)",
        "inset-2xl": "var(--inset-shadow-2xl)",
        "2xs": "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
      },
      backgroundSize: {
        "linear-to-t": "100% 200%",
      },
      backgroundPosition: {
        "linear-to-t": "0% 100%",
      },
      backgroundImage: {
        "linear-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
