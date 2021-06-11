import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/StylePageStyle";
import { Mobile } from "MediaQuery";
import axios from "axios";
import TextTitleComponent from "components/ImageUploadPage/TextTitleComponent";
import { useHistory } from "react-router-dom";

export default function StylePage() {
  const classes = useStyles();
  const history = useHistory();
  const [select, setSelect] = useState([]);
  const [checked, setChecked] = useState([]);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    (async function () {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/stylelist/`).then((response) => {
        setCheckList(response.data);
        console.log("response.data: ", response.data);
      });
    })();
  }, []);



  // 이미지 선택 여부
  const onImageHandler = (event) => {
    const newChecked = !event.target.checked;
    setChecked({ ...checked, [event.target.id]: newChecked });
    newChecked
      ? setSelect([...select, event.target.id])
      : setSelect(select.filter((item) => item !== event.target.id));
  };

  function onStyleHandler(e) {
    const type = e.target.getAttribute("type");
    console.log(select);
    const style = [];
    if (type === "selected") {
      console.log(style);
      select.map((styleId) => style.push(checkList[styleId].feature));
      localStorage.setItem("styles", JSON.stringify(style));
      history.push({
        pathname: "/main",
      });
    } else {
      history.push({
        pathname: "/main",
      });
    }
  }

  const images = checkList.map((check, idx) => (
    <Grid className={classes.mobileSmallPaddingBox} item xs={4}>
      <Grid container className={classes.mobileImageButton}>
        <img
          className={classes.mobileImage}
          style={checked[check.id] ? { border: "2px solid rgba(255, 255, 255, 0.9)" } : null}
          src={process.env.REACT_APP_API_URL + check.style_img}
          alt="none"
          key={idx}
          id={check.id}
          name={check.feature}
          checked={checked[check.id]}
          onClick={onImageHandler}
        />
      </Grid>
    </Grid>
  ));

  return (
    <Mobile>
      <Box className={classes.mobileAppBar}>
        <Box className={classes.mobileBar}>
          <Box className={classes.mobileGrow} />
          {select.length >= 3 ? (
            <Box className={classes.mobileNavbarSelect} onClick={onStyleHandler} type="selected">
              선택하기
            </Box>
          ) : (
            <Box className={classes.mobileNavbarSkip} onClick={onStyleHandler} type="none">
              건너뛰기
            </Box>
          )}
        </Box>
      </Box>
      <Box className={classes.mobileGlassBox}>
        <TextTitleComponent title="추천받고 싶은 스타일을 3개 이상 골라주세요" />
        <Grid container>
          <Box className={classes.mobileSubTitleBox}>
            "많이 고르실수록 추천이 더욱더 정확해져요"
          </Box>
          {images}
        </Grid>
      </Box>
    </Mobile>
  );
}


