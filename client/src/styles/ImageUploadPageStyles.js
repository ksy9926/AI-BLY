import { makeStyles } from "@material-ui/core/styles";
import "App.css";

const useStyles = makeStyles((theme) => ({
  //mobile

  mobileContainer: {
    // overflow: 'auto',å
    height: "auto",
    position: "relative",
  },
  // TextTitleComponent
  mobileTitleBox: {
    margin: "10px",
  },
  mobileTitleText: {
    fontWeight: "bold",
    fontSize: "21px",
  },
  mobileSubtitleText: {
    color: "rgba(165, 147, 224, 1)",
    fontSize: "3.7vw",
  },

  //UploadImageComponent
  mobileClosetImageGrid: {
    padding: "10px",
  },
  mobileEmptyImageBox: {
    height: "180px",
    backgroundColor: "var(--color-bg-light)",
    borderRadius: "15px",
    justifyContent: "center",
    alignContent: "center",
    outline: "none",
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
    color: "var(--color-bg-dark)",
    fontSize: "35px",
  },

  // 못 찾음
  mobileImageBox: {
    height: "180px",
    backgroundColor: "var(--color-bg-light)",
    borderRadius: "15px",
    borderColor: "black",
  },
}));

export { useStyles };
