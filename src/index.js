import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/auth-context";
import CartContextProvider from "./context/cart-context";
import EventContextProvider from "./context/event-context";
import LoaderContextProvider from "./context/loader-context";

ReactDOM.render(
  <BrowserRouter>
    <EventContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <LoaderContextProvider>
            <App />
          </LoaderContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </EventContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
