import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mobileGlassBox: {
    background: "rgba(255, 255, 255, 0.4)",

    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
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
    color: "var(--color-bg-title)",
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
