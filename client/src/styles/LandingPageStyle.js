import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

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
      color: "var(--color-bg-dark)",
      textDecoration: "none",
    },
    mobileNavbarSelect: {
      fontWeight: "bold",
      color: "var(--color-main-b)",
      textDecoration: "none",
    },
    mobileInfoMessageBox: {
      height: "13vh",
      textAlign: "left",
      paddingBottom: "10px",
    },
    mobileInfoMessage: {
      fontSize: "18px",
      fontWeight: "900",
      color: "var(--color-main-b)"
    },
    mobileInfoMiniMessage: {
      color: "var(--color-main-a)",
      fontSize: "14px",
      fontWeight: "bold",
      padding: theme.spacing(1)
    },


    mobileImageButton: {
      height: "180px",
      backgroundColor: "var(--color-bg-light)",
      borderRadius: "15px",
      justifyContent: "center",
      alignContent: "center",
      outline: "none",
    },
    mobileImageGrid: {
      padding: "10px",
    },

    mobileImageActiveButton: {
      objectFit: "cover",
      height: "100%",
      width: "100%",
      borderRadius: "15px",
      border: "4px solid var(--color-main-a)",
    },

    mobileImageLabel: {
      height: "100%",
      width: "100%",
      display: "inline-block",
      position: "absolute",
    },

    mobileImage: {
      objectFit: "cover",
      height: "100%",
      width: "100%",
      borderRadius: "15px",
    },

    mobileCheckboxContainer: {
      position: "absolute",
      bottom: "0%",
    },


    mobileAppBar: {
      background: "rgba(256, 256, 256, 1)",
      position:"static"
    },

    mobileGrow: {
      flexGrow: 1,
    },
    
  }));

export default useStyles;