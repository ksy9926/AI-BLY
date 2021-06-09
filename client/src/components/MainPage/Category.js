import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";

import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoryKeyState,
  categoryDictState,
  categoryState,
} from "recoil/atoms";

export default function Category() {
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState(0);
  const categoryKey = useRecoilValue(categoryKeyState);
  const categoryDict = useRecoilValue(categoryDictState);
  const setCategory = useSetRecoilState(categoryState);

  const categories = categoryKey.map((key, idx) =>
    activeButton === idx ? (
      <Box
        onClick={() => {
          setActiveButton(idx);
          setCategory(categoryDict[key]);
        }}
        className={classes.mobileCategoryActiveButton}
        key={idx}
      >
        <Box className={classes.mobileCategoryButtonText}>
        {key}
          </Box>
      </Box>
    ) : (
      <Box
        onClick={() => {
          setActiveButton(idx);
          setCategory(categoryDict[key]);
        }}
        className={classes.mobileCategoryButton}
        key={idx}
      >
        <Box className={classes.mobileCategoryButtonText}>
        {key}
          </Box>
      </Box>
    ),
  );

  return <Box className={classes.mobileCategoryContainer}>{categories}</Box>;
}
