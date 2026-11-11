/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          light: '#FFFDF9',
          dark: '#F4EFE6',
        },
        sand: {
          light: '#F8F4EE',
          DEFAULT: '#F0E9DF',
          dark: '#E2D8C9',
        },
        walnut: {
          light: '#724B36',
          DEFAULT: '#5B3A29',
          dark: '#42281A',
          hover: '#4E3122',
        },
        oak: {
          light: '#CE9F72',
          DEFAULT: '#B98B5E',
          dark: '#9E6E41',
        },
        sage: {
          light: '#91A28D',
          DEFAULT: '#7A8B76',
          dark: '#5F705B',
        },
        charcoal: {
          light: '#4A433F',
          DEFAULT: '#2B2623',
          dark: '#1B1715',
          muted: '#6C6560',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(43, 38, 35, 0.05), 0 2px 6px -1px rgba(43, 38, 35, 0.03)',
        card: '0 10px 30px -4px rgba(43, 38, 35, 0.06), 0 4px 10px -2px rgba(43, 38, 35, 0.03)',
        dropdown: '0 20px 40px -6px rgba(43, 38, 35, 0.1), 0 8px 16px -3px rgba(43, 38, 35, 0.04)',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

