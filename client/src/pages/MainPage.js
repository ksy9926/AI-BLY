import React from "react";
import { Grid,Box } from "@material-ui/core";
import useStyles from "../styles/MainPageStyle";
import { Mobile } from "../MediaQuery";
import Navbar from "../components/common/Navbar";
import Infinite from "../components/MainPage/Infinite";
import Category from "../components/MainPage/Category";
import ItemMain from "../components/MainPage/ItemMain";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function MainPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Mobile>
      <Navbar />
      <ItemMain />
      <AppBar className={classes.mobiletabbar} position="static">
        <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Box hidden={value !== 0}>
      <Category />
      <Grid className={classes.mobileRoot} >
        <Grid container>
          <Infinite />
        </Grid>
      </Grid>
      </Box>
      <Box hidden={value !== 1}>
      <Category />

      {/* <Grid className={classes.mobileRoot}>
        <Grid container>
          <Infinite />
        </Grid>
      </Grid> */}
      </Box>
    </Mobile>
  );
}

export default MainPage;
