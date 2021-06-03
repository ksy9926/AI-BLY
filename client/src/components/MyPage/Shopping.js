import { Box } from "@material-ui/core";
import useStyles from "styles/MyPageStyle";
import { Link } from "react-router-dom";

function Shopping() {
  const classes = useStyles();

  return (
    <Box className="mobileGlassBox">
      <Box item className={classes.mobileShoppingBox}>
        <Box className={classes.mobileTitleText}>쇼핑</Box>
        <Box
          component={Link}
          to={"/rcntitem"}
          className={classes.mobileContentText}
        >
          최근 본 상품
        </Box>
        <Box
          component={Link}
          to={"/likeitem"}
          className={classes.mobileContentText}
        >
          찜한 상품
        </Box>
      </Box>
    </Box>
  );
}

export default Shopping;
