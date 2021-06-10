import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mobileGlassBox: {
    background: "rgba(255, 255, 255, 0.2)",

    backdropFilter: "blur(10px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(10px)",
    },
    borderRadius: "15px",
    margin: "10px",
    height: "85vh",
    whiteSpace: "wrap",
    overflowx: "hidden",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  mobileSubTitleBox: {
    margin: "15px 10px 10px 20px",
    fontSize: "14px",
    width: "100%",
  },

  mobileAppBar: {
    background: "transparent",
  },
  mobileBar: {
    height: "56px",
    display: "flex",
    position: "relative",
    alignContent: "center",
    padding: "0px 15px 0px 15px",
  },

  mobileGrow: {
    flexGrow: "1",
    display: "block",
  },
  mobileNavbarSkip: {
    fontWeight: "bold",
    color: "var(--color-bg-title)",
    lineHeight: "56px",
  },
  mobileNavbarSelect: {
    fontWeight: "bold",
    color: "var(--color-main-b)",
    lineHeight: "56px",
  },

  mobileSmallPaddingBox: {
    padding: "10px",
  },
  mobileImageButton: {
    height: "18vh",
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
}));

export default useStyles;
