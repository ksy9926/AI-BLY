import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "components/common/Loader";
import ItemLarge from "components/MainPage/ItemLarge";
import useStyles from "styles/MainPageStyle";
import { useRecoilState } from "recoil";
import { pageState } from "recoil/atoms";
import axios from "axios";

export default function Infinite({ info }) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const [page, setPage] = useRecoilState(pageState);

  // 추가 이미지 출력
  const fetchImages = (cnt) => {
    setProducts([...products, cnt, cnt + 1, cnt + 2, cnt + 3, cnt + 4]);
    setCount(cnt + 5);
    if (count / page > 60) {
      setPage(page + 1);
    }
  };

  // 첫 접속시 이미지 출력
  useEffect(() => {
    fetchImages(count);
  }, []);

  return (
    <InfiniteScroll
      className={classes.mobileInfinite}
      dataLength={products.length}
      next={() => fetchImages(count)}
      hasMore={count < 300 ? true : false}
      loader={<Loader />}
      endMessage={<p>you have seen it all</p>}
    >
      {products.map((idx) => (
        <ItemLarge key={idx} idx={idx} data={info[idx]} />
      ))}
    </InfiniteScroll>
  );
}
