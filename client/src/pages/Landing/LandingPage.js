import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import useStyles from "styles/TutorialPageStyle";
import logoImage from "logo.png";
import Buttons from "components/common/Buttons";
import { useHistory } from "react-router-dom";

export default function LandingPage() {
  const classes = useStyles();
  const grow = true;
  const history = useHistory();
  if (localStorage.getItem("jwt") === null) {
    history.push("/main");
  }

  return (
    <Mobile>
      <Grid container className={classes.mobilecontainer}>
        <Grid item className={classes.mobileGrid}>
          <Box className={classes.mobileImageBox}>
          <img className={classes.mobileLogoimage} src={logoImage} alt="logo" />
          <Box>
          <h3 className={classes.mobileSubTitle}>내 손안의 AI 해외 직구</h3>
        </Box>
          </Box>
        </Grid>
        <Grid item className={classes.mobileButtonGrid}>
          <Buttons variant="contained" text="알아보기" url="/tutorial" color="white" />
          <Box className={classes.mobileLinkBox}>
                  <a className={classes.mobileLinkText}href="/main">바로 쇼핑하기</a>
                </Box>
        </Grid>
      </Grid>
      <Box className={classes.mobileFirstPageBox}>

      </Box>
    </Mobile>
  );
}
