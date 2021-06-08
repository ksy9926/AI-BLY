import React from "react";
import { Box } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import useStyles from "styles/TutorialPageStyle";
import logoImage from "logo.png";
import { Fade, Grow } from "@material-ui/core";

export default function TutorialPage() {
  const classes = useStyles();
  const grow = true;

  if (grow === true) {
    return (
      <Mobile>
        <Box className={classes.mobileFirstPageBox}>
          {/* <Grow in={grow}> */}
          <Box>
            <img
              className={classes.mobileLogoimage}
              src={logoImage}
              alt="logo"
            />
          </Box>
          <Box>
            <h3 className={classes.mobileSubTitle}>내 손안의 AI 해외 직구</h3>
          </Box>
          {/* </Grow> */}
        </Box>
      </Mobile>
    );
  } else {
    return (
      <Mobile>
        <Box className={classes.mobileFirstPageBox}>
          {/* <Grow in={grow}> */}
          <Box>
            <img
              className={classes.mobileLogoimage}
              src={logoImage}
              alt="logo"
            />
          </Box>
          <Box>
            <h3 className={classes.mobileSubTitle}>내 손안의 AI 해외 직구</h3>
          </Box>
          {/* </Grow> */}
        </Box>
      </Mobile>
    );
  }
}
