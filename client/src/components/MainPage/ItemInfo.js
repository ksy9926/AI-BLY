import React from "react";
import { Grid, Box } from "@material-ui/core";
import FavoriteIcon from "./FavoriteIcon";
import useStyles from "../../styles/MainPageStyle";

export default function ItemInfo({ idx, data }) {
  const classes = useStyles();

  return (
    <Grid className={classes.mobileItemImageGrid} item xs={6}>
      <Box className={classes.mobileItemImageBox}>
        <img
          className={classes.mobileItemImage}
          src={data["thumnail"]}
          alt="옷"
        ></img>
      </Box>
      <Box className={classes.mobileItemDiscountPriceBox}>
        <Box className={classes.mobileItemDiscount}>
          {data["discount_rate"]}%
        </Box>
        <Box className={classes.mobileItemPrice}>{data["price"]}$</Box>
      </Box>
      <Box className={classes.mobileItemBrandFavoriteBox}>
        <Box className={classes.mobileItemBrandName}>{data["brand"]}</Box>
        <FavoriteIcon idx={idx.toString()} />
      </Box>
      <Box className={classes.mobileItemShortDescription}>{data["name"]}</Box>
    </Grid>
  );
}
