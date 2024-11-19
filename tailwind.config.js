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
      fontFamily: {
        sans: ["var(--font-work-sans)"],
      },
      backgroundColor: {
        surface: "var(--surface-base)",
        action: "var(--action-base)",
      },
      textColor: {
        content: "var(--content-base)",
        action: "var(--action-base)",
      },
    },
  },
  plugins: [],
};
