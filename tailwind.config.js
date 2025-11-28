/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 safelist: [
  'bg-[#561C24]',
  'bg-[#3B060A]',
  'bg-[#FFE1AF]',
  'border-[#561C24]',
  'border-[#3B060A]',
  'border-[#FFE1AF]',
],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

