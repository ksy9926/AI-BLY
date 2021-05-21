import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Mobile } from "../MediaQuery";
import { Box, TextField, Button } from "@material-ui/core";
import useStyles from "../styles/RegisterPageStyle";
import Navbar from "../components/common/Navbar";

function LoginPage() {
    const classes = useStyles();
    const history = useHistory();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeHandler = (event) => {
        const {
        target: { name, value },
        } = event;

        if (name === 'id') {
            setId(value);
        } else if (name === 'password') {
            setPassword(value);
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
                        <br />
                        <Button style={{width: "70vw", borderRadius: "15px"}} variant="contained" onClick={()=>{}} >로그인</Button>
                    </Box>
                    <Box className={classes.mobileButtonBox}>
                        <Button style={{width: "70vw", borderRadius: "15px"}} variant="contained" onClick={()=>{history.push({pathname: "/register"})}} >회원가입</Button>
                    </Box>
                </form>
            </Box>
        </Mobile>
    );
}

export default LoginPage;