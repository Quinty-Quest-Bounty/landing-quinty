/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0e0e0e',
          secondary: '#141414',
          card: '#171717',
          elevated: '#1c1c1c',
        },
        accent: {
          DEFAULT: '#5cb8b2',
          bright: '#7dd4cc',
          dim: '#4a9e98',
          muted: '#4d9994',
          glow: 'rgba(92, 184, 178, 0.15)',
        },
        surface: {
          DEFAULT: 'rgba(255, 255, 255, 0.04)',
          hover: 'rgba(255, 255, 255, 0.07)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
