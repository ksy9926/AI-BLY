import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";
import { Loader } from "components/common/Loader";
import Infinite from "components/common/Infinite";
import Category from "components/MainPage/Category";
import ScrollTop from "components/common/ScrollTop";

export default function ProductBox({ info, title, navbar, count }) {
  const classes = useStyles();
  console.log("info: ", info);

  // 메인페이지 접속시 모든 아이템 출력
  return (
    <Box className={classes.mobileGlassLargeBox}>
      <Box className={classes.mobileProductBoxTitleBox} id="product-box-title">
        <Box className={classes.mobileRecommendMessage}>{title}</Box>
        <Box className={classes.mobileProductBoxCountText}>{count}</Box>
      </Box>
      {navbar === true ? <Category /> : <Box />}
      {info && info.length ? <Infinite info={info} /> : <Loader />}
      {/* <ScrollTop point="#product-box-title"/> */}
    </Box>
  );
}
