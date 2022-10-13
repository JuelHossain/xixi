import colors from "tailwindcss/colors";
import convertToRgb from "./convertToRgb";

const deprecatedColors = [
  "lightBlue",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray",
];

export const customColors = {};
export const stringColor = {};

Object.entries(colors).forEach((b) => {
  if (!deprecatedColors.includes(b[0])) {
    if (typeof b[1] === "object") {
      Object.assign(customColors, { [b[0]]: Object.values(b[1]) });
    } else {
      Object.assign(stringColor, {
        [b[0]]: b[1],
      });
    }
  }
});

export const setRootColor = (colors) => {
  const root = window.document.documentElement;
  Object.keys([...Array(10)]).forEach((n) => {
    const { main, sec, neu } = colors ?? {};
    if (main) {
      root.style.setProperty(
        `--main-${n}`,
        convertToRgb(colors?.["main"]?.[n])
      );
    }
    if (sec) {
      root.style.setProperty(`--sec-${n}`, convertToRgb(colors?.["sec"]?.[n]));
    }
    if (neu) {
      root.style.setProperty(`--neu-${n}`, convertToRgb(colors?.["neu"]?.[n]));
    }
  });
};
