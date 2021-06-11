import { Box } from "@material-ui/core";
import useStyles from "styles/MyPageStyle";
import { Link } from "react-router-dom";

export default function User() {
  const classes = useStyles();

  return (
    <Box className={classes.mobileGlassBox}>
      <Box item className={classes.mobileShoppingBox}>
      </Box>
    </Box>
  );
}

