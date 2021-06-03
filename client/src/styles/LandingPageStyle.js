import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  },
  mobileAppBar: {
    background: "rgba(256, 256, 256, 0)",
    position: "static",
  },
  mobileGrow: {
    flexGrow: "1",
  },
  mobileNavbarSelect: {
    fontWeight: "bold",
    color: "var(--color-main-b)",
  },
  mobileNavbarSkip: {
    fontWeight: "bold",
    color: "var(--color-bg-light)",
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
  },
  mobileSmallPaddingBox: {
    padding: "10px",
  },
  mobileImageButton: {
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
}));

export default useStyles;
