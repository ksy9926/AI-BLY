import React from "react";
import { Grid, Box } from "@material-ui/core";
import CustomFavoriteIcon from "components/MainPage/FavoriteIcon";
import useStyles from "styles/MainPageStyle";
import { useHistory } from "react-router-dom";

export default function ItemLarge({ idx, data, recommend }) {
  const classes = useStyles();
  const history = useHistory();

  if (recommend === true && idx % 13 === 0 && idx > 8) {
    return (
      <Grid className={classes.mobileGridBox} item xs={6}>
        <Box className={classes.mobileEmptyItemBox}>
          <Box className={classes.mobileEmptyInfoBox}>
            <Box>마음에 드시는 상품을</Box>
            <Box>아직 찾으시지 못하셨나요?</Box>

            <Box>내 스타일을 등록해서</Box>
            <Box>관련 추천상품 받아보세요</Box>
          </Box>
          <Box className={classes.mobileEmptyImageBox}>
            <Box
              className={classes.mobileEmtpyButton}
              onClick={() => {
                history.push("/style");
              }}
            >
              <Box className={classes.mobileEmptyButtonText}>
                스타일 선택하기
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
