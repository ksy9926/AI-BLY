import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "../styles/MainPageStyle";
import { Mobile } from "../MediaQuery";
import Navbar from "../components/common/Navbar";
import Infinite from "../components/MainPage/Infinite";
import Category from "../components/MainPage/Category";
import RecommendTab from "../components/MainPage/RecommendTab";
import axios from "axios";

export default function MainPage() {
  const classes = useStyles();
  const title = "당신(닉네임) 만을 위한 추천 아이템 :)";

  useEffect(() => {
    function GetInfo() {
      console.log(localStorage.getItem("jwt"));
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/current/`, {
          headers: { Authorization: "JWT " + localStorage.getItem("jwt") },
        })
        .then((response) => {
          localStorage.setItem("user", response.data.pk);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("email", response.data.email);
        });
    }
    GetInfo();
  }, []);

  return (
    <Mobile>
      <Navbar />
      <Grid className={classes.mobileRoot}>
        <Box className={classes.mobileRecommendMessageBox}>
          <Box className={classes.mobileRecommendMessage}>
            <Box>당신(닉네임) 만을 위한 추천 아이템 전체보기</Box>
          </Box>
        </Box>
        <RecommendTab />
        <Box className={classes.mobileRecommendMessageBox}>
          <Box className={classes.mobileRecommendMessage}>해외직구 상품</Box>
        </Box>
      </Grid>
      <Category />
      <Grid
        className={classes.mobileRoot}
        style={{ background: "var(--color-bg-light)" }}
      >
        <Grid container>
          <Infinite />
        </Grid>
      </Grid>
    </Mobile>
  );
}
