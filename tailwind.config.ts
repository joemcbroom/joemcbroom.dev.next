import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  // darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    fontSize: false,
  },
  plugins: [require('tailwindcss-fluid-type')],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
};

export default config;
