import React from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "../styles/MainPageStyle";
import { Mobile } from "../MediaQuery";
import Navbar from "../components/common/Navbar";
import Infinite from "../components/MainPage/Infinite";
import Category from "../components/MainPage/Category";
import RecommendTab from "../components/MainPage/RecommendTab";

function MainPage() {
  const classes = useStyles();
  const title = "당신(닉네임) 만을 위한 추천 아이템 :)";

  return (
    <Mobile>
      <Navbar />
      <Box className={classes.mobileRecommendMessageBox}>
        <Box className={classes.mobileRecommendMessage}>
          <Box>당신(닉네임) 만을 위한 추천 아이템 전체보기</Box>
        </Box>
      </Box>
      <RecommendTab />
      <Grid className={classes.mobileRecommendMessageBox}>
        <Box className={classes.mobileRecommendMessage}>해외직구 상품</Box>
      </Grid>
      <Category />
      <Grid className={classes.mobileRoot}>
        <Grid container>
          <Infinite />
        </Grid>
      </Grid>
    </Mobile>
  );
}

export default MainPage;
