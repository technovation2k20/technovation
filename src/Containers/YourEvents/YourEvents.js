import React, { useContext } from "react";

import { CartContext } from "../../context/cart-context";

import "../Cart/Cart.css";

const YourEvents = (props) => {
  const cart = useContext(CartContext);

  const data = cart.myEvents;

  return (
    <>
      <h1 style={{ fontSize: "3rem", fontWeight: "300" }}>Your Events</h1>
      <div className="shopping-cart">
        {data && data.length ? (
          <>
            <div className="column-labels">
              {/* <label className="product-image">Image</label> */}
              <label className="product-details">Product</label>
            </div>

            {data.map((ci, i) => (
              <div className="product" key={i}>
                {/* <div className="product-image">
                  <img src={ci.imageUrl} alt={ci.altName} width="100px" />
                </div> */}
                <div className="product-details">
                  <div className="product-title">{ci.eventId.title}</div>
                  <p className="product-description">{ci.eventId.altName}</p>
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
