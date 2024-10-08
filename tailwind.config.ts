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
        "perry-family": 'url("/assets/PerryFamilyBG.jpg")',
        "kyle-headshot": 'url("/assets/KylePerryHeadshot.png")',
      },
      backgroundColor: {
        primary: "#375966",
      },
      fontFamily: {
        "permanent-marker": ["var(--font-permanent-marker)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
        "bungee-inline": ["var(--font-bungee-inline)"],
      },
      colors: {
        "primary-brown": "#916536",
        "secondary-brown": "#CB8D4B",
        "primary-blue": "#578FA0",
      },
    },
  },
  plugins: [],
};
export default config;
