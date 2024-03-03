import { CssBaseline, ThemeProvider } from "@mui/material";

import { useMode } from "./reducers/themeSlice";

import RouteIndex from "./Routes/RouteIndex";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteIndex />
      </ThemeProvider>
    </>
  );
}

export default App;
