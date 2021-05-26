import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Mobile } from "../MediaQuery";
import { Box, TextField, Button } from "@material-ui/core";
import useStyles from "../styles/AuthPageStyle";
import Navbar from "../components/common/Navbar";
import swal from "sweetalert";

function LoginPage() {
  const classes = useStyles();
  const url = `http://elice-kdt-ai-track-vm-ai-14.koreacentral.cloudapp.azure.com:8000`;
  const history = useHistory();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [blank, setBlank] = useState(false);

  const onChangeHandler = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // 로그인 버튼 핸들러
  const onLoginHandler = (event) => {
    event.preventDefault();
    if (!id || !password) {
      setBlank(true);
    } else {
      axios
        .post(url + "/api/login/", {
          username: id,
          password: password,
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            swal({
              title: "로그인 성공!",
              icon: "success",
            });
            history.push({
              pathname: "/main",
            });
          } else {
            console.log(response.data);
            alert("error");
          }
        })
        .catch((error) => {
          if (error.response.data.password) {
            swal({
              title: error.response.data.password[0],
              icon: "warning",
            });
          } else if (error.response.data.username) {
            swal({
              title: error.response.data.username[0],
              icon: "warning",
            });
          } else if (error.response.data.non_field_errors) {
            swal({
              title: "아이디 혹은 비밀번호를 확인해주세요.",
              icon: "warning",
            });
          } else {
            console.log(error.response);
            alert("예상치 못한 오류 발생");
          }
        });
    }
  };

  return (
    <Mobile>
      <Navbar />
      <Box className={classes.mobileAuthBox}>
        <form>
          <Box className={classes.mobileInputBox}>
            <TextField
              className={classes.mobileTextField}
              error={!id && blank ? true : false}
              id="standard-basic"
              label="아이디를 입력해주세요."
              name="id"
              type="text"
              value={id}
              onChange={onChangeHandler}
            />
            <TextField
              className={classes.mobileTextField}
              error={!password && blank ? true : false}
              id="standard-basic"
              label="비밀번호를 입력해주세요."
              name="password"
              type="password"
              value={password}
              onChange={onChangeHandler}
            />
            <br />
            <Button
              className={classes.mobileButton}
              variant="contained"
              onClick={onLoginHandler}
            >
              로그인
            </Button>
          </Box>
          <Box className={classes.mobileButtonBox}>
            <Button
              className={classes.mobileButton}
              variant="contained"
              onClick={() => {
                history.push({ pathname: "/register" });
              }}
            >
              회원가입
            </Button>
          </Box>
        </form>
      </Box>
    </Mobile>
  );
}

export default LoginPage;
