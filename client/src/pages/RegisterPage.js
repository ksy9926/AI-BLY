import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Mobile } from "../MediaQuery";
import { Box, TextField } from "@material-ui/core";
import useStyles from "../styles/RegisterPageStyle";
import Navbar from "../components/common/Navbar";
import Buttons from "../components/common/Buttons";
import swal from "sweetalert";

function RegisterPage() {
    const classes = useStyles();
    const url = `http://localhost:8000`;
    const history = useHistory();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [name, setName] = useState('');
    const [pwWarning, setPwWarning] = useState(<></>);

    // (회원가입 폼) 입력 핸들러
    const onChangeHandler = (event) => {
        const {
        target: { name, value },
        } = event;

        if (name === 'id') {
            setId(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'passwordCheck') {
            setPasswordCheck(value);
        } else if (name === 'name') {
            setName(value);
        }
    };

    // (비밀번호 재확인 입력 시) 비밀번호 일치 확인
    useEffect(() => {
        if (password !== '' || passwordCheck !== '') {
        if (password !== passwordCheck) {
            setPwWarning(<p>비밀번호가 일치하지 않습니다.</p>);
        } else {
            setPwWarning(<></>);
        }
        }
    }, [passwordCheck]);

    // 회원가입 버튼 핸들러
    const onSignUpHandler = async (event) => {
        event.preventDefault();
        if (password === passwordCheck) {
            await axios
            .post(url + "/sign-up", {
                username: id,
                password: password,
                full_name: name,
                email: "test@test.com",
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.status === 300) {
                swal({
                    title: "회원가입 성공!",
                    icon: "success",
                });
                history.push({
                    pathname: "/login",
                    state: {
                    id: id,
                    },
                });
                } else if (response.data.status === 301) {
                swal({
                    title: "회원가입 실패",
                    text: "필수 입력 사항이 모두 입력되지 않았습니다.",
                    icon: "warning",
                });
                } else if (response.data.status === 302) {
                swal({
                    title: "회원가입 실패",
                    text: "이미 등록된 이메일 주소입니다.",
                    icon: "warning",
                });
                } else if (response.data.status === 303) {
                swal({
                    title: "회원가입 실패",
                    text: "이미 등록된 별명입니다.",
                    icon: "warning",
                });
                } else if (response.data.status === 304) {
                swal({
                    title: "회원가입 실패",
                    text:
                    "비밀번호 기준에 맞지 않습니다. 비밀번호는 8자이상, 숫자+영어+특수문자 조합으로 이루어집니다.",
                    icon: "warning",
                });
                } else if (response.data.status === 305) {
                swal({
                    title: "회원가입 실패",
                    text: "비밀번호는 하나이상의 특수문자가 들어가야합니다.",
                    icon: "warning",
                });
                } else {
                    console.log(response.data);
                    alert("error");
                }
            })
            .catch((error) => {
                alert("error");
            });
        }
    };

    return (
        <Mobile>
            <Navbar />
            <Box
                className={classes.mobileRegisterBox}
            >
                <form>
                    <Box className={classes.mobileInputBox}>
                    <TextField
                        className={classes.textField}
                        id="standard-basic"
                        label="아이디를 입력해주세요."
                        name="id"
                        type="text"
                        value={id}
                        onChange={onChangeHandler}
                        required
                    />
                    <TextField
                        className={classes.textField}
                        id="standard-basic"
                        label="비밀번호를 입력해주세요."
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChangeHandler}
                        required
                    />
                    <TextField
                        className={classes.textField}
                        id="standard-basic"
                        label="비밀번호를 확인해주세요."
                        name="passwordCheck"
                        type="password"
                        value={passwordCheck}
                        onChange={onChangeHandler}
                        required
                    />
                    <TextField
                        className={classes.textField}
                        id="standard-basic"
                        label="이름을 입력해주세요."
                        name="name"
                        type="text"
                        value={name}
                        onChange={onChangeHandler}
                        required
                    />
                    </Box>
                    <Box className={classes.mobileButtonBox}>
                        <Buttons text="회원가입" onClick={onSignUpHandler} />
                    </Box>
                </form>
            </Box>
        </Mobile>
    );
}

export default RegisterPage;