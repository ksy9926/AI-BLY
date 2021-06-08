import { makeStyles } from "@material-ui/core/styles";
import firstpageBackground from "firstpage.png"
const useStyles = makeStyles((theme) => ({
  mobileFirstPageBox: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundImage: `url(${firstpageBackground})`
  },
  mobileSubTitle: {
    color: "var(--color-gray)",
    fontSize:"15px"
  },
  mobileLogoimage:{
    width:"50vw"
  }
}));

export default useStyles;