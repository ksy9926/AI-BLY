import { Box } from "@material-ui/core";
import useStyles from "../../styles/MyPageStyle";
import { Link } from "react-router-dom";

function Shopping() {
  const classes = useStyles();

  return (
    <Box item className={classes.mobileShoppingBox}>
      <Box className={classes.mobileBoldText}>쇼핑</Box>
      <Link to="/rcntitem">
      <Box>최근 본 상품</Box>
      </Link>
      <Link to="/likeitem">
      <Box>찜한 상품</Box>
      </Link>

    </Box>
  );
}

export default Shopping;
