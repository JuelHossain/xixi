import {
  ColorSchemeProvider,
  MantineProvider,
  useMantineTheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";
import MainApp from "./MainApp";

const App = () => {
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(systemColorScheme);
  const { colors } = useMantineTheme();

  const getTheme = window.localStorage.getItem("theme");
  const setTheme = (value) => window.localStorage.setItem("theme", value);

  useEffect(() => {
    if (getTheme === "dark" || (!getTheme && systemColorScheme === "dark")) {
      setColorScheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setColorScheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [getTheme, systemColorScheme, colorScheme, colors]);
  const toggleColorScheme = () => {
    if (getTheme) {
      if (getTheme === "light") {
        setColorScheme("dark");
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setColorScheme("light");
        setTheme("light");
      }
    } else {
      if (colorScheme === "dark") {
        document.documentElement.classList.remove("dark");
        setColorScheme("light");
        setTheme("light");
      } else {
        document.documentElement.classList.add("dark");
        setColorScheme("dark");
        setTheme("dark");
      }
    }
  };
  const dark = colorScheme === "dark";
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          primaryColor: "main",
          colors: dark
            ? {
                main: colors.pink,
                sec: colors.grape,
              }
            : {
                main: colors.pink,
                sec: colors.grape,
              },
          components: {
            Container: {
              defaultProps: {
                size: "xl",
              },
            },
          },
        }}
      >
        <MainApp />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
