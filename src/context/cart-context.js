import React, { createContext, useState } from "react";

import axios from "../util/axios";

export const CartContext = createContext({
  cart: null,
  myOrders: null,
  initializeCart: () => {},
  addItem: () => {},
  removeItem: () => {},
  updatemyOrders: () => {},
});

const CartContextProvider = (props) => {
  const [cart, setCart] = useState(null);
  const [myOrders, setMyOrders] = useState(null);
  const [cartURL, setCartURL] = useState(null);
  const [myOrdersURL, setMyOrdersURL] = useState(null);

  const initializeCartHandler = (user) => {
    if (user) {
      setCartURL(`cart/${user.uid}`);
      setMyOrdersURL(`checkout/${user.uid}`);
      axios
        .get(cartURL)
        .then((res) => {
          if (res.data) {
            setCart(res.data);
          } else {
            setCart([]);
          }
        })
        .catch((err) => console.log(err));
      const orders = [];
      axios
        .get(`orders/${user.uid}`)
        .then((res) => {
          if (res.data) {
            for (let i in res.data) {
              const events = res.data[i].events.items;
              for (let j in events) {
                orders.push({ eventId: events[j].eventId });
              }
            }
            setMyOrders(orders);
          } else {
            setMyOrders([]);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setCart([]);
      setMyOrders([]);
    }
  };

  const addItemHandler = (event) => {
    const updatedCart = [...cart];
    updatedCart.push({ eventId: event });
    setCart(updatedCart);
    axios.post(cartURL, updatedCart).catch((err) => console.log(err));
  };

  const removeItemHandler = (event) => {
    const updatedCart = cart.filter(
      (e) => e.eventId.title !== event.eventId.title
    );
    setCart(updatedCart);
    axios.post(cartURL, updatedCart).catch((err) => console.log(err));
  };

  const updateEvents = () => {
    const updatedEvent = [...myOrders, ...cart];
    setMyOrders(updatedEvent);
    setCart([]);
    axios
      .get(myOrdersURL)
      .then(() => {
        setCartURL(null);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        myEvents: myOrders,
        initializeCart: initializeCartHandler,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        updatemyOrders: updateEvents,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
