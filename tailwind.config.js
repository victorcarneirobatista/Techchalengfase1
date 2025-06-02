/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        byteGreen: "#00B050",
        byteRed: "#EF4136",
        byteBlue: "#004A5D",
        byteLightGray: "#F3F4F6",
        byteBackground: "#0f1012",
        byteCard: "#1a1b1f",
        byteDark: "#24262b",
        byteBorder: "#2e2f33",
        byteTextMuted: "#9ca3af",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
