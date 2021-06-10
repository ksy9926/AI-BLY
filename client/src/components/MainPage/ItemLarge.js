import React from "react";
import { Grid, Box } from "@material-ui/core";
import CustomFavoriteIcon from "components/MainPage/FavoriteIcon";
import useStyles from "styles/MainPageStyle";

export default function ItemLarge({ idx, data, recommend }) {
  const classes = useStyles();
  if (recommend === true && idx % 9 === 1) {
    return (
      <Grid className={classes.mobileGridBox} item xs={6}>
        <Box className={classes.mobileGlassItemBox}>
          <Box className={classes.mobileItemImageBox}>
            <img
              className={classes.mobileItemLgImage}
              src={data["thumnail"]}
              alt="옷"
            ></img>
            <Box className={classes.mobileFavIconBox}>
              <CustomFavoriteIcon
                idx={idx.toString()}
                product_id={data.id}
                data={data}
              />
            </Box>
          </Box>
          <Box className={classes.mobileItemInfoBox}>
            <Box className={classes.mobileItemBrandName}>
              <a href={data["url"]}>당신이 원하시는 상품을 찾지 못했습니까?</a>
            </Box>
            <Box className={classes.mobileItemShortDescription}>
              {data["name"]}
            </Box>
            <Box className={classes.mobileItemDiscountPriceBox}>
              <Box className={classes.mobileItemDiscount}>
                {data["discount_rate"]}% OFF
              </Box>
              <Box className={classes.mobileItemPrice}>
                $ {data["sale_price"]}
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  } else {
    return (
      <Grid className={classes.mobileGridBox} item xs={6}>
        <Box className={classes.mobileGlassItemBox}>
          <Box className={classes.mobileItemImageBox}>
            <img
              className={classes.mobileItemLgImage}
              src={data["thumnail"]}
              alt="옷"
            ></img>
            <Box className={classes.mobileFavIconBox}>
              <CustomFavoriteIcon
                idx={idx.toString()}
                product_id={data.id}
                data={data}
              />
            </Box>
          </Box>
          <Box className={classes.mobileItemInfoBox}>
            <Box className={classes.mobileItemBrandName}>
              <a href={data["url"]}>{data["brand"]}</a>
            </Box>
            <Box className={classes.mobileItemShortDescription}>
              {data["name"]}
            </Box>
            <Box className={classes.mobileItemDiscountPriceBox}>
              <Box className={classes.mobileItemDiscount}>
                {data["discount_rate"]}% OFF
              </Box>
              <Box className={classes.mobileItemPrice}>
                $ {data["sale_price"]}
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  }
}
