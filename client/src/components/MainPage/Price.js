import { Box } from "@material-ui/core";
import useStyles from '../../styles/MainPageStyle';

export default function Price(){
    const classes = useStyles();
    const discount = "33%";
    const price = "57,300";

    return(
        <Box className={classes.mobileDiscountPriceBox}>
            <Box className={classes.mobileDiscount}>{discount}</Box>
            <Box className={classes.mobilePrice}>{price}</Box>
        </Box>
        )
}
