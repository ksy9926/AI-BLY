import { Grid } from "@material-ui/core";
import useStyles from '../../styles/MainPageStyle';

export default function Image() {
    const classes = useStyles();
    
    return (
        <Grid className={classes.mobileRecommendImageBox} item xs={6}>
            <img className={classes.mobileImage} src="images/clothes.png" alt="clothes"/>
        </Grid>
    )
}
