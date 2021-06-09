import React from "react";
import { Grid, Box } from "@material-ui/core";
import CustomFavoriteIcon from "components/MainPage/FavoriteIcon";
import useStyles from "styles/MainPageStyle";

export default function ItemLarge({ idx, data }) {
  const classes = useStyles();

  return (
    <Grid className={classes.mobileGridBox} item xs={6}>
      <Box className={classes.mobileGlassItemBox}>
        <Box className={classes.mobileItemImageBox}>
          <img className={classes.mobileItemLgImage} src={data["thumnail"]} alt="옷"></img>
          <Box className={classes.mobileFavIconBox}>
            <CustomFavoriteIcon idx={idx.toString()} />
          </Box>
        </Box>
        <Box className={classes.mobileItemInfoBox}>
          <Box className={classes.mobileItemBrandName}>
            <a href={data["url"]}>{data["brand"]}</a>
          </Box>
          <Box className={classes.mobileItemShortDescription}>{data["name"]}</Box>
          <Box className={classes.mobileItemDiscountPriceBox}>
            <Box className={classes.mobileItemDiscount}>{data["discount_rate"]}% OFF</Box>
            <Box className={classes.mobileItemPrice}>{data["sale_price"]}$</Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
