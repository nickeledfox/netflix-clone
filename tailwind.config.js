module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'Arial', 'sans-serif'],
      body: ['Helvetica'],
    },
    extend: {
      colors: {
        'netflix-red': '#e50914',
        black: '#000',
        dark: '#2B2B2B',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: ['2rem', '3rem'],
        lg: ['4rem', '5rem'],
        xl: ['5rem', '6rem'],
        '2xl': '7rem',
      },
      margin: {
        DEFAULT: '1rem',
        sm: ['2rem', '3rem'],
        lg: ['4rem', '5rem'],
        xl: ['5rem', '6rem'],
        '2xl': '7rem',
      },
      center: true, // Centering will disable any margin styles
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
