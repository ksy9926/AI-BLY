import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./Loader";
import ItemInfo from "./ItemInfo";
import axios from "axios";


export default function Infinite({ child }) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);

  const fetchImages = (cnt) => {
    setProducts([...products, cnt, cnt + 1, cnt + 2, cnt + 3]);
    setCount(cnt + 4);
  };

  useEffect(() => {
    fetchImages(count);
  }, []);

//   useEffect(() => {
//     function GetList(){
//         axios.get(`${process.env.REACT_APP_API_URL}/api/fashion`).then(response =>{
//           setProducts(response.data.product_list)
//         })
//     }
//     GetList()
// },[]);


  return (
    <InfiniteScroll
      style={{ display: "flex", flexWrap: "wrap" }}
      dataLength={products.length}
      next={() => fetchImages(count)}
      hasMore={count < 100 ? true : false}
      loader={<Loader />}
      endMessage={<p>You have seen it all</p>}
    >
      {products.map((idx) => (
        <ItemInfo key={idx} idx={idx} />
      ))}
    </InfiniteScroll>
  );
}
