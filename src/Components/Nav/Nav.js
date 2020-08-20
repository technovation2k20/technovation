import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import { useStyles } from "../../util/styles";
import { AuthContext } from "../../context/auth-context";
import "./Nav.css";

const NewNav = (props) => {
  const classes = useStyles();
  const auth = useContext(AuthContext);

  return ReactDOM.createPortal(
    <>
      <Close
        fontSize="large"
        onClick={props.handleDrawerClose}
        align="left"
        style={{
          position: "absolute",
          left: "1rem",
          top: "1rem",
          fontSize: "4rem",
          color: "#fff",
          cursor: "pointer",
        }}
      />
      <div className="nav">
        <Button className={classes.nav} onClick={props.handleDrawerClose}>
          <Link to={"/"}>Home</Link>
        </Button>
        <Button className={classes.nav} onClick={props.handleDrawerClose}>
          <Link to={"/events"}>Events</Link>
        </Button>
        <Button className={classes.nav} onClick={props.handleDrawerClose}>
          <Link to={"/team"}>Team</Link>
        </Button>
        <Button className={classes.nav} onClick={props.handleDrawerClose}>
          <Link to={"/schedule"}>Schedule</Link>
        </Button>
        <Button className={classes.nav} onClick={props.handleDrawerClose}>
          <Link to={"/about"}>About</Link>
        </Button>
        {auth.user && (
          <Button className={classes.nav} onClick={props.handleDrawerClose}>
            <Link to={"/your-events"}>Your Events</Link>
          </Button>
        )}
      </div>
    </>,
    document.getElementById("navigation")
  );
};

export default NewNav;
