import React, { useContext, useEffect, useState } from "react";

import axios from "../../util/axios";
import { AuthContext } from "../../context/auth-context";

import "../Cart/Cart.css";

const YourEvents = (props) => {
  const auth = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const res = await axios.get(`/userData/${auth.user.uid}/events.json`);
      for (let i in res.data) {
        setData(res.data[i]);
      }
    }
    loadData();
  }, [auth.user.uid]);

  return (
    <>
      <h1 style={{ fontSize: "3rem", fontWeight: "300" }}>Your Events</h1>
      <div className="shopping-cart">
        {data && data.length ? (
          <>
            <div className="column-labels">
              <label className="product-image">Image</label>
              <label className="product-details">Product</label>
            </div>

            {data.map((ci, i) => (
              <div className="product" key={i}>
                <div className="product-image">
                  <img src={ci.bannerImg} alt={ci.altName} width="100px" />
                </div>
                <div className="product-details">
                  <div className="product-title">{ci.title}</div>
                  <p className="product-description">{ci.altName}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <span className="empty">No items here yet.</span>
        )}
      </div>
    </>
  );
};

export default YourEvents;
