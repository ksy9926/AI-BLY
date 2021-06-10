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
  const [recommend, setRecommend] = useState([]);
  const body = localStorage.getItem("styles");
  // 메인페이지 접속시 모든 아이템 출력
  useEffect(() => {
    (async function () {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/fashion/?category=${category}`
        )
        .then(async (response) => {
          setPage(1);
          setInfo(response.data.results);
          setCountAll(response.data.count);
        });
    })();

    if (localStorage.getItem("username") !== null) {
      setUsername(localStorage.getItem("username") + "님");
    }
  }, [category]);

  useEffect(() => {
    if (page > 1) {
      (async function () {
        await axios
          .get(
            `${process.env.REACT_APP_API_URL}/api/fashion/?category=${category}&page=${page}`
          )
          .then((response) => {
            setInfo([...info, ...response.data.results]);
          });
      })();
    }
  }, [page]);

  // 메인페이지 접속시 스타일 선택했을 경우 로컬스토리지 기반 전체 추천 상품 추출

  useEffect(() => {
    const body = localStorage.getItem("styles");
    const recommendList = [];
    if (body !== null) {
      (async function () {
        await axios
          .post(`${process.env.REACT_APP_API_URL}/api/recommend/`, body)
          .then((response) => {
            console.log(response.data.recommend_list);
            response.data.recommend_list.map((productList) =>
              productList.map((product) => recommendList.push(product)),
            );
            console.log("recommend", recommendList);

            setRecommend(recommendList);
            console.log("recommend", recommendList);
          });
      })();
    }
  }, []);

  function ImageRecommendBox() {
    if (localStorage.getItem("jwt") === null) {
      return (
        <NoProductBox
          title="당신이 찾고 있는 상품"
          text="클로젯에 이미지를 등록하면 유사한 상품을 찾아드려요."
          button="사진 추가하기"
        />
      );
    } else {
      return <SmallProductBox title="당신이 찾고 있는 상품" />;
    }
  }
  function StyleRecommendBox() {
    if (localStorage.getItem("styles") === null) {
      return <Box />;
    } else {
      return <SmallProductBox title="당신을 위한 추천 상품" info={recommend} />;
    }
  }

  return (
    <Mobile>
      <Box>
        <Navbar />
        <ImageRecommendBox />
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
