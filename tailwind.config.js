/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary, #0057B8)',
          accent: 'var(--brand-accent, #00B4D8)',
          cta: 'var(--brand-cta, #FF6B00)',
          'cta-hover': '#e05e00',
        },
        surface: {
          0: 'var(--surface-0, #FFFFFF)',
          1: 'var(--surface-1, #F8FAFC)',
          2: 'var(--surface-2, #F0F4F8)',
        },
        text: {
          primary: 'var(--text-primary, #0F172A)',
          secondary: 'var(--text-secondary, #475569)',
        },
        brandBorder: 'var(--border, #E2E8F0)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 87, 184, 0.08)',
        'premium-hover': '0 20px 40px -4px rgba(0, 87, 184, 0.16)',
      }
    },
  },
  plugins: [],
}
