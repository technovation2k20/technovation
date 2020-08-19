import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import "./Card.css";

const Card = (props) => {
  const [animate, setAnimate] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div
        id="product-card"
        className={animate ? "animate" : ""}
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
      >
        <div className="shadow"></div>
        <div
          style={{
            height: "300px",
            backgroundImage: `url(${props.imgSrc})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="image_overlay"></div>
        <Link to={`/event/${props.event}`} style={{ textDecoration: "none" }}>
          <div id="view_details">View details</div>
        </Link>
        <div className="stats">
          <div className="stats-container">
            <span className="product_name">{props.name}</span>
            <p>{props.altName}</p>
            <div className="product-options">
              <strong>ABOUT</strong>
              <span>{props.desc}</span>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Card;
