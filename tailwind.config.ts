import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './landing/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        hermeneus: '"HermeneusOne", sans-serif',
      },
      colors: {
        blueprint: {
          100: '#6e94c3',
          200: '#5783b9',
          300: '#3f71ae',
          400: '#2560a3',
          500: '#004E98',
          600: '#004384',
          700: '#003870',
          800: '#002d5c',
          900: '#00234a',
        },
      },
    },
  },
  plugins: [],
}
export default config
