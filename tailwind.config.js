const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F7F6F7",
        point: "#6c81fb",
      },
      minHeight: {
        md: "480px",
        sm: "320px",
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
