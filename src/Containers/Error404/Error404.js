import React from "react";
import Typed from "typed.js";

import classes from "./Error404.module.css";

class TypedReactDemo extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        "Oops! It looks like you're lost.<br />^1000" +
          "Sorry about that.<br />^1000" +
          "Let me try and help.<br />^1000" +
          "Go back <a href='/'>home</a> and start over.",
      ],
      typeSpeed: 0,
      showCursor: false,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="type-wrap">
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </div>
    );
  }
}

const Error404 = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.browserBar}>
          <span className={classes.close + " " + classes.button}></span>
          <span className={classes.min + " " + classes.button}></span>
          <span className={classes.max + " " + classes.button}></span>
        </div>
        <div className={classes.text}>
          <TypedReactDemo />
        </div>
      </div>
    </div>
  );
};

export default Error404;
