import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@material-ui/core";
import { Mobile } from "../MediaQuery";
import Navbar from "../components/Navbar";
import { useStyles } from "../styles/ImageUploadPageStyles";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";

export default function ImageUploadPage({ match }) {
  const classes = useStyles();
  const user_id = match.params.user_id;
  const [imageData, setImageData] = useState(["1", "2", "3", "4"]);
  const [imageList, setImageList] = useState(null);

  // User Image 리스트 axios get
  // url을 통한 다른 사용자 접근 통제 필요
  useEffect(() => {
    function GetImageData() {
      axios
        .get(`${process.env.REACT_APP_API_URL}/imgupload/${user_id}`)
        .then((response) => {
          setImageData(response.data.result);
        });
    }
    GetImageData();
  }, [user_id]);

  // User Image 데이터 기준으로 컴포넌트 생성
  useEffect(() => {
    if (imageData) {
      setImageList(
        imageData.map((idx) => (
          <UploadImageComponent
            src="http://fpost.co.kr/board/data/editor/1902/af6295e29b76e6d52de0accea62b4e4b_1550713144_4274.jpg"
            inputtype="image"
            user_id={user_id}
          />
        ))
      );
    }
  }, [imageData]);

  return (
    <Mobile>
      <Box className={classes.mobileContainer}>
        <Navbar />
        <TextTitleComponent />
      </Box>
      <Grid container>
        {imageList}
        <UploadImageComponent inputtype="empty" user_id={user_id} />
      </Grid>
    </Mobile>
  );
}

function UploadImageComponent({ src, inputtype, user_id }) {
  const classes = useStyles();
  const [image, setImage] = useState();

  function PostImage() {
    const formData = new FormData();
    axios.post(
      `${process.env.REACT_APP_API_URL}/imgupload/${user_id}`,
      formData,
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      }
    );
  }

  function DeleteImage() {
    axios.delete(`${process.env.REACT_APP_API_URL}/imgupload/${user_id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  }

  function onChangeImage(e) {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);

    const formData = new FormData();
    formData.append("file", image);
    // 서버의 upload API 호출
    PostImage();
  }

  if (inputtype !== "empty") {
    return (
      <Grid
        className={classes.mobileClosetImageGrid}
        inputtype={inputtype}
        onClick={() => {
          console.log("popup delete modal");
          // DeleteImage()
        }}
        item
        xs={4}
      >
        <Grid container className={classes.mobileEmptyImageBox}>
          <img className={classes.mobileImage} src={src} alt="none" />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        className={classes.mobileClosetImageGrid}
        inputtype={inputtype}
        item
        xs={4}
        onClick={() => {
          console.log("addimage");
          document.all.file.click();
        }}
      >
        <Grid
          container
          inputtype={inputtype}
          className={classes.mobileEmptyImageBox}
        >
          <Box>
            <form
              action="upload"
              id="uploadForm"
              method="post"
              enctype="multipart/form-data"
            >
              <input
                type="file"
                name="file"
                id="file"
                className={classes.mobileInput}
                onChange={onChangeImage}
              />
            </form>
            <AddCircleOutlineRoundedIcon
              className={classes.mobileEmptyImageIcon}
            />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

function TextTitleComponent() {
  const classes = useStyles();
  const title =
    "클로젯에 이미지를 추가해주시면 AI 분석을 통해서 아이템을 추천해드려요.";
  const subtitle =
    "클릭하시면 사진 속 의상과 비슷한 상품을 모아서 볼 수 있어요.";
  return (
    <Box>
      <Box className={classes.mobileTitleBox}>
        <Typography className={classes.mobileTitleText}>{title}</Typography>
      </Box>
      <Box className={classes.mobileTitleBox}>
        <Typography className={classes.mobileSubtitleText}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
