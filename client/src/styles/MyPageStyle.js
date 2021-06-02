import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mobileStyleBookBox: {
    height: "34vh",
    borderRadius: "15px",
    fontSize: "18px",
  },
  mobileStyleBookTextBox: {
    height: "15%",
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
  mobileStyleImageBox: {
    height: "80%",
    paddingTop: "5%",
  },
  mobileShoppingBox: {
    height: "15vh",
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
    lineHeight: "26px",
    color: "var(--color-gray)",
  },
  mobileInformationBox: {
    height: "19vh",
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
