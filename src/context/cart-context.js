import React, { createContext, useState } from "react";

import axios from "../util/axios";

export const CartContext = createContext({
  cart: null,
  myEvents: null,
  initializeCart: () => {},
  addItem: () => {},
  removeItem: () => {},
  updateMyEvents: () => {},
});

const CartContextProvider = (props) => {
  const [cart, setCart] = useState(null);
  const [myEvents, setMyEvents] = useState(null);
  const [cartURL, setCartURL] = useState(null);
  const [myEventsURL, setMyEventsURL] = useState(null);

  const initializeCartHandler = (user) => {
    if (user) {
      axios
        .get(`/userData/${user.uid}/cart.json`)
        .then((res) => {
          if (!res.data) {
            setCart([]);
          } else {
            for (let i in res.data) {
              setCart(res.data[i]);
              setCartURL(`/userData/${user.uid}/cart/${i}.json`);
            }
          }
        })
        .catch((err) => console.log(err));
      axios
        .get(`/userData/${user.uid}/events.json`)
        .then((res) => {
          if (!res.data) {
            setMyEvents([]);
          } else {
            for (let i in res.data) {
              setMyEvents(res.data[i]);
              setMyEventsURL(`/userData/${user.uid}/events/${i}.json`);
            }
          }
        })
        .catch((err) => console.log(err));
    } else {
      setCart([]);
      setMyEvents([]);
    }
  };

  const addItemHandler = (user, event) => {
    const updatedCart = [...cart];
    updatedCart.push(event);
    setCart(updatedCart);
    if (updatedCart.length === 1) {
      axios
        .post(`/userData/${user.uid}/cart.json`, updatedCart)
        .then((res) => {
          setCartURL(`/userData/${user.uid}/cart/${res.data.name}.json`);
        })
        .catch((err) => console.log(err));
    } else {
      axios.put(cartURL, updatedCart).catch((err) => console.log(err));
    }
  };

  const removeItemHandler = (event) => {
    const updatedCart = cart.filter((e) => e.title !== event.title);
    setCart(updatedCart);
    axios.put(cartURL, updatedCart).catch((err) => console.log(err));
  };

  const updateEvents = (user) => {
    const updatedEvent = [...myEvents, ...cart];
    if (myEvents && myEvents.length > 0) {
      axios
        .put(myEventsURL, updatedEvent)
        .then(() => {
          setMyEvents(updatedEvent);
          return axios.delete(`/userData/${user.uid}/cart.json`);
        })
        .then(() => {
          setCart([]);
          setCartURL(null);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`/userData/${user.uid}/events.json`, updatedEvent)
        .then((res) => {
          setMyEvents(updatedEvent);
          setMyEventsURL(`/userData/${user.uid}/events/${res.data.name}.json`);
        })
        .then((res) => {
          axios.delete(`/userData/${user.uid}/cart.json`);
          setCart([]);
          setCartURL(null);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        myEvents: myEvents,
        initializeCart: initializeCartHandler,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        updateMyEvents: updateEvents,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
