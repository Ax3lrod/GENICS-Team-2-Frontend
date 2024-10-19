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
          DEFAULT: '#00acc1',
          50: '#e6f7f9',
          100: '#b0e5ec',
          200: '#8ad9e2',
          300: '#54c7d5',
          400: '#33bdcd',
          500: '#00acc1',
          600: '#009db0',
          700: '#007a89',
          800: '#005f6a',
          900: '#004851',
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
