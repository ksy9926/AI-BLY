import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "components/common/Loader";
import ItemLarge from "components/MainPage/ItemLarge";
import useStyles from "styles/MainPageStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageState, countAllState } from "recoil/atoms";

export default function Infinite({ info, recommend }) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const [page, setPage] = useRecoilState(pageState);
  let temp = [];
  const countAll = useRecoilValue(countAllState);
  const remainder = countAll % 6;

  // 추가 이미지 출력
  const fetchImages = (cnt) => {
    if (cnt >= countAll - remainder) {
      for (let i = cnt; i < cnt + remainder; i++) {
        temp.push(i);
      }
      setProducts([...products, ...temp]);
      setCount(countAll);
    } else {
      setProducts([...products, cnt, cnt + 1, cnt + 2, cnt + 3, cnt + 4, cnt + 5]);
      setCount(cnt + 6);
    }
    if (cnt / page > 60 && countAll / 100 > page) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchImages(count);
  }, [countAll]);

  return (
    <InfiniteScroll
      className={classes.mobileInfinite}
      dataLength={products.length}
      next={() => fetchImages(count)}
      hasMore={count < countAll ? true : false}
      loader={<Loader />}
      endMessage={<p>you have seen it all</p>}
    >
      {products.map((idx) => (
        <ItemLarge key={idx} idx={idx} data={info[idx]} recommend={recommend} />
      ))}
    </InfiniteScroll>
  );
}
