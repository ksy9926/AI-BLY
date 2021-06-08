import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mobileFirstPageBox: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  mobileSubTitle: {
    color: "var(--color-gray)",
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
    borderRadius: "15px",
    whiteSpace: "wrap",
    overflowx: "hidden",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  mobileGlassTextBox: {
    padding: "20px",
  },
  mobileImg: {
    display: "block",
    width: "100%",
  },
}));

export default useStyles;
