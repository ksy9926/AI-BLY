import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import useStyles from "styles/RecentItemPageStyle";
import Navbar from "components/common/Navbar";
import Infinite from "components/MainPage/Infinite";
import TextTitleComponent from "components/SimilarItemPage/TextTitleComponent";
import Category from "components/MainPage/Category";

export default function RecommendItemPage() {
  const classes = useStyles();
  const [dataList, setDataList] = useState([]);

  return (
    <Mobile>
      <Navbar />
      <TextTitleComponent title="''님을 위한 추천 아이템" number="3" />
      <Category />
      <Grid className={classes.mobileRoot}>
        <Grid container>
          <Infinite />
        </Grid>
      </Grid>
    </Mobile>
  );
}
