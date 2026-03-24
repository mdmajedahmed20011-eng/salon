import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./emails/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-bg-secondary)",
          tertiary: "var(--color-bg-tertiary)",
          glass: "var(--color-bg-glass)"
        },
        gold: {
          100: "var(--color-gold-100)",
          200: "var(--color-gold-200)",
          300: "var(--color-gold-300)",
          400: "var(--color-gold-400)",
          500: "var(--color-gold-500)",
          600: "var(--color-gold-600)"
        },
        rose: {
          400: "var(--color-rose-400)",
          500: "var(--color-rose-500)"
        },
        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          400: "var(--color-neutral-400)",
          600: "var(--color-neutral-600)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)"
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)"
        },
        border: "var(--color-border)",
        success: "var(--color-success)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
        info: "var(--color-info)"
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "32px",
        "2xl": "48px"
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0, 0, 0, 0.3)",
        md: "0 4px 20px rgba(0, 0, 0, 0.4)",
        lg: "0 8px 40px rgba(0, 0, 0, 0.5)",
        xl: "0 20px 80px rgba(0, 0, 0, 0.6)",
        gold: "0 0 40px rgba(212, 160, 23, 0.2)",
        "gold-intense": "0 0 80px rgba(212, 160, 23, 0.35)",
        inner: "inset 0 1px 0 rgba(255, 255, 255, 0.05)"
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(135deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.55) 48%, rgba(0, 0, 0, 0.18) 100%)",
        "premium-panel": "radial-gradient(circle at top right, rgba(212, 160, 23, 0.16), transparent 35%), radial-gradient(circle at bottom left, rgba(244, 63, 94, 0.12), transparent 30%)"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        "hero-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.35)" },
          "100%": { boxShadow: "0 0 0 18px rgba(34, 197, 94, 0)" }
        }
      },
      animation: {
        shimmer: "shimmer 5s linear infinite",
        float: "float 8s ease-in-out infinite",
        "hero-zoom": "hero-zoom 8s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        "marquee-reverse": "marquee 26s linear infinite reverse",
        "pulse-ring": "pulseRing 1.8s ease-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
