/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        customMd: "0 0 25%",
        custom: "0 0 40%",
      },
    },
  },
  plugins: [],
};
