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
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.37)",
    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
    },
    borderRadius: "15px",
    margin: "10px",
    padding: "10px",
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
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
    },
    height: "25px",
    borderRadius: "15px 15px 10px 10px",
    padding: "20px 10px 10px 20px",
  },

  mobileTitleBox: {
    fontSize: "16px",
  },
  mobileSubTitleBox: {
    marginTop:"10px",
    fontSize: "14px",
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
    background: "rgba(255, 255, 255, 0.01)",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.4)",
    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
    },
  },
  mobileImage: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "15px",
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
