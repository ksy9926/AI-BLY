import React, { useEffect, useState } from "react";
import { Checkbox, Box } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { categoryState } from "recoil/atoms";

export default function CustomFavoriteIcon({ idx, product_id, data }) {
  const [favorite, setFavorite] = useState({});
  const user = parseInt(localStorage.getItem("user"));
  const category = useRecoilValue(categoryState);
  const history = useHistory();

  // 찜하기 체크 여부
  function onLikeChange (event) {
    setFavorite({ ...favorite, [event.target.name]: event.target.checked });
    (async function () {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/likeproduct/`,
          {
            product_id: product_id,
          },
          {
            headers: {
              Authorization: "JWT " + localStorage.getItem("jwt"),
            },
          }
        )
        .then((response) => {
          console.log("받은 데이터: ", response);
        })
        .catch((error) => {
          console.log("error: ", error.response);
        });
    })();
  };

  function handleOnClick() {
    history.push("/mypage");
  }

  if (localStorage.getItem("jwt")!== null) {
    return (
      <Box>
        <Checkbox
          style={{ padding: "0" }}
          checked={favorite.idx}
          onChange={onLikeChange}
          icon={
            data && data.likeproduct && data.likeproduct.includes(user) ? (
              <FavoriteIcon style={{ color: "#F77260" }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "#F77260" }} />
            )
          }
          checkedIcon={
            data && data.likeproduct && data.likeproduct.includes(user) ? (
              <FavoriteBorderIcon style={{ color: "#F77260" }} />
            ) : (
              <FavoriteIcon style={{ color: "#F77260" }} />
            )
          }
          name={idx}
        />
      </Box>
    );
  } else {
    return (
      <Box>
        <Checkbox
          style={{ padding: "0" }}
          checked={favorite.idx}
          onClick={handleOnClick}
          icon={
            data && data.likeproduct && data.likeproduct.includes(user) ? (
              <FavoriteIcon style={{ color: "#F77260" }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "#F77260" }} />
            )
          }
          checkedIcon={
            data && data.likeproduct && data.likeproduct.includes(user) ? (
              <FavoriteBorderIcon style={{ color: "#F77260" }} />
            ) : (
              <FavoriteIcon style={{ color: "#F77260" }} />
            )
          }
          name={idx}
        />
      </Box>
    );
  }
}
