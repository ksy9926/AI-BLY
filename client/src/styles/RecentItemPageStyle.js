import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // LikeItemPage, RecentItemPage
  mobileFullBox: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileGlassBox: {
    width: "100%",
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
  mobileRoot: {
    textAlign: "center",
    flexGrow: "1",
  },
  mobileContainer: {
    height: "auto",
    position: "relative",
    justifyContent: "center",
    alignContent: "center",
  },
  mobileEmptyBox: {
    height: "35vh",
  },
  // TextTitleComponent
  mobileTitleBox: {
    margin: "20px 20px 0",
  },
  mobileTitleText: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "rgb(255 255 255 / 66%)",

  },
  mobileSubtitleText: {
    color: "rgb(255 255 255 / 66%)",
    fontSize: "13px",
  },
  // NoItemTemplate
  mobileNoItemBox: {
    textAlign: "center",
  },
  mobileButtonBox: {
    margin: "30px 0 20px",
  },
}));

export default useStyles;
