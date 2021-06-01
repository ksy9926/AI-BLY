import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Box, Button, Checkbox } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import useStyles from "styles/LandingPageStyle";
import { Mobile } from "MediaQuery";
import TextTitleComponent from "components/ImageUploadPage/TextTitleComponent";
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
  ]);
  const checkList = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"];

  const handleChange = (event) => {
    const newChecked = !event.target.checked;
    setChecked({ ...checked, [event.target.id]: newChecked });
    newChecked ? setSelect(select + 1) : setSelect(select - 1);
  };

  const images = checkList.map((check, idx) => (
    <Grid className={classes.mobileImageGrid} item xs={4}>
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
    </Grid>
  ));

  return (
    <Mobile>
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
