import React, { useState, useEffect } from 'react';
import { Grid, Box, Button, Checkbox } from "@material-ui/core";
import StarsIcon from '@material-ui/icons/Stars';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from '../styles/MainPageStyle';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '../components/Loader';
import { Mobile } from "../MediaQuery";
import Navbar from "../components/Navbar";


function MainPage() {
  const classes = useStyles();
  const [favorite, setFavorite] = useState({});
  const [activeButton, setActiveButton] = useState(0);
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(1);

  const categories = ["전체", "상의", "하의", "드레스", "스커트", "팬츠", "자켓"].map((category, idx) => (
    activeButton===idx ?
    <Button onClick={()=>setActiveButton(idx)} className={classes.mobileCategoryActiveButton} key={idx}>{category}</Button> :
    <Button onClick={()=>setActiveButton(idx)} className={classes.mobileCategoryButton} key={idx}>{category}</Button>
  ))

  const handleChange = (event) => {
    setFavorite({ ...favorite, [event.target.name]: event.target.checked });
  };

  const favoriteIcon = (idx) => (
    <Checkbox
      style={{padding:"0"}}
      checked={favorite.idx}
      onChange={handleChange}
      icon={<StarsIcon style={{color: "#E0E3DA"}}/>}
      checkedIcon={<StarsIcon style={{color: "#A593E0"}}/>}
      name={idx}
    />
  )

  

  const fetchImages = (cnt) => {
    setImages([...images, cnt, cnt+1, cnt+2, cnt+3]);
    setCount(cnt+4);
  }

  useEffect(() => {
    fetchImages(count);
  }, [])

  const items = images.map(idx=>(
    <Grid className={classes.mobileRecommendImageBox} key={idx} item xs={6}>
      <Grid container className={classes.mobileRecommendInfoBox}>
        <img className={classes.mobileImage} src="images/clothes.png" alt="옷"></img>
      </Grid>
      <Box className={classes.mobileDiscountPriceBox}>
        <Box className={classes.mobileDiscount}>33%</Box>
        <Box className={classes.mobilePrice}>57,300</Box>
      </Box>
      <Box className={classes.mobileBrandFavoriteBox}>
        <Box className={classes.mobileBrandName}>노드스트롬</Box>
        <Box>
          {favoriteIcon(idx.toString())}
        </Box>
      </Box>
      <Box className={classes.mobileShortDescription}>
        Zella Live In High Walst Pocket 7/8 Leggings
      </Box>
    </Grid>
  ))

  return (
    <Mobile>
      <Navbar />
    <Grid className={classes.mobileRoot}>  
      <Grid className={classes.mobileRecommendMessageBox}>
        <Box className={classes.mobileRecommendMessage}>당신(닉네임) 만을 위한 추천 아이템 :)</Box>
      </Grid>
      <Grid container className={classes.mobileRecommendInfoBox}>
        <Grid className={classes.mobileRecommendImageBox} item xs={6}>
          <img className={classes.mobileImage} src="images/clothes.png" alt="clothes"/>
        </Grid>
        <Grid className={classes.mobileRecommendTextBox} item xs={6}>
          <Box className={classes.mobileBrandFavoriteBox}>
            <Box className={classes.mobileBrandName}>노드스트롬</Box>
            <Box>
              {favoriteIcon('0')}
            </Box>
          </Box>
          <Box className={classes.mobileDescription}>Zella Live In High Walst Pocket 7/8 Leggings</Box>
          <Box className={classes.mobileDiscountPriceBox}>
            <Box className={classes.mobileDiscount}>33%</Box>
            <Box className={classes.mobilePrice}>57,300</Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
      <Grid className={classes.mobileCategoryContainer}>
          {categories}
      </Grid>
    <Grid className={classes.mobileRoot}>
      <Grid container>
        <InfiniteScroll
          style={{display:"flex", flexWrap:"wrap"}}
          dataLength={images.length}
          next={()=>fetchImages(count)}
          hasMore={count < 27 ? true : false}
          loader={<Loader />}
          endMessage={<p>You have seen it all</p>}
        >
          {items}
        </InfiniteScroll>
      </Grid>
    </Grid>
    </Mobile>



  );
}

export default MainPage;