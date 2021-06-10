import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import useStyles from "styles/RecentItemPageStyle";
import { Loader } from "components/common/Loader";
import Navbar from "components/common/Navbar";
import Infinite from "components/common/Infinite";
import TextTitleComponent from "components/SimilarItemPage/TextTitleComponent";
import Category from "components/MainPage/Category";
import axios from "axios";
import ProductBox from "components/common/ProductBox";

export default function RecommendItemPage() {
  const classes = useStyles();
  const [info, setInfo] = useState([]);

  // 추천아이템 클릭시  추천 아이템 출력
  useEffect(() => {
    (async function () {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/fashion`).then((response) => {
        setInfo(response.data);
      });
    })();
  }, []);

  return (
    <Mobile>
      <Navbar title="ITEMs" />
      <ProductBox info={info} title="해외직구 상품" navbar="true" />
    </Mobile>
  );
}
