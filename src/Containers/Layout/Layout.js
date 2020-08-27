import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FontFaceObserver from "fontfaceobserver/fontfaceobserver";
import { Create } from "@material-ui/icons";
import $ from "jquery";

import { version } from "../../../package.json";
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
  }, [auth, cart]);

  useEffect(() => {
    if (auth.user && !auth.userData) {
      axios
        .get(`/user/${auth.user.uid}/`)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            auth.initData(res.data);
          } else {
            const userData = {
              uid: auth.user.uid,
              displayName: auth.user.displayName,
              photoURL: auth.user.photoURL,
              email: auth.user.email,
              emailVerified: auth.user.emailVerified,
            };
            axios.post(`/user/${auth.user.uid}`, userData);
            auth.initData(userData);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [auth]);

  useEffect(() => {
    if (!events.events) events.initializeEvents();
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
          <div style={{ position: "fixed", bottom: "0", right: "0" }}>
            {version}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
