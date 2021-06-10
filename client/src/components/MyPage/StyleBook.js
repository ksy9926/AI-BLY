import { useEffect, useState } from "react";
import axios from "axios";

import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "styles/MyPageStyle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function StyleBook() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [imageData, setImageData] = useState([]);
  const [imageList, setImageList] = useState(null);
  const imagePath =
    "http://fpost.co.kr/board/data/editor/1902/af6295e29b76e6d52de0accea62b4e4b_1550713144_4274.jpg";

  useEffect(() => {
    setTitle(localStorage.getItem("username") + "님의 옷장");
  });

  // get User Image 리스트
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/closet/`, {
        headers: { Authorization: "JWT " + localStorage.getItem("jwt") },
      })
      .then((response) => {
        if (response.data && response.data.length) {
          setImageData(response.data);
        }
      });
  }, []);

  useEffect(() => {
    if (imageData && imageData.length) {
      setImageList(
        [0, 1, 2].map((idx) => (
          <Grid className={classes.mobileStyleBookPreviewBox} item xs={4}>
            <img
              className={classes.mobileImage}
              src={
                imageData[idx].dress_img.slice(0, 74) + ":8000" + imageData[idx].dress_img.slice(74)
              }
              alt="clothes"
              id={idx}
            />
          </Grid>
        )),
      );
    }
  }, [imageData]);

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
          {imageList}
        </Grid>
      </Box>
    </Box>
  );
}

export default StyleBook;
