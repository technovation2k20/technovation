import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Menu, AddShoppingCart } from "@material-ui/icons";

import { AuthContext } from "../../context/auth-context";
import { logout } from "../../util/firebase.config";
// import Cart from "../Cart/Cart";

export default function Header(props) {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    logout();
    history.push("/");
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(props.classes.appBar, {
        [props.classes.appBarShift]: props.open,
      })}
      id="appbar"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={props.classes.menuButton}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={props.classes.title} id="title">
          <Link to="/">TECHNOVATION</Link>
        </Typography>
        {auth.user ? (
          <>
            {/* <Cart /> */}
            <Link to="/cart">
              <IconButton
                color="inherit"
                edge="end"
                className={props.classes.menuButton}
              >
                <AddShoppingCart />
              </IconButton>
            </Link>
            <Button
              color="inherit"
              onClick={logoutHandler}
              className={props.classes.login}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" className={props.classes.login}>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
