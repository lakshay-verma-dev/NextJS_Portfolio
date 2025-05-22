/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseGreen: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,197,94, 0.5)" },
          "50%": { boxShadow: "0 0 0 10px rgba(34,197,94, 0)" },
        },
        pulsePurple: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(192,132,252, 0.5)" },
          "50%": { boxShadow: "0 0 0 10px rgba(192,132,252, 0)" },
        },
        pulseYellow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(253,224,71, 0.5)" },
          "50%": { boxShadow: "0 0 0 10px rgba(253,224,71, 0)" },
        },
        "border-glow": {
          to: {
            transform: "translateX(-25%)",
          },
        },
      },
      animation: {
        "pulse-green": "pulseGreen 2.5s infinite",
        "pulse-purple": "pulsePurple 2.5s infinite",
        "pulse-yellow": "pulseYellow 2.5s infinite",
        "spin-slow": "spin 2s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        cyan: {
          950: "#083344",
        },
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
      },
    },
  },
  plugins: [],
};
