import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "components/common/Loader";
import ItemLarge from "components/MainPage/ItemLarge";
import useStyles from "styles/MainPageStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageState, countAllState } from "recoil/atoms";

export default function Infinite({ info, recommend }) {
  const [products, setProducts] = useState([0, 1, 2, 3, 4]);
  const [count, setCount] = useState(5);
  const classes = useStyles();
  const [page, setPage] = useRecoilState(pageState);
  const countAll = useRecoilValue(countAllState);

  // 추가 이미지 출력  전체 168개   count 166
  const fetchImages = (cnt) => {
    console.log(products);
    setProducts([
      ...products,
      cnt,
      cnt + 1,
      cnt + 2,
      cnt + 3,
      cnt + 4,
      cnt + 5,
    ]);
    setCount(cnt + 6);
    console.log(countAll, page + 1);
    if (cnt / page > 60 && countAll / 100 > page) {
      setPage(page + 1);
    }
  };
  if (recommend) {
    return (
      <InfiniteScroll
        className={classes.mobileInfinite}
        dataLength={products.length}
        next={() => fetchImages(count)}
        hasMore={count < countAll - 10 ? true : false}
        loader={<Loader />}
      >
        {products.map((idx) => ( 
          <ItemLarge key={idx} idx={idx} data={info[idx]} />
        ))}
      </InfiniteScroll>
    );
  } else {
    return (
      <InfiniteScroll
        className={classes.mobileInfinite}
        dataLength={products.length}
        next={() => fetchImages(count)}
        hasMore={count < countAll - 10 ? true : false}
        loader={<Loader />}
      >
        {products.map((idx) => (
          <ItemLarge key={idx} idx={idx} data={info[idx]} />
        ))}
      </InfiniteScroll>
    );
  }
}
