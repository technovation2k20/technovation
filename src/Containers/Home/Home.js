import React from "react";
import { Grid } from "@material-ui/core";

import { useStyles } from "../../util/styles";
import Dashboard from "../../Components/Dashboard/Dashboard";
import NoticeBoard from "../../Components/NoticeBoard/NoticeBoard";

const Home = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      spacing={2}
      className={classes.grid}
      style={{ marginTop: "0", overflowY: "auto", height: "85vh" }}
    >
      {/* <Grid item xs={12} sm={12} md={12}>
        <Paper className={classes.paper} />
      </Grid> */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Dashboard />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        style={{ display: "flex", alignItems: "center" }}
      >
        <NoticeBoard />
      </Grid>
    </Grid>
  );
};

export default Home;
