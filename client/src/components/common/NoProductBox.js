import React from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";
import Buttons from "components/common/Buttons";

export default function ProductBox({ title, text, button }) {
  const classes = useStyles();
  // 메인페이지 접속시 모든 아이템 출력
  return (
    <Grid className={classes.mobileGlassBox}>
      <Box className={classes.mobileRecommendContainer}>
        <Box className={classes.mobileRecommendMessageBox}>
          <Box className={classes.mobileRecommendMessage}>{title}</Box>
        </Box>
        <Box className={classes.mobileNoProductBox}>
          <Box className={classes.mobileTextBox}>
            <span>{text}</span>
          </Box>
          <Box className={classes.mobileButtonBox} onClick={() => {}}>
            <Buttons
              className={classes.mobileButton}
              variant="contained"
              text={button}
              url="/closet"
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
