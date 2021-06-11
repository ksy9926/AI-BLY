import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  mobileAppBar: {
    background: "rgba(248, 248, 248, 0)",
    position: "static",
  },
  mobileAccountCircleIcon: {
    fontSize: "35px",
    color: "white",
  },
  mobileArrowBackIosIcon: {
    fontSize: "25px",
    color: "white",
  },
  mobileGrow: {
    flexGrow: 1,
  },
  mobileTitle: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  mobileLogo: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "Black",
  },
  mobileCategoryButton: {
    color: "rgb(1 1 1 / 66%)",
    display: "inline-block",
    borderRadius: "15px",
    margin: "10px 6px",
    background: "rgba( 255, 255, 255, 0.2)",
    fontSize: "14px",
    boxShadow:
      "0px 1px 2px -1px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 9px 0px rgb(0 0 0 / 12%)",
    "&:hover, &:focus, &:active": {
      backgroundColor: "var(--color-main-b)",
      color: "#F55129",
    },
    width: "fit-content",
    padding: "10px 15px 10px 15px",
  },
  mobileCategoryButtonText: {
    boxSizing: "border-box",
    fontWeight: "500",
  },
}));

function AccountCircleButton() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  if (localStorage.getItem("jwt") === null) {
    return (
      <Link to="/login">
        <AccountCircle className={classes.mobileAccountCircleIcon} />
      </Link>
    );
  } else if (location.pathname === `/mypage`) {
    return (
      <Box
        onClick={() => {
          history.push("/main");
          localStorage.clear();
        }}
        className={classes.mobileCategoryButton}
      >
        <Box className={classes.mobileCategoryButtonText}>로그아웃</Box>
      </Box>
    );
  } else {
    return (
      <Link to="/mypage">
        <AccountCircle className={classes.mobileAccountCircleIcon} />
      </Link>
    );
  }
}

export default function Navbar({ title }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <React.Fragment>
      <AppBar className={classes.mobileAppBar} elevation={0} id="navbar">
        <Toolbar>
          <Box className={classes.mobileTitle}>{title}</Box>
          <Box className={classes.mobileGrow} />
          {/* <Box className={classes.mobileLogo}>AIBLY</Box> */}
          <Box className={classes.mobileGrow} />
          <AccountCircleButton />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
