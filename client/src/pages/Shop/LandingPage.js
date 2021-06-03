import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/LandingPageStyle";
import { Mobile } from "MediaQuery";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

function LandingPage() {
  const classes = useStyles();
  const [select, setSelect] = useState(0);
  const [checked, setChecked] = useState([]);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    (async function () {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/style`)
        .then((response) => {
          setCheckList(response.data);
          console.log(response.data);
        });
    })();
  }, []);

  // 이미지 선택 여부
  const onImageHandler = (event) => {
    const newChecked = !event.target.checked;
    setChecked({ ...checked, [event.target.id]: newChecked });
    newChecked ? setSelect(select + 1) : setSelect(select - 1);
  };

  const images = checkList.map((check, idx) => (
    <Grid className={classes.mobileSmallPaddingBox} item xs={4}>
      <Grid container className={classes.mobileImageButton}>
        <img
          className={classes.mobileImage}
          style={
            checked[idx] ? { border: "4px solid var(--color-main-a)" } : null
          }
          src={check.style_img}
          alt="none"
          id={idx}
          name={check}
          checked={checked[idx]}
          onClick={onImageHandler}
        />
      </Grid>
    </Grid>
  ));

  return (
    <Mobile>
      <Box className="mobileRoot">
        <Box>
          <AppBar className={classes.mobileAppBar} elevation={0}>
            <Toolbar>
              <Box className={classes.mobileGrow} />
              {select >= 3 ? (
                <a href="/main" className={classes.mobileNavbarSelect}>
                  선택하기
                </a>
              ) : (
                <a href="/main" className={classes.mobileNavbarSkip}>
                  건너뛰기
                </a>
              )}
            </Toolbar>
          </AppBar>
        </Box>
        <Grid className={classes.mobileGlassBox} container>
          <Box className={classes.mobileRecommendMessageBox}>
            <Box className={classes.mobileRecommendMessage}>
              추천받고 싶은 스타일을 3개 이상 고르면 취향에 맞는 옷들을
              추천해드릴게요 !
            </Box>
          </Box>
          {images}
        </Grid>
      </Box>
    </Mobile>
  );
}

export default LandingPage;
