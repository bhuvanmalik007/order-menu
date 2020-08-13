import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import { CssBaseline } from "@material-ui/core";


const useStyles = makeStyles((_theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  button: {
    color: "#00a152",
  },
}));

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: [
            "Noto Sans JP",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
        overrides: {
          MuiSlider: {
            thumb: {
              color: "black",
            },
            track: {
              color: "grey",
            },
          },
        },
      }),
    [darkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} title="Order Menu" />
      </div>
    </ThemeProvider>
  );
}

export default App;
