import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-bg": "url('../public/home.svg')",
        "team-bg": "url('../public/team-background.png')",
        "main-bg": "url('../public/bg-home.svg')",
        "client-bg": "url('../public/background-clients.svg')",
      },
      boxShadow: {
        glow: "rgba(256, 256, 256, 0.25) 0 0 30px 0.5px",
        button: "rgba(256, 256, 256, 0.25) 0 0 10px 0.5px",
        blue: "rgba(15, 44, 141, 0.75) 0 0 50px 30px",
        bg: "rgba(5, 39, 121, 1) 0 0 400px 300px",
      },
      colors: {
        "ad-dark": "#121212",
        "ad-gray": "#313131",
        "ad-blue": "#1DAFEC",
        "ad-dark-blue": "#052779",
        
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        sourceCodePro: ["SourceCodePro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
