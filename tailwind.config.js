/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        lightBackground: "#f5f4ef",
        lightForeground: "#3a3838",
        darkBackground: "#0a0a0a",
        darkForeground: "ededed",
      },
      fontFamily: {
        sans: ["var(--font-work-sans)"],
      },
    },
  },
  plugins: [],
};
