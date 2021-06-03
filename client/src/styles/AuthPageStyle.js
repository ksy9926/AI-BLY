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
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.37)",
    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
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
    height: "26vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  mobileTextField: {
    margin: "0.5vw",
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
  },

  // RegisterClosetPage
  mobileTextBox: {
    height: "63.9vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mobileControlBox: {
    height: "10vh",
  },
  mobileMessage: {
    width: "70vw",
  },
}));

export default useStyles;
