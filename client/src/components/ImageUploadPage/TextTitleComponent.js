import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "styles/ImageUploadPageStyles";

export default function TextTitleComponent({ title, subtitle }) {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.mobileTitleBox}>
{title}
      </Box>
      <Box className={classes.mobileSubTitleBox}>
          {subtitle}
      </Box>
    </Box>
  );
}
