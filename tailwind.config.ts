import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#001842',
        'secondary': '#0C3C80',
        'tertiary': '#2A63AB',
        'quaternary': '#96B7D6',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },

    },
  },
  plugins: [],
}
export default config