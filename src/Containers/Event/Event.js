import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Event.css";
import Spinner from "../../Components/Spinner/Spinner";

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
  const [isRegistered, setIsRegistered] = useState();

  useEffect(() => {
    if (events.events) {
      setEventData(events.events.find((e) => e.eventId === eventId));
    }
    setIsRegistered(
      cart.myEvents
        ? cart.myEvents.find((e) => e.eventId.eventId === eventId)
        : false
    );
  }, [eventId, cart.cart, cart.myEvents, events.events]);

  useEffect(() => {
    if (eventData) {
      setIsInCart(
        cart.cart
          ? cart.cart.find((e) => {
              if (!e.eventId) {
                return false;
              }
              return e.eventId._id === eventData._id;
            })
          : false
      );
    }
  }, [eventData, cart.cart]);

  return eventData ? (
    <>
      <div className="event">
        <section
          className="column left banner"
          style={{
            background: `url(${eventData.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#2FA3F8",
          }}
        ></section>

        <section className="column right">
          <article className="content">
            <h1>{eventData.title}</h1>

            {eventData.description.split("\n").map((para, i) => (
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
                      {r && r.map((rule, j) => <li key={j}>{rule}</li>)}
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
          !isRegistered ? (
            !isInCart ? (
              <button
                className="button primary"
                onClick={() => {
                  cart.addItem(eventData);
                  setIsInCart(true);
                }}
              >
                Add To Cart
              </button>
            ) : (
              <div className="button" style={{ boxShadow: "none" }}>
                Added To Cart
              </div>
            )
          ) : (
            <div className="button" style={{ boxShadow: "none" }}>
              {eventData.link ? (
                <a
                  href={eventData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {eventData.link}
                </a>
              ) : (
                "Already Registered"
              )}
            </div>
          )
        ) : (
          <div className="button" style={{ boxShadow: "none" }}>
            Sign in to add to Cart
          </div>
        )}
      </div>
    </>
  ) : (
    <Spinner />
  );
};

export default Event;
