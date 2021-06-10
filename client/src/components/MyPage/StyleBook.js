import { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "styles/MyPageStyle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function StyleBook() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const imagePath =
    "http://fpost.co.kr/board/data/editor/1902/af6295e29b76e6d52de0accea62b4e4b_1550713144_4274.jpg";

  useEffect(() => {
    setTitle(localStorage.getItem("username") + "님의 옷장");
  });

  return (
    <Box className={classes.mobileGlassBox}>
      <Box item className={classes.mobileStyleBookBox}>
        <Box className={classes.mobileStyleBookTextBox}>
          <Box className={classes.mobileStyleBookText}>{title}</Box>
          <Link to="/closet">
            <Box className={classes.mobileStyleBookText}>
              더보기 <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
            </Box>
          </Link>
        </Box>
        <Grid container className={classes.mobileStyleBookImageBox}>
          <Grid className={classes.mobileMicroPaddingBox} item xs={4}>
            <img className={classes.mobileImage} src={imagePath} alt="clothes" />
          </Grid>
          <Grid className={classes.mobileMicroPaddingBox} item xs={4}>
            <img className={classes.mobileImage} src={imagePath} alt="clothes" />
          </Grid>
          <Grid className={classes.mobileMicroPaddingBox} item xs={4}>
            <img className={classes.mobileImage} src={imagePath} alt="clothes" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default StyleBook;
