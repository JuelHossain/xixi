import { useTheme, useThemeMode } from "@juel/hooks/theme";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import MainApp from "./MainApp";
import { darkColors, lightColors } from "./utils/colors";

const App = () => {
  const { mode, toggleMode } = useThemeMode();
  const customTheme = {
    primaryColor: "main",
    colors: mode === "dark" ? darkColors : lightColors,
  };
  const theme = useTheme(customTheme);

  return (
    <ColorSchemeProvider colorScheme={mode} toggleColorScheme={toggleMode}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <MainApp />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
