import convert from "color-convert";
export default function convertToRgb(color) {
  const rgbColor = convert.hex.rgb(color)?.join(" ");
  return rgbColor;
}
