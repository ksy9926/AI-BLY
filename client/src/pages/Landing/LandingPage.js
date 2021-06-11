import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "MediaQuery";
import useStyles from "styles/TutorialPageStyle";
import logoImage from "logo.png";
import Buttons from "components/common/Buttons";
import { useHistory } from "react-router-dom";
// import video from "background.mov";

export default function LandingPage() {
  const classes = useStyles();
  const grow = true;
  const history = useHistory();
  if (localStorage.getItem("jwt") !== null) {
    history.push("/main");
  }

  return (
<Box>
<Tablet><Box className={classes.noapplyGrid}>화면크기를 줄여서 이용해주세요 :)</Box></Tablet>
      <PC><Box className={classes.noapplyGrid}>화면크기를 줄여서 이용해주세요 :)</Box></PC>
      <PCwide><Box className={classes.noapplyGrid}>화면크기를 줄여서 이용해주세요 :)</Box></PCwide>

  <Mobile>
        <Grid container className={classes.mobilecontainer}>
          {/* <video autoplay="autoplay" loop="loop" muted className={classes.mobileVideo}  id="backgroundVideo">
    <source src={video} type="video/mp4"/>
  </video> */}
          <Grid item className={classes.mobileGrid}>
            <Box className={classes.mobileImageBox}>
              <img
                className={classes.mobileLogoimage}
                src={logoImage}
                alt="logo"
              />
              <Box>
                <h3 className={classes.mobileSubTitle}>
                  내 손안의 AI 해외 직구
                </h3>
              </Box>
            </Box>
          </Grid>
          {/* <Grid item className={classes.mobileDescription1}>
      <Box className={classes.mobileDescriptionText}>해외직구를 하고 싶은데 너무 불편하고 귀찮다면?</Box>
    </Grid> */}
          <Grid item className={classes.mobileDescription2}>
            <Box className={classes.mobileDescriptionSubText}>
              인공지능을 통해 이미지를 분석하여,
            </Box>
            <Box className={classes.mobileDescriptionSubText}>
              {" "}
              해외 직구사이트에서 상품을 찾아드려요!
            </Box>
          </Grid>
          <Grid item className={classes.mobileButtonGrid}>
            <Button
              className={classes.mobileBtn}
              variant="contained"
              href="tutorial"
            >
              알아보기
            </Button>
            <Box className={classes.mobileLinkBox}>
              <Button
                className={classes.mobileBtn2}
                variant="contained"
                href="main"
              >
                바로 쇼핑하기
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.mobileFirstPageBox}></Box>
      </Mobile>
</Box>
      
  );
}
