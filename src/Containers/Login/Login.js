import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import $ from "jquery";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Tabs,
  Tab,
  Checkbox,
  Typography,
} from "@material-ui/core";
import GoogleButton from "react-google-button";

import {
  signin,
  signup,
  signinWithGoogle,
  signinWithFacebook,
} from "../../util/firebase.config";
import TabPanel from "../../Components/TabPanel/TabPanel";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "0.5vh",
      minWidth: "25ch",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
  },
  textField: {
    "& > *": {
      fontWeight: 500,
      minHeight: "40px",
      padding: "8px 5px",
      margin: "5px 0 5px",
      color: "rgba(0, 0, 0, 0.66)",
    },
    "& > * > fieldset": {
      marginTop: "30px",
    },
    "& > *.Mui-focused": {
      fontWeight: "600",
      color: "#000000",
    },
    "& > *.MuiInput-underline:before, & > *.MuiInput-underline:after": {
      borderBottom: "2px solid black",
    },
    "&.form-error": {
      animation: "error 0.8s ease",
    },
    "&.form-error > label, &.form-error > *::before, &.form-error > *::after": {
      color: "red",
      borderBottomColor: "red",
    },
  },
  table: {
    maxHeight: "80%",
    overflow: "auto",
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  button: {
    display: "flex",
    margin: "auto",
    marginTop: theme.spacing(5),
    width: theme.spacing(10),
    fontSize: theme.spacing(1.75),
    fontWeight: 500,
    textTransform: "uppercase",
    padding: 0,
    color: "#ffffff",
    lineHeight: "32px",
    cursor: "pointer",
    boxShadow:
      "0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149)",
    letterSpacing: "0.25px",
    alignItems: "center",
    height: theme.spacing(6),
  },
  signIn: {
    backgroundColor: "#ff9a8b",
    backgroundImage:
      "linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%)",
    borderRadius: theme.spacing(3),
  },
  facebook: {
    borderRadius: "4px",
    maxWidth: "400px",
    minWidth: "240px",
    backgroundColor: "#1877f2",
    backgroundImage: "none",
    textTransform: "capitalize",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: "bold",
    lineHeight: "1.28",
    fontSize: "15px",
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMode, setLoginMode] = useState(1);

  const isValidEmail = (email) => {
    // eslint-disable-next-line
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    $(".form-error").removeClass("form-error");

    var formError = false;

    if (email === "" || !isValidEmail(email)) {
      $("#email").parent().parent().addClass("form-error");
      formError = true;
    }
    if (password === "") {
      $("#password").parent().parent().addClass("form-error");
      formError = true;
    }

    if (!formError) {
      if (loginMode) {
        signin(email, password);
      } else {
        signup(email, password);
      }
      history.push("/");
    }
  };

  const form = (
    <form
      id="page1"
      className={classes.root + " pages"}
      onSubmit={onSubmitFormHandler}
      autoComplete="off"
    >
      <TextField
        className={classes.textField}
        id="email"
        label="EMAIL"
        fullWidth
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        className={classes.textField}
        type="password"
        id="password"
        label="PASSWORD"
        fullWidth
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Checkbox color="primary" style={{ minWidth: "0" }} />
      <Typography variant="h6" style={{ display: "contents" }}>
        I have read the <Link to="/tnc">Terms&Conditions</Link> and{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Typography>
      <Button
        className={classes.button + " " + classes.signIn}
        variant="contained"
        size="large"
        color="primary"
        type="submit"
      >
        {loginMode ? "Sign In" : "Sign Up"}
      </Button>
      <GoogleButton
        className={classes.button}
        label="SIGN IN WITH GOOGLE"
        type="light"
        onClick={() => {
          signinWithGoogle(() => history.push("/"));
        }}
      />
      <Button
        className={classes.button + " " + classes.facebook}
        variant="contained"
        size="large"
        color="primary"
        onClick={() => {
          signinWithFacebook(() => history.push("/"));
        }}
      >
        <img
          className="img"
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/szGrb_tkxMW.png"
          alt="fb_logo"
          width="24"
          height="24"
          style={{ marginRight: "1rem" }}
        />
        Continue with Facebook
      </Button>
    </form>
  );

  return (
    <div id="login-page">
      <div id="form-head">
        <Tabs
          value={loginMode}
          onChange={(event, newValue) => setLoginMode(newValue)}
          aria-label="simple tabs example"
        >
          <Tab
            label="Sign Up"
            id="simple-tab-0"
            aria-controls="simple-tabpanel-0"
          />
          <Tab
            label="Sign In"
            id="simple-tab-1"
            aria-controls="simple-tabpanel-1"
          />
        </Tabs>
      </div>
      <TabPanel value={loginMode} index={0}>
        {form}
      </TabPanel>
      <TabPanel value={loginMode} index={1}>
        {form}
      </TabPanel>
    </div>
  );
};

export default Form;
