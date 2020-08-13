import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  heading: {
    whiteSpace: "noWrap",
    // color: "#00a152",
  },
}));

export default function Header({ darkMode, setDarkMode, title }) {
  const classes = useStyles();

  return (
    <AppBar position="relative" color="default">
      <Toolbar>
        <Typography variant="h5" className={classes.heading}>
          {title}
        </Typography>
        <Grid
          component="label"
          container
          alignItems="center"
          spacing={1}
          justify="flex-end"
        >
          <Grid item>
            <WbSunnyIcon />
          </Grid>
          <Grid item>
            <Switch
              checked={darkMode}
              onChange={(event, value) => setDarkMode(value)}
              name="mode"
            />
          </Grid>
          <Grid item>
            <NightsStayIcon />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
