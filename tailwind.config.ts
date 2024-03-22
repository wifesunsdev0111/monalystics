import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeYellow: "#ffc421",
        themePurple: "#bb88fe",
        themeGreen: "#4fbc93",
        themeWhite: "#ffffff",
        themeBlack: "#0b0b0b",
        themeGrayText: "#7e7d7c",
        themeDarkWhiteBg: "#faf8ec",
        themeDarkShadow: "#fbf3d8",
        themeWhiteShadow: "#333936",
        themeGrayShadow: "#efefef",
        themeBlue: "#1b59f8",
        themeBlueShadow: "#e8eefe",
      },
    },
  },
  plugins: [],
};
export default config;
