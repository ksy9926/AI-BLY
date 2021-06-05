import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mobileAppBar: {
    background: "rgba(248, 248, 248, 0)",
    position: "static",
  },
  mobileAccountCircleIcon: {
    fontSize: "35px",
    color: "Black",
  },
  mobileArrowBackIosIcon: {
    fontSize: "25px",
    color: "Black",
  },
  mobileGrow: {
    flexGrow: 1,
  },
}));

function AccountCircleButton() {
  const classes = useStyles();

  if (localStorage.getItem("jwt") === null) {
    return (
      <Link to="/login">
        <AccountCircle className={classes.mobileAccountCircleIcon} />
      </Link>
    );
  } else {
    return (
      <Link to="/mypage">
        <AccountCircle className={classes.mobileAccountCircleIcon} />
      </Link>
    );
  }
}

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <React.Fragment>
      <AppBar className={classes.mobileAppBar} elevation={0} id="navbar">
        <Toolbar>
          <ArrowBackIosIcon
            className={classes.mobileArrowBackIosIcon}
            onClick={() => {
              history.goBack();
            }}
          />
          <Box className={classes.mobileGrow} />
          <AccountCircleButton />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
