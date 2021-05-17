import React, { useState } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  navbar: {
    height: "6vh",
    textAlign: "right",
  },
  navbarSkip: {
    fontWeight: "bold",
    color: "#a5a5a5",
    textDecoration: "none",
  },
  navbarSelect: {
    fontWeight: "bold",
    color: "#3A51A4",
    textDecoration: "none",
  },
  infoMessageBox: {
    height: "13vh",
    textAlign: "left",
    paddingBottom: "10px",
  },
  infoMessage: {
    fontSize: "18px",
    fontWeight: "900"
  },
  infoMiniMessage: {
    color: "#7788b9",
    fontSize: "14px",
    fontWeight: "bold",
    padding: theme.spacing(1)
  },
  imageContainer: {
    height: "80vh",
  },
  imageButton: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    border: "2px solid #e6e6e6",
    borderRadius: "10%",
    position: "relative",
    "&:hover, &:focus, &:active": {
      border: "2px solid lightgreen",
      outline: "none",
    },
  },
}));

function LandingPage() {
  const classes = useStyles();
  const [select, setSelect] = useState(0);
  const [state, setState] = React.useState({});

  const checkList = [
    'checkedA', 'checkedB', 'checkedC', 'checkedD', 'checkedE',
    'checkedF', 'checkedG', 'checkedH', 'checkedI'
  ]

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    event.target.checked ? setSelect(select+1): setSelect(select-1);
  };

  const images = checkList.map((check, idx) => (
    <Grid key={idx} item xs={4}>
      <Button className={classes.imageButton} name={check}>
        <img style={{height:"100%", width:"100%"}} src="images/clothes.png" alt="옷"></img>
        <FormControlLabel style={{position:"absolute", bottom:"0%", left:"70%"}} control={
          <GreenCheckbox
            checked={state.check}
            onChange={handleChange}
            name={check}
          />
        } />
      </Button>
    </Grid>
  ))

  return (
    <Grid className={classes.root}>
      <Grid className={classes.navbar}>
        {select >= 3 ? 
        <a href="/main" className={classes.navbarSelect}>선택하기</a> :
        <a href="/main" className={classes.navbarSkip}>건너뛰기</a> }
      </Grid>
      <Grid className={classes.infoMessageBox}>
        <Box className={classes.infoMessage}>스타일을 3개 이상 고르면<br />취향에 맞는 옷들을 추천해드릴게요 !</Box>
        <Box className={classes.infoMiniMessage}>많이 고르실수록 추천이 더욱더 정확해져요</Box>
      </Grid>
      <Grid container spacing={2} className={classes.imageContainer}>
        {images}
      </Grid>
    </Grid>
  );
}

export default LandingPage;