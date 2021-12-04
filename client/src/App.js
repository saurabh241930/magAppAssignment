import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Main from "./components/Main/Main";
import { useLocation } from "react-router";
import { set } from "date-fns";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "./redux/store";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {


  // const user = useSelector((state) => state.auth);
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
        <Navigation />
    </Box>
  );
}
