import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // 메인페이지 전체

  mobileItemMainGrid:{
    margin: "10px",
    textAlign:"center",
    padding: "10px",
    backgroundColor:"black",
    borderRadius:"15px",
  },

  mobileRecommendMessageBox: {
    marginLeft: "10px",
    height: "5vh",
    textAlign: "left",
    lineHeight: "5vh",
  },
  mobileRecommendMessage: {
    fontSize: "18px",
    color: "var(--color-black)",
  },
  mobileRecommendTitleBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  mobileRecommendAllText: {
    fontSize: "var(--font-small)",
    color: "var(--color-main-a)",
  },
  // RecommendTab
  mobileRecommendContainer: {
    display: "flex",
    height: "34vh",
    whiteSpace: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
  },
  // ItemMain
  mobileRecommendInfoGrid: {
    height: "34vh",
    marginRight: "15px",
  },
  mobileRecommendImageBox: {
    width: "40vh",
    height: "34vh",
  },
  mobileRecommendImage: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "15px 0px 0px 15px ",
  },
  mobileRecommendTextBox: {
    padding: "10px",
    textAlign: "left",
    whiteSpace: "pre-line",
    borderRadius: "0px 15px 15px 0px ",
    borderTop: "2px solid #E0E3DA",
    borderBottom: "2px solid #E0E3DA",
    borderRight: "2px solid #E0E3DA",
  },
  mobileRecommendBrandFavoriteBox: {
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
  },
  mobileRecommendBrandName: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "var(--color-black)",
  },
  mobileRecommendDescription: {
    display: "flex",
    height: "60%",
    color: "var(--color-gray)",
  },
  mobileRecommendDiscountPriceBox: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "25px",
  },
  mobileRecommendDiscount: {
    fontWeight: "bold",
    color: "var(--color-red)",
  },
  mobileRecommendPrice: {
    fontWeight: "bold",
    color: "var(--color-black)",
  },
  // ItemInfo

  mobileItemImageBox: {
    height: "20vh",
    borderRadius: "15px",
    marginBottom: "10px",
  },
  mobileFavIcon:{
    position: "relative"
  },
  mobileItemInfoBox:{
    height: "90%",
    alignContent: "left",
    textAlign:"left",
    padding:"1px",
    margin:"1px"
  },
  mobileItemBrandName: {
    fontWeight:"bold",
    fontSize: "15px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: "var(--color-black)",
    marginBottom:"5px",

  },
  mobileItemBrandFavoriteBox: {
    height: "30px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom:"10px",
  },

  mobileItemDescription: {
    display: "flex",
    height: "75%",
    color: "var(--color-gray)",
    fontWeight:"bold"
  },
  mobileItemShortDescription: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",
    color: "var(--color-gray)",
    marginBottom:"10px",

  },
  mobileItemDiscountPriceBox: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    marginBottom:"4px",

  },
  mobileItemDiscount: {
    fontWeight: "bold",
    color: "var(--color-red)",
  },
  mobileItemPrice: {
    fontWeight: "bold",
    color: "var(--color-black)",
  },

  // 카테고리
  mobileCategoryContainer: {
    whiteSpace: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
  },

  mobileCategoryButton: {
    borderRadius: "15px",
    margin: "10px 6px",
    background: "rgba( 255, 255, 255, 0.4)",
    fontSize: "14px",
    padding: "2px 6px",
    "&:hover, &:focus, &:active": {
      backgroundColor: "#F55129",
      color: "#F55129",
    },
  },
  mobileCategoryActiveButton: {
    borderRadius: "15px",
    margin: "10px 6px",
    backgroundColor: "#F55129",
    color: "var(--color-main-c)",
    fontSize: "14px",
    padding: "2px 6px",
    "&:hover, &:focus, &:active": {
      backgroundColor: "#F55129",
      color: "var(--color-main-c)",
    },
  },
  mobileGridBox:{
    padding:"1px"
  }
}));

export default useStyles;
