import React, { useState } from "react";
import clsx from "clsx";
import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });
  const history = useHistory();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: list === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {localStorage.getItem("jwt") === null ? (
          <Box>
            <Button
              onClick={() => {
                localStorage.clear();
                history.push("/login");
              }}
            >
              로그인
            </Button>
            <Button
              onClick={() => {
                localStorage.clear();
                history.push("/register");
              }}
            >
              회원가입
            </Button>
          </Box>
        ) : (
          <Button
            onClick={() => {
              localStorage.clear();
              history.push("/main");
            }}
          >
            로그아웃
          </Button>
        )}
      </List>
      <Divider />
      <List>
        <ListItem
          onClick={() => {
            history.push("/main");
          }}
          button
          key="쇼핑 홈"
        >
          <ListItemText primary="쇼핑 홈" />
        </ListItem>
        <ListItem
          onClick={() => {
            history.push("/mypage");
          }}
          button
          key="마이 페이지"
        >
          <ListItemText primary="마이페이지" />
        </ListItem>
      </List>

        <Divider />
        <List>

        <ListItem
          onClick={() => {
            history.push("/closet");
          }}
          button
          key="클로젯"
        >
          <ListItemText primary="클로젯" />
        </ListItem>
      <ListItem
        onClick={() => {
          history.push("/mypage");
        }}
        button
        key="스타일 선택"
      >
        <ListItemText primary="스타일 선택" />
      </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem onClick={() => {}} button key="최근 본 상품">
          <ListItemText primary="최근 본 상품" />
        </ListItem>
        <ListItem
          onClick={() => {
            history.push("/");
          }}
          button
          key="찜한 상품"
        >
          <ListItemText primary="찜한 상품" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment key="right">
      <MenuIcon onClick={toggleDrawer("right", true)} />
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
}
