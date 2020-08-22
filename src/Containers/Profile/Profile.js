import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, MenuItem } from "@material-ui/core";
import "animate.css";

import "../Login/Login.css";
import axios from "../../util/axios";
import { updateProfile } from "../../util/firebase.config";
import { AuthContext } from "../../context/auth-context";

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
}));

const Form = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const auth = useContext(AuthContext);

  const years = [
    {
      value: "1",
      label: "I",
    },
    {
      value: "2",
      label: "II",
    },
    {
      value: "3",
      label: "III",
    },
    {
      value: "4",
      label: "IV",
    },
  ];

  const branches = [
    {
      value: "cse",
      label: "CSE",
    },
    {
      value: "elex",
      label: "ELEX",
    },
    {
      value: "ee",
      label: "EE",
    },
    {
      value: "civil",
      label: "CIVIL",
    },
    {
      value: "ip",
      label: "IP",
    },
    {
      value: "ic",
      label: "IC",
    },
    {
      value: "mech",
      label: "MECH",
    },
  ];

  const [name, setName] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [mothersName, setMothersName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");

  const [editMode, setEditMode] = useState(null);

  useEffect(() => {
    if (auth.user.displayName) {
      setName(auth.user.displayName);
    }
    if (auth.userData) {
      setEditMode(auth.userData.profileId);
      setFathersName(auth.userData.fathersName);
      setMothersName(auth.userData.mothersName);
      setRollNumber(auth.userData.rollNumber);
      setYear(auth.userData.year);
      setBranch(auth.userData.branch);
    }
  }, [auth]);

  const onSubmitFormHandler = async (event) => {
    event.preventDefault();

    $(".form-error").removeClass("form-error");

    var formError = false;

    if (name === "") {
      $("#name").parent().parent().addClass("form-error");
      formError = true;
    }

    if (year === "") {
      $("#year").parent().parent().addClass("form-error");
      formError = true;
    }

    if (branch === "") {
      $("#branch").parent().parent().addClass("form-error");
      formError = true;
    }

    if (!formError) {
      const data = {
        fathersName,
        mothersName,
        rollNumber,
        year,
        branch,
      };

      if (editMode) {
        axios.patch(
          `/userData/${auth.user.uid}/profileData/${editMode}.json`,
          data
        );
      } else {
        axios
          .post(`/userData/${auth.user.uid}/profileData.json`, data)
          .then((res) => setEditMode(res.data.name));
      }
      updateProfile(name);
      auth.initData({ ...data, profileId: editMode });
      history.push("/");
    }
  };

  return (
    <div id="login-page">
      <div id="form-head">
        <h1>Profile</h1>
      </div>
      <form className={classes.root} onSubmit={onSubmitFormHandler}>
        <TextField
          className={classes.textField}
          id="name"
          label="NAME"
          fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          className={classes.textField}
          id="fathersName"
          label="FATHER'S NAME"
          fullWidth
          value={fathersName}
          onChange={(event) => setFathersName(event.target.value)}
        />
        <TextField
          className={classes.textField}
          id="mothersName"
          label="MOTHER'S NAME"
          fullWidth
          value={mothersName}
          onChange={(event) => setMothersName(event.target.value)}
        />
        <TextField
          className={classes.textField}
          id="rollNumber"
          label="AKTU ROLL NUMBER"
          fullWidth
          value={rollNumber}
          onChange={(event) => setRollNumber(event.target.value)}
        />
        <TextField
          className={classes.textField}
          id="year"
          select
          label="YEAR"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        >
          {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.textField}
          id="branch"
          select
          label="BRANCH"
          value={branch}
          onChange={(event) => setBranch(event.target.value)}
        >
          {branches.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <Button
          className={classes.button + " " + classes.signIn}
          variant="contained"
          size="large"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
