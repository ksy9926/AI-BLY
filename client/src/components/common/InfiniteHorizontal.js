import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "components/common/Loader";
import useStyles from "styles/MainPageStyle";
import ItemSmall from "components/MainPage/ItemSmall";

export default function InfiniteHorizontal({ info }) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const classes = useStyles();
  // 추가 이미지 출력
  const fetchImages = (cnt) => {
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
  };

  // 첫 접속시 이미지 출력
  useEffect(() => {
    fetchImages(count);
  }, []);

  // return (
  //   <InfiniteScroll
  //     className={classes.mobileInfiniteHorizontal}
  //     dataLength={products.length}
  //     next={() => fetchImages(count)}
  //     hasMore={count < 300 ? true : false}
  //     loader={<Loader />}
  //   >
  //     {products.map((idx) => (
  //       <ItemSmall key={idx} idx={idx} data={info[idx]}  />
  //     ))}
  //   </InfiniteScroll>
  // );

  return (
    <InfiniteScroll
    className={classes.mobileInfiniteHorizontal}
      dataLength={products.length}
      next={() => fetchImages(count)}
      hasMore={count < 300 ? true : false}

      loader={<Loader />}
      endMessage={<p>you have seen it all</p>}
    >
      {products.map((idx) => (
        <ItemSmall key={idx} idx={idx} data={info[idx]} recommend={true}/>
      ))}
    </InfiniteScroll>
  );
}
