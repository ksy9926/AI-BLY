import React, { useState } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/TutorialPageStyle";
import { Mobile } from "MediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

function TutorialPage() {
  const classes = useStyles();
  const tutorialSteps = [
    {
      label: "클로젯 기능이란",
      text: "사용자가 등록하신 의류 이미지를 분석하여 \n 해당 상품을 해외 직구 사이트에서 찾아드려요",
      imgPath:
        "https://i0.wp.com/i.pinimg.com/originals/15/d4/90/15d4903ffd54f3ad76007ffae8722fc5.png?w=1140&ssl=1",
    },
    {
      label: "클로젯 이용준비",
      text: "자신의 클로젯에 이미지를 등록하기 위해 \n 먼저 회원가입을 해주시기 바랍니다",
      imgPath:
        "https://i0.wp.com/i.pinimg.com/originals/15/d4/90/15d4903ffd54f3ad76007ffae8722fc5.png?w=1140&ssl=1",
    },
    {
      label: "클로젯에 이미지 등록하기",
      text: "나의 클로젯에 있는 이미지 추가 버튼을 누른 후\n 찾아보고 싶은 의류의 이미지를 등록해주세요",
      imgPath:
        "https://i0.wp.com/i.pinimg.com/originals/15/d4/90/15d4903ffd54f3ad76007ffae8722fc5.png?w=1140&ssl=1",
    },
    {
      label: "클로젯에서 상품 찾기",
      text: "등록하신 이미지를 클릭하시면\n  AI로 이미지를 분석하여 비슷한 상품을 찾아드려요",
      imgPath:
        "https://i0.wp.com/i.pinimg.com/originals/15/d4/90/15d4903ffd54f3ad76007ffae8722fc5.png?w=1140&ssl=1",
    },
    {
      label: "나의 스타일 등록",
      text: "사용자님이 선택하신 스타일을 통해서 \n 혹시라도 마음에 드실 상품들을 추천해드려요.",
      imgPath:
        "https://i0.wp.com/i.pinimg.com/originals/15/d4/90/15d4903ffd54f3ad76007ffae8722fc5.png?w=1140&ssl=1",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Mobile>
      <Box style={{ overflowX: "hidden" }}>
        <Box>
          <AppBar className={classes.mobileAppBar} elevation={0}>
            <Toolbar>
              <Box className={classes.mobileGrow} />
              {activeStep === 4 ? (
                <a href="/style" className={classes.mobileNavbarSelect}>
                  시작하기
                </a>
              ) : (
                <a href="/style" className={classes.mobileNavbarSkip}>
                  건너뛰기
                </a>
              )}
            </Toolbar>
          </AppBar>
        </Box>
        <Box className={classes.mobileGlassOutBox}>
          <Box className={classes.mobileGlassInBox}>
            {tutorialSteps[activeStep].label}
          </Box>
          <Box className={classes.mobileGlassTextBox}>
            {tutorialSteps[activeStep].text.split("\n").map((line) => {
              return (
                <Box className={classes.mobileGlassSubText}>
                  {line}
                  <br />
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Grid
            container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div className={classes.root}>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {tutorialSteps.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <img
                        className={classes.mobileImg}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </SwipeableViews>
              <MobileStepper
                style={{ background: "transparent" }}
                steps={5}
                position="static"
                variant={null}
                activeStep={activeStep}
                nextButton={
                  <Button
                    style={{ position: "absolute", top: "33%", left: "-5%" }}
                    size="large"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    <KeyboardArrowLeft style={{ fontSize: "4rem" }} />
                  </Button>
                }
                backButton={
                  <Button
                    style={{ position: "absolute", top: "33%", right: "-5%" }}
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === 4}
                  >
                    <KeyboardArrowRight style={{ fontSize: "4rem" }} />
                  </Button>
                }
              />
            </div>
            {/* <ChevronLeftIcon
              style={{ fontSize: "6rem", position: "absolute", top: "33%", left: "-5%" }}
            />
            <Grid item xs={12}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://i0.wp.com/i.pinimg.com/originals/15/d4/90/15d4903ffd54f3ad76007ffae8722fc5.png?w=1140&ssl=1"
              ></img>
            </Grid>
            <ChevronRightIcon
              style={{ fontSize: "6rem", position: "absolute", top: "33%", right: "-5%" }}
            /> */}
          </Grid>
        </Box>
      </Box>
    </Mobile>
  );
}

export default TutorialPage;
