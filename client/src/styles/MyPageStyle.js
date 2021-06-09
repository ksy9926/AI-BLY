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
  mobileStyleBookBox: {
    height: "25vh",
    borderRadius: "15px",
    fontSize: "18px",
  },
  mobileStyleBookTextBox: {
    height: "10%",
    display: "flex",
    justifyContent: "space-between",
  },
  mobileStyleBookText: {
    lineHeight: "4vh",
    fontSize: "16px",
    paddingLeft: "10px",
    color: "var(--color-gray)",
    display: "flex",
    alignItems: "center",
  },
  mobileStyleBookImageBox: {
    height: "80%",
    paddingTop: "5%",
  },
  mobileMicroPaddingBox: {
    padding: "5px",
  },
  mobileImage: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "15px",
  },
  mobileShoppingBox: {
    padding: "10px 15px",
    borderRadius: "15px",
    fontSize: "18px",
  },
  mobileTitleText: {
    fontWeight: "bold",
    marginBottom: "3vh",
  },
  mobileContentText: {
    display: "block",
    lineHeight: "35px",
    color: "var(--color-gray)",
  },
  mobileInformationBox: {
    padding: "10px 15px",
    borderRadius: "15px",
    fontSize: "18px",
  },
  mobileFooterBox: {
    textAlign: "center",
    paddingTop: "10px",
    height: "10vh",
  },
  mobileFooterText: {
    width: "75vw",
    display: "inline-block",
    lineHeight: "16px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "var(--color-gray)",
  },
}));

export default useStyles;
