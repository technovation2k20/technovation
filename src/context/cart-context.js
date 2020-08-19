import React, { createContext, useState } from "react";

import axios from "../util/axios";

export const CartContext = createContext({
  cart: null,
  initializeCart: () => {},
  addItem: () => {},
  removeItem: () => {},
});

const CartContextProvider = (props) => {
  const [cart, setCart] = useState(null);
  const [url, setUrl] = useState(null);

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
              setUrl(`/userData/${user.uid}/cart/${i}.json`);
            }
          }
        })
        .catch((err) => console.log(err));
    } else {
      setCart([]);
    }
  };

  const addItemHandler = (user, event) => {
    const updatedCart = [...cart];
    updatedCart.push(event);
    setCart(updatedCart);
    if (updatedCart.length === 1) {
      axios
        .post(`/userData/${user.uid}/cart.json`, updatedCart)
        .catch((err) => console.log(err));
    } else {
      axios.put(url, updatedCart).catch((err) => console.log(err));
    }
  };

  const removeItemHandler = (event) => {
    const updatedCart = cart.filter((e) => e.title !== event.title);
    setCart(updatedCart);
    axios.put(url, updatedCart).catch((err) => console.log(err));
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        initializeCart: initializeCartHandler,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
