import React from "react";
import { Mobile } from "MediaQuery";
import { Box } from "@material-ui/core";
import useStyles from "styles/AuthPageStyle";
import Navbar from "components/common/Navbar";
import Buttons from "components/common/Buttons";

function RegisterPage() {
  const classes = useStyles();
  const title =
    localStorage.getItem("username") + "님의 클로젯은 현재 비어있습니다.";
  const message = "등록하신 사진을 분석해서 아이템을 찾아드려요";

  return (
    <Mobile>
      <Navbar />
      <Box className={classes.mobileFullBox}>
        <Box className={classes.mobileGlassBox}>
          <Box className={classes.mobileAuthBox}>
            <Box>
              <Box className={classes.mobileTextBox}>
                <Box className={classes.mobileControlBox}></Box>
                <Box className={classes.mobileBoldText}>{title}</Box>
                <Box className={classes.mobileControlBox}></Box>
                <Box className={classes.mobileMessage}>{message}</Box>
              </Box>
              <Box className={classes.mobileButtonBox}>
                <Buttons
                  className={classes.mobileButton}
                  variant="contained"
                  text="지금 추가하기"
                  url="/mypage"
                />

                <Box className={classes.mobileLinkBox}>
                  <a href="/mypage">나중에 추가하기</a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Mobile>
  );
}

export default RegisterPage;
