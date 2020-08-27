import React, { createContext, useState } from "react";

import axios from "../util/axios";

export const EventContext = createContext({
  events: null,
  initializeEvents: () => {},
});

const EventContextProvider = (props) => {
  const [events, setEvents] = useState(null);

  const initializeHandler = () => {
    axios
      .get("/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <EventContext.Provider
      value={{
        events: events,
        initializeEvents: initializeHandler,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
