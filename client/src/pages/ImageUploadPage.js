import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Box, Input, Button } from "@material-ui/core";
import { Mobile } from "../MediaQuery";
import Navbar from "../components/Navbar"

const useStyles = makeStyles((theme) => ({
  // mobile
  mobileRoot: {},

  mobileImageBlankBox: {
    height: "150px",
    width: "100px",
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderRadius: "15px",
  },
}));

export default function ImageUploadPage({ match }) {
  const classes = useStyles();
  const user_id = match.params.user_id;
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [imageList, setImageList] = useState(null);

  // User Image 리스트 axios get
  // url을 통한 다른 사용자 접근 통제 필요
  useEffect(() => {
    function GetImageData() {
      axios
        .get(`${process.env.REACT_APP_API_URL}/imgupload/${user_id}`)
        .then((response) => {
          setImageData(response.data.result);
        });
    }
    GetImageData();
  }, [user_id]);

  // User Image 데이터 기준으로 컴포넌트 생성
  useEffect(() => {
    if (imageData) {
      setImageData(<Box className={classes.mobileImageBlankBox}>hello</Box>);
    } else {
      setImageData(<Box className={classes.mobileImageBlankBox} />);
    }
  }, [imageData]);

  function PostImage() {
    const formData = new FormData();
    axios
      .post(`${process.env.REACT_APP_API_URL}/imgupload/${user_id}`, formData, {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      })
      // .then((response) => {
      //   alert("성공");
      //   setImageData(response.data.result);
      // })
      // .catch((err) => {
      //   alert("실패");
      // });
  }

  function DeleteImage() {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/imgupload/${user_id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      })
      // .then((response) => {
      //   alert("성공");
      //   setImageData(response.data.result);
      // })
      // .catch((err) => {
      //   alert("실패");
      // });
  }
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Mobile>
      <Navbar/>
      <Box className={classes.mobileImageBlankBox}></Box>
      <Input type="file" name="file" onChange={(e) => handleFileInput(e)} />
      <Button type="button" onClick={PostImage()} />
      {imageData}
    </Mobile>
  );
}
