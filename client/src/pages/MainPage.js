import React from "react";
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
    
  // function get(){
  // axios.get(`${process.env.REACT_APP_API_URL}/api/current/`, {
  
  //   headers: {
  //     Authorization: "JWT " + localStorage.getItem("jwt"),
  //   },
  // }).then(
  //   (res) => {
  //     console.log(res.data[0].fields.username);
  //  })  
  // }
  //  get()

  return (
    <Mobile>
      <Navbar />
      <Box className={classes.mobileRecommendMessageBox}>
        <Box className={classes.mobileRecommendMessage}>
          <Box>당신(닉네임) 만을 위한 추천 아이템 전체보기</Box>
        </Box>
      </Box>
      <RecommendTab />
      <Box className={classes.mobileRecommendMessageBox}>
        <Box className={classes.mobileRecommendMessage}>해외직구 상품</Box>
      </Box>
      <Category />
      <Grid className={classes.mobileRoot}>
        <Grid container>
          <Infinite />
        </Grid>
      </Grid>
    </Mobile>
  );
}
