/** @type {import('tailwindcss').Config} */
const { heroui } = require('@heroui/theme');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js',
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
