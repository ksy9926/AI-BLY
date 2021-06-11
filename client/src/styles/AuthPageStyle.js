import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Auth 공통
  mobileLogo: {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    padding : "15px",
    color: "Black",
  },
  mobileFullBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10vh",
  },
  mobileGlassBox: {
    width: "85vw",
    height: "120vw",
    background: "rgb(225 225 225 / 35%)",
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
    backdropFilter: "blur(10px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(10px)",
    },
    borderRadius: "15px",
    margin: "10px",
    padding: "10px",
  },
  mobileInputTitle:{
    fontSize: "25px",
    fontWeight: "bold",
    color: "white",
    textAlign : "center",
    marginTop: "20px",
  },
  mobileInputSubTitle:{
    fontSize: "13px",
    fontWeight: "bold",
    color: "#f77260",
    textAlign : "center",
    marginTop: "13px",
  },
  mobileAuthBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  mobileInputBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "70px"
  },
  mobileTextField: {
    margin: "0.5vw",
    fontSize: "12px",
  },
  mobileButtonBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "86px"
  },
  mobileButton: {
    width: "70vw",
    borderRadius: "15px",
  },
  mobileFormBox: {
    width: "90%",
  },
  mobileLinkBox: {
    marginTop: "20px",
    fontSize: "12px",
  },
  mobileLinkInfo :{
    color : "white",
    marginRight: "10px",
    fontSize: "14px",
  },
  mobileLink:{
    textDecoration: "underline",
    color : "white",
    fontSize: "14px",
    fontWeight :"bold",
  },

  // RegisterClosetPage
  mobileTextBox: {
    height: "26vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mobileControlBox: {
    height: "10vh",
  },
  mobileBoldText: {
    fontWeight: "bold",
  },
  mobileMessage: {
    width: "45vw",
    textAlign: "center",
  },
  mobileButtonSignBox: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  mobileInputSignTitle: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "white",
    textAlign : "center",
    marginTop: "20px"
  },
  mobileSignLinkBox:{
    marginTop: "20px",
    fontSize: "12px",
  },
  mobileSignInputBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "45px"
  },
}));

export default useStyles;
