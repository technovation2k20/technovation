import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
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
      display: "inline-flex",
      margin: "auto",
      marginTop: theme.spacing(5),
      width: theme.spacing(10),
      fontSize: theme.spacing(1.75),
      fontWeight: 500,
      textTransform: "uppercase",
      padding: 0,
      color: "#ffffff",
      backgroundColor: "#ff9a8b",
      backgroundImage:
        "linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%)",
      borderRadius: theme.spacing(3),
      lineHeight: "32px",
      cursor: "pointer",
      boxShadow:
        "0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149)",
      letterSpacing: "0.25px",
      alignItems: "center",
      height: theme.spacing(6),
    },
    grid: {
      height: "100%",
    },
    paper: {
      height: "100%",
      width: "100%",
      padding: "1rem",
      backgroundColor: "#ccc !important",
    },
    appBar: {
      width: "100%",
      zIndex: theme.zIndex.drawer,
      color: "black",
      backgroundColor: "white !important",
      fontSize: "2rem",
    },
    menuButton: {
      color: "black !important",
      "& svg": {
        width: "7vw",
        height: "7vw",
      },
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
      "&.fonts-loaded": {
        fontFamily: "Play, sans-serif",
      },
      "& a": {
        fontWeight: "700",
        fontSize: "7vw",
        textDecoration: "none",
        color: "black",
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    login: {
      "& a, & span": {
        fontSize: "4vw",
        textDecoration: "none",
        color: "black",
      },
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
    nav: {
      display: "flex !important",
      flexDirection: "column",
      fontFamily: "Play !important",
      fontSize: "7vw !important",
      "& a": {
        color: "white",
        textDecoration: "none",
      },
    },
    "@media (min-width: 600px)": {
      title: {
        "& a": {
          fontSize: "42px",
        },
      },
      nav: {
        fontSize: "42px !important",
      },
      login: {
        "& a, & span": {
          fontSize: "1.5rem",
        },
      },
      menuButton: {
        "& svg": {
          width: "35px",
          height: "35px",
        },
      },
    },
  };
});

export const useStylesFacebook = makeStyles((theme) => ({
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));
