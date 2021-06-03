import React, { useState } from "react";
import { Checkbox, Box } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function CustomFavoriteIcon({ idx }) {
  const [favorite, setFavorite] = useState({});

  // 찜하기 체크 여부
  const onLikeChange = (event) => {
    setFavorite({ ...favorite, [event.target.name]: event.target.checked });
  };

  return (
    <Box>
      <Checkbox
        style={{ padding: "0" }}
        checked={favorite.idx}
        onChange={onLikeChange}
        icon={<FavoriteBorderIcon  style={{ color: "#F77260" }} />}
        checkedIcon={<FavoriteIcon  style={{ color:  "#F77260" }} />}
        name={idx}
      />
    </Box>
  );
}
