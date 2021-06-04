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
  },
  mobileSubtitleText: {
    color: "rgba(165, 147, 224, 1)",
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
