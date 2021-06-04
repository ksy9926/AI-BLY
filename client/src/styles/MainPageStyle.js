import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // 메인페이지 전체
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
  mobileGlassLargeBox:{
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.37)",
    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
    },
    borderRadius: "15px",
    margin: "10px",
    padding: "10px",
    height:"80vh",
    whiteSpace: "nowrap",
    overflowx: "hidden",
    overflowY: "auto",
    position: "relative",
  },
  mobileGlassItemBox:{
    background: "rgba( 255, 255, 255, 0.4)",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.4)",
    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
    },
    borderRadius: "15px",
    margin: "5px",
    padding: "10px",
  },

  mobileItemMainGrid: {
    margin: "10px",
    textAlign: "center",
    padding: "10px",
    backgroundColor: "black",
    borderRadius: "15px",
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
    whiteSpace: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
  },

  // ItemSmall
  mobileGlassSmallItemBox: {
    width: "12vh",
    padding: "7px",
    background: "rgba( 255, 255, 255, 0.01)",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.01)",
    backdropFilter: "blur(4px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(4px)",
    },
    borderRadius: "15px",
    marginRight: "10px",
  },
  mobileItemSmallItemGrid: {
    padding: "1px",
  },
  mobileSmallItemImageBox: {
    height: "14vh",
    borderRadius: "15px",
    marginBottom: "10px",
    position: "relative",
  },

  mobileItemSmallImage: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "15px",
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
    color: "var(--color-main-b)",
  },
  mobileRecommendPrice: {
    fontWeight: "bold",
    color: "var(--color-black)",
  },
  // ItemInfo
  mobileGridBox: {
    padding: "1px",
  },
  mobileItemImageBox: {
    height: "20vh",
    borderRadius: "15px",
    marginBottom: "10px",
    position: "relative",
  },
  mobileFavIconBox: {
    position: "absolute",
    right: "4%",
    bottom: "4%",
  },

  mobileItemInfoBox: {
    alignContent: "left",
    textAlign: "left",
    padding: "1px",
    margin: "1px",
  },
  mobileItemBrandName: {
    fontWeight: "bold",
    fontSize: "15px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: "var(--color-black)",
    marginBottom: "5px",
  },
  mobileItemBrandFavoriteBox: {
    height: "30px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },

  mobileItemDescription: {
    display: "flex",
    height: "75%",
    color: "var(--color-gray)",
    fontWeight: "bold",
  },
  mobileItemShortDescription: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",
    color: "var(--color-gray)",
    marginBottom: "10px",
  },
  mobileItemDiscountPriceBox: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    marginBottom: "4px",
  },
  mobileItemDiscount: {
    fontWeight: "bold",
    color: "var(--color-main-b)",
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
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  mobileCategoryButton: {
    borderRadius: "15px",
    margin: "10px 6px",
    background: "rgba( 255, 255, 255, 0.4)",
    fontSize: "14px",
    padding: "2px 6px",
    "&:hover, &:focus, &:active": {
      backgroundColor: "var(--color-main-b)",
      color: "#F55129",
    },
  },
  mobileCategoryActiveButton: {
    borderRadius: "15px",
    margin: "10px 6px",
    backgroundColor: "var(--color-main-b)",
    color: "var(--color-main-c)",
    fontSize: "14px",
    padding: "2px 6px",
    "&:hover, &:focus, &:active": {
      backgroundColor: "var(--color-main-b)",
      color: "var(--color-main-c)",
    },
  },
  //세로 인피니트 바
  mobileInfinite: {
    display: "flex",
    flexWrap: "nowrap",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  //가로 인피니트 바
  mobileInfiniteHorizontal: {
    display: "flex",
    flexWrap: "nowrap",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

export default useStyles;
