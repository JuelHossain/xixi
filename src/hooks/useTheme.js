import { useMantineTheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";

export default function useTheme() {
  const { colors } = useMantineTheme();
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(systemColorScheme);

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
  return { colorScheme, toggleColorScheme };
}
