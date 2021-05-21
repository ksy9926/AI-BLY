import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

const useStyles = makeStyles((theme) => ({
    mobileRegisterBox: {
        height: "91vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    mobileTextField: {
        margin: "0.5vw",
        fontFamily: "Spoqa Han Sans Neo",
        borderRadius: 0,
    },
    mobileInputBox: {
        height:"63.9vh",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    mobileButtonBox: {
        height:"26.1vh",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
    }
}));

export default useStyles;