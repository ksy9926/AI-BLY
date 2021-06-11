import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import useStyles from "styles/RecentItemPageStyle";
import Navbar from "components/common/Navbar";
import NoItemTemplate from "components/SimilarItemPage/NoItemTemplate";
import axios from "axios";
import ProductBox from "components/common/ProductBox";
import { useHistory } from "react-router-dom";

export default function RecentItemPage() {
  const classes = useStyles();
  const history = useHistory();

  const [info, setInfo] = useState([]);

  // 최근 본 상품 출력(코드 수정해야함)
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
        <Navbar title="ITEMs" />
        <ProductBox info={info} title="최근 본 상품" />
      </Mobile>
    );
  } else {
    return (
      <Mobile>
        <Navbar title="ITEMs" />
        <Box className={classes.mobileFullBox}>
          <Box className={classes.mobileGlassBox}>
            <Box
              className={classes.mobileContainer}
              onClick={() => {
                history.push("/main");
              }}
            >
              <NoItemTemplate
                title="최근 본 상품이 없어요!"
                subtitle="클릭하시면 비슷한 상품을 모아서 볼 수 있어요."
                buttontext="추천상품 보러가기"
                buttonUrl="/main"
              />
            </Box>
          </Box>
        </Box>
      </Mobile>
    );
  }
}
