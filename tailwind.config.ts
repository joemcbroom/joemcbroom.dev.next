import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const textWrap = ({ addUtilities }: { addUtilities: any }) => {
  addUtilities({
    '.text-balance': {
      'text-wrap': 'balance',
    },
  });
};

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    fontSize: false,
  },
  plugins: [plugin(textWrap), require('tailwindcss-fluid-type')],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
};

export default config;
