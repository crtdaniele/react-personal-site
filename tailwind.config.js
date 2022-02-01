module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    colors: {
      white: "rgb(255, 255, 255)",
      red: "rgb(240, 113, 103)",
      dark: "rgb(31, 32, 40)",
      gray: "rgb(83, 86, 97)",
      black: "rgb(0, 0, 0)",
      link: "rgb(27, 111, 254)",
    },
    extend: {
      flex: {
        2: "0 0 50%",
        3: "0 0 33.3333%",
      },
    },
  },
  plugins: [],
};
