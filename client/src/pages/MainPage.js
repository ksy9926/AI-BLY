import React from 'react';
import { Grid, Box } from "@material-ui/core";
import useStyles from '../styles/MainPageStyle';
import { Mobile } from "../MediaQuery";
import FavoriteIcon from '../components/MainPage/FavoriteIcon';
import Navbar from "../components/Navbar";
import Infinite from '../components/MainPage/Infinite';
import Category from '../components/MainPage/Category';
import Price from '../components/MainPage/Price';
import Image from '../components/MainPage/Image';

function MainPage() {
  const classes = useStyles();
  const title = "당신(닉네임) 만을 위한 추천 아이템 :)";
  const brand = "노드스트롬";
  const description = "Zella Live In High Walst Pocket 7/8 Leggings"

  return (
    <Mobile>
      <Navbar />
      <Grid className={classes.mobileRoot}>  
        <Grid className={classes.mobileRecommendMessageBox}>
          <Box className={classes.mobileRecommendMessage}>{title}</Box>
        </Grid>
        <Grid container className={classes.mobileRecommendInfoBox}>
          <Image />
          <Grid className={classes.mobileRecommendTextBox} item xs={6}>
            <Box className={classes.mobileBrandFavoriteBox}>
              <Box className={classes.mobileBrandName}>{brand}</Box>
              <FavoriteIcon idx={'0'} />
            </Box>
            <Box className={classes.mobileDescription}>{description}</Box>
            <Price />
          </Grid>
        </Grid>
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