import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#007a89',
          50: '#e6f2f3',
          100: '#b0d6da',
          200: '#8ac2c9',
          300: '#54a6b0',
          400: '#3395a1',
          500: '#007a89',
          600: '#006f7d',
          700: '#005761',
          800: '#00434b',
          900: '#00333a',
        },
        secondary: {
          DEFAULT: '#54c5b5',
          50: '#eef9f8',
          100: '#caede8',
          200: '#b0e4dd',
          300: '#8cd8cd',
          400: '#76d1c4',
          500: '#54c5b5',
          600: '#4cb3a5',
          700: '#3c8c81',
          800: '#2e6c64',
          900: '#23534c',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
