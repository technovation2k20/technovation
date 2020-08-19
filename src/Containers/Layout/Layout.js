import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FontFaceObserver from "fontfaceobserver/fontfaceobserver";
import { Create } from "@material-ui/icons";
import $ from "jquery";

import { onAuthStateChanged } from "../../util/firebase.config";
import { AuthContext } from "../../context/auth-context";
import { CartContext } from "../../context/cart-context";
import { EventContext } from "../../context/event-context";
import { useStyles } from "../../util/styles";
import axios from "../../util/axios";

import Header from "../../Components/Header/Header";
import Background from "../../Components/Background/Background";
import Nav from "../../Components/Nav/Nav";
import Title from "../../Components/Title/Title";
import "./Layout.css";

const Layout = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);
  const events = useContext(EventContext);

  onAuthStateChanged((user) => {
    if (user) {
      auth.login(user);
    } else {
      auth.logout();
    }
  });

  const handleDrawerOpen = () => {
    $("#root").addClass("open");
  };

  const handleDrawerClose = () => {
    $("#root").removeClass("open");
  };

  const toggleForm = () => {
    $("#main-container").addClass("expand");
    $("#main-container").children().addClass("expand");
    $("#root").addClass("expand");
  };

  useEffect(() => {
    const playObserver = new FontFaceObserver("Play");
    const tangerineObserver = new FontFaceObserver("Tangerine");
    const robotoObserver = new FontFaceObserver("Roboto");

    Promise.all([
      playObserver.load(),
      tangerineObserver.load(),
      robotoObserver.load(),
    ]).then(() => {
      document.getElementById("root").className += " fonts-loaded";
      document.getElementById("title").className += " fonts-loaded";
    });
    return () => {
      $("#root").removeClass(".fonts-loaded");
      $("#title").removeClass(".fonts-loaded");
    };
  }, []);

  useEffect(() => {
    if (history.location.pathname !== "/") {
      $("#main-container").addClass("expand");
      $("#main-container").children().addClass("expand");
      $("#root").addClass("expand");
    }
  }, [history.location.pathname]);

  useEffect(() => {
    if (auth.user && !cart.cart) cart.initializeCart(auth.user);
  }, [auth.user, cart]);

  useEffect(() => {
    if (auth.user && !auth.userData) {
      axios
        .get(`/userData/${auth.user.uid}/profileData.json`)
        .then((res) => {
          if (res.data) {
            for (let i in res.data) {
              auth.initData({
                profileId: i,
                fathersName: res.data[i].fathersName,
                mothersName: res.data[i].mothersName,
                rollNumber: res.data[i].rollNumber,
                branch: res.data[i].branch,
                year: res.data[i].year,
              });
            }
          } else {
            history.push("/profile");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [auth, history]);

  useEffect(() => {
    events.initializeEvents();
  }, [events]);

  return (
    <>
      <Nav handleDrawerClose={handleDrawerClose} />
      <Background />
      <Title />
      <main>
        <Header classes={classes} handleDrawerOpen={handleDrawerOpen} />
        <div id="main-container">
          <Create
            id="form-open"
            fontSize="large"
            style={{ marginTop: "20%", color: "black" }}
            onClick={toggleForm}
          />
          <div id="main-content">{props.children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
