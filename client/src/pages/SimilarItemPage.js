import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { Mobile } from "../MediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";

const useStyles = makeStyles((theme) => ({
  mobileContainer: {
    height: "auto",
    position: "relative",
    justifyContent: "center",
    alignContent: "center",
  },
  mobileEmptyBox:{
    height: "35vh"
  },

  //NoItemTemplate
  mobileNoItemBox:{
    textAlign: "center",
  },

  //TextMiddleComponent
  mobileTitleBox: {
    margin: "10px",
    marginBottom:"50px"
  },
  mobileTitleText: {
    fontWeight: "bold",
    fontSize: "21px",
  },
  mobileSubtitleText: {
    color: "rgba(165, 147, 224, 1)",
    fontSize: "15px",
  },
}));

export default function SimilarItemPage() {
  const classes = useStyles();

  return (
    <Mobile>
      <Box className={classes.mobileContainer}>
        <Navbar />
        <Box className={classes.mobileEmptyBox}/>
        <NoItemTemplate/>
      </Box>
    </Mobile>
  );
}

function NoItemTemplate() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.mobileNoItemBox}>
        <TextMiddleComponent />
        <Buttons text="추천상품 보러가기"></Buttons>
      </Box>
    </React.Fragment>
  );
}

function TextMiddleComponent() {
  const classes = useStyles();
  const title = "최근 본 상품이 없어요!";
  const subtitle = "";
  return (
    <Box>
      <Box className={classes.mobileTitleBox}>
        <Typography className={classes.mobileTitleText}>{title}</Typography>
      </Box>
      <Box className={classes.mobileTitleBox}>
        <Typography className={classes.mobileSubtitleText}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
