/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  alias: {
    "@components": "./components",
    "@app": "./app",
  },
  theme: {},
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [require("daisyui")],
};