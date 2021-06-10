import { makeStyles } from "@material-ui/core/styles";
import "App.css";

const useStyles = makeStyles((theme) => ({
  //mobile

  mobileContainer: {
    // overflow: 'auto',å
    height: "auto",
    position: "relative",
  },
  mobileGlassBox: {
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
    backdropFilter: "blur(10px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(10px)",
    },
    borderRadius: "15px",
    margin: "10px",
    height: "85vh",
    whiteSpace: "nowrap",
    overflowx: "auto",
    overflowY: "hidden",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    position: "relative",
  },
  // TextTitleComponent

  mobileTextTitle: {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(10px)",
    },
    height: "25px",
    borderRadius: "15px 15px 10px 10px",
    padding: "20px 10px 10px 20px",
  },

  mobileTitleBox: {
    fontSize: "16px",
  },
  mobileSubTitleBox1: {
    margin: "15px 10px 5px 20px",
    fontSize: "14px",
    width: "100%",
  },
  mobileSubTitleBox2: {
    margin: "5px 10px 5px 20px",
    fontSize: "14px",
    width: "100%",
  },

  //UploadImageComponent
  mobileSmallPaddingBox: {
    padding: "10px",
  },
  mobileEmptyImageBox: {
    height: "18vh",
    borderRadius: "15px",
    justifyContent: "center",
    alignContent: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.02)",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.4)",
    backdropFilter: "blur(10px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(10px)",
    },
  },
  mobileImage: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "15px",
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
  },
  mobileInput: {
    display: " none",
  },
  mobileEmptyImageIcon: {
    color: "lightgray",
    fontSize: "35px",
  },
}));

export { useStyles };
