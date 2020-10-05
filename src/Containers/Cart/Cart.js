import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

import "./Cart.css";
import { CartContext } from "../../context/cart-context";

const Cart = (props) => {
  const cart = useContext(CartContext);
  const history = useHistory();

  const onSubmitHandler = () => {
    cart.updatemyOrders();
    history.push("/your-events");
  };

  return (
    <>
      <h1 style={{ fontSize: "3rem", fontWeight: "300" }}>Cart</h1>
      <div className="shopping-cart">
        {cart.cart && cart.cart.length ? (
          <>
            <div className="column-labels">
              {/* <label className="product-image">Image</label> */}
              <label className="product-details">Product</label>
              {/* <label className="product-price">Price</label> */}
              <label className="product-removal">Remove</label>
            </div>

            {cart.cart.map((ci, i) => (
              <div className="product" key={i}>
                {/* <div className="product-image">
                  <img src={ci.imageUrl} alt={ci.altName} width="100px" />
                </div> */}
                <div className="product-details">
                  <div className="product-title">{ci.eventId.title}</div>
                  <p className="product-description">{ci.eventId.altName}</p>
                </div>
                {/* <div className="product-price">{ci.price}</div> */}
                <div className="product-removal">
                  <button
                    className="remove-product"
                    onClick={() => cart.removeItem(ci)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <span className="empty">No items in cart.</span>
        )}
      </div>

    
       {cart.cart && cart.cart.length ? (
        <Button
          variant="contained"
          size="large"
          className="checkout"
          onClick={onSubmitHandler}
        >
          Register
        </Button>
      ) : (
        <Button
          variant="contained"
          size="large"
          className="checkout"
          onClick={onSubmitHandler}
          disabled
        >
          Register
        </Button>
      )}
      )}
    </>
  );
};

export default Cart;
