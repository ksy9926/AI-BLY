import { Grid, Box } from "@material-ui/core";
import FavoriteIcon from './FavoriteIcon';
import useStyles from '../../styles/MainPageStyle';
import Price from './Price';

export default function Info({idx}){
    const classes = useStyles();
    const brand = "노드스트롬";
    const description = "Zella Live In High Walst Pocket 7/8 Leggings";

    return (
        <Grid className={classes.mobileRecommendImageBox} item xs={6}>
            <img className={classes.mobileImage} src="images/clothes.png" alt="옷"></img>
            <Price />
            <Box className={classes.mobileBrandFavoriteBox}>
                <Box className={classes.mobileBrandName}>{brand}</Box>
                <FavoriteIcon idx={idx.toString()} />
            </Box>
            <Box className={classes.mobileShortDescription}>{description}</Box>
        </Grid>
    )
}