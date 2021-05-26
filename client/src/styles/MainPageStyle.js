import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mobileRoot: {
    textAlign: "center",
    padding: theme.spacing(1),
    flexGrow: 1,
  },

  mobileRecommendMessageBox: {
    marginTop: "10px",
    height: "5vh",
    textAlign: "left",
    lineHeight: "5vh",
    justifyContent: "space-between",
  },
  mobileRecommendMessage: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "var(--color-black)",
  },
  mobileGrow: {
    flexGrow: 1,
  },



  mobileItemImageGrid: {
    padding: "10px",
  },

  mobileItemImageBox: {
    height: "34vh",
    borderRadius: "15px",
    marginBottom: "10px",
  },
  mobileItemImage: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "15px",
  },
  mobileItemBrandFavoriteBox: {
    height: "30px",
    display: "flex",
    justifyContent: "space-between",
  },
  mobileItemBrandName: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "var(--color-black)",
  },
  mobileItemDescription: {
    display: "flex",
    height: "75%",
    color: "var(--color-gray)",
  },
  mobileItemShortDescription: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: "var(--color-gray)",
  },
  mobileItemDiscountPriceBox: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "25px",
  },
  mobileItemDiscount: {
    fontWeight: "bold",
    color: "var(--color-red)",
  },
  mobileItemPrice: {
    fontWeight: "bold",
    color: "var(--color-black)",
  },


  mobileRecommendContainer: {
    display: "flex",
    height: "34vh",
    // borderTop: "1px solid #E0E3DA",
    // borderBottom: "1px solid #E0E3DA",
    whiteSpace: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
    // marginLeft:"10px", 
  },

  mobileRecommendInfoGrid: {
    height: "34vh",
    border: "2px solid #E0E3DA",
    marginRight: "5px",
    borderRadius: "15px",
  },

  mobileRecommendImageBox: {
    width:"40vh",
    height: "34vh",
    borderRadius: "15px",
  },

  mobileRecommendImage: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "15px",
  },

  mobileRecommendTextBox: {
    padding: "10px",
    textAlign: "left",
    whiteSpace: "pre-line",
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
  mobileCategoryContainer: {
    display: "flex",
    height: "50px",
    borderTop: "1px solid #E0E3DA",
    borderBottom: "1px solid #E0E3DA",
    whiteSpace: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
  },

  mobileCategoryButton: {
    border: "1px solid var(--color-bg-dark)",
    borderRadius: "15px",
    margin: "10px 6px",
    backgroundColor: "var(--color-bg-dark)",
    fontWeight: "700",
    fontSize: "14px",
    padding:"2px",
    "&:hover, &:focus, &:active": {
      backgroundColor: "var(--color-main-b)",
      color: "var(--color-main-c)",
    },
  },
  mobileCategoryActiveButton: {
    border: "1px solid var(--color-main-b)",
    borderRadius: "15px",
    margin: "10px 6px",
    backgroundColor: "var(--color-main-b)",
    color: "var(--color-main-c)",
    fontWeight: "700",
    fontSize: "14px",
    // padding:"11px",
    "&:hover, &:focus, &:active": {
      backgroundColor: "var(--color-main-b)",
      color: "var(--color-main-c)",
    },

    mobiletabbar: {
      color: "var(--color-main-b)",
      backgroundColor: "var(--color-bg-light)",
    },
  },
}));

export default useStyles;
