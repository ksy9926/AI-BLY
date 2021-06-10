import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mobileGlassBox: {
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
    backdropFilter: "blur(10px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(10px)",
    },
    borderRadius: "15px",
    margin: "30px 10px",
    padding: "10px 10px",
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
    height: "20vh",
  },
  mobileStyleBookPreviewBox: {
    height: "20vh",
    padding: "10px",
  },
  mobileImage: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "10px",
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
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
