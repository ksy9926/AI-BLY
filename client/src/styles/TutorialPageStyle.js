import { makeStyles } from "@material-ui/core/styles";
import firstpageBackground from "firstpage.png";

const useStyles = makeStyles((theme) => ({
  mobilecontainer: {
    height: "101vh",
    display: "grid",
    gridTemplateRows: "repeat(8, 1fr)",
    // gridTemplateColumns: "1fr 2fr 1fr",
    backgroundImage: `url(${firstpageBackground})`,
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  mobileVideo:{
    objectFit: "cover",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
  },
  mobileGrid: {
    gridRow: "3/span 1",
  },
  mobileImageBox: {
    textAlign: "center",
    margin: "20px",
  },
  mobileSubTitle: {
    color: "#ffffffc4",
    textAlign: "center",
    margin: "10px",
  },
  mobileDescription1: {
    gridRow : "4/span 1",
    textAlign: "left",
  },
  mobileDescriptionText: {
    fontSize: "17px",
    textAlign: "center",
    lineHeight: "35px",
    color: "white",
    textShadow: "white 0px 0px 2px;",
    
    fontWeight: "1000",
  },
  mobileDescription2: {
    gridRow : "5/span 2",
    textAlign: "center",
    padding: "20px",
  },

  mobileDescriptionSubText: {
    fontSize: "17px",
    textAlign: "left",
    lineHeight: "30px",
    color: "#ffffffd9",
    textShadow : "-3px 3px 4px #000000;",
    fontWeight: "1000",
  },
  mobileButtonGrid: {
    gridRow: "7/span 1",
    textAlign: "center",
  },
  mobileBtn:{
    textDecoration: "none",
    background: "var(--color-main-b)",
    width: "60vw",
    height :"12vw",
    borderRadius: "25px",
    color: "white",
    fontSize : "15px",
    underline: "none",

    "&.MuiButton-root:hover": {
      background: "#fc8979",
      color: "#f8b9b0",
    }
  },
  mobileBtn2:{
    textDecoration: "none",
    background: "white",
    width: "60vw",
    height :"12vw",
    borderRadius: "25px",
    color: "var(--color-main-b)",
    fontSize : "15px",
    underline: "none",

    "&.MuiButton-root:hover": {
      background: "#fc8979",
      color: "#f8b9b0",
    }
  },

  mobileLinkBox: {
    margin: "20px",
    fontSize: "15px",
    textAlign: "center",
  },

  mobileLinkText: {
    color: "white",
  },

  mobileAppBar: {
    background: "rgba(256, 256, 256, 0)",
    position: "static",
  },
  mobileGrow: {
    flexGrow: "1",
  },
  mobileNavbarSkip: {
    fontWeight: "bold",
    color: "var(--color-bg-title)",
  },
  mobileNavbarSelect: {
    fontWeight: "bold",
    color: "white",
  },
  mobileGlassOutBox: {
    background: "rgba(255, 255, 255, 0.4)",
    margin: "15px",
    textAlign: "center",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.37)",
    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
    },
    borderRadius: "15px",
    whiteSpace: "wrap",
    overflowx: "hidden",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  mobileGlassInBox: {
    background: "rgba(255, 255, 255, 0.4)",
    padding: "10px",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.37)",
    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
    },
    borderRadius: "15px  15px 5px 5px",
    whiteSpace: "wrap",
    overflowx: "hidden",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  mobileGlassTextBox: {
    padding: "15px",
    fontSize: "14px",
  },
  mobileGlassSubText: {
    margin: "5px",
  },
  mobileImg: {
    display: "block",
    width: "100%",
  },
  mobileLogoimage: {
    width: "50vw",
  },

  //User

  mobileBar: {
    height: "56px",
    display: "flex",
    position: "relative",
    alignContent: "center",
    padding: "0px 15px 0px 15px",
  },
}));

export default useStyles;
