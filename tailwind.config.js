/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-dark': '#1D4ED8',
        'primary-light': '#60A5FA',
        accent: '#16A34A',
        'accent-dark': '#15803D',
        'accent-light': '#4ADE80',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        ink: '#0F172A',
        muted: '#64748B',
        divider: '#E2E8F0',
        deep: '#0F172A',
      },
      fontFamily: {
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        serif: ['"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
      },
      boxShadow: {
        'glow-primary': '0 10px 30px -8px rgba(37,99,235,0.55)',
        'glow-accent': '0 10px 26px -8px rgba(22,163,74,0.5)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25,0.46,0.45,0.94)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
