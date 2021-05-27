import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Mobile } from "../MediaQuery";
import { Box, TextField, Button } from "@material-ui/core";
import useStyles from "../styles/AuthPageStyle";
import Navbar from "../components/common/Navbar";
import Toast from "../components/common/Toast";

function LoginPage() {
  const classes = useStyles();
  const url = `http://elice-kdt-ai-track-vm-ai-14.koreacentral.cloudapp.azure.com`;
  const history = useHistory();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [blank, setBlank] = useState(false);
  const [toast, setToast] = useState(false);
  const [text, setText] = useState("");
  const [severity, setSeverity] = useState("");

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

  const onToastHandler = (msg, svt) => {
    setText(msg);
    setSeverity(svt);
    setToast(true);
    window.setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  // 로그인 버튼 핸들러
  const onLoginHandler = (event) => {
    event.preventDefault();
    if (!id || !password) {
      setBlank(true);
    } else {
      axios
        .post(url + "/api/login/", {
          email: "test33@test.com",
          password: password,
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            onToastHandler("로그인 성공!", "success");
            history.push({
              pathname: "/main",
            });
          } else {
            console.log(response.data);
            alert("error");
          }
        })
        .catch((error) => {
          if (error.response.data.email) {
            onToastHandler(error.response.data.email[0], "error");
          } else if (error.response.data.password) {
            onToastHandler(error.response.data.password[0], "error");
          } else if (error.response.data.non_field_errors) {
            onToastHandler("아이디 혹은 비밀번호를 확인해주세요.", "error");
          } else {
            console.log(error.response);
            onToastHandler("예상치 못한 오류 발생", "error");
          }
        });
    }
  };

  return (
    <Mobile>
      <Navbar />
      <Box className={classes.mobileAuthBox}>
        {toast ? <Toast text={text} severity={severity} /> : null}
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
