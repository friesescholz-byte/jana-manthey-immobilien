/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFCF9',
          100: '#FBF9F5',
          200: '#F4F1EA',
          300: '#EAE5DB',
          400: '#DDD6C7',
          500: '#C7BC9F',
        },
        slate: {
          950: '#0F1412',
          900: '#171E1B',
          850: '#1F2925',
          800: '#2A3631',
          700: '#3D4D47',
          600: '#53655E',
        },
        accent: {
          DEFAULT: '#9E6A4B',
          dark: '#855437',
          light: '#BA8462',
          subtle: '#F6EEE8',
        }
      },
      fontFamily: {
        serif: ['"Sorts Mill Goudy"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(27, 36, 33, 0.04)',
        'float': '0 20px 40px -15px rgba(27, 36, 33, 0.07)',
      }
    },
  },
  plugins: [],
}
