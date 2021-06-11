import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Button } from "@material-ui/core";
import { useStyles } from "styles/ImageUploadPageStyles";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import Resizer from "react-image-file-resizer";
import { useHistory } from "react-router-dom";

import { useRecoilState } from "recoil";
import { featureState, uploadState } from "recoil/atoms";

export default function UploadImageComponent({ src, inputtype, id, pk }) {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const history = useHistory();
  const userId = localStorage.getItem("user");
  const [feature, setFeature] = useRecoilState(featureState);
  const [cover, setCover] = useState(false);
  const [upload, setUpload] = useRecoilState(uploadState);

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        416,
        416,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

  async function onChangeImage(e) {
    e.preventDefault();
    const originalfile = e.target.files[0];
    console.log(originalfile);

    try {
      const resizedImage = await resizeFile(originalfile);
      console.log(resizedImage);

      setImage(resizedImage);
    } catch (err) {
      console.log(err);
    }
  }

  // 업로드 이미지 백엔드 전송
  useEffect(() => {
    if (image !== null) {
      console.log(image, userId);

      const formData = new FormData();
      formData.append("dress_img", image);
      formData.append("user_id", userId);
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/closet/`, formData, {
          headers: { Authorization: "JWT " + localStorage.getItem("jwt") },
          "content-type": "multipart/form-data",
        })
        .then(setUpload(!upload));
    }
  }, [image]);

  function onClickimageCover() {
    setCover(!cover);
  }

  function onClickimage() {
    setFeature(feature[id].feature);
    history.push("/smlritem");
  }

  function onClickimageDelete() {
    console.log(pk);
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/closet/${pk}`, {
        headers: { Authorization: "JWT " + localStorage.getItem("jwt") },
      })
      .then((response) => {
        console.log(response);
        setImage(!image);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function ImageCoverComponent() {
    if (!cover) {
      return (
        <Grid
          className={classes.mobileSmallPaddingBox}
          inputtype={inputtype}
          item
          xs={4}
        >
          <Grid container className={classes.mobileEmptyImageBox}>
            <img
              className={classes.mobileImageCover}
              src={src}
              onClick={onClickimageCover}
              alt="none"
            />
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid
        className={classes.mobileSmallPaddingBox}
        inputtype={inputtype}
        item
        xs={4}
      >
        <Grid
          container
          className={classes.mobileEmptyImageBox}
          onClick={onClickimageCover}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPositionX: "center",
            boxShadow:
              "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
            "&::-webkit-backdrop-filter": {
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <Box className={classes.mobileEmptyCoverImageBox}>
            <Button
              className={classes.mobileEmptyCoverBtn}
              onClick={onClickimage}
            >
              보기
            </Button>
            <Button
              className={classes.mobileEmptyCoverBtn}
              onClick={onClickimageDelete}
            >
              삭제
            </Button>
          </Box>
        </Grid>
      </Grid>
    );
  }
  useState(() => {
    ImageCoverComponent();
  }, [cover]);

  if (inputtype !== "empty") {
    return <ImageCoverComponent />;
  } else {
    return (
      <Grid
        className={classes.mobileSmallPaddingBox}
        inputtype={inputtype}
        item
        xs={4}
        onClick={(e) => {
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
              action="/"
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
