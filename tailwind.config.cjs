// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bluePurple: '#7174b9',
        lightBlue: '#9cfbf7',
        darkBlue: '#599bcd',
        deepRose: '#9f3961',
        coralRed: '#e87563',
      },

      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.sans],
      },

      animation: {
        blob: 'blob 7s infinite',
      },

      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },

          '33%': {
            transform: 'translate(15px, -25px)',
          },

          '66%': {
            transform: 'translate(-10px, 10px)',
          },

          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
      },
    },
  },
  plugins: [],
}

module.exports = config
