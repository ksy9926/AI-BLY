import { Grid, Box } from "@material-ui/core";
import FavoriteIcon from "./FavoriteIcon";
import useStyles from "../../styles/MainPageStyle";

export default function ItemInfo({ idx }) {
  const classes = useStyles();
  const brand = "노드스트롬";
  const description = "Zella Live In High Walst Pocket 7/8 Leggings";
  const discount = "33%";
  const price = "57,300";

    return (
        <Grid className={classes.mobileItemImageGrid} item xs={6}>
            <Box className={classes.mobileItemImageBox}>
            <img className={classes.mobileItemImage} src="http://fpost.co.kr/board/data/editor/1902/af6295e29b76e6d52de0accea62b4e4b_1550713144_4274.jpg" alt="옷"></img>
            </Box>
            <Box className={classes.mobileItemDiscountPriceBox}>
            <Box className={classes.mobileItemDiscount}>{discount}</Box>
            <Box className={classes.mobileItemPrice}>{price}</Box>
            </Box>
            <Box className={classes.mobileItemBrandFavoriteBox}>
                <Box className={classes.mobileItemBrandName}>{brand}</Box>
                <FavoriteIcon idx={idx.toString()} />
            </Box>
            <Box className={classes.mobileItemShortDescription}>{description}</Box>
        </Grid>
    )
}