import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

import { AuthContext } from "../../context/auth-context";
import classes from "./Dashboard.module.css";

const Dashboard = (props) => {
  const auth = useContext(AuthContext);

  return (
    <div className={classes.wrapper}>
      {auth.user ? (
        <>
          <div className={classes.left}>
            {auth.user.photoURL ? (
              <img
                src={auth.user.photoURL}
                alt="userPhoto"
                width="100"
                height="100"
              />
            ) : (
              <AccountCircle style={{ fontSize: "100px" }} />
            )}
            <h4>
              {auth.user.displayName ? auth.user.displayName : "Your Name"}
            </h4>
          </div>
          <div className={classes.right}>
            <div className={classes.info}>
              <h3>Information</h3>
              <div className={classes.info_data}>
                <div className={classes.data}>
                  <h4>Email</h4>
                  <p>
                    {auth.user.email ? auth.user.email : "your-name@gmail.com"}
                  </p>
                </div>
                <div className={classes.data}>
                  <h4>Father's Name</h4>
                  <p>
                    {auth.userData && auth.userData.fathersName
                      ? auth.userData.fathersName
                      : "Father's Name"}
                  </p>
                </div>
                <div className={classes.data}>
                  <h4>Mother's Name</h4>
                  <p>
                    {auth.userData && auth.userData.mothersName
                      ? auth.userData.mothersName
                      : "Mother's Name"}
                  </p>
                </div>
                <div className={classes.data}>
                  <h4>RollNumber</h4>
                  <p>
                    {auth.userData && auth.userData.rollNumber
                      ? auth.userData.rollNumber
                      : "000000000"}
                  </p>
                </div>
                <div className={classes.data}>
                  <h4>UID</h4>
                  <p>{auth.user ? auth.user.uid : "000000000"}</p>
                </div>
                <div className={classes.data}>
                  <h4>Year</h4>
                  <p>
                    {auth.userData && auth.userData.year
                      ? auth.userData.year
                      : "0"}
                  </p>
                </div>
                <div className={classes.data}>
                  <h4>Branch</h4>
                  <p>
                    {auth.userData && auth.userData.branch
                      ? auth.userData.branch
                      : "none"}
                  </p>
                </div>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", width: "fit-content" }}
                >
                  <Button variant="contained" size="large">
                    Edit
                  </Button>
                </Link>
              </div>
            </div>

            {/* <div className={classes.projects}>
              <h3>Events</h3>
              <div className={classes.projects_data}>
                <div className={classes.data}>
                  <h4>Selfivation</h4>
                  <p>starts in 2 days</p>
                </div>
                <div className={classes.data}>
                  <h4>Riddler's Quest</h4>
                  <p>starts in 5 days</p>
                </div>
                <Link to="/your-events" style={{ textDecoration: "none" }}>
                  <Button variant="contained" size="large">
                    View All
                  </Button>
                </Link>
              </div>
            </div> */}
          </div>
        </>
      ) : (
        <>
          <div className={classes.left}>
            <AccountCircle style={{ fontSize: "100px" }} />
          </div>
          <div
            className={classes.right}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={classes.info}>
              <div className={classes.info_data}>
                <div className={classes.data}>
                  <h4>
                    <Link to="/login">LOGIN</Link> TO CONTINUE
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
