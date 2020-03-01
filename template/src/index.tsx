import {
  CssBaseline,
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from "@material-ui/core";
import { getTheme } from "config/materialTheme";
import * as serviceWorker from "config/serviceWorker";
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";

export const App = () => {
  const isDarkModeActive = useDarkMode(false);
  const activeTheme = getTheme(isDarkModeActive.value ? "dark" : "light");

  return (
    <MuiThemeProvider theme={activeTheme}>
      <ThemeProvider theme={activeTheme}>
        <StylesProvider injectFirst>
          <SnackbarProvider
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <CssBaseline />
            <Routes />
          </SnackbarProvider>
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
