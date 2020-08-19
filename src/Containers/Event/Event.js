import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Close } from "@material-ui/icons";
// import $ from "jquery";

import "./Event.css";
import { AuthContext } from "../../context/auth-context";
import { CartContext } from "../../context/cart-context";
import { EventContext } from "../../context/event-context";

const Event = (props) => {
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);
  const events = useContext(EventContext);
  const { eventId } = useParams();

  const [eventData, setEventData] = useState();
  const [isInCart, setIsInCart] = useState();

  useEffect(() => {
    if (events.events) {
      setEventData(events.events.find((e) => e.eventId === eventId));
    }
    if (cart.cart) {
      setIsInCart(
        cart.cart ? cart.cart.find((e) => e.eventId === eventId) : false
      );
    }
  }, [eventId, cart.cart, events.events]);

  return eventData ? (
    <>
      <div className="event">
        <section
          className="column left banner"
          style={{
            background: `url(${eventData.bannerImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#2FA3F8",
          }}
        >
        </section>

        <section className="column right">
          <article className="content">
            <h1>{eventData.title}</h1>

            {eventData.para1.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* <h2>Launch From Thumbnails</h2>

          <div className="video-thumb-grid">
            <button className="video-thumb js-trigger-video-modal">
              <img
                className="video-banner-img"
                src="http://i3.ytimg.com/vi/hrB-_nIer88/maxresdefault.jpg"
                width="100%"
                height="100%"
                alt=""
              />
            </button>
          </div> */}

            <h2>RULES</h2>

            <ol>
              {eventData.rules.map((r, i) => {
                if (typeof r === "object") {
                  return (
                    <ul key={i}>
                      {r.map((rule, j) => (
                        <li key={j}>{rule}</li>
                      ))}
                    </ul>
                  );
                }
                return <li key={i}>{r}</li>;
              })}
            </ol>
          </article>
        </section>

        {/* <section className="video-modal">
        <div id="video-modal-content" className="video-modal-content">
          <iframe
            title="debate"
            id="youtube"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            src="https://drive.google.com/file/d/1UQIns15roWvRlEkzkBUUC8v-UeKpqbXB/preview"
          ></iframe>

          <button className="close-video-modal">
            <Close />
          </button>
        </div>

        <div className="overlay"></div>
      </section> */}
      </div>

      <div className="button-group">
        {auth.user ? (
          !isInCart ? (
            <button
              className="button primary"
              onClick={() => cart.addItem(auth.user, eventData)}
            >
              Add To Cart
            </button>
          ) : (
            <div className="button" style={{ boxShadow: "none" }}>
              Added To Cart
            </div>
          )
        ) : null}
      </div>
    </>
  ) : null;
};

export default Event;
