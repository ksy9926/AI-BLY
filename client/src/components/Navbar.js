import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mobileAppBar: {
    background: "rgba(0, 0, 0, 0)",
    position:"static"
  },
  mobileAccountCircleIcon: {
    fontSize: "35px",
    color: "rgba(86, 98, 112, 1)",
  },
  mobileArrowBackIosIcon:{
    fontSize: "25px",
    color: "rgba(86, 98, 112, 1)",
  },
  mobileGrow: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.mobileAppBar} elevation={0}>
        <Toolbar>
          <ArrowBackIosIcon className={classes.mobileArrowBackIosIcon}/>
          <Box className={classes.mobileGrow} />
          <AccountCircle className={classes.mobileAccountCircleIcon} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
