import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mobileRoot: {
      textAlign: "center",
      padding: theme.spacing(1),
      flexGrow: 1,
    },
    mobileNavbar: {
      height: "6vh",
      textAlign: "right",
    },
    mobileNavbarSkip: {
      fontWeight: "bold",
      color: "#a5a5a5",
      textDecoration: "none",
    },
    mobileNavbarSelect: {
      fontWeight: "bold",
      color: "#3A51A4",
      textDecoration: "none",
    },
    mobileInfoMessageBox: {
      height: "13vh",
      textAlign: "left",
      paddingBottom: "10px",
    },
    mobileInfoMessage: {
      fontSize: "18px",
      fontWeight: "900"
    },
    mobileInfoMiniMessage: {
      color: "#7788b9",
      fontSize: "14px",
      fontWeight: "bold",
      padding: theme.spacing(1)
    },
    mobileImageContainer: {
      height: "80vh",
    },
    mobileImageButton: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: "100%",
      border: "2px solid #e6e6e6",
      borderRadius: "10%",
      position: "relative",
    },
    mobileImageActiveButton: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: "100%",
      border: "2px solid lightgreen",
      borderRadius: "10%",
      position: "relative",
    },
    mobileImageLabel: {
      height: "100%",
      width: "100%",
      display: "inline-block",
      position: "absolute",
    },
    mobileImage: {
      height: "100%",
      width: "100%",
    },
    mobileCheckboxContainer: {
      position: "absolute",
      bottom: "0%",
      left: "60%",
    },
  }));

export default useStyles;