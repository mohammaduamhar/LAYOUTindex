const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/src/**/*.{js,ts,jsx,tsx}", // Adjusted path
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}