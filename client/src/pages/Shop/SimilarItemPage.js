import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import axios from "axios";
import useStyles from "styles/RecentItemPageStyle";
import Navbar from "components/common/Navbar";
import Infinite from "components/common/Infinite";
import TextTitleComponent from "components/SimilarItemPage/TextTitleComponent";
import NoItemTemplate from "components/SimilarItemPage/NoItemTemplate";
import ProductBox from "components/common/ProductBox";

export default function SimilarItemPage() {
  const classes = useStyles();
  const [info, setInfo] = useState([]);

  // 옷장 이미지 클릭시 이미지와 유사한 아이템 출력
  useEffect(() => {
    (async function () {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/fashion`)
        .then((response) => {
          setInfo(response.data);
        });
    })();
  }, []);

  if (info.length > 0) {
    return (
      <Mobile>
        <Navbar />
        <ProductBox info={info} title="해외직구 상품" navbar="true" />
      </Mobile>
    );
  } else {
    return (
      <Mobile>
        <Navbar />
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
