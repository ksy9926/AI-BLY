import { Box } from "@material-ui/core";
import useStyles from "styles/MyPageStyle";

function Information() {
  const classes = useStyles();

  return (
    <Box className={classes.mobileGlassBox}>
      <Box className={classes.mobileTitleBox}>
        <Box className={classes.mobileTitleText}>정보</Box>
      </Box>
      <Box className={classes.mobileContentBox}>
        <Box className={classes.mobileContentText}>앱 문의 건의</Box>
        <Box className={classes.mobileContentText}>공지사항</Box>
        <Box className={classes.mobileContentText}>버전 정보 0.0.1</Box>
      </Box>
    </Box>
  );
}

export default Information;
