import { useEffect, useState } from "react";
import axios from "axios";

import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "styles/MyPageStyle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Buttons from "components/common/Buttons";

function StyleBook() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [imageData, setImageData] = useState([]);
  const [imageList, setImageList] = useState(null);
  const [temp, setTemp] = useState([]);

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
          if (response.data.length < 3) {
            for (let i = 0; i < response.data.length; i++) {
              setTemp([...temp, i]);
            }
          } else {
            setTemp([0, 1, 2]);
          }
          setImageData(response.data);
        }
      });
  }, []);

  useEffect(() => {
    if (imageData && imageData.length) {
      setImageList(
        <Grid container className={classes.mobileStyleBookImageBox}>
          {temp.map((idx) => (
            <Grid key={idx} className={classes.mobileStyleBookPreviewBox} item xs={4}>
              <img
                className={classes.mobileImage}
                src={
                  imageData[idx].dress_img.slice(0, 74) +
                  ":8000" +
                  imageData[idx].dress_img.slice(74)
                }
                alt="clothes"
                id={idx}
              />
            </Grid>
          ))}
        </Grid>,
      );
    } else {
      setImageList(
        <Box className={classes.mobileNoClosetBox}>
          <Box className={classes.mobileNoClosetTextBox}>
            <span>아직 등록하신 이미지가 없어요.</span>
          </Box>
          <Box className={classes.mobileButtonBox} onClick={() => {}}>
            <Buttons variant="contained" text="사진 추가하기" url="/closet" />
          </Box>
        </Box>,
      );
    }
  }, [imageData]);

  return (
    <Box className={classes.mobileGlassBox}>
      <Box className={classes.mobileTitleBox}>
        <Box className={classes.mobileStyleBookText}>{title}</Box>
        <Link to="/closet">
          <Box className={classes.mobileStyleBookText}>
            더보기 <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
          </Box>
        </Link>
      </Box>

      {imageList}
    </Box>
  );
}

export default StyleBook;
