import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({}));

function ImageUploadPage() {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePost = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    return axios
      .post("/api/upload", formData)
      .then((res) => {
        alert("성공");
      })
      .catch((err) => {
        alert("실패");
      });
    }

  return (
    <Box>
      <div>
        <input
          type="file"
          name="file"
          onChange={(e) => this.handleFileInput(e)}
        />
        <button type="button" onClick={this.handlePost()} />
      </div>
    </Box>
  );
};

export default ImageUploadPage;
