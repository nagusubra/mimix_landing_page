import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#68dac4',
        secondary: '#7946cc',
        background: '#FCFCFC',
        text: '#080808',
        gray: '#666568'
      },
      fontFamily: {
        display: ['var(--font-sf-pro-display)', 'system-ui'],
        body: ['var(--font-sf-pro-text)', 'Poppins', 'sans-serif']
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
export default config