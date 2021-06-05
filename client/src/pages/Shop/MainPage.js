import React, { useEffect, useState } from "react";
import { Glow, Box } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";
import { Mobile } from "MediaQuery";
import Navbar from "components/common/Navbar";
import axios from "axios";
import ProductBox from "components/common/ProductBox";
import SmallProductBox from "components/common/SmallProductBox";

export default function MainPage() {
  const classes = useStyles();
  const [username, setUsername] = useState("당신만");
  const [info, setInfo] = useState([]);

  // 메인페이지 접속시 모든 아이템 출력
  useEffect(() => {
    (async function () {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/fashion`)
        .then((response) => {
          setInfo(response.data);
        });
      if (localStorage.getItem("username") !== null) {
        setUsername(localStorage.getItem("username") + "님");
      }
    })();
  }, []);

  return (
    <Mobile>
      <Box>
        <Navbar />
        <SmallProductBox title="당신이 찾고 있는 상품" />
        <SmallProductBox title="당신을 위한 추천 상품"  />
        <ProductBox info={info} title="해외직구 상품" navbar={true} />
      </Box>
    </Mobile>
  );
}
