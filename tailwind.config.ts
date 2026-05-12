import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#f6ead0",
        parchmentDeep: "#e4c889",
        ink: "#223126",
        moss: "#4e6f48",
        fern: "#7e9b5f",
        ember: "#b96f35",
        honey: "#d8a84f",
        nightForest: "#183327",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        paper: "0 24px 70px rgba(34, 49, 38, 0.18)",
        insetPaper: "inset 0 0 0 1px rgba(80, 63, 37, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
