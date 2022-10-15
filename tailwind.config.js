const { getTailColors } = require("@juel/hooks/tailwind");
const { lightColors } = require("./src/utils/colors");
const tailColors = getTailColors(lightColors);
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "400px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    extend: {
      colors: tailColors,
    },
  },
};
