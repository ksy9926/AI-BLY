import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mobileAppBar: {
    background: "rgba(256, 256, 256, 1)",
    position: "static",
  },
  mobileGrow: {
    flexGrow: "1",
  },
  mobileNavbarSelect: {
    fontWeight: "bold",
    color: "var(--color-main-b)",
    textDecoration: "none",
  },
  mobileNavbarSkip: {
    fontWeight: "bold",
    color: "var(--color-bg-light)",
    textDecoration: "none",
  },
  mobileImageGrid: {
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

  mobileImageActive: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "15px",
    border: "4px solid var(--color-main-a)",
  },
  mobileImage: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "15px",
  },
}));

export default useStyles;
