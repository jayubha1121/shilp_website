import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0d0d0d',
        paper: '#ffffff',
        mist: '#e6e6e6',
        smoke: '#d9d9d9',
        slate: '#6f6f6f',
        graphite: '#2c2c2c',
        carbon: '#1c1c1c',
        hairline: '#d2d2d2',
      },
      fontFamily: {
        sans: ['Manrope', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        shell: '1440px',
      },
      fontSize: {
        display: ['clamp(2.6rem, 6.2vw, 5.6rem)', { lineHeight: '1.02' }],
        section: ['clamp(1.7rem, 3.2vw, 2.9rem)', { lineHeight: '1.16' }],
        figure: ['clamp(1.9rem, 4vw, 3.1rem)', { lineHeight: '1.05' }],
      },
    },
  },
  plugins: [],
};

export default config;
