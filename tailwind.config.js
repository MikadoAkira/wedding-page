/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8EE',
          100: '#F5EED5',
          200: '#EBDAA3',
          300: '#DFC46E',
          400: '#D4AF37', // Pure Champagne Gold
          500: '#B89324',
          600: '#917117',
          700: '#6C5212',
          800: '#48350C',
          900: '#2A1F06',
        },
        champagne: {
          DEFAULT: '#E6D5B8',
          light: '#F7F3E9',
          dark: '#BFA47A',
        },
        dark: {
          DEFAULT: '#0D0D0F',
          surface: '#151518',
          card: '#1C1C22',
          border: '#282832',
          muted: '#8E8E9F',
        },
        cream: {
          DEFAULT: '#FAF8F5',
          soft: '#F4EFEA',
          dark: '#E8DFD5',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        cinematic: ['"Cinzel"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #FFF6D6 0%, #D4AF37 50%, #8C6D1F 100%)',
      }
    },
  },
  plugins: [],
}
