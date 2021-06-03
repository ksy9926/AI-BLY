import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";
import { Loader } from "components/common/Loader";
import Infinite from "components/common/Infinite";
import Category from "components/MainPage/Category";

export default function ProductBox({info, title, navbar, count}) {
  const classes = useStyles();

  // 메인페이지 접속시 모든 아이템 출력
  return (
    <Grid className="mobileGlassBox">
      <Box className={classes.mobileRecommendMessageBox}>
        <Box className={classes.mobileRecommendMessage}>{title}</Box>
      </Box>
      {navbar === true ? <Category /> : <Box/> }
      {info && info.length ? <Infinite info={info} /> : <Loader />}
    </Grid>
  );
}
