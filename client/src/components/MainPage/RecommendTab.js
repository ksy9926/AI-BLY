import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";
import ItemSmall from "components/MainPage/ItemSmall";
import InfiniteHorizontal from "components/common/InfiniteHorizontal";

export default function RecommendTab({info, title,}) {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(1);

  const fetchImages = (cnt) => {
    setImages([...images, cnt, cnt + 1, cnt + 2, cnt + 3]);
    setCount(cnt + 4);
  };

  useEffect(() => {
    fetchImages(count);
  }, []);

  return (
    <Box className="mobileGlassBox">
      <Box className={classes.mobileRecommendMessageBox}>
        <Box className={classes.mobileRecommendMessage}>{title}</Box>
      </Box>
      <Box className={classes.mobileRecommendContainer}>
        <InfiniteHorizontal info={[1,1,1,1,1,1,1,1,1,1,1]}/>
      </Box>
    </Box>
  );
}
