import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import useStyles from "styles/MyPageStyle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function StyleBook() {
  const classes = useStyles();
  const title = "(닉네임)님의 옷장";
  const imagePath =
    "http://fpost.co.kr/board/data/editor/1902/af6295e29b76e6d52de0accea62b4e4b_1550713144_4274.jpg";

  function getInfo(e) {
    axios.get(`/closet/`, {
      headers: { Authorization: "JWT " + localStorage.getItem("jwt") },
    });
  }

  return (
    <Link to="/imgupload">
      <Box className={classes.mobileGlassBox}>
        <Box item className={classes.mobileStyleBookBox}>
          <Box className={classes.mobileStyleBookTextBox}>
            <Box className={classes.mobileStyleBookText}>{title}</Box>
            <Box className={classes.mobileStyleBookText}>
              더보기 <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
            </Box>
          </Box>
          <Grid container className={classes.mobileStyleBookImageBox}>
            <Grid className={classes.mobileMicroPaddingBox} item xs={4}>
              <img
                className={classes.mobileImage}
                src={imagePath}
                alt="clothes"
              />
            </Grid>
            <Grid className={classes.mobileMicroPaddingBox} item xs={4}>
              <img
                className={classes.mobileImage}
                src={imagePath}
                alt="clothes"
              />
            </Grid>
            <Grid className={classes.mobileMicroPaddingBox} item xs={4}>
              <img
                className={classes.mobileImage}
                src={imagePath}
                alt="clothes"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Link>
  );
}

export default StyleBook;
