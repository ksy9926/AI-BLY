import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // 공통
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
  },
  mobileTitleBox: {
    height: "25px",
    textAlign: "left",
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px 0 rgba(120, 120, 120, 0.37)",
    backdropFilter: "blur(10px)",
    "&::-webkit-backdrop-filter": {
      backdropFilter: "blur(10px)",
    },
    borderRadius: "15px 15px 0 0",
    padding: "20px 15px 10px 20px",
    display: "flex",
    justifyContent: "space-between",
  },
  mobileTitleText: {
    fontSize: "16px",
    color: "rgb(1 1 1 / 66%)",
  },
  mobileContentBox: {
    padding: "10px 20px",
  },
  mobileContentText: {
    display: "block",
    lineHeight: "35px",
    color: "var(--color-gray)",
    fontSize: "14px",
  },

  // 클로젯
  mobileStyleBookText: {
    fontSize: "16px",
    color: "var(--color-gray)",
    display: "flex",
  },
  mobileStyleBookImageBox: {
    height: "80%",
    padding: "5% 0",
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
  // 클로젯 없을때 프리뷰
  mobileNoClosetBox: {
    textAlign: "center",
    display: "flex",
    padding: "10px",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  mobileNoClosetTextBox: {
    height: "14vh",
    width: "95%",
    display: "flex",
    alignItems: "center",
    whiteSpace: "normal",
    textAlign: "center",
    padding: "5px",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "14px",
  },
  mobileButtonBox: {
    height: "8vh",
  },

  // 푸터
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
