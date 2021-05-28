import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./Loader";
import ItemInfo from "./ItemInfo";
import axios from "axios";

export default function Infinite({ child }) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState([]);

  const fetchImages = (cnt) => {
    setProducts([...products, cnt, cnt + 1, cnt + 2, cnt + 3]);
    setCount(cnt + 4);
  };

  useEffect(async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/fashion`)
      .then((response) => {
        setInfo(response.data);
        console.log(response.data);
      });
    fetchImages(count);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <InfiniteScroll
        style={{ display: "flex", flexWrap: "wrap" }}
        dataLength={products.length}
        next={() => fetchImages(count)}
        hasMore={count < 300 ? true : false}
        // loader={<Loader />}
        endMessage={<p>You have seen it all</p>}
      >
        {products.map((idx) => (
          <ItemInfo key={idx} idx={idx} data={info[idx]} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
