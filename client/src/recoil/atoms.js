import { atom } from "recoil";

export const usernameState = atom({
  key: "usernameState",
  default: "",
});

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const userState = atom({
  key: "userState",
  default: "",
});

export const categoryKeyState = atom({
  key: "categoryKeyState",
  default: [
    "전체",
    "추천상품",
    "높은가격순",
    "낮은가격순",
    "반팔",
    "긴팔",
    "반팔아우터",
    "아우터",
    "조끼",
    "슬링",
    "반바지",
    "바지",
    "스커트",
    "짧은드레스",
    "드레스",
    "조끼드레스",
    "슬링드레스",
  ],
});

export const categoryDictState = atom({
  key: "categoryListState",
  default: {
    전체: "",
    추천상품: "recommendation",
    높은가격순: "",
    낮은가격순: "",
    반팔: "short sleeve top",
    긴팔: "long sleeve top",
    반팔아우터: "short sleeve outwear",
    아우터: "long sleeve outwear",
    조끼: "vest",
    슬링: "sling",
    반바지: "shorts",
    바지: "trousers",
    스커트: "skirt",
    짧은드레스: "short sleeve dress",
    드레스: "long sleeve dress",
    조끼드레스: "vest dress",
    슬링드레스: "sling dress",
  },
});

export const categoryState = atom({
  key: "categoryState",
  default: "",
});

export const pageState = atom({
  key: "pageState",
  default: 1,
});

export const nextPageState = atom({
  key: "nextPageState",
  default: "",
});

export const countAllState = atom({
  key: "countAllState",
  default: 0,
});

export const styleState = atom({
  key: "styleState",
  default: [],
});

