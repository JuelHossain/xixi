import { customColors } from "../utils/colors";
import useTheme from "./useTheme";
export default function useCustomTheme() {
  const { colorScheme } = useTheme();
  const dark = colorScheme === "dark";
  return {
    colorScheme,
    primaryColor: "main",
    primaryShade: { light: 6, dark: 5 },
    colors: dark
      ? {
          ...customColors,
          main: customColors.orange,
          sec: customColors.purple,
          neu: customColors.gray,
        }
      : {
          ...customColors,
          main: customColors.pink,
          sec: customColors.purple,
          neu: customColors.slate,
        },
    components: {
      Container: {
        defaultProps: {
          size: "xl",
        },
      },
    },
  };
}
