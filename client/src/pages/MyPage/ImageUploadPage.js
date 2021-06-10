import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import Navbar from "components/common/Navbar";
import { useStyles } from "styles/ImageUploadPageStyles";
import TextTitleComponent from "components/ImageUploadPage/TextTitleComponent";
import UploadImageComponent from "components/ImageUploadPage/UploadImageComponent";
import { useHistory } from "react-router-dom";

import { useSetRecoilState } from "recoil";
import { featureState } from "recoil/atoms";

export default function ImageUploadPage({ match }) {
  const classes = useStyles();
  const user_id = match.params.user_id;
  const [imageData, setImageData] = useState([]);
  const [imageList, setImageList] = useState(null);
  const setFeature = useSetRecoilState(featureState);

  // url을 통한 다른 사용자 접근 통제 필요
  const history = useHistory();
  if (localStorage.getItem("jwt") === null) {
    history.push("/login");
  }

  // get User Image 리스트
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/closet/`, {
        headers: { Authorization: "JWT " + localStorage.getItem("jwt") },
      })
      .then((response) => {
        setFeature(response.data);
        setImageData(response.data);
      });
  }, []);

  // User Image 데이터 기준으로 컴포넌트 생성
  useEffect(() => {
    if (imageData) {
      setImageList(
        imageData.map((data, idx) => (
          <UploadImageComponent
            src={data.dress_img.slice(0, 74) + ":8000" + data.dress_img.slice(74)}
            inputtype="image"
            user_id={user_id}
            id={idx}
          />
        )),
      );
    }
  }, [imageData]);

  return (
    <Mobile>
      <Box>
        <Navbar />
        <Box className={classes.mobileGlassBox}>
          <TextTitleComponent title="엘리스님의 옷장" />
          <Box className={classes.mobileSubTitleBox1}>찾고싶은 상품의 이미지를 등록해주세요.</Box>
          <Box className={classes.mobileSubTitleBox2}>
            다양한 해외 쇼핑몰에서 비슷한 상품을 찾아드립니다
          </Box>
          <Grid container>
            {imageList}
            <UploadImageComponent inputtype="empty" user_id={user_id} />
          </Grid>
        </Box>
      </Box>
    </Mobile>
  );
}
