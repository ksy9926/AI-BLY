import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Mobile } from "MediaQuery";
import Navbar from "components/common/Navbar";
import axios from "axios";
import ProductBox from "components/common/ProductBox";
import SmallProductBox from "components/common/SmallProductBox";
import NoProductBox from "components/common/NoProductBox";

import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState, pageState, countAllState } from "recoil/atoms";

export default function MainPage() {
  const [username, setUsername] = useState("당신만");
  const [info, setInfo] = useState([]);
  const category = useRecoilValue(categoryState);
  const [page, setPage] = useRecoilState(pageState);
  const [countAll, setCountAll] = useRecoilState(countAllState);

  // 메인페이지 접속시 모든 아이템 출력
  useEffect(() => {
    (async function mainItem() {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/fashion/?category=${category}`)
        .then(async (response) => {
          setPage(1);
          setInfo(response.data.results);
          setCountAll(response.data.count);
        });
      return;
    })();

    if (localStorage.getItem("username") !== null) {
      setUsername(localStorage.getItem("username") + "님");
    }
  }, [category]);

  // 페이지 넘어갈때 추가 이미지 받아오기
  useEffect(() => {
    if (page > 1) {
      (async function paginationItem() {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/fashion/?category=${category}&page=${page}`)
          .then((response) => {
            setInfo([...info, ...response.data.results]);
          });
      })();
    }
  }, [page]);

  function StyleRecommendBox() {
    if (localStorage.getItem("styles") === null) {
      return <Box />;
    } else {
      return <SmallProductBox title="선택하신 스타일 기반 추천 상품" type="style" />;
    }
  }

  return (
    <Mobile>
      <Box>
        <Navbar title="SHOP" />
        {localStorage.getItem("jwt") === null ? (
          <NoProductBox
            title="당신이 찾고 있는 상품"
            text="클로젯에 이미지를 등록하면 유사한 상품을 찾아드려요."
            button="사진 추가하기"
          />
        ) : (
          <SmallProductBox title="당신이 찾고 있는 상품" type="closet" />
        )}
        <StyleRecommendBox />
        <ProductBox
          info={info}
          title="해외 직구 상품"
          count={countAll}
          navbar={true}
          recommend={true}
        />
      </Box>
    </Mobile>
  );
}
