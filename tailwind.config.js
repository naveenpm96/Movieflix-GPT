/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "rgb(229, 9, 20)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(hsla(0,0%,100%,0) 4%,hsla(0,0%,6%,25.15) 4%,hsla(0,8%,9%,55.35) 100%,hsla(0,0%,8%,28.58) 55%,#141414 100%,#141414 101%)",
      },
    },
  },
  plugins: [],
};
