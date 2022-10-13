import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import useCustomTheme from "./hooks/useCustomTheme";
import useTheme from "./hooks/useTheme";
import MainApp from "./MainApp";

const App = () => {
  const { colorScheme, toggleColorScheme } = useTheme();
  const customTheme = useCustomTheme();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
        <MainApp />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
