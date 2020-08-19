import React from "react";
import { Grid, Typography } from "@material-ui/core";

const About = (props) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4">Teacher Co-ordinator:</Typography>
        <Typography variant="h6">Indu Bhusan Dubey</Typography>
        <Typography variant="h4">Student Co-ordinator:</Typography>
        <Typography variant="h6">Manish Sharma</Typography>
        <Typography variant="h4">Email Id:</Typography>
        <Typography variant="h6">technovation38@gmail.com</Typography>
      </Grid>
      <Grid item xs={12} md={6}></Grid>
    </Grid>
  );
};

export default About;
