import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  navbarSkip: {
    height: "6vh",
    textAlign: "right",
    fontWeight: "bold",
    color: "#a5a5a5"
  },
  infoMessageBox: {
    height: "13vh",
    textAlign: "left",
    paddingBottom: "10px",
  },
  infoMessage: {
    fontSize: "18px",
    fontWeight: "900"
  },
  infoMiniMessage: {
    color: "#7788b9",
    fontSize: "14px",
    fontWeight: "bold",
    padding: theme.spacing(1)
  },
  imageContainer: {
    height: "80vh",
  },
  paper: {
    boxSizing: 'border-box',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "90%",
    "&:hover, &:focus, &:active": {
      border: "2px solid lightgreen",
      // borderRadius: "1rem",
      outline: "none",
    },
  },
}));

function LandingPage() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4} style={{boxSizing: "border-box"}}>
          <Paper className={classes.paper}>이미지</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>이미지</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>이미지</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Grid className={classes.root}>
      <Grid className={classes.navbarSkip}>
        건너뛰기
      </Grid>
      <Grid className={classes.infoMessageBox}>
        <Box className={classes.infoMessage}>스타일을 3개 이상 고르면<br />취향에 맞는 옷들을 추천해드릴게요 !</Box>
        <Box className={classes.infoMiniMessage}>많이 고르시면 추천이 더욱더 정확해져요</Box>
      </Grid>
      <Grid container spacing={2} className={classes.imageContainer}>
        <Grid container item xs={13} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={13} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={13} spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;