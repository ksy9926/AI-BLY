import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Auth 공통

  mobileFullBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15vh",
  },
  mobileGlassBox: {
    width: "85vw",
    background: "rgba(255, 255, 255, 0.2)",
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
  mobileAuthBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  mobileInputBox: {
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  mobileTextField: {
    margin: "0.5vw",
    fontSize: "12px",
  },
  mobileButtonBox: {
    height: "20vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  mobileButton: {
    width: "70vw",
    borderRadius: "15px",
  },
  mobileFormBox: {
    width: "90%",
  },
  mobileLinkBox: {
    position: "absolute",
    top: "15vh",
    fontSize: "12px",
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
}));

export default useStyles;
