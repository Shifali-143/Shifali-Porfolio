/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#020617',
        primary: '#06b6d4',
        secondary: '#818cf8',
        accent: '#c084fc',
        surface: 'rgba(15, 23, 42, 0.6)',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 20s ease-in-out -7s infinite',
        'float-slow': 'float 20s ease-in-out -14s infinite',
        'glow-spin': 'glowSpin 4s linear infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '75%': { transform: 'translate(15px, 15px) scale(1.02)' },
        },
        glowSpin: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        },
        bounceSlow: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-8px)' },
          '60%': { transform: 'translateY(-4px)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
