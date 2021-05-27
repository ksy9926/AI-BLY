import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mobileButton: {
     textDecoration: 'none',
    background: "var(--color-main-a)",
    width: "70vw",
    borderRadius: "15px",
    color: "var(--color-bg-light)",
    
    "&.MuiButton-root:hover": {
      background: "var(--color-main-a)",
      color: "var(--color-bg-light)",
    },
  },
  mobileButtonText: {
    fontSize: "20px",
    fontWeight: "Bold",
    textDecoration: "none",
  },
}));

export default function Buttons({ color, text, url }) {
  const classes = useStyles();
  return (
    <Link component={RouterLink} to="/" underline="none">
    <Button className={classes.mobileButton}>
      <Typography className={classes.mobileButtonText}>{text}</Typography>
    </Button>
    </Link>
  );
}
