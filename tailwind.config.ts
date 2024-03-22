import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13FF00",
        background: "#161616",
        dark: "#1D1D1D",
        darkPrimary: "#202020",
        darkSecondary: "#272727",
        darkLight: "#353535",
        circlesColor: "#252525",
        gray: "#3f3f3f",
        light: "#E2E2E2",
        lightGray: "#C1C1C1",
        footerText: "#8f8f8f",
      },
    },
  },
  plugins: [],
};
export default config;
