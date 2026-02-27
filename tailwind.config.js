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
          primary: '#060606',
          secondary: '#0e0e0e',
          card: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#0EA885',
          bright: '#14E3B0',
          dim: '#0A7A60',
          glow: 'rgba(14, 168, 133, 0.15)',
        },
        surface: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          hover: 'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.06)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
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
