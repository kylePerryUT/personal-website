import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "perry-family": 'url("../assets/PerryFamilyBG.jpg")',
      },
      backgroundColor: {
        primary: "#375966",
      },
      fontFamily: {
        "permanent-marker": ["var(--font-permanent-marker)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
      },
      colors: {
        "primary-brown": "#916536",
        "secondary-brown": "#CB8D4B",
      },
    },
  },
  plugins: [],
};
export default config;
