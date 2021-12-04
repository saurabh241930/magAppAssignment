import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";
import Home from "../../Pages/Home/Home";

import useStyles from "./styles";


const mapKeyToComponent = (key) => {
  switch (key) {
    default:
      return <Home />;
  }
};

const Main = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box} sx={{ flexGrow: 1 }}>
        {mapKeyToComponent(props.childText)}
    </Box>
  );
};

export default Main;
