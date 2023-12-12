const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  alias: {
    "@components": "./components",
    "@app": "./app",
  },
  theme: {},
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#14532d",
      //     secondary: "#ec4899",
      //     accent: "#facc15",
      //     neutral: "#84cc16",
      //     "base-100": "#f3f4f6",
      //     "base-200": "#e5e7eb",
      //     "base-300": "#d1d5db",
      //     info: "#60a5fa",
      //     success: "#00ffff",
      //     warning: "#fb923c",
      //     error: "#dc2626",
      //     "base-content": "#ffffff",
      //   },
      // },
      // "lemonade",
      // "business",
      // "corporate",
      // "autumn",
      {
        myTheme: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          primary: "#488684",
          purple: "#bcb7f8",
          darkPurple: "#488684",
        },
      },
    ],
  },
  plugins: [require("daisyui"), nextui()],
};

// Keep the rest of the code as it is
