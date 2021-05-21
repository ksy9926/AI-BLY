import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Mobile } from "../MediaQuery";
import { Box, TextField } from "@material-ui/core";
import useStyles from "../styles/RegisterPageStyle";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";

function RegisterPage() {
    const classes = useStyles();
    const url = `http://localhost:5000`;
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
    const onSignUpHandler = (event) => {
        event.preventDefault();
        if (password === passwordCheck) {
        try {
            const response = axios.post(url + '/signup', {
            headers: {'Content-Type': 'application/json'},
            data: {
                id: id,
                password: password,
                name: name
            },
            withCredentials: true,
            })
            if (response.data.status === 300) {
                window.location.replace('/login');
            } else if (response.data.status === 301) {
                alert('필수 입력 사항이 모두 입력되지 않았습니다.');
            } else if (response.data.status === 302) {
                alert('이미 등록된 아이디입니다.');
            } else if (response.data.status === 303) {
                alert('이미 등록된 별명입니다.');
            } else {
                alert('error');
            }
            }

            catch(error) {
            alert('error');
            };
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