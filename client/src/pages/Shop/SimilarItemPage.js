import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import axios from "axios";
import useStyles from "styles/RecentItemPageStyle";
import Navbar from "components/common/Navbar";
import NoItemTemplate from "components/SimilarItemPage/NoItemTemplate";
import ProductBox from "components/common/ProductBox";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { featureState, pageState, countAllState } from "recoil/atoms";

export default function SimilarItemPage({}) {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const feature = useRecoilValue(featureState);
  const setPage = useSetRecoilState(pageState);
  const setCountAll = useSetRecoilState(countAllState);

  // 옷장 이미지 클릭시 이미지와 유사한 아이템 출력
  useEffect(() => {
    console.log("feature: ", feature);
    (async function () {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/recommend/`, [feature])
        .then((response) => {
          console.log("recommend 받은 데이터: ", response.data["recommend_list"][1]);
          setInfo(response.data["recommend_list"][1]);
          setPage(1);
          setCountAll(response.data["recommend_list"][1].length);
        })
        .catch((error) => {
          console.log("에러: ", error);
        });
    })();
  }, [feature]);

  if (info && info.length > 0) {
    return (
      <Mobile>
        <Navbar title="ITEMs" />
        <ProductBox info={info} title="해외직구 상품" navbar="true" />
      </Mobile>
    );
  } else {
    return (
      <Mobile>
        <Navbar title="ITEMS" />
        <Box className={classes.mobileFullBox}>
          <Box className={classes.mobileGlassBox}>
            <Box className={classes.mobileContainer}>
              <NoItemTemplate
                title="비슷한 상품이 아직 없어요!"
                subtitle="클릭하시면 비슷한 상품을 모아서 볼 수 있어요."
                buttontext="추천상품 보러가기"
                buttonUrl=""
              />
            </Box>
          </Box>
        </Box>
      </Mobile>
    );
  }
}
