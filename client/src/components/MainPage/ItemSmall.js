import { Box } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";
import CustomFavoriteIcon from "components/MainPage/FavoriteIcon";

export default function ItemSmall({ idx, data }) {
  const classes = useStyles();
  return (
<<<<<<< HEAD
    // <Box>
    //   <Box className={classes.mobileGlassSmallItemBox}>
    //     <Box className={classes.mobileSmallItemImageBox}>
    //       <img
    //         className={classes.mobileItemSmallImage}
    //         src=""
    //         alt=""
    //       />

    //     </Box>
    //     <Box className={classes.mobileItemSmInfoBox}>
    //       <Box className={classes.mobileItemSmBrandName}>
    //         {/* <a href={data["url"]}>{data["brand"]}</a> */}
    //       </Box>
    //       <Box className={classes.mobileItemSmShortDescription}>
    //         {/* {data["name"]} */}
    //       </Box>
    //       <Box className={classes.mobileItemSmDiscountPriceBox}>
    //         <Box className={classes.mobileItemSmDiscount}>
    //           {/* {data["discount_rate"]}%  */}
    //           </Box>
    //         <Box className={classes.mobileItemSmPrice}>
    //           {/* $ {data["sale_price"]} */}
    //           </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
        <Box>
      <Box className={classes.mobileGlassSmallItemBox}>
        <Box className={classes.mobileSmallItemImageBox}>
          <img
            className={classes.mobileItemSmallImage}
            src={data["thumnail"]}
            alt={data["name"]}
          />

=======
    <Box>
      <Box className={classes.mobileGlassSmallItemBox}>
        <Box className={classes.mobileSmallItemImageBox}>
          <img className={classes.mobileItemSmallImage} src={data["thumnail"]} alt="옷" />
>>>>>>> 169bb6bce363ed3f559ee236aaabb4fb1f19d9e0
        </Box>
        <Box className={classes.mobileItemSmInfoBox}>
          <Box className={classes.mobileItemSmBrandName}>
            <a href={data["url"]}>{data["brand"]}</a>
          </Box>
<<<<<<< HEAD
          <Box className={classes.mobileItemSmShortDescription}>
            {data["name"]}
          </Box>
          <Box className={classes.mobileItemSmDiscountPriceBox}>
            <Box className={classes.mobileItemSmDiscount}>
              {data["discount_rate"]}% 
              </Box>
            <Box className={classes.mobileItemSmPrice}>
              $ {data["sale_price"]}
              </Box>
=======
          <Box className={classes.mobileItemSmShortDescription}>{data["name"]}</Box>
          <Box className={classes.mobileItemSmDiscountPriceBox}>
            <Box className={classes.mobileItemSmDiscount}>{data["discount_rate"]}%</Box>
            <Box className={classes.mobileItemSmPrice}>$ {data["sale_price"]}</Box>
>>>>>>> 169bb6bce363ed3f559ee236aaabb4fb1f19d9e0
          </Box>
        </Box>
      </Box>
    </Box>
<<<<<<< HEAD

=======
>>>>>>> 169bb6bce363ed3f559ee236aaabb4fb1f19d9e0
  );
}
