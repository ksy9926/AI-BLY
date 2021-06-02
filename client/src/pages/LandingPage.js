import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grow, Grid, Box, Button, Checkbox, Backdrop } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import useStyles from "../styles/LandingPageStyle";
import { Mobile } from "../MediaQuery";
import TextTitleComponent from "../components/ImageUploadPage/TextTitleComponent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function LandingPage() {
  const classes = useStyles();
  const [select, setSelect] = useState(0);
  const [state, setState] = useState({});
  const [checked, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const checkList = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16", "a17", "a18"];
  const [grow, setGrow] = useState(true)
  const handleChange = (event) => {
    const newChecked = !event.target.checked;
    setChecked({ ...checked, [event.target.id]: newChecked });
    newChecked ? setSelect(select + 1) : setSelect(select - 1);
  };

  const images = checkList.map((check, idx) => (
    <Grid className={classes.mobileImageGrid} item xs={4}>
      <Grow in={grow} >
      <Grid
        container
        className={
          // checked[idx]
          //   ? classes.mobileImageActiveButton
          classes.mobileImageButton
        }
      >
        <img
          className={
            checked[idx] ? classes.mobileImageActiveButton : classes.mobileImage
          }
          src={`images/${check}.png`}
          alt="none"
          id={idx}
          name={check}
          checked={checked[idx]}
          onClick={handleChange}
        />
      </Grid>
      </Grow>

    </Grid>
  ));

  return (
    <Mobile className={classes.mobileRoot}>
      <Box className={classes.mobileContainer}>
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
        <TextTitleComponent
          title="추천받고 싶은 스타일을 3개 이상 고르면 취향에 맞는 옷들을 추천해드릴게요 !"
          subtitle="많이 고르실수록 추천이 더욱더 정확해져요."
        />
      </Box>
      <Grid container>{images}</Grid>
    </Mobile>
  );
}

export default LandingPage;
