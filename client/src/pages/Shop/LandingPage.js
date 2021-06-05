import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/LandingPageStyle";
import { Mobile } from "MediaQuery";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextTitleComponent from "components/ImageUploadPage/TextTitleComponent";

function LandingPage() {
  const classes = useStyles();
  const [select, setSelect] = useState(0);
  const [checked, setChecked] = useState([]);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    (async function () {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/stylelist/`)
        .then((response) => {
          setCheckList(response.data);
          console.log(response.data)
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
            checked[idx] ? { border: "2px solid rgba(255, 255, 255, 0.9)" } : null
          }
          src= {`${process.env.REACT_APP_API_URL}${check.style_img}`}
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
      <Box>
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
        <Box className={classes.mobileGlassBox}>
        <TextTitleComponent
              title="추천받고 싶은 스타일을 3개 이상 골라주세요"
                subtitle= "많이 고르실수록 추천이 더욱더 정확해져요"
            />
          <Grid container>
            {images}
          </Grid>
        </Box>
      </Box>
    </Mobile>
  );
}

export default LandingPage;
