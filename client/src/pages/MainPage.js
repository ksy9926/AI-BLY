import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import StarsIcon from '@material-ui/icons/Stars';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: "center",
      padding: theme.spacing(1),
      flexGrow: 1,
    },
    navbar: {
      height: "6vh",
      textAlign: "right",
      backgroundColor: "#f8f8f8",
      padding: "10px",
    },
    recommendMessageBox: {
      height: "6vh",
      textAlign: "left",
    },
    recommendMessage: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    recommendImage: {
      height: "34vh",
    },
    categoryContainer: {
        display: "flex",
        height: "8vh",
        borderTop: "1px solid #E0E3DA",
        borderBottom: "1px solid #E0E3DA",
        whiteSpace: "nowrap",
        overflowX: "auto",
        overflowY: "hidden"
    },
    categoryButton: {
        border: "1px solid #e6e6e6",
        borderRadius: "15px",
        margin: "10px 6px",
        backgroundColor: "#E0E3DA",
        fontWeight: "700",
        fontSize: "14px",
        paddingTop: "2px",
        paddingBottom: "2px",
        "&:hover, &:focus, &:active": {
            backgroundColor: "#566270",
            color: "white"
          },
    }
  }));

function MainPage() {
  const classes = useStyles();
  const [favorite, setFavorite] = useState({});
  const categories = ["전체", "상의", "하의", "드레스", "스커트", "팬츠", "자켓"].map((category, idx) => (
      <Button className={classes.categoryButton} key={idx}>{category}</Button>
  ))

  const handleChange = (event) => {
    setFavorite({ ...favorite, [event.target.name]: event.target.checked });
  };

  const images = [1,2,3,4,5,6].map(id=>(
    <Grid style={{textAlign:"left", padding:"10px"}} key={id} item xs={6}>
      <img style={{height:"75%", width:"90%"}} src="images/clothes.png" alt="옷"></img>
      <Box style={{display:"flex", justifyContent:"space-between", fontSize:"25px"}}>
        <Box style={{fontWeight:"bold", color:"red"}}>33%</Box>
        <Box style={{fontWeight:"bold"}}>57,300</Box>
      </Box>
      <Box style={{display:"flex", justifyContent:"space-between"}}>
        <Box>노드스트롬</Box>
        <Box>
          <Checkbox
          style={{padding:"0"}}
          checked={favorite.checkedA}
          onChange={handleChange}
          icon={<StarsIcon style={{color: "#E0E3DA"}}/>}
          checkedIcon={<StarsIcon style={{color: "#A593E0"}}/>}
          name="checkedA"
          />
        </Box>
      </Box>
    </Grid>
  ))

  return (
    <>
    <Grid className={classes.navbar}>
      <AccountCircleIcon style={{fontSize:"40px"}}></AccountCircleIcon>
    </Grid>
    <Grid className={classes.root}>  
      <Grid className={classes.recommendMessageBox}>
        <Box className={classes.recommendMessage}>당신(닉네임) 만을 위한 추천 아이템 :)</Box>
      </Grid>
      <Grid container className={classes.recommendImage}>
          <Grid style={{padding:"10px"}} item xs={6}>
              <img style={{height:"100%", width:"100%"}} src="images/clothes.png" alt="clothes"/>
          </Grid>
          <Grid style={{padding: "10px", textAlign: "left"}} item xs={6}>
          <Box style={{height:"15%", display:"flex", justifyContent:"space-between"}}>
              <Box style={{fontWeight:"bold", fontSize:"18px"}}>노드스트롬</Box>
              <Box>
                <Checkbox
                style={{padding:"0"}}
                checked={favorite.checkedA}
                onChange={handleChange}
                icon={<StarsIcon style={{color: "#E0E3DA"}}/>}
                checkedIcon={<StarsIcon style={{color: "#A593E0"}}/>}
                name="checkedA"
                />
              </Box>
            </Box>
            <Box style={{height:"60%"}}>Zella Live In High Walst Pocket 7/8 Leggings</Box>
            <Box style={{display:"flex", justifyContent:"space-between", fontSize:"25px"}}>
              <Box style={{fontWeight:"bold", color:"red"}}>33%</Box>
              <Box style={{fontWeight:"bold"}}>57,300</Box>
            </Box>
          </Grid>
      </Grid>
    </Grid>
      <Grid className={classes.categoryContainer}>
          {categories}
      </Grid>
    <Grid className={classes.root}>
      <Grid container>
        {images}
      </Grid>
    </Grid>
    </>
  );
}

export default MainPage;