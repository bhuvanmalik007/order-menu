import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { useQuery } from "react-query";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Header from "./components/Header";
import { API_ENDPOINT, REQUEST_OBJ, CORS_ENABLER_URL } from "./constants";

const useStyles = makeStyles(() => ({
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

const fetcher = async () => {
  const rawResponse = await fetch(CORS_ENABLER_URL + API_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(REQUEST_OBJ),
  });
  return rawResponse.json();
};

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const { isLoading, error, data } = useQuery("menuData", fetcher);
  const [value, setValue] = useState(0);
  let uniqueCategories;
  if (data && data.desc) {
    uniqueCategories = data.desc.filter((item, index, self) => {
      return (
        self.findIndex((v) => v.categoryName === item.categoryName) === index
      );
    });
  }

  const handleChange = (event, newValue) => {
    // const selectedCategoryName = uniqueCategories[newValue].categoryName;
    setValue(newValue);
  };
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
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          title="Active Culture"
        />
        {isLoading && <p>loading...</p>}
        {!isLoading && !error && (
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {uniqueCategories &&
              uniqueCategories.map((item) => (
                <Tab key={item.categoryName} label={item.categoryName} />
              ))}
          </Tabs>
        )}
        {!isLoading &&
          !error &&
          data.desc
            .filter(
              (item) =>
                item.categoryName === uniqueCategories[value].categoryName
            )
            .map((item) => <p key={item.itemNum}>{item.name}</p>)}
      </div>
    </ThemeProvider>
  );
}
export default App;
