import React, { useState } from "react";
import { Checkbox, Box } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";

export default function CustomFavoriteIcon({ idx, product_id, data }) {
  const [favorite, setFavorite] = useState({});

  // 찜하기 체크 여부
  const onLikeChange = (event) => {
    console.log("data: ", data);
    console.log("product_id: ", product_id);
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
          },
        )
        .then((response) => {
          console.log("받은 데이터: ", response);
        })
        .catch((error) => {
          console.log("error: ", error.response);
        });
    })();
  };

  return (
    <Box>
      <Checkbox
        style={{ padding: "0" }}
        checked={favorite.idx}
        onChange={onLikeChange}
        icon={<FavoriteBorderIcon style={{ color: "#F77260" }} />}
        checkedIcon={<FavoriteIcon style={{ color: "#F77260" }} />}
        name={idx}
      />
    </Box>
  );
}
