import React from 'react';
import { Mobile } from "../MediaQuery";
import { Box, Button } from "@material-ui/core";
import useStyles from "../styles/RegisterPageStyle";
import Navbar from "../components/common/Navbar";

function RegisterPage() {
    const classes = useStyles();

    return (
        <Mobile>
            <Navbar />
            <Box
                className={classes.mobileRegisterBox}
            >
                <Box>
                    <Box className={classes.mobileInputBox} style={{alignItems: "center"}}>
                        <div style={{fontWeight:"bold"}}>닉네임님의 클로젯</div>
                        <div style={{height: "10vh"}}></div>
                        <div style={{width: "70vw"}}>~~~~~~~~~이미지를 분석해서 아이템을 추천해줄거에요</div>
                    </Box>
                    <Box className={classes.mobileButtonBox}>
                        <Button style={{width: "70vw", borderRadius: "15px"}} variant="contained" onClick={()=>{}} >지금 추가하기</Button>
                    </Box>
                </Box>
            </Box>
        </Mobile>
    );
}

export default RegisterPage;