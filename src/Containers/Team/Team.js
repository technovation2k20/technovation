import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";

import axios from "../../util/axios";
import { useStyles } from "../../util/styles";
import "./Team.css";

const Team = () => {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const res = await axios.get("team");
      setData(res.data);
    }
    loadData();
  }, []);

  return (
    data && (
      <div className="container">
        <Typography variant="h3" align="center" className={classes.nav}>
          Lead Team
        </Typography>
        <Grid container spacing={6} style={{ justifyContent: "center" }}>
          {data
            .filter((p) => p.catagory === "lead-team")
            .map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <div className="flipper">
                  <div className="front">
                    <img
                      src={p.img}
                      alt={p.name}
                      width="150px"
                      height="150px"
                    />
                  </div>
                  <div className="back">
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        marginTop: "32px",
                        color: "#333333",
                      }}
                    >
                      {p.phone}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        color: "#333333",
                      }}
                    >
                      {p.year}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        marginTop: "2px",
                        color: "#cccccc",
                      }}
                    >
                      {p.branch}
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ paddingTop: "1rem" }}
                >
                  {p.name}
                </Typography>
              </Grid>
            ))}
        </Grid>
        <Typography variant="h3" align="center" className={classes.nav}>
          Web Developers
        </Typography>
        <Grid container spacing={6} style={{ justifyContent: "center" }}>
          {data
            .filter((p) => p.catagory === "web-d")
            .map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <div className="flipper">
                  <div className="front">
                    <img
                      src={p.img}
                      alt={p.name}
                      width="150px"
                      height="150px"
                    />
                  </div>
                  <div className="back">
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        marginTop: "32px",
                        color: "#333333",
                      }}
                    >
                      {p.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        color: "#333333",
                      }}
                    >
                      {p.year}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        marginTop: "2px",
                        color: "#cccccc",
                      }}
                    >
                      {p.branch}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
        <Typography variant="h3" align="center" className={classes.nav}>
          Content Writers
        </Typography>
        <Grid container spacing={6} style={{ justifyContent: "center" }}>
          {data
            .filter((p) => p.catagory === "content-writer")
            .map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <div className="flipper">
                  <div className="front">
                    <img
                      src={p.img}
                      alt={p.name}
                      width="150px"
                      height="150px"
                    />
                  </div>
                  <div className="back">
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        marginTop: "32px",
                        color: "#333333",
                      }}
                    >
                      {p.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        color: "#333333",
                      }}
                    >
                      {p.year}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        marginTop: "2px",
                        color: "#cccccc",
                      }}
                    >
                      {p.branch}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
        <Typography variant="h3" align="center" className={classes.nav}>
          Co-ordinators
        </Typography>
        <Grid container spacing={6} style={{ justifyContent: "center" }}>
          {data
            .filter((p) => p.catagory === "co-ordinator")
            .map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <div className="flipper">
                  <div className="front">
                    <img
                      src={p.img}
                      alt={p.name}
                      width="150px"
                      height="150px"
                    />
                  </div>
                  <div className="back">
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        marginTop: "32px",
                        color: "#333333",
                      }}
                    >
                      {p.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        color: "#333333",
                      }}
                    >
                      {p.year}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "center",
                        display: "block",
                        marginTop: "2px",
                        color: "#cccccc",
                      }}
                    >
                      {p.branch}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    )
  );
};

export default Team;
